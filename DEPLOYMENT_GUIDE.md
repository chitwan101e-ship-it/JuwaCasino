# GitHub Pages Deployment Guide for juwagame.com

## ✅ What I Just Fixed

1. **Added CNAME file** in the `public` folder with your domain `juwagame.com`
2. **Rebuilt the project** with the CNAME file included in the dist folder
3. **Created GitHub Actions workflow** to automatically deploy when you push to GitHub

## 🚀 How to Deploy Your Site

### Step 1: Push Your Changes to GitHub

```bash
cd juwafinal
git add .
git commit -m "Add GitHub Pages deployment with custom domain"
git push origin main
```

> **Note:** If your default branch is `master` instead of `main`, change line 6 in `.github/workflows/deploy.yml` from `main` to `master`

### Step 2: Enable GitHub Pages in Your Repository

1. Go to your GitHub repository
2. Click on **Settings** (top right)
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select **GitHub Actions**
5. The deployment will start automatically

### Step 3: Configure Custom Domain (If Not Already Done)

1. In the same **Pages** settings section
2. Under **Custom domain**, enter: `juwagame.com`
3. Check **Enforce HTTPS** (wait a few minutes for the certificate)

### Step 4: Update DNS Settings (If Not Already Done)

Make sure your domain registrar has these DNS records:

**For apex domain (juwagame.com):**
```
Type: A
Host: @
Value: 185.199.108.153

Type: A
Host: @
Value: 185.199.109.153

Type: A
Host: @
Value: 185.199.110.153

Type: A
Host: @
Value: 185.199.111.153
```

**For www subdomain:**
```
Type: CNAME
Host: www
Value: [your-github-username].github.io
```

## ⏱️ How Long Does It Take?

- **GitHub Actions deployment:** 2-5 minutes after pushing
- **DNS propagation:** Up to 48 hours (usually much faster)
- **SSL certificate:** 10-15 minutes after domain verification

## 🔍 Troubleshooting

### If your site still shows no content:

1. **Check GitHub Actions:**
   - Go to the **Actions** tab in your repository
   - Make sure the deployment succeeded (green checkmark)

2. **Check GitHub Pages settings:**
   - Go to **Settings > Pages**
   - Make sure it shows: "Your site is live at https://juwagame.com"

3. **Clear browser cache:**
   - Press `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
   - Or open in an incognito/private window

4. **Check DNS propagation:**
   - Visit https://dnschecker.org
   - Enter your domain `juwagame.com`
   - Make sure it points to GitHub's servers

5. **Wait for SSL certificate:**
   - If you see security warnings, wait 10-15 minutes
   - The HTTPS certificate is being generated

## 📝 Future Deployments

After the initial setup, deploying updates is simple:

```bash
# Make your changes to the code
git add .
git commit -m "Your update message"
git push origin main
```

The GitHub Actions workflow will automatically:
1. Build your project
2. Deploy to GitHub Pages
3. Update your live site at https://juwagame.com

Your site should be live within 2-5 minutes!

## 🎉 Expected Result

Once deployed, visiting https://juwagame.com should show:
- Hero section with video background
- Welcome/Reload/Referral bonus banners
- Facebook partner carousel
- Games grid
- All navigation and pages working

---

**Need help?** Check the Actions tab in your GitHub repository for deployment logs.


