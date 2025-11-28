import { google } from 'googleapis';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const folderId = process.env.GOOGLE_DRIVE_FOLDER_ID;
        const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
        const privateKey = process.env.GOOGLE_PRIVATE_KEY;

        // Clean up the key
        const cleanKey = privateKey?.replace(/\\n/g, '\n').replace(/^"|"$/g, '');

        if (!folderId || !clientEmail || !cleanKey) {
            console.warn('Google Drive credentials missing for full gallery.');
            return NextResponse.json({ error: 'Google Drive credentials missing' }, { status: 500 });
        }

        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: clientEmail,
                private_key: cleanKey,
            },
            scopes: ['https://www.googleapis.com/auth/drive.readonly'],
        });

        const client = await auth.getClient();
        const drive = google.drive({ version: 'v3', auth: client });

        const response = await drive.files.list({
            q: `'${folderId}' in parents and mimeType contains 'image/' and trashed = false`,
            fields: 'files(id, name, thumbnailLink, modifiedTime)',
            orderBy: 'modifiedTime desc', // Newest first
            pageSize: 100, // Fetch up to 100 images
        });

        const files = response.data.files;

        // Transform to usable format with metadata
        const images = files.map(file => ({
            id: file.id,
            name: file.name,
            url: file.thumbnailLink ? file.thumbnailLink.replace('=s220', '=s1000') : null,
            date: file.modifiedTime
        })).filter(img => img.url !== null);

        return NextResponse.json(images);

    } catch (error) {
        console.error('Error fetching full gallery from Google Drive:', error);
        if (error.response) {
            console.error('Google Drive API Error Data:', error.response.data);
        }
        return NextResponse.json({
            error: 'Failed to load gallery from Drive',
            details: error.message
        }, { status: 500 });
    }
}
