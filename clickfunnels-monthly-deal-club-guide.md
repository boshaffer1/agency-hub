# ClickFunnels Setup Guide - Monthly Deal Club

## Page Settings

**Page Name:** Monthly Deal Club Landing Page
**Page Type:** Sales Page
**Max Width:** 720px (set in page settings)
**Background:** White (#ffffff)

---

## SEO Settings (ClickFunnels)

### Basic SEO Tab

**Page Title (SEO):**
```
Monthly Deal Club - Expert Deal Review Before You Buy a Business | Business Acquisition Community
```

**Meta Description:**
```
Get expert feedback on business acquisitions before you wire money. Weekly deal reviews, live teardowns, and a community of active buyers. 15 spots only. First call December 3rd, 2024.
```

**Meta Keywords:**
```
business acquisition, buying a business, deal review, business due diligence, flippa, empire flippers, acquire.com, business buying community, deal analysis
```

**Page URL Slug:**
```
monthly-deal-club
```

### Advanced SEO Settings

**Open Graph Title:**
```
Monthly Deal Club - Expert Deal Review Before You Buy a Business
```

**Open Graph Description:**
```
Stop analyzing deals alone. Get expert feedback on your business acquisitions before you wire $50K+. Weekly calls, personal deal reviews, and a community of active buyers.
```

**Open Graph Image:**
Upload a 1200x630px image (create one with your branding + headline)

**Twitter Card Type:** Summary Large Image

**Twitter Title:**
```
Monthly Deal Club - Expert Deal Review Before You Buy a Business
```

**Twitter Description:**
```
Stop analyzing deals alone. Get expert feedback on your business acquisitions before you wire $50K+. 15 spots only.
```

**Twitter Image:**
Upload a 1200x600px image

### Tracking & Scripts (Head Section)

Add this to your **Head Tracking Code** in ClickFunnels:

```html
<!-- Schema.org Product Markup -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Monthly Deal Club",
  "description": "Expert deal review and community for people buying businesses. Weekly group calls, personal deal reviews, live teardowns, and private community access.",
  "brand": {
    "@type": "Brand",
    "name": "Monthly Deal Club"
  },
  "offers": [
    {
      "@type": "Offer",
      "name": "Monthly Membership",
      "price": "195",
      "priceCurrency": "USD",
      "priceValidUntil": "2025-12-31",
      "availability": "https://schema.org/LimitedAvailability",
      "url": "https://yourdomain.com/monthly-deal-club",
      "seller": {
        "@type": "Person",
        "name": "James Camp"
      }
    },
    {
      "@type": "Offer",
      "name": "3-Month Membership with Buy Box Build Session",
      "price": "525",
      "priceCurrency": "USD",
      "priceValidUntil": "2025-12-31",
      "availability": "https://schema.org/LimitedAvailability",
      "url": "https://yourdomain.com/monthly-deal-club"
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": "12"
  }
}
</script>

<!-- FAQ Schema Markup -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What if I can't make the Tuesday calls?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "All calls are recorded. Most members watch async. But the real value is submitting YOUR deal for review—that happens whether you attend live or not."
      }
    },
    {
      "@type": "Question",
      "name": "I'm not ready to buy yet. Can I join later?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "I'm not opening more spots until February at the earliest. If you're buying in Q1 2025, this is your window. If you're buying later, wait for the next cohort."
      }
    },
    {
      "@type": "Question",
      "name": "What types of businesses do you cover?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Content sites, SaaS, e-commerce, newsletters, apps—anything that shows up on Flippa or Empire Flippers. I've reviewed 50+ deals across all these categories."
      }
    },
    {
      "@type": "Question",
      "name": "Is this a course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. There are no modules or videos to watch. This is expert feedback on YOUR specific deals in real-time. You learn by getting your deals reviewed and watching others get theirs reviewed."
      }
    },
    {
      "@type": "Question",
      "name": "What if I don't have a deal yet?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Perfect. The Buy Box Build session (included in 3-month option) will help you define what you're looking for. Then you bring deals to the weekly calls and we'll tell you if they match your criteria."
      }
    },
    {
      "@type": "Question",
      "name": "Can I really cancel monthly anytime?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. No hoops. You're an adult. If it's not valuable, leave. But most members who leave do so because they bought their business and don't need ongoing reviews anymore."
      }
    },
    {
      "@type": "Question",
      "name": "Who else is in the group?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Buyers and operators. People with capital who are actively looking to acquire in Q1 2025. No tire-kickers. No gurus. Just people doing the work."
      }
    }
  ]
}
</script>
```

### Images You Need to Create

**For Best SEO:**

1. **OG Image (1200x630px):**
   - Headline: "Stop Analyzing Deals Alone"
   - Subtext: "Expert Deal Review for Business Buyers"
   - Your photo/logo
   - Branded background

2. **Twitter Image (1200x600px):**
   - Similar to OG image
   - Optimized for Twitter feed

**Tools to Create:**
- Canva (easiest)
- Figma
- Photoshop

---

## Section 1: Hero

**Section Settings:**
- Background: White
- Padding: 60px top, 40px bottom
- Max width: 720px

### Headline
**Element:** Headline
**Text:** Stop analyzing deals alone.
**Style:**
- Font size: 40px (desktop) / 28px (mobile)
- Font weight: 600
- Color: #1a1a1a
- Alignment: Left
- Line height: 1.2

### Subheadline
**Element:** Text/Paragraph
**Text:** Get expert feedback on your business acquisitions before you wire $50K+. Weekly calls, personal deal reviews, and a community of buyers who've been where you are.
**Style:**
- Font size: 20px (desktop) / 18px (mobile)
- Color: #555555
- Alignment: Left
- Line height: 1.5
- Margin bottom: 30px

### Insight Box
**Element:** Custom HTML or Text Block with background
**Copy:**
```
Most people who buy a bad business miss one thing:

They analyze the numbers. They check the seller. But they never ask "What happens after I own this?"

→ Who runs the Facebook ads when the seller leaves?
→ Where do you find writers who match the voice?
→ How do you handle the first customer complaint?

You need someone who's done this 50+ times to look at YOUR deal and tell you what breaks in month 2.
```

**Style:**
- Background: #f8f9fa
- Border-left: 4px solid #2c3e50
- Padding: 25px
- Font size: 18px
- Line height: 1.6
- Margin bottom: 30px

### CTA Button
**Element:** Button
**Text:** Join Monthly Deal Club
**Link:** #pricing (anchor link to pricing section)
**Style:**
- Background: #2c3e50
- Text color: White
- Padding: 18px 40px
- Border radius: 6px
- Font size: 18px
- Font weight: 600
- Hover: #1a252f

### Scarcity Text
**Element:** Text
**Copy:** 15 spots only • First call December 3rd, 7pm PST
**Style:**
- Color: #e74c3c
- Font weight: 600
- Font size: 15px
- Margin top: 15px

---

## Section 2: What You Get

**Section Settings:**
- Background: White
- Border-top: 2px solid #e9ecef
- Padding: 50px top and bottom
- Max width: 720px

### Section Headline
**Element:** Headline
**Text:** What you get:
**Style:**
- Font size: 32px
- Color: #1a1a1a
- Margin bottom: 30px
- Alignment: Left

### Deliverable 1
**Element:** Text Block
**Copy:**
```
Weekly Group Call (Every Tuesday, 7pm PST)

Bring your deals. Get expert feedback before you wire money. See other members' deals analyzed in real-time. Learn what to look for, what to avoid, and how to negotiate better terms.
```
**Style:**
- Title font size: 21px, bold, color #2c3e50
- Body font size: 17px, color #555555
- Line height: 1.7
- Padding bottom: 35px
- Border bottom: 1px solid #e9ecef

### Deliverable 2
**Element:** Text Block
**Copy:**
```
Personal Deal Review (Once a month)

I record a Loom walking through your specific deal. What to fix, what to walk away from, what questions to ask the seller. This alone is worth the monthly price.
```
**Style:** Same as Deliverable 1

### Deliverable 3
**Element:** Text Block
**Copy:**
```
Live Deal Teardowns (2x per month)

Real deals from the group. We go deep on what works and what doesn't. You'll learn more from seeing 10 deals analyzed than buying one yourself.
```
**Style:** Same as Deliverable 1

### Deliverable 4
**Element:** Text Block
**Copy:**
```
Private Community

Ask questions between calls. Share diligence documents. Get second opinions from people who are also in the trenches buying businesses right now.
```
**Style:** Same as Deliverable 1

### Deliverable 5
**Element:** Text Block
**Copy:**
```
Monthly Expert Session

Guest operators who've bought and scaled. Different business model each month. Real operators, not course sellers.
```
**Style:** Same as Deliverable 1 (but NO border bottom on last one)

---

## Section 3: Who This Is For

**Section Settings:**
- Background: #f8f9fa
- Padding: 40px
- Border radius: 8px
- Margin: 40px top and bottom
- Max width: 720px

### Section Headline
**Element:** Headline
**Text:** This is for you if:
**Style:**
- Font size: 29px
- Color: #1a1a1a
- Margin bottom: 20px
- Alignment: Left

### Bullet List
**Element:** Bullet List or Text Block
**Copy:**
```
→ You're buying a business in the next 3-6 months (Q1 2025)
→ You're browsing Flippa, Empire Flippers, or Acquire.com regularly
→ You have the capital but want expert eyes before you commit
→ You're tired of analyzing deals alone and second-guessing yourself
→ You want to learn from other buyers' mistakes instead of making your own
```
**Style:**
- Font size: 18px
- Color: #2c3e50
- Line height: 1.8
- Padding: 12px per item

### Divider
**Element:** Divider
**Style:**
- Color: #dee2e6
- Margin: 25px top and bottom

### "NOT For" Subheadline
**Element:** Headline (H3)
**Text:** This is NOT for you if:
**Style:**
- Font size: 21px
- Color: #e74c3c
- Margin bottom: 15px

### "NOT For" Text
**Element:** Text
**Copy:** You're "just browsing" with no plans to buy in Q1 2025. You're looking for a course or theory. You want someone to do the work for you. Save your money.
**Style:**
- Font size: 17px
- Color: #555555
- Line height: 1.7

---

## Section 4: Pricing

**Section Settings:**
- Background: White
- Padding: 50px top and bottom
- Max width: 720px
- Add ID: "pricing" (for anchor link)

### Section Headline
**Element:** Headline
**Text:** Choose your option:
**Style:**
- Font size: 32px
- Color: #1a1a1a
- Margin bottom: 40px
- Alignment: Center

### Pricing Cards (2-Column Row)
**Element:** 2-Column Row

#### Left Column - Monthly Option

**Card Container:**
- Background: White
- Border: 2px solid #e9ecef
- Border radius: 8px
- Padding: 30px
- Hover: Border color #2c3e50

**Plan Name:**
**Text:** Monthly
**Style:** Font size: 24px, color #2c3e50, bold

**Price:**
**Text:** $195
**Style:** Font size: 40px, font weight 700, color #1a1a1a

**Price Detail:**
**Text:** per month, cancel anytime
**Style:** Font size: 15px, color #777777

**Features List:**
```
✓ All weekly calls
✓ Monthly personal review
✓ Live teardowns
✓ Private community
✓ Expert sessions
```
**Style:** Font size: 15px, color #555555, green checkmarks (#27ae60)

**Button:**
**Text:** Start Monthly
**Link:** [YOUR-WHOP-MONTHLY-LINK]
**Style:**
- Background: #2c3e50
- Full width
- Padding: 18px
- Border radius: 6px
- Font weight: 600

#### Right Column - 3-Month Option (Featured)

**Card Container:**
- Background: White
- Border: 2px solid #2c3e50
- Border radius: 8px
- Padding: 30px

**Badge (Top of Card):**
**Text:** BEST VALUE
**Style:**
- Background: #2c3e50
- Color: White
- Font size: 12px
- Font weight: 600
- Padding: 4px 16px
- Border radius: 4px
- Position: Absolute top

**Plan Name:**
**Text:** 3-Month Lock-In
**Style:** Font size: 24px, color #2c3e50, bold

**Price:**
**Text:** $525
**Style:** Font size: 40px, font weight 700, color #1a1a1a

**Price Detail:**
**Text:** one payment, 3 months access
**Style:** Font size: 15px, color #777777

**Features List:**
```
✓ Everything in Monthly
✓ + 1:1 Buy Box Build Session
✓ Define your exact criteria
✓ Stop wasting time on wrong deals
✓ Worth $500 alone
```
**Style:** Font size: 15px, color #555555, green checkmarks, "Buy Box Build Session" in BOLD

**Button:**
**Text:** Lock In 3 Months
**Link:** [YOUR-WHOP-3MONTH-LINK]
**Style:** Same as Monthly button

### Scarcity Text (Below Cards)
**Element:** Text
**Copy:** Only 15 spots available • 4 already taken
**Style:**
- Color: #e74c3c
- Font weight: 600
- Font size: 15px
- Alignment: Center
- Margin top: 30px

---

## Section 5: FAQ

**Section Settings:**
- Background: White
- Border-top: 2px solid #e9ecef
- Padding: 50px top and bottom
- Max width: 720px

### Section Headline
**Element:** Headline
**Text:** Common questions:
**Style:**
- Font size: 32px
- Color: #1a1a1a
- Margin bottom: 35px
- Alignment: Left

### FAQ Items (Use ClickFunnels FAQ element or Text Blocks)

**Q1:**
**Question:** What if I can't make the Tuesday calls?
**Answer:** All calls are recorded. Most members watch async. But the real value is submitting YOUR deal for review—that happens whether you attend live or not.

**Q2:**
**Question:** I'm not ready to buy yet. Can I join later?
**Answer:** I'm not opening more spots until February at the earliest. If you're buying in Q1 2025, this is your window. If you're buying later, wait for the next cohort.

**Q3:**
**Question:** What types of businesses do you cover?
**Answer:** Content sites, SaaS, e-commerce, newsletters, apps—anything that shows up on Flippa or Empire Flippers. I've reviewed 50+ deals across all these categories.

**Q4:**
**Question:** Is this a course?
**Answer:** No. There are no modules or videos to watch. This is expert feedback on YOUR specific deals in real-time. You learn by getting your deals reviewed and watching others get theirs reviewed.

**Q5:**
**Question:** What if I don't have a deal yet?
**Answer:** Perfect. The Buy Box Build session (included in 3-month option) will help you define what you're looking for. Then you bring deals to the weekly calls and we'll tell you if they match your criteria.

**Q6:**
**Question:** Can I really cancel monthly anytime?
**Answer:** Yes. No hoops. You're an adult. If it's not valuable, leave. But most members who leave do so because they bought their business and don't need ongoing reviews anymore.

**Q7:**
**Question:** Who else is in the group?
**Answer:** Buyers and operators. People with capital who are actively looking to acquire in Q1 2025. No tire-kickers. No "gurus." Just people doing the work.

**Style for All FAQ Items:**
- Question font size: 19px, bold, color #2c3e50
- Answer font size: 17px, color #555555
- Line height: 1.7
- Margin bottom: 30px between items

---

## Section 6: Final CTA

**Section Settings:**
- Background: White
- Padding: 50px top and bottom
- Max width: 720px
- Alignment: Center

### Headline
**Element:** Headline
**Text:** Ready to stop analyzing alone?
**Style:**
- Font size: 32px
- Color: #1a1a1a
- Alignment: Center
- Margin bottom: 25px

### Button
**Element:** Button
**Text:** Join Monthly Deal Club
**Link:** #pricing (scroll to top of pricing section)
**Style:**
- Background: #2c3e50
- Padding: 18px 40px
- Border radius: 6px
- Font size: 18px
- Font weight: 600

### Scarcity Text
**Element:** Text
**Copy:** 15 spots • First call December 3rd, 7pm PST
**Style:**
- Color: #e74c3c
- Font weight: 600
- Font size: 15px
- Margin top: 15px

---

## Section 7: Footer

**Section Settings:**
- Background: White
- Border-top: 1px solid #e9ecef
- Padding: 40px top and bottom
- Alignment: Center

### Contact Text
**Element:** Text
**Copy:** Questions? Reply to any email from me or hit reply here: hi@nanoflips.com
**Style:**
- Font size: 15px
- Color: #777777
- Alignment: Center

### Copyright
**Element:** Text
**Copy:** © 2024 Monthly Deal Club. All rights reserved.
**Style:**
- Font size: 14px
- Color: #777777
- Margin top: 20px
- Alignment: Center

---

## Custom CSS (Add to Page Settings)

```css
/* Smooth scrolling for anchor links */
html {
    scroll-behavior: smooth;
}

/* Mobile responsive adjustments */
@media (max-width: 768px) {
    .elHeadline {
        font-size: 28px !important;
    }

    .pricing-row {
        flex-direction: column !important;
    }
}
```

---

## Setup Checklist

### Page Setup
- [ ] Create new page in ClickFunnels
- [ ] Set page max-width to 720px
- [ ] Set page URL slug to "monthly-deal-club"
- [ ] Add all 7 sections in order
- [ ] Copy/paste all text content
- [ ] Style each element per guide above

### SEO Setup
- [ ] Fill in Page Title (SEO settings)
- [ ] Fill in Meta Description
- [ ] Add Meta Keywords
- [ ] Upload Open Graph image (1200x630px)
- [ ] Upload Twitter Card image (1200x600px)
- [ ] Add Schema markup to Head Tracking Code
- [ ] Add Open Graph tags
- [ ] Add Twitter Card tags

### Functionality
- [ ] Add Whop payment links to both pricing buttons
- [ ] Update email address in footer
- [ ] Set "pricing" section ID for anchor link
- [ ] Test all buttons and anchor links
- [ ] Test anchor link scroll behavior

### Testing & Launch
- [ ] Preview on mobile (iPhone, Android)
- [ ] Preview on desktop (Chrome, Safari, Firefox)
- [ ] Test page speed (Google PageSpeed Insights)
- [ ] Validate Schema markup (Google Rich Results Test)
- [ ] Test checkout flow with Whop
- [ ] Publish page
- [ ] Submit URL to Google Search Console
- [ ] Share on social media to test OG tags

---

## Whop Integration Notes

**Your Whop payment links will look like:**
- Monthly: `https://whop.com/checkout/plan_xxxxx`
- 3-Month: `https://whop.com/checkout/plan_yyyyy`

After purchase, Whop will:
1. Handle payment
2. Grant access to your community/course
3. Send confirmation email
4. You can set up welcome automation in ConvertKit based on Whop webhooks

---

## Next Steps After Page is Built

1. Test both payment options
2. Set up Whop → ConvertKit integration (tag buyers)
3. Create welcome email automation in ConvertKit
4. Send first email (Email 1) to your list linking to this page
5. Update "X already taken" number as people join
6. Monitor conversions in ClickFunnels analytics
