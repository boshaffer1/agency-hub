# Squarespace Affiliate Page Integration Guide

## Quick Start: Adding Your Affiliate Pages

### Step 1: Create a New Page

1. Log into your Squarespace dashboard at www.thefpandaguy.com
2. Navigate to **Pages** in the left sidebar
3. Click the **+** button to add a new page
4. Choose **Blank Page** (not a blog post)
5. Name your page (e.g., "CFI FPAP Certification Review")

### Step 2: Set Up the URL Slug

1. Click the **gear icon** next to your new page
2. Under **URL Slug**, enter your SEO-optimized URL:
   - CFI FPAP: `cfi-fpap-certification-review-discount`
   - Wharton/WSP: `wharton-wall-street-prep-fpa-certificate-review`
   - Financial Modeling Institute: `financial-modeling-certification-comparison`
   - (Follow the URL structure from your SEO keyword strategy)

### Step 3: Add the HTML Code Block

1. Click **Edit** on your new page
2. Click the **+** button to add content
3. Select **Code** from the menu
4. In the code block settings, select **HTML** (not Markdown)
5. Open your HTML file (e.g., `cfi-fpap-affiliate-page.html`)
6. **Copy the ENTIRE contents** of the HTML file
7. **Paste** into the Squarespace code block
8. Click **Apply**

### Step 4: Page Settings (SEO)

Even though the HTML includes meta tags, configure Squarespace page settings:

1. Click the **gear icon** next to your page
2. Go to **SEO** tab
3. **Page Title**: Copy from the `<title>` tag in your HTML
   - Example: "CFI FPAP™ Certification Review 2025: Is It Worth It? (+ 30% Discount)"
4. **Description**: Copy from the meta description in your HTML
5. **Enable** in navigation if you want it in your main menu (optional for affiliate pages)
6. Consider creating a separate "Resources" or "Recommended Tools" section in navigation

### Step 5: Test Before Publishing

1. Click **Preview** in the top-right corner
2. Test on desktop and mobile views
3. Verify all links work (especially affiliate links)
4. Check that CTAs are visible and clickable
5. Ensure discount codes are displayed correctly
6. Test the page speed using Google PageSpeed Insights

### Step 6: Publish

1. Click **Save** in the top-left
2. If page is ready, ensure it's **enabled** in Pages menu
3. The page will go live immediately

---

## Updating Affiliate Links & Discount Codes

### When Discount Codes Change:

1. Open your HTML file in a text editor
2. Find all instances of the old discount code (use Find & Replace)
   - Example: Find `FPAGUY30` → Replace with `FPAGUY35`
3. Update the discount percentage text where mentioned
4. Save the HTML file
5. Go back to Squarespace, edit the page
6. Click on the code block
7. Replace the entire HTML with your updated version
8. Click **Apply** and **Save**

### When Affiliate Links Change:

1. Open HTML file
2. Find all instances of your affiliate URL
   - Example: `https://corporatefinanceinstitute.com/affiliates/?via=paul`
3. Replace with new affiliate URL if needed
4. Ensure UTM parameters remain intact:
   - `?utm_source=fpandaguy&utm_medium=affiliate&utm_campaign=cfi-fpap`
5. Update in Squarespace code block as above

---

## Best Practices

### Navigation Structure:

**Option 1: Resources Menu**
```
Home
About
Services
Resources
  ├── FP&A Certifications
  ├── Financial Modeling Courses
  ├── Excel & Power BI Training
  └── Finance Technology Tools
Blog
Contact
```

**Option 2: Hidden from Main Nav**
- Keep affiliate pages off main navigation
- Link to them from blog posts, newsletter, or a dedicated "Recommended Resources" page
- This keeps main nav clean while still having SEO-optimized affiliate pages

### Internal Linking Strategy:

1. **From Blog Posts**: When writing about FP&A certifications, link to your affiliate review pages
2. **From Service Pages**: On your consulting services page, mention certifications and link to reviews
3. **From Newsletter**: Include affiliate links in relevant email broadcasts
4. **Resource Hub**: Create a master "Recommended Resources" page that links to all affiliate reviews

### SEO Tips:

1. **Submit to Google Search Console** after publishing
2. **Create a sitemap** (Squarespace does this automatically)
3. **Build backlinks** by mentioning these resources in guest posts or podcast interviews
4. **Update annually** to keep content fresh (change "2025" to "2026" in titles next year)
5. **Monitor performance** using Google Analytics to see which pages convert best

### Mobile Optimization:

Your HTML files are already mobile-responsive, but verify:
- Text is readable without zooming
- Buttons are easily tappable (44x44px minimum)
- Images load quickly
- No horizontal scrolling

---

## Tracking Performance

### Google Analytics (if installed):

1. Track affiliate link clicks using event tracking
2. Monitor page views for each affiliate page
3. Check bounce rate and time on page
4. Set up goals for "CTA clicked" if using Google Tag Manager

### Squarespace Analytics:

1. Go to **Analytics** → **Traffic Sources**
2. View which affiliate pages get the most traffic
3. Monitor bounce rates
4. Track exit pages to see if users click through to affiliate sites

### Affiliate Dashboard Tracking:

Each affiliate program has its own dashboard:
- **CFI**: Track clicks, conversions, commissions in CFI affiliate portal
- **Wharton/WSP**: Check Wall Street Prep affiliate dashboard
- Compare Squarespace page views vs. affiliate click-throughs to calculate CTR

---

## Troubleshooting

### HTML Not Displaying Correctly:

**Problem**: Page shows raw HTML code
- **Solution**: Ensure you selected **Code Block** (not Text Block) and chose **HTML** format

**Problem**: Styling looks broken
- **Solution**: Verify you copied the ENTIRE HTML file, including all CSS between `<style>` tags

**Problem**: Links don't work
- **Solution**: Check that affiliate URLs are complete (starting with `https://`)

### Page Not Ranking:

**Problem**: Page not showing up in Google search
- **Solution**:
  1. Submit URL to Google Search Console
  2. Wait 2-4 weeks for indexing
  3. Build internal links from other pages on your site
  4. Share on social media to get initial traffic

**Problem**: Competitors ranking higher
- **Solution**:
  1. Add more comprehensive content (expand FAQ section)
  2. Get backlinks from finance industry sites
  3. Update regularly with fresh content
  4. Improve page speed if needed

### Mobile Display Issues:

**Problem**: Text too small on mobile
- **Solution**: The HTML already has responsive CSS, but if needed, edit the `<style>` section and increase font sizes in media queries

**Problem**: Buttons too close together
- **Solution**: Edit CSS to increase `margin-bottom` on `.cta-button` class

---

## File Organization

Keep your HTML files organized:

```
/paul emails/
├── cfi-fpap-affiliate-page.html
├── wharton-wsp-affiliate-page.html
├── financial-modeling-institute-page.html
├── Squarespace_Integration_Guide.md
└── Affiliate_Pages_SEO_Keyword_Strategy.md
```

When making updates:
1. Edit the HTML file locally
2. Keep version history (save as `cfi-fpap-affiliate-page-v2.html` if major changes)
3. Test locally in a browser before updating Squarespace
4. Update in Squarespace
5. Clear cache and verify changes

---

## Next Steps

1. **Install all 15 affiliate pages** following this guide
2. **Create internal links** from existing blog posts and service pages
3. **Set up Google Analytics goals** to track conversions
4. **Monitor performance** monthly and update top-performing pages
5. **Test different discount codes** in email campaigns to drive traffic
6. **Build backlinks** through guest posting and industry partnerships

---

*Last Updated: November 2025 | The FP&A Guy Affiliate Program*
