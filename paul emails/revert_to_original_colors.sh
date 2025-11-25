#!/bin/bash

# Revert v3 files back to original gold/navy colors while keeping modern design elements

for file in cfi-fpap-affiliate-page-v3.html wharton-wsp-affiliate-page-v3.html; do
    
    # 1. Revert colors: Orange back to Gold, Dark gray back to Navy
    perl -i -pe 's/#ff5f14/#b8956a/g' "$file"  # Orange → Gold
    perl -i -pe 's/#ff7537/#9a7a56/g' "$file"  # Light orange → Darker gold
    perl -i -pe 's/#ff9255/#c9a876/g' "$file"  # Soft orange → Light gold
    perl -i -pe 's/#ffaa77/#d4b589/g' "$file"  # Lightest orange → Lightest gold
    perl -i -pe 's/#1a1a1a/#1e3a5f/g' "$file"  # Dark gray → Navy
    perl -i -pe 's/#333333/#4a6fa5/g' "$file"  # Gray → Medium blue
    perl -i -pe 's/#666666/#4a6fa5/g' "$file"  # Medium gray → Medium blue
    
    # 2. Update gradient backgrounds to use gold instead of orange
    perl -i -pe 's|rgba\(255, 95, 20|rgba(184, 149, 106|g' "$file"  # Orange rgba → Gold rgba
    perl -i -pe 's|rgba\(255, 117, 55|rgba(154, 122, 86|g' "$file"  # Light orange rgba → Darker gold rgba
    
    # 3. Update CTA text color back to navy (it was white on orange, should be navy on gold)
    perl -i -0777 -pe 's|(\.cta-button \{[^}]*color: )white(;)|${1}#1e3a5f$2|s' "$file"
    
    # 4. Update discount code text to navy
    perl -i -0777 -pe 's|(\.discount-code \{[^}]*color: )white(;)|${1}#1e3a5f$2|s' "$file"
    
    # 5. Update badge text to white (looks better on gold)
    perl -i -0777 -pe 's|(\.badge \{[^}]*)(color: white;)|${1}color: white;|s' "$file"
    
    # 6. Fix author credentials box gradient back to navy
    perl -i -0777 -pe 's|background: linear-gradient\(135deg, #1e3a5f 0%, #4a6fa5 100%\)|background: linear-gradient(135deg, #1e3a5f 0%, #4a6fa5 100%)|' "$file"
    
    echo "✅ Reverted $file to gold/navy colors (kept modern design)"
done

echo ""
echo "Colors reverted to original gold/navy palette!"
echo "Modern design elements preserved (Inter font, spacing, rounded buttons, gradients)"
