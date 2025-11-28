# EmailJS Setup Guide

To make the contact form work, you need to get credentials from EmailJS.

## 1. Create an Account
Go to [https://www.emailjs.com/](https://www.emailjs.com/) and sign up for a free account.

## 2. Get Service ID
1.  In the EmailJS dashboard, go to the **Email Services** tab.
2.  Click **Add New Service**.
3.  Select **Gmail** (or your preferred provider).
4.  Connect your account and click **Create Service**.
5.  Copy the **Service ID** (e.g., `service_xyz123`).

## 3. Get Template ID
1.  Go to the **Email Templates** tab.
2.  Click **Create New Template**.
3.  Design your email. You can use these variables which match our code:
    *   `{{from_name}}` - The user's name
    *   `{{from_email}}` - The user's email
    *   `{{message}}` - The message content
    *   `{{to_name}}` - "Naykaa Event and Decor"
4.  Click **Save**.
5.  Copy the **Template ID** (e.g., `template_abc456`).

## 4. Get Public Key
1.  Click on your name in the top right corner and go to **Account**.
2.  Copy the **Public Key** (e.g., `user_123abc...`).

## 5. Configure Project
Create a file named `.env.local` in the root of your project (`naykaa-event-decor/`) and add your keys:

```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

Restart your development server (`npm run dev`) for the changes to take effect.
