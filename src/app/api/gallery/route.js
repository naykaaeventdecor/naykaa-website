import { google } from 'googleapis';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const folderId = process.env.HOME_GOOGLE_DRIVE_FOLDER_ID;
        const clientEmail = process.env.HOME_GOOGLE_CLIENT_EMAIL;
        const privateKey = process.env.HOME_GOOGLE_PRIVATE_KEY; // Keep original for validation, cleanKey will process it

        // Clean up the key: remove literal \n, remove surrounding quotes if any
        const cleanKey = privateKey?.replace(/\\n/g, '\n').replace(/^"|"$/g, '');

        if (!folderId || !clientEmail || !cleanKey) {
            console.warn('Google Drive credentials missing. Falling back to local gallery.');
            // Fallback to local logic if credentials missing (for dev/demo without keys)
            // In a real scenario, we might want to error out or return empty.
            // For now, let's return an empty array or error so the frontend handles it.
            return NextResponse.json({ error: 'Google Drive credentials missing' }, { status: 500 });
        }

        console.log('Auth Debug:', {
            email: clientEmail,
            keyStart: cleanKey ? cleanKey.substring(0, 30) : 'MISSING',
            keyLength: cleanKey ? cleanKey.length : 0
        });

        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: clientEmail,
                private_key: cleanKey,
            },
            scopes: ['https://www.googleapis.com/auth/drive.readonly'],
        });

        // Explicitly authorize to check for credential issues early
        const client = await auth.getClient();

        const drive = google.drive({ version: 'v3', auth: client });
        console.log("this is from drive", drive);
        const response = await drive.files.list({
            q: `'${folderId}' in parents and mimeType contains 'image/' and trashed = false`,
            fields: 'files(id, name, webContentLink, thumbnailLink)',
            pageSize: 5, // Limit to 5 photos as requested
        });
        console.log("this is from driveresponse", response);
        const files = response.data.files;
        console.log(files);
        // Transform to usable URLs
        // webContentLink downloads the file, thumbnailLink displays it. 
        // We often need to modify thumbnailLink to get a higher res version.
        const images = files.map(file => {
            // thumbnailLink usually ends with =s220, we can change it to =s1000 or similar for larger size
            return file.thumbnailLink ? file.thumbnailLink.replace('=s220', '=s1000') : null;
        }).filter(url => url !== null);

        return NextResponse.json(images);

    } catch (error) {
        console.error('Error fetching from Google Drive:', error);
        // Log specific details if available
        if (error.response) {
            console.error('Google Drive API Error Data:', error.response.data);
        }
        return NextResponse.json({ error: 'Failed to load images from Drive', details: error.message }, { status: 500 });
    }
}
