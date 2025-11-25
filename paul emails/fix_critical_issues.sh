#!/bin/bash

# Fix critical design issues: CTA above fold + remove blank spaces

for file in cfi-fpap-affiliate-page-v4.html wharton-wsp-affiliate-page-v4.html; do
    
    # 1. Remove the extra container wrapper that's causing issues
    perl -i -0777 -pe 's|<body>\s*<div style="max-width: 1440px; margin: 0 auto; padding: 0 64px;">||' "$file"
    perl -i -0777 -pe 's|</div>\s*</body>|</body>|' "$file"
    
    # 2. Add proper container styling to body
    perl -i -0777 -pe 's|(body \{[^}]*)\}|$1\n            max-width: 1440px;\n            margin: 0 auto;\n            padding: 0 64px;\n        }|s' "$file"
    
    # 3. Add early CTA right after author intro section
    if [[ "$file" == *"cfi"* ]]; then
        perl -i -0777 -pe 's|(I know what works, what doesn'\''t, and who benefits most\.</p>)|$1\n\n            <div style="text-align: center; margin: 50px 0 70px 0;">\n                <a href="https://corporatefinanceinstitute.com/certifications/financial-planning-analysis-professional-fpap/?utm_source=fpaguy&utm_medium=affiliate&utm_campaign=certification_review" class="cta-button">🎯 Enroll Now with 30% Discount</a>\n            </div>|s' "$file"
    else
        perl -i -0777 -pe 's|(Here'\''s my honest assessment of this prestigious program\.</p>)|$1\n\n            <div style="text-align: center; margin: 50px 0 70px 0;">\n                <a href="https://online.wharton.upenn.edu/financial-planning-analysis-certificate/?utm_source=fpaguy&utm_medium=affiliate&utm_campaign=certification_review" class="cta-button">🎯 Enroll in Next Cohort</a>\n            </div>|s' "$file"
    fi
    
    # 4. Reduce hero section padding (too much white space)
    perl -i -0777 -pe 's|(\.hero-section \{[^}]*padding: )100px 0 80px 0;|${1}60px 0 40px 0;|s' "$file"
    
    # 5. Fix page title size (too large)
    perl -i -0777 -pe 's|(\.page-title \{[^}]*font-size: )4em;|${1}3.2em;|s' "$file"
    
    # 6. Remove excess margin from discount banner
    perl -i -0777 -pe 's|margin: var\(--spacing-3xl\) 0;|margin: 60px 0;|g' "$file"
    
    # 7. Tighten up section spacing (120px is too much)
    perl -i -pe 's|--spacing-3xl: 120px;|--spacing-3xl: 80px;|' "$file"
    
    # 8. Fix body text that might have broken
    perl -i -0777 -pe 's|font-size: 1\.05em;\s*line-height: 1\.7;\s*color: #2d4a6f;|font-size: 1.05em;|g' "$file"
    
    echo "✅ Fixed critical issues: $file"
done

echo ""
echo "Critical fixes applied:"
echo "  ✅ CTA now above the fold"
echo "  ✅ Removed blank white space"
echo "  ✅ Tightened spacing"
echo "  ✅ Fixed container issues"
