#!/bin/bash

# Add enhanced mobile responsiveness for modern design

for file in cfi-fpap-affiliate-page-v3.html; do
    
    # Add modern mobile responsive styles
    perl -i -0777 -pe 's|(@media \(max-width: 768px\) \{)|$1\n            .page-title {\n                font-size: 2.2em !important;\n            }\n            \n            .hero-section {\n                padding: 40px 0 30px 0 !important;\n            }\n            \n            .discount-banner,\n            .faq-section,\n            .author-credentials-box,\n            .roi-section {\n                padding: 30px 25px !important;\n                margin: 60px 0 !important;\n            }\n            \n            .cta-button {\n                width: 100%;\n                padding: 16px 30px !important;\n                font-size: 1em !important;\n            }|s' "$file"
    
    # Add mobile optimization for smaller screens
    perl -i -0777 -pe 's|(@media \(max-width: 480px\) \{)|$1\n            .page-title {\n                font-size: 1.8em !important;\n                letter-spacing: -0.02em;\n            }\n            \n            .page-subtitle {\n                font-size: 1.1em !important;\n            }\n            \n            .discount-code {\n                font-size: 1.1em !important;\n                padding: 12px 24px !important;\n            }|s' "$file"
    
    echo "✅ Enhanced mobile responsiveness for $file"
done

echo ""
echo "Mobile responsive improvements complete!"
