# Google Search Console Setup Guide

## Step 1: Verify Your Domain

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Click "Add Property"
3. Enter your domain: `juwagame.com`
4. Choose verification method:

### Method 1: HTML File Upload (Recommended)
- Download the HTML verification file from Google
- Place it in your `public/` folder
- The file will be accessible at: `https://juwagame.com/google[random].html`
- Click "Verify" in Search Console

### Method 2: HTML Tag (Alternative)
- Copy the meta tag from Google Search Console
- Add it to `index.html` in the `<head>` section:
  ```html
  <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE_HERE" />
  ```
- Replace `YOUR_VERIFICATION_CODE_HERE` with the code from Google
- Deploy and click "Verify" in Search Console

### Method 3: DNS Record
- Add a TXT record to your domain's DNS settings
- Follow Google's instructions for the exact record value

## Step 2: Submit Your Sitemap

1. In Google Search Console, go to "Sitemaps"
2. Enter: `https://juwagame.com/sitemap.xml`
3. Click "Submit"
4. Wait for Google to process (usually within a few hours)

## Step 3: Request Indexing

1. Go to "URL Inspection" tool
2. Enter your homepage: `https://juwagame.com/`
3. Click "Request Indexing"
4. Repeat for important pages:
   - `https://juwagame.com/#blog`
   - `https://juwagame.com/#blog-download-juwa-777`
   - `https://juwagame.com/#blog-juwa-no-deposit-bonus`
   - `https://juwagame.com/#blog-play-juwa-online-games`
   - `https://juwagame.com/#blog-juwa-777-app-troubleshooting`

## Step 4: Monitor Performance

- Check "Performance" tab for search queries
- Monitor "Coverage" for indexing issues
- Review "Enhancements" for structured data

## Important Notes

- It may take 1-2 weeks for pages to appear in search results
- Keep your sitemap updated when adding new content
- Monitor for any crawl errors and fix them promptly




