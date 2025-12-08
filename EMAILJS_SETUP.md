# EmailJS Setup Guide for Contact Form

Your contact form is now configured to send emails to **support@juwagame.com** using EmailJS.

## 📋 Quick Setup Steps

### Step 1: Create EmailJS Account (Free)

1. Go to https://www.emailjs.com/
2. Click **"Sign Up"** (it's free for up to 200 emails/month)
3. Create your account

### Step 2: Create an Email Service

1. In EmailJS dashboard, go to **"Email Services"**
2. Click **"Add New Service"**
3. Choose your email provider:
   - **If using Namecheap email**: Select **"Custom SMTP"**
   - Enter your SMTP settings:
     - **Host**: `mail.privateemail.com` (for Namecheap Private Email)
     - **Port**: `587` (for TLS) or `465` (for SSL)
     - **Username**: `support@juwagame.com`
     - **Password**: Your email password
     - **Secure**: Enable TLS/SSL
   - Or use **"Gmail"** or **"Outlook"** if you prefer
4. Click **"Create Service"**
5. **Copy the Service ID** (you'll need this)

### Step 3: Create an Email Template

1. Go to **"Email Templates"**
2. Click **"Create New Template"**
3. Use this template:

```
Subject: New Contact Form Submission from {{from_email}}

From: {{from_email}}
Reply-To: {{reply_to}}

Message:
{{message}}

---
This email was sent from the contact form on juwagame.com
```

4. Set **"To Email"** to: `support@juwagame.com`
5. Set **"From Name"** to: `Juwa Contact Form`
6. Click **"Save"**
7. **Copy the Template ID** (you'll need this)

### Step 4: Get Your Public Key

1. Go to **"Account"** → **"General"**
2. Find **"Public Key"**
3. **Copy the Public Key**

### Step 5: Update Your Code

Open `src/App.jsx` and find the ContactPage component (around line 707).

Replace these placeholder values:

```javascript
// Find these lines in the ContactPage component:
const serviceId = "YOUR_SERVICE_ID";
const templateId = "YOUR_TEMPLATE_ID";
const publicKey = "YOUR_PUBLIC_KEY";

// Replace with your actual values:
const serviceId = "service_xxxxxxxxx";  // Your EmailJS Service ID
const templateId = "template_xxxxxxxxx";  // Your EmailJS Template ID
const publicKey = "xxxxxxxxxxxxxxxx";  // Your EmailJS Public Key
```

Also update the initialization:

```javascript
// Find this line:
emailjs.init("YOUR_PUBLIC_KEY");

// Replace with:
emailjs.init("xxxxxxxxxxxxxxxx");  // Your EmailJS Public Key
```

### Step 6: Install Dependencies

Run this command in your terminal:

```bash
npm install
```

This will install the `@emailjs/browser` package.

### Step 7: Test Your Form

1. Run your development server: `npm run dev`
2. Navigate to the Contact page
3. Fill out the form and submit
4. Check your **support@juwagame.com** inbox!

---

## 🔧 Alternative: Using Namecheap SMTP Directly

If you want to use Namecheap email directly, here are the SMTP settings:

### Namecheap Private Email SMTP Settings:
- **SMTP Server**: `mail.privateemail.com`
- **Port**: `587` (TLS) or `465` (SSL)
- **Username**: `support@juwagame.com`
- **Password**: Your email password
- **Security**: TLS/SSL enabled

When setting up EmailJS Custom SMTP service, use these settings.

---

## 📧 What Happens When Someone Submits the Form?

1. User fills out their email and message
2. Form validates the input
3. EmailJS sends the email to **support@juwagame.com**
4. You receive an email with:
   - The user's email address
   - Their message
   - Reply-to is set to the user's email (so you can reply directly)

---

## ✅ Features Included

- ✅ Form validation (email format, message length)
- ✅ Loading state while sending
- ✅ Success message after submission
- ✅ Error handling with helpful messages
- ✅ Form resets after successful submission
- ✅ Disabled state during submission (prevents double-submission)

---

## 🆓 Free Tier Limits

EmailJS free tier includes:
- **200 emails/month**
- Perfect for most websites
- Upgrade available if needed

---

## 🐛 Troubleshooting

### Form not sending emails?
1. Check browser console for errors (F12 → Console)
2. Verify all three IDs are correct (Service ID, Template ID, Public Key)
3. Check EmailJS dashboard for error logs
4. Make sure your email service is active in EmailJS

### Not receiving emails?
1. Check spam folder
2. Verify email address in template is correct: `support@juwagame.com`
3. Test your SMTP settings in EmailJS dashboard
4. Check EmailJS logs for delivery status

### Getting CORS errors?
- Make sure you're using the latest version of `@emailjs/browser`
- Check that your Public Key is correct

---

## 📝 Security Notes

- The Public Key is safe to expose in frontend code
- Never share your Private Key (you won't need it for this)
- EmailJS handles all email sending securely
- Your email password is only stored in EmailJS (encrypted)

---

## 🚀 After Setup

Once you've updated the code with your EmailJS credentials:

1. **Test locally**: `npm run dev`
2. **Build**: `npm run build`
3. **Deploy**: Push to GitHub (deployment is automatic)

Your contact form will be fully functional! 🎉

---

**Need help?** Check EmailJS documentation: https://www.emailjs.com/docs/





