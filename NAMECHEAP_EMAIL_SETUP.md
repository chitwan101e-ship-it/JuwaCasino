# Namecheap Email Setup Guide

Your contact form is now configured to send emails directly using your Namecheap email account via SMTP!

## 🎯 How It Works

Instead of using EmailJS, we're using:
- **Vercel Serverless Functions** (free) - Handles the backend email sending
- **Namecheap SMTP** - Your actual email account (support@juwagame.com)
- **Nodemailer** - Email sending library

## 📋 Setup Steps

### Step 1: Install Dependencies

The serverless function needs `nodemailer`. Since it's only used in the API function, you can install it:

```bash
npm install nodemailer
```

### Step 2: Deploy to Vercel

Vercel provides free serverless functions that work perfectly with GitHub Pages!

#### Option A: Deploy via Vercel Dashboard (Easiest)

1. **Sign up for Vercel** (free): https://vercel.com/signup
2. **Import your GitHub repository**:
   - Go to https://vercel.com/new
   - Click "Import Git Repository"
   - Select your `JuwaCasino` repository
   - Click "Import"

3. **Configure the project**:
   - Framework Preset: **Other** (or leave default)
   - Root Directory: `juwafinal` (if your project is in a subfolder)
   - Build Command: `npm run build`
   - Output Directory: `dist`

4. **Add Environment Variables**:
   - Click "Environment Variables"
   - Add these two variables:
     ```
     NAMECHEAP_EMAIL = support@juwagame.com
     NAMECHEAP_PASSWORD = your-email-password
     ```
   - Make sure to select all environments (Production, Preview, Development)

5. **Deploy!**
   - Click "Deploy"
   - Wait for deployment to complete

#### Option B: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
cd juwafinal
vercel

# Set environment variables
vercel env add NAMECHEAP_EMAIL
vercel env add NAMECHEAP_PASSWORD
```

### Step 3: Get Your Vercel API URL

After deployment, Vercel will give you a URL like:
- `https://your-project.vercel.app`

Your API endpoint will be:
- `https://your-project.vercel.app/api/send-email`

### Step 4: Update Your Frontend Code (If Needed)

If your frontend is on a different domain (like GitHub Pages), you need to update the API URL in `src/App.jsx`:

Find this line in the ContactPage component:
```javascript
const response = await fetch('/api/send-email', {
```

If your frontend is on GitHub Pages but API is on Vercel, change it to:
```javascript
const response = await fetch('https://your-project.vercel.app/api/send-email', {
```

**OR** better yet, use an environment variable:
```javascript
const API_URL = import.meta.env.VITE_API_URL || '/api/send-email';
const response = await fetch(API_URL, {
```

### Step 5: Configure Namecheap SMTP Settings

The serverless function is already configured with Namecheap's SMTP settings:

- **Host**: `mail.privateemail.com`
- **Port**: `587` (TLS) or `465` (SSL)
- **Email**: `support@juwagame.com` (from environment variable)
- **Password**: Your email password (from environment variable)

If you need to change these, edit `api/send-email.js`:

```javascript
const transporter = nodemailer.createTransport({
  host: 'mail.privateemail.com', // Namecheap Private Email
  port: 587, // Change to 465 for SSL
  secure: false, // true for 465, false for 587
  auth: {
    user: process.env.NAMECHEAP_EMAIL,
    pass: process.env.NAMECHEAP_PASSWORD,
  },
});
```

### Step 6: Test Your Contact Form

1. Visit your website
2. Go to the Contact page
3. Fill out the form
4. Submit
5. Check your **support@juwagame.com** inbox!

---

## 🔄 Alternative: Keep GitHub Pages + Add Vercel API

You can keep your site on GitHub Pages and just use Vercel for the API:

1. **Deploy frontend to GitHub Pages** (as you're doing now)
2. **Deploy API to Vercel** (just the `/api` folder)
3. **Update frontend** to call Vercel API URL

This way:
- Your site stays on GitHub Pages (free)
- Your API runs on Vercel (free)
- Everything works together!

---

## 🔧 Troubleshooting

### Emails not sending?

1. **Check Vercel logs**:
   - Go to Vercel dashboard
   - Click on your project
   - Go to "Functions" tab
   - Check logs for errors

2. **Verify environment variables**:
   - Make sure `NAMECHEAP_EMAIL` and `NAMECHEAP_PASSWORD` are set
   - Check they're correct (no extra spaces)

3. **Test SMTP connection**:
   - Try sending a test email from your email client
   - Make sure your Namecheap email password is correct

4. **Check CORS** (if frontend and API are on different domains):
   - The API already handles CORS
   - If issues persist, check browser console

### Getting CORS errors?

If your frontend is on GitHub Pages and API on Vercel, you might need to add CORS headers. The current setup should work, but if you get CORS errors, add this to `api/send-email.js`:

```javascript
// At the start of the handler function
res.setHeader('Access-Control-Allow-Origin', '*');
res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

if (req.method === 'OPTIONS') {
  return res.status(200).end();
}
```

### Port 587 not working?

Try port 465 with SSL:
```javascript
port: 465,
secure: true,
```

---

## 📧 Email Format

When someone submits the form, you'll receive an email at **support@juwagame.com** with:

- **Subject**: "New Contact Form Submission from [user's email]"
- **From**: "Juwa Contact Form <support@juwagame.com>"
- **Reply-To**: The user's email address (so you can reply directly)
- **Content**: Formatted HTML email with the user's message

---

## 🆓 Free Tier Limits

- **Vercel**: 
  - 100GB bandwidth/month (free)
  - Unlimited serverless function invocations (free)
  - Perfect for contact forms!

- **Namecheap Email**:
  - Depends on your plan
  - Usually unlimited emails

---

## ✅ Benefits of This Approach

✅ **Uses your actual Namecheap email** - No third-party service  
✅ **Free** - Vercel free tier is generous  
✅ **Secure** - Credentials stored as environment variables  
✅ **Reliable** - Serverless functions are very reliable  
✅ **Scalable** - Handles traffic spikes automatically  

---

## 🚀 Next Steps

1. Install nodemailer: `npm install nodemailer`
2. Deploy to Vercel (follow Step 2 above)
3. Set environment variables
4. Test the contact form
5. Update frontend API URL if needed

Your contact form will send emails directly to **support@juwagame.com** using your Namecheap email account! 🎉

---

**Questions?** Check Vercel docs: https://vercel.com/docs






