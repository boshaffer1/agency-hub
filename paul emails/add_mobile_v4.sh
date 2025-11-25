#!/bin/bash

# Add comprehensive mobile responsiveness to v4

for file in cfi-fpap-affiliate-page-v4.html wharton-wsp-affiliate-page-v4.html; do
    
    # Add mobile styles
    perl -i -0777 -pe 's|(@media \(max-width: 768px\) \{)|$1\n            :root {\n                --spacing-xl: 40px;\n                --spacing-2xl: 60px;\n                --spacing-3xl: 80px;\n            }\n            \n            body {\n                padding: 0 24px !important;\n            }\n            \n            .page-title {\n                font-size: 2.5em !important;\n                letter-spacing: -0.03em !important;\n            }\n            \n            .page-subtitle {\n                font-size: 1.15em !important;\n            }\n            \n            h2 {\n                font-size: 2em !important;\n            }\n            \n            .hero-section {\n                padding: 60px 0 40px 0 !important;\n            }\n            \n            .discount-banner,\n            .faq-section,\n            .author-credentials-box,\n            .roi-section {\n                padding: 40px 32px !important;\n                margin: 60px 0 !important;\n                border-radius: var(--radius-md) !important;\n            }\n            \n            .cta-button {\n                width: 100%;\n                padding: 16px 36px !important;\n                font-size: 1em !important;\n            }\n            \n            .discount-code {\n                font-size: 1.2em !important;\n                padding: 14px 28px !important;\n            }|s' "$file"
    
    # Mobile styles for small phones
    perl -i -0777 -pe 's|(@media \(max-width: 480px\) \{)|$1\n            .page-title {\n                font-size: 2em !important;\n            }\n            \n            .discount-banner,\n            .faq-section,\n            .author-credentials-box,\n            .roi-section {\n                padding: 32px 24px !important;\n            }\n            \n            .badge {\n                font-size: 0.7em !important;\n                padding: 8px 20px !important;\n            }|s' "$file"
    
    echo "✅ Added mobile responsiveness to $file"
done

echo ""
echo "Mobile responsiveness complete for v4!"
