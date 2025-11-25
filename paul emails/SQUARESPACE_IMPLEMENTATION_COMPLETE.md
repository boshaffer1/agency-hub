# Squarespace Implementation Guide - Complete v2 Pages

## Files Ready for Implementation

✅ **cfi-fpap-affiliate-page-v2.html** - CFI FPAP review page
✅ **wharton-wsp-affiliate-page-v2.html** - Wharton/WSP review page

Both files now include:
- ✅ Embedded base64 photo (no separate upload needed)
- ✅ Brand colors (gold #b8956a, navy #1e3a5f)
- ✅ Complete meta tags (SEO + Twitter Card + Open Graph)
- ✅ FAQ schema + visible FAQ section
- ✅ Author credentials trust box
- ✅ ROI/salary impact statistics
- ✅ Click-to-copy discount codes
- ✅ CRO-optimized CTAs and layout
- ✅ Mobile responsive design

---

## Step-by-Step Squarespace Implementation

### STEP 1: Create New Pages

**For CFI FPAP Page:**
1. In Squarespace, go to **Pages** → **+ Add Page**
2. Choose **Blank Page**
3. Page Title: `CFI FPAP Certification Review`
4. URL Slug: `/certifications/cfi-fpap-certification-review`
5. Click **Save**

**For Wharton/WSP Page:**
1. Repeat above
2. Page Title: `Wharton Wall Street Prep FP&A Certificate Review`
3. URL Slug: `/certifications/wharton-wsp-fpa-certificate-review`
4. Click **Save**

---

### STEP 2: Configure Page SEO Settings

**For Each Page:**

1. Click the **⚙️ gear icon** next to the page
2. Go to **SEO** tab
3. **Page Title**: Copy from HTML file (in `<title>` tag)
   - CFI: `CFI FPAP™ Certification Review 2025: Is It Worth It? Save 30% | The FP&A Guy`
   - Wharton: `Wharton/WSP FP&A Certificate Review 2025: Instructor Insights`

4. **Description**: Copy from HTML file (in `<meta name="description">`)
   - CFI: `Honest CFI FPAP certification review by Paul Barnhurst. I designed 2 courses for this program. Complete curriculum breakdown, pricing, career outcomes. Save 30% with code FPAGUY30.`
   - Wharton: `Honest Wharton/Wall Street Prep FP&A Certificate review by program instructor Paul Barnhurst. 16-week cohort-based program details, career outcomes, who benefits most.`

5. **URL Slug**: Already set in Step 1
6. Click **Save**

---

### STEP 3: Insert HTML Code

**For Each Page:**

1. Click **Edit** on the page
2. Click **+** to add a block
3. Choose **Code** from the block menu
4. In the code block settings:
   - Display Source: **HTML**
   - Enable **Code Block** toggle

5. **Copy entire contents** of the HTML file:
   ```bash
   # On your computer, open the file location:
   /Users/boshaffer/bo/agency-hub/paul emails/

   # Copy the entire contents of:
   - cfi-fpap-affiliate-page-v2.html (for CFI page)
   - wharton-wsp-affiliate-page-v2.html (for Wharton page)
   ```

6. **Paste** into the code block
7. Click **Apply**
8. Click **Save** in the top-left corner

---

### STEP 4: Configure Advanced Page Settings

**For Each Page:**

1. Go to **Pages** → Click **⚙️ gear icon** next to the page
2. Go to **Advanced** tab
3. **Page Header Code Injection** - Leave empty (all schema is in HTML)
4. **Page Footer Code Injection** - Leave empty
5. Click **Save**

---

### STEP 5: Social Share Images (Optional but Recommended)

**You need to create social share images:**

**Specifications:**
- **Size**: 1200px × 630px
- **Format**: JPG or PNG
- **File size**: Under 1MB

**Recommended Content:**

**CFI FPAP Social Image:**
```
Background: Navy gradient (#1e3a5f to #4a6fa5)
Text: "CFI FPAP™ Certification Review 2025"
Subtext: "Save 30% with Code FPAGUY30"
Logo: CFI logo + Paul's headshot
Badge: "Program Contributor Review"
```

**Wharton/WSP Social Image:**
```
Background: Navy gradient (#1e3a5f to #4a6fa5)
Text: "Wharton/Wall Street Prep FP&A Certificate"
Subtext: "Instructor Review & Honest Insights"
Logos: Wharton + WSP logos + Paul's headshot
Badge: "Program Instructor Review"
```

**To Upload:**
1. Create images using Canva, Figma, or Photoshop
2. Upload to Squarespace: **Design** → **Custom CSS** → Upload images
3. Get the image URLs
4. Update in code block:
   - Find `og:image` meta tag
   - Replace placeholder URL with actual URL
   - Find `twitter:image` meta tag
   - Replace placeholder URL with actual URL

---

### STEP 6: Test Everything

**Before Publishing:**

1. **Preview the page** (click 👁️ icon in Squarespace)
2. **Check on mobile** (use preview mobile view)
3. **Test all CTAs**:
   - Click "Enroll Now" buttons → Should go to CFI/Wharton with discount codes
   - Click discount code boxes → Should copy to clipboard
4. **Scroll through entire page** → Check for spacing issues
5. **Verify photo displays** → Paul's headshot should show in author section

**After Publishing:**

1. **Test social sharing**:
   - Share on LinkedIn/Twitter → Check image and description appear
   - Use [Twitter Card Validator](https://cards-dev.twitter.com/validator)
   - Use [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)

2. **Test SEO**:
   - Use [Google Rich Results Test](https://search.google.com/test/rich-results)
   - Should show: FAQPage ✅, Course ✅, Review ✅, Breadcrumb ✅

3. **Check page speed**:
   - Use [PageSpeed Insights](https://pagespeed.web.dev/)
   - Should score 85+ on mobile, 95+ on desktop

---

### STEP 7: Navigation Options

**Option A: Keep as Standalone Pages (Recommended Initially)**
- Don't add to main navigation yet
- Use for direct traffic from:
  - LinkedIn posts
  - Email campaigns
  - Newsletter mentions
  - Social media

**Option B: Add to Navigation (After 3-4 Certification Pages)**
1. Go to **Pages** in Squarespace
2. Create a new **Folder** called "Certifications"
3. Drag both review pages into the folder
4. Position folder in main navigation
5. This creates dropdown: `Certifications → CFI FPAP Review, Wharton/WSP Review`

**Option C: Create Certification Hub Page**
- Create `/certifications` landing page
- Feature all certification reviews
- Link individual pages from hub
- Add to main navigation

---

## Updating Discount Codes (Future)

**If discount codes change:**

1. Go to page in Squarespace
2. Click **Edit**
3. Click on the **code block**
4. Find discount code sections:
   ```html
   <div class="discount-code">FPAGUY30</div>
   ```
5. Replace code text
6. Update accompanying description if needed
7. Click **Apply** → **Save**

---

## Troubleshooting Common Issues

### Issue: Photo Not Displaying
**Fix**: Photo is embedded as base64. If not showing:
- Check if code block pasted completely (file is large)
- Try pasting in smaller chunks
- Clear browser cache and refresh

### Issue: Spacing Looks Off
**Fix**:
- Make sure you're viewing in **published mode** (not edit mode)
- Check mobile vs desktop views
- Try different browsers

### Issue: Click-to-Copy Not Working
**Fix**:
- Make sure JavaScript is enabled in Squarespace
- Check browser console for errors (F12 → Console tab)
- Some Squarespace plans may restrict JavaScript

### Issue: Colors Look Different
**Fix**:
- Colors are set in inline CSS, should work on all Squarespace plans
- If site has global CSS overriding colors, add `!important` flag:
  ```css
  color: #1e3a5f !important;
  ```

### Issue: CTAs Not Clickable
**Fix**:
- Check that URLs in code have correct affiliate links
- Verify UTM parameters are intact
- Test in incognito mode to rule out browser extensions

### Issue: Schema Not Validating
**Fix**:
- Use [Google Rich Results Test](https://search.google.com/test/rich-results)
- Copy any error messages
- Check that all schema objects have required fields
- Validate JSON-LD syntax

---

## Analytics Tracking

**To track performance:**

1. **Google Analytics**:
   - Pages will auto-track if GA is installed on your site
   - Monitor: `/certifications/cfi-fpap-certification-review`
   - Monitor: `/certifications/wharton-wsp-fpa-certificate-review`

2. **Track Conversions**:
   - Set up **Goals** in GA for:
     - Clicks on "Enroll Now" CTAs
     - Time on page >3 minutes
     - Scroll depth >75%

3. **Affiliate Tracking**:
   - CFI links have `?utm_source=fpaguy` parameter
   - Wharton links have `?utm_source=fpaguy` parameter
   - Track these in your affiliate dashboards

---

## Expected Performance Metrics

### Traffic (Month 1-3):
- **Month 1**: 200-400 visitors/page
- **Month 2**: 400-800 visitors/page (as SEO kicks in)
- **Month 3**: 800-1,500 visitors/page (with rich snippets)

### Engagement:
- **Avg Time on Page**: 4-6 minutes (long-form content)
- **Bounce Rate**: 35-50% (normal for review content)
- **Scroll Depth**: 60-75% reach FAQ section

### Conversions:
- **Click-through Rate**: 8-15% (clicks on CTAs)
- **Affiliate Conversion**: 2-5% (visitors who enroll)
- **Email Signups**: 5-10% (if you add email capture)

---

## Next Steps After Implementation

1. **Week 1**: Monitor for errors, fix any layout issues
2. **Week 2**: Share on LinkedIn, send to email list
3. **Week 3**: Check Google Search Console for indexing
4. **Month 1**: Analyze traffic sources, optimize low-performing sections
5. **Month 2**: A/B test different CTA copy
6. **Month 3**: Create 2-3 more certification review pages
7. **Month 4**: Build certification hub page linking all reviews

---

## File Locations

**Files ready for implementation:**
```
/Users/boshaffer/bo/agency-hub/paul emails/cfi-fpap-affiliate-page-v2.html
/Users/boshaffer/bo/agency-hub/paul emails/wharton-wsp-affiliate-page-v2.html
```

**Supporting files:**
```
/Users/boshaffer/bo/agency-hub/paul emails/paul-headshot-optimized.jpg (embedded in HTML)
/Users/boshaffer/bo/agency-hub/paul emails/CRO_OPTIMIZATIONS.md (documentation)
```

---

## Quick Checklist

Before going live:

- [ ] Created both pages in Squarespace
- [ ] Set correct URL slugs
- [ ] Configured SEO settings (title, description)
- [ ] Pasted complete HTML into code blocks
- [ ] Previewed on desktop and mobile
- [ ] Tested all CTA buttons
- [ ] Tested click-to-copy codes
- [ ] Verified photo displays correctly
- [ ] Ran Rich Results Test (schema validation)
- [ ] Created social share images (optional)
- [ ] Set up GA goal tracking (optional)
- [ ] Published pages
- [ ] Tested live pages on multiple devices
- [ ] Shared on social media
- [ ] Added to email newsletter

---

**Questions or Issues?**

Common problems and solutions are in the Troubleshooting section above. Both pages are fully self-contained and ready to paste directly into Squarespace code blocks.

**Total Implementation Time**: 30-45 minutes for both pages
**Difficulty Level**: Easy (copy-paste, no coding required)
