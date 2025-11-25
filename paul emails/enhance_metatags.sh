#!/bin/bash

# Add comprehensive meta tags to both affiliate pages

# CFI FPAP page
perl -i -0777 -pe 's|(<meta property="og:image" content="[^"]+">)|$1
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:site_name" content="The FP&A Guy">
    <meta property="article:author" content="Paul Barnhurst">
    <meta property="article:published_time" content="2025-01-15">
    <meta property="article:modified_time" content="2025-01-15">
    
    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:site" content="@theFPandAGuy">
    <meta name="twitter:creator" content="@theFPandAGuy">
    <meta name="twitter:title" content="CFI FPAP™ Certification Review 2025: Is It Worth It? (Save 30%)">
    <meta name="twitter:description" content="I designed two courses for CFI'\''s FPAP certification. Here'\''s my honest review, what you'\''ll learn, and how to save 30%. Code: FPAGUY30">
    <meta name="twitter:image" content="https://www.thefpandaguy.com/images/cfi-fpap-review-social.jpg">
    
    <!-- Additional SEO -->
    <meta name="rating" content="General">
    <meta name="language" content="English">
    <meta name="revisit-after" content="7 days">
    <meta name="theme-color" content="#1e3a5f">|s' cfi-fpap-affiliate-page-v2.html

# Wharton/WSP page  
perl -i -0777 -pe 's|(<meta property="og:image" content="[^"]+">)|$1
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:site_name" content="The FP&A Guy">
    <meta property="article:author" content="Paul Barnhurst">
    <meta property="article:published_time" content="2025-01-15">
    <meta property="article:modified_time" content="2025-01-15">
    
    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:site" content="@theFPandAGuy">
    <meta name="twitter:creator" content="@theFPandAGuy">
    <meta name="twitter:title" content="Wharton/WSP FP&A Certificate Review 2025: Instructor Insights">
    <meta name="twitter:description" content="I'\''m an instructor for the Wharton Online FP&A Certificate. Here'\''s my honest review of this prestigious program, who benefits most, and what to expect.">
    <meta name="twitter:image" content="https://www.thefpandaguy.com/images/wharton-wsp-review-social.jpg">
    
    <!-- Additional SEO -->
    <meta name="rating" content="General">
    <meta name="language" content="English">
    <meta name="revisit-after" content="7 days">
    <meta name="theme-color" content="#1e3a5f">|s' wharton-wsp-affiliate-page-v2.html

echo "Enhanced meta tags added to both pages"
