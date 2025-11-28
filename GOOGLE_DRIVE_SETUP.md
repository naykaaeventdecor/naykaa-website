# How to Get Google Drive Credentials

To connect your website to your Google Drive, you need to create a "Service Account" (a robot account) that has permission to read your folder.

## Step 1: Create a Service Account
1.  Go to the [Google Cloud Console](https://console.cloud.google.com/).
2.  Create a **New Project** (name it "Naykaa Website" or similar).
3.  In the search bar at the top, type **"Google Drive API"** and click on it.
4.  Click **Enable**.
5.  Go to the **Credentials** tab (on the left sidebar).
6.  Click **+ CREATE CREDENTIALS** and select **Service Account**.
7.  Give it a name (e.g., "gallery-reader") and click **Create and Continue**.
8.  (Optional) You can skip the role assignment steps by clicking **Done**.

## Step 2: Get the Email and Key
1.  In the **Credentials** list, click on the **Email address** of the Service Account you just created (it looks like `name@project-id.iam.gserviceaccount.com`).
    *   **This is your `GOOGLE_CLIENT_EMAIL`.** It is **NOT** your personal Gmail.
2.  Go to the **Keys** tab.
3.  Click **Add Key** > **Create new key**.
4.  Select **JSON** and click **Create**.
5.  A file will download to your computer. **Open this file.**
    *   Inside, you will find the `private_key`. It looks like `-----BEGIN PRIVATE KEY-----\n...`.
    *   **This is your `GOOGLE_PRIVATE_KEY`.**

## Step 3: Get the Folder ID
1.  Open your Google Drive in your browser.
2.  Navigate to the folder containing your gallery images.
3.  Look at the URL in your browser address bar. It will look like this:
    `https://drive.google.com/drive/folders/1aBcDeFgHiJkLmNoPqRsTuVwXyZ`
4.  The last part (`1aBcDeFgHiJkLmNoPqRsTuVwXyZ`) is your **Folder ID**.
    *   **This is your `GOOGLE_DRIVE_FOLDER_ID`.**

## Step 4: Share the Folder (CRITICAL!)
1.  Go back to your Google Drive folder.
2.  Right-click the folder name and select **Share**.
3.  In the "Add people and groups" box, **paste the Service Account Email** (from Step 2.1).
4.  Uncheck "Notify people" (since it's a robot) and click **Share**.
    *   *Note: Viewer permission is enough.*

## Step 5: Update your .env file
Copy the values into your `.env` file like this:

```env
GOOGLE_CLIENT_EMAIL="gallery-reader@your-project.iam.gserviceaccount.com"
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC..."
GOOGLE_DRIVE_FOLDER_ID="1aBcDeFgHiJkLmNoPqRsTuVwXyZ"
```
