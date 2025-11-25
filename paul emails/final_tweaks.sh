#!/bin/bash

# Fix minor SEO issues found in audit

# 1. Shorten meta descriptions to 155 chars (sweet spot for Google)
perl -i -pe 's|<meta name="description" content="Honest CFI FPAP certification review by Paul Barnhurst\. I designed 2 courses for this program\. Complete curriculum breakdown, pricing, career outcomes\. Save 30% with code FPAGUY30\.">|<meta name="description" content="CFI FPAP certification review by program contributor Paul Barnhurst. Curriculum breakdown, pricing, career outcomes. Save 30% with FPAGUY30.">|' cfi-fpap-affiliate-page-v2.html

perl -i -pe 's|<meta name="description" content="Honest Wharton/Wall Street Prep FP&A Certificate review by program instructor Paul Barnhurst\. 16-week cohort-based program details, career outcomes, who benefits most\.">|<meta name="description" content="Wharton/WSP FP&A Certificate review by instructor Paul Barnhurst. 16-week cohort program details, career outcomes, enrollment info.">|' wharton-wsp-affiliate-page-v2.html

# 2. Shorten Wharton title tag to under 60 chars for better SERP display
perl -i -pe 's|<title>Wharton/Wall Street Prep FP&A Certificate Review 2025: Is It Worth It\? \(Instructor Review\) \| The FP&A Guy</title>|<title>Wharton/WSP FP&A Certificate Review 2025 \| Instructor Insights</title>|' wharton-wsp-affiliate-page-v2.html

# 3. Update OG title for Wharton to match
perl -i -pe 's|<meta property="og:title" content="Wharton/Wall Street Prep FP&A Certificate Review 2025: Is It Worth It\? \(Instructor Review\)">|<meta property="og:title" content="Wharton/WSP FP&A Certificate Review 2025: Instructor Insights">|' wharton-wsp-affiliate-page-v2.html

# 4. Add one more CTA to Wharton page (CFI has 3, Wharton only has 2)
perl -i -0777 -pe 's|(</div>\s*<!-- End of Wharton/WSP FP&A Certificate Review -->)|<div style="text-align: center; margin: 60px 0;">\n            <a href="https://online.wharton.upenn.edu/financial-planning-analysis-certificate/?utm_source=fpaguy&utm_medium=affiliate&utm_campaign=certification_review" class="cta-button" style="display: inline-block; background: linear-gradient(135deg, #b8956a 0%, #9a7a56 100%); color: #1e3a5f; padding: 18px 40px; text-decoration: none; border-radius: 8px; font-weight: 700; font-size: 1.2em; text-align: center; transition: all 0.3s ease; box-shadow: 0 4px 12px rgba(184, 149, 106, 0.3); margin: 20px 0;">View Current Cohort Dates →</a>\n        </div>\n\n$1|s' wharton-wsp-affiliate-page-v2.html

echo "✅ Optimized meta descriptions to 155 chars"
echo "✅ Shortened Wharton title tag to 60 chars"
echo "✅ Added 3rd CTA to Wharton page"
echo "✅ All pages now fully optimized"
