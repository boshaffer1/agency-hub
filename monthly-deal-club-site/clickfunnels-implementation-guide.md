# ClickFunnels Classic Implementation Guide
## Nano Flips Deal Flow Club Landing Page

Follow these steps to implement the landing page in ClickFunnels Classic:

---

## Step 1: Create a New Page in ClickFunnels

1. Go to your ClickFunnels dashboard
2. Create a new funnel or select an existing one
3. Add a new "Blank Page" (not a template)
4. Name it "Nano Flips Deal Flow Club"

---

## Step 2: Set Page Settings

### SEO Meta Data
Go to Settings → SEO Meta Data and enter:

**Page Title:**
```
Nano Flips Deal Flow Club - Expert Deal Review Before You Buy a Business
```

**Meta Description:**
```
Join Nano Flips Deal Flow Club. Get expert feedback on business acquisitions before you wire money. Weekly deal reviews, live teardowns, and a community of active buyers. 20 spots only.
```

**Favicon URL:**
```
https://d2saw6je89goi1.cloudfront.net/uploads/digital_asset/file/1176545/NF_favicon.png
```

---

## Step 3: Add Tracking Code (HEAD Section)

Go to Settings → Tracking Code → **Header Tracking Code**

Paste the code from: `clickfunnels-head-code.html`

---

## Step 4: Add Page HTML

1. Click "Edit Page"
2. Delete any default sections/elements
3. Add a "Custom HTML" element
4. Paste the code from: `clickfunnels-body-code.html`

---

## Step 5: Add Custom CSS

1. Go to Settings → Custom CSS
2. Paste the code from: `clickfunnels-custom-css.css`

---

## Step 6: Add Footer JavaScript

Go to Settings → Tracking Code → **Footer Tracking Code**

Paste the code from: `clickfunnels-footer-code.html`

---

## Step 7: Publish and Test

1. Click "Save"
2. Click "Publish"
3. Visit your page and test:
   - Theme toggle works
   - FAQ accordion expands/collapses
   - Whop checkout buttons appear
   - All links work
   - Mobile responsive

---

## Important Notes

- **Whop Checkout**: Make sure your Whop plan IDs are active:
  - Monthly ($197): `plan_hGiwfgDQ8NhFG`
  - 3-Month ($525): `plan_G4q2wMMQu2ZRn`

- **Images**: All images are hosted externally (testimonials, James's photo, logo)

- **Mobile**: The page is fully responsive - test on mobile devices

- **Theme Toggle**: Users can switch between light/dark mode

---

## Troubleshooting

**Whop buttons not appearing?**
- Check browser console for JavaScript errors
- Verify Whop script is loading in Head code
- Confirm plan IDs are active in Whop dashboard

**Styling looks broken?**
- Make sure Custom CSS was pasted correctly
- Clear ClickFunnels cache (Settings → Clear Cache)
- Try in incognito/private browsing mode

**FAQ not working?**
- Verify Footer JavaScript code was added
- Check browser console for errors

---

## Files Included

1. `clickfunnels-head-code.html` - Google Fonts & Whop script
2. `clickfunnels-body-code.html` - Main page HTML
3. `clickfunnels-custom-css.css` - All styling
4. `clickfunnels-footer-code.html` - JavaScript for interactions

---

## Support

If you encounter issues:
1. Check all 4 code sections were pasted correctly
2. Clear ClickFunnels cache
3. Test in incognito mode
4. Check browser console for errors
