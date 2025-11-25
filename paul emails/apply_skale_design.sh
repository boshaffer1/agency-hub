#!/bin/bash

# Apply Skale.solutions modern design to affiliate pages

for file in cfi-fpap-affiliate-page-v2.html wharton-wsp-affiliate-page-v2.html; do
    
    # Create v3 with modern design
    cp "$file" "${file/-v2/-v3}"
    newfile="${file/-v2/-v3}"
    
    # 1. Update color palette - Replace navy/gold with orange gradient system
    perl -i -pe 's/#1e3a5f/#1a1a1a/g' "$newfile"  # Dark text instead of navy
    perl -i -pe 's/#4a6fa5/#666666/g' "$newfile"  # Gray instead of medium blue
    perl -i -pe 's/#b8956a/#ff5f14/g' "$newfile"  # Orange instead of gold
    perl -i -pe 's/#9a7a56/#ff7537/g' "$newfile"  # Light orange
    
    # 2. Add Inter font family at the top of <style>
    perl -i -0777 -pe 's|(<style>)|$1\n        @import url('\''https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap'\'');|' "$newfile"
    
    # 3. Update body font to Inter
    perl -i -pe 's|font-family: -apple-system.*?;|font-family: '\''Inter'\'', -apple-system, BlinkMacSystemFont, '\''Segoe UI'\'', Roboto, '\''Helvetica Neue'\'', Arial, sans-serif;|' "$newfile"
    
    # 4. Modernize CTA buttons with rounded corners and gradient
    perl -i -0777 -pe 's|(\.cta-button \{[^}]*background:[^;]+;)|.cta-button {\n            display: inline-block;\n            background: linear-gradient(135deg, #ff5f14 0%, #ff7537 50%, #ff9255 100%);\n            color: white;\n            padding: 18px 40px;\n            text-decoration: none;\n            border-radius: 100px;\n            font-weight: 700;\n            font-size: 1.1em;\n            text-align: center;\n            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n            box-shadow: 0 10px 30px rgba(255, 95, 20, 0.3);\n            border: none;\n            cursor: pointer;|s' "$newfile"
    
    # 5. Update CTA hover effect
    perl -i -0777 -pe 's|(\.cta-button:hover \{[^}]*\})|.cta-button:hover {\n            transform: translateY(-2px);\n            box-shadow: 0 15px 40px rgba(255, 95, 20, 0.4);\n            background: linear-gradient(135deg, #ff7537 0%, #ff9255 50%, #ffaa77 100%);\n        }|s' "$newfile"
    
    # 6. Add modern section spacing
    perl -i -pe 's|margin: 60px 0;|margin: 120px 0;|g' "$newfile"
    perl -i -pe 's|padding: 40px;|padding: 72px 56px;|g' "$newfile"
    
    # 7. Update discount code boxes with modern orange gradient
    perl -i -0777 -pe 's|(\.discount-code \{[^}]*background-color:[^;]+;)|.discount-code {\n            background: linear-gradient(135deg, #ff5f14 0%, #ff7537 100%);\n            color: white;\n            padding: 15px 30px;\n            border-radius: 100px;\n            font-size: 1.3em;\n            font-weight: 700;\n            display: inline-block;\n            margin: 10px 0;\n            cursor: pointer;\n            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n            box-shadow: 0 8px 25px rgba(255, 95, 20, 0.25);|s' "$newfile"
    
    # 8. Modernize headings with better typography
    perl -i -pe 's|font-size: 2\.5em;|font-size: 3em; font-weight: 800; letter-spacing: -0.02em;|' "$newfile"
    perl -i -pe 's|font-size: 1\.8em;|font-size: 2.2em; font-weight: 700; letter-spacing: -0.01em;|' "$newfile"
    
    # 9. Update background colors to modern palette
    perl -i -pe 's|background: #f8f9fa;|background: #f9f9f9;|g' "$newfile"
    perl -i -pe 's|background: #fff;|background: white;|g' "$newfile"
    
    # 10. Add modern card shadows
    perl -i -pe 's|box-shadow: 0 2px 8px|box-shadow: 0 10px 40px|g' "$newfile"
    
    echo "✅ Applied Skale design to $newfile"
done

echo ""
echo "Modern design applied! Created:"
echo "  - cfi-fpap-affiliate-page-v3.html"
echo "  - wharton-wsp-affiliate-page-v3.html"
