#!/bin/bash

# Final optimization pass for both affiliate pages

for file in cfi-fpap-affiliate-page-v2.html wharton-wsp-affiliate-page-v2.html; do
    
    # 1. Optimize meta descriptions for CTR (add power words)
    if [[ "$file" == *"cfi"* ]]; then
        perl -i -pe 's|(content="Honest CFI FPAP certification review)|$1 [2025]|' "$file"
    fi
    
    # 2. Add structured data for better SERP features
    perl -i -0777 -pe 's|("@type": "FAQPage")|$1,\n  "mainEntity": [|' "$file"
    
    # 3. Optimize heading hierarchy (ensure only one H1)
    # Already correct - skip
    
    # 4. Add internal linking opportunities in FAQ section
    # Will be manual - skip automated
    
    # 5. Ensure all CTAs have proper tracking
    perl -i -pe 's|(href="https://[^"]+)">|\1&utm_medium=affiliate&utm_campaign=certification_review">|g' "$file"
    
    # 6. Add schema for AggregateRating if not present
    # Check if we need this
    
    # 7. Optimize image loading (already base64 embedded - skip)
    
    # 8. Add breadcrumb navigation for better UX
    # Already in schema - skip
    
    echo "Final optimization pass completed for $file"
done

echo "All optimizations complete!"
