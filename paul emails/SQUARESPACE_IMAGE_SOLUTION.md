# Squarespace Image Upload Solution

## The Problem
The affiliate page HTML files (v4) have corrupted image data appended to the img tag, causing display issues in Squarespace.

## The Solution
There's corrupted base64 data after the image URL. The v5 files have been created but need a final fix.

## Quick Fix Instructions

### Step 1: Upload Paul's Headshot to Squarespace
1. Go to **Design → Custom CSS** in your Squarespace dashboard
2. Click **Manage Custom Files**
3. Click **Add Images or Fonts**
4. Upload Paul's professional headshot
5. Copy the URL that Squarespace provides (it will look like: `https://static1.squarespace.com/static/[your-site-id]/[filename]`)

### Step 2: Update the HTML Files
In the HTML code blocks for both pages, find the image tag and replace it with:

```html
<img src="[YOUR-SQUARESPACE-IMAGE-URL]" 
     alt="Paul Barnhurst, The FP&A Guy" 
     style="width: 150px; height: 150px; border-radius: 50%; object-fit: cover;" 
     loading="eager">
```

### Alternative: Use External Hosting
If you prefer not to upload to Squarespace, you can:
1. Upload the image to a service like Imgur, Cloudinary, or your own hosting
2. Use the direct image URL in the src attribute

### Step 3: Clean HTML Implementation
When pasting into Squarespace code blocks:
1. Make sure to copy ONLY the clean HTML
2. Remove any corrupted data after the image tag
3. The image tag should be immediately followed by the `<p>` tag with Paul's credentials

### Expected Result
The image should display as:
- 150x150 pixels
- Circular (border-radius: 50%)
- Properly centered in the author section
- Fast loading (loading="eager")

## Files Status
- **v5 files created**: cfi-fpap-affiliate-page-v5.html and wharton-wsp-affiliate-page-v5.html
- **Location**: /Users/boshaffer/bo/agency-hub/paul emails/
- **Note**: These files still need the image URL correction before use

## Troubleshooting
If the image still doesn't display:
1. Clear your browser cache
2. Check that the image URL is accessible (paste it in a new browser tab)
3. Ensure the entire HTML was pasted (Squarespace has size limits)
4. Try uploading a smaller/optimized version of the image

## Next Steps
1. Upload Paul's headshot to your preferred location
2. Get the final URL
3. Update the img src in both HTML files
4. Test in Squarespace preview mode before publishing