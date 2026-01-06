# Squarespace Image Upload Fix

## Issue
The base64 embedded image in v4 HTML files is too large for Squarespace to handle properly.

## Solution
Replace the base64 image with a hosted URL. Here are the steps:

### Option 1: Upload to Squarespace (Recommended)
1. Save Paul's headshot as a separate file
2. Upload to Squarespace via: **Design → Custom CSS → Manage Custom Files**
3. Click **"Add Images or Fonts"**
4. Upload the headshot image
5. Copy the URL provided by Squarespace
6. Replace the base64 image src with this URL

### Option 2: Use External Hosting
Use one of these placeholder URLs until you upload the actual image:
- `https://www.thefpandaguy.com/images/paul-barnhurst-headshot.jpg`
- `https://images.squarespace-cdn.com/content/v1/[your-site-id]/paul-headshot.jpg`

### Implementation in HTML
Replace the long base64 string:
```html
<!-- OLD (base64) -->
<img src="data:image/jpeg;base64,/9j/4AAQSkZJRgAB....[very long string]" alt="Paul Barnhurst">

<!-- NEW (hosted URL) -->
<img src="https://www.thefpandaguy.com/images/paul-barnhurst-headshot.jpg" alt="Paul Barnhurst" style="width: 150px; height: 150px; border-radius: 50%; object-fit: cover;">
```

## Files to Update
- `/paul emails/cfi-fpap-affiliate-page-v5.html` (creating now)
- `/paul emails/wharton-wsp-affiliate-page-v5.html` (creating now)