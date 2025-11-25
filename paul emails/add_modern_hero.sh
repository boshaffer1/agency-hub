#!/bin/bash

# Add modern hero section with gradient background

for file in cfi-fpap-affiliate-page-v3.html wharton-wsp-affiliate-page-v3.html; do
    
    # Add radial gradient hero background style
    perl -i -0777 -pe 's|(<style>)|$1\n        /* Modern Hero Section */\n        .hero-section {\n            background: radial-gradient(ellipse at top, rgba(255, 95, 20, 0.15) 0%, rgba(255, 95, 20, 0.05) 50%, transparent 100%);\n            padding: 80px 0 60px 0;\n            margin-bottom: 60px;\n        }\n        \n        .badge {\n            display: inline-block;\n            background: linear-gradient(135deg, #ff5f14 0%, #ff7537 100%);\n            color: white;\n            padding: 8px 24px;\n            border-radius: 100px;\n            font-size: 0.85em;\n            font-weight: 600;\n            letter-spacing: 0.5px;\n            text-transform: uppercase;\n            margin-bottom: 20px;\n        }\n        \n        .page-title {\n            font-size: 3.5em;\n            font-weight: 900;\n            color: #1a1a1a;\n            line-height: 1.1;\n            letter-spacing: -0.03em;\n            margin: 20px 0;\n            max-width: 1000px;\n        }\n        \n        .page-subtitle {\n            font-size: 1.3em;\n            color: #666;\n            font-weight: 500;\n            margin-top: 15px;\n        }|' "$file"
    
    # Wrap the header content in hero-section div
    perl -i -0777 -pe 's|(<body>.*?<div style="max-width: 1200px)|$1 class="hero-section"|s' "$file"
    
    # Update discount banner style
    perl -i -0777 -pe 's|(\.discount-banner \{[^}]*\})|.discount-banner {\n            background: linear-gradient(135deg, rgba(255, 95, 20, 0.08) 0%, rgba(255, 117, 55, 0.08) 100%);\n            border-left: 4px solid #ff5f14;\n            padding: 40px 50px;\n            border-radius: 16px;\n            margin: 60px 0;\n            box-shadow: 0 10px 40px rgba(255, 95, 20, 0.1);\n        }|s' "$file"
    
    # Update FAQ section background
    perl -i -0777 -pe 's|(\.faq-section.*?background: #f9f9f9;)|.faq-section {\n            margin: 120px 0;\n            padding: 72px 56px;\n            background: linear-gradient(135deg, rgba(255, 95, 20, 0.03) 0%, rgba(255, 117, 55, 0.03) 100%);\n            border-radius: 24px;\n            border: 1px solid rgba(255, 95, 20, 0.1);|s' "$file"
    
    # Update author credentials box gradient
    perl -i -0777 -pe 's|(\.author-credentials-box.*?background: linear-gradient[^;]+;)|.author-credentials-box {\n            margin: 120px 0;\n            padding: 60px;\n            background: linear-gradient(135deg, #1a1a1a 0%, #333333 100%);\n            border-radius: 24px;\n            color: white;\n            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);|s' "$file"
    
    # Update ROI section with modern styling
    perl -i -0777 -pe 's|(\.roi-section.*?border: 2px solid #b8956a;)|.roi-section {\n            margin: 120px 0;\n            padding: 60px;\n            background: white;\n            border: 2px solid #ff5f14;\n            border-radius: 24px;\n            box-shadow: 0 15px 50px rgba(255, 95, 20, 0.15);|s' "$file"
    
    echo "✅ Added modern hero and sections to $file"
done

echo ""
echo "Modern hero sections and styling complete!"
