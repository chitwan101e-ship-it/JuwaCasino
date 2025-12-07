# Quick Start: Namecheap Email Setup

## ✅ What's Done

1. ✅ Removed EmailJS dependency
2. ✅ Created Vercel serverless function (`api/send-email.js`)
3. ✅ Updated contact form to use Namecheap SMTP
4. ✅ Added nodemailer to package.json
5. ✅ Configured CORS for cross-domain requests

## 🚀 Quick Setup (5 minutes)

### 1. Install Dependencies
```bash
npm install
```

### 2. Deploy to Vercel

**Option A: Via Dashboard (Easiest)**
1. Go to https://vercel.com/new
2. Import your GitHub repository
3. Add environment variables:
   - `NAMECHEAP_EMAIL` = `support@juwagame.com`
   - `NAMECHEAP_PASSWORD` = `your-email-password`
4. Deploy!

**Option B: Via CLI**
```bash
npm install -g vercel
vercel login
vercel
vercel env add NAMECHEAP_EMAIL
vercel env add NAMECHEAP_PASSWORD
```

### 3. Update Frontend API URL (If Needed)

If your frontend is on GitHub Pages and API on Vercel, update `src/App.jsx`:

Find this line (around line 733):
```javascript
const response = await fetch('/api/send-email', {
```

Change to your Vercel URL:
```javascript
const response = await fetch('https://your-project.vercel.app/api/send-email', {
```

### 4. Test!

Visit your contact page and submit a test message. Check `support@juwagame.com` inbox!

---

## 📧 What Happens

1. User submits form → Frontend sends POST to `/api/send-email`
2. Vercel serverless function receives request
3. Function uses Namecheap SMTP to send email
4. Email arrives at `support@juwagame.com`
5. Reply-to is set to user's email (you can reply directly!)

---

## 🔧 Troubleshooting

**Not receiving emails?**
- Check Vercel logs (Dashboard → Functions → Logs)
- Verify environment variables are set correctly
- Test your Namecheap email password

**CORS errors?**
- Make sure API URL in frontend matches your Vercel deployment URL
- Check browser console for specific error

**Need help?**
- See full guide: `NAMECHEAP_EMAIL_SETUP.md`
- Check Vercel docs: https://vercel.com/docs

---

**That's it! Your contact form now uses Namecheap email directly!** 🎉



