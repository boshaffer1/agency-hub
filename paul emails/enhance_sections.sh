#!/bin/bash

# Continue enhancing all sections with beautiful design

for file in cfi-fpap-affiliate-page-v4.html wharton-wsp-affiliate-page-v4.html; do
    
    # 11. Beautiful FAQ section (Yasny dark mode inspired but with light theme)
    perl -i -0777 -pe 's|(\.faq-section \{[^}]*\})|.faq-section {\n            margin: var(--spacing-3xl) 0;\n            padding: 80px 72px;\n            background: linear-gradient(180deg, rgba(184, 149, 106, 0.02) 0%, rgba(184, 149, 106, 0.05) 100%);\n            border-radius: var(--radius-lg);\n            border: 1px solid rgba(184, 149, 106, 0.1);\n            position: relative;\n        }|s' "$file"
    
    # 12. FAQ items with better spacing
    perl -i -0777 -pe 's|(\.faq-item \{[^}]*\})|.faq-item {\n            margin-bottom: 40px;\n            padding-bottom: 40px;\n            border-bottom: 1px solid rgba(184, 149, 106, 0.1);\n        }\n        \n        .faq-item:last-child {\n            margin-bottom: 0;\n            padding-bottom: 0;\n            border-bottom: none;\n        }|s' "$file"
    
    # 13. Beautiful author credentials box (Contra-style premium card)
    perl -i -0777 -pe 's|(\.author-credentials-box \{[^}]*\})|.author-credentials-box {\n            margin: var(--spacing-3xl) 0;\n            padding: 72px;\n            background: linear-gradient(135deg, #1e3a5f 0%, #2d4a6f 100%);\n            border-radius: var(--radius-lg);\n            color: white;\n            box-shadow: 0 20px 60px rgba(30, 58, 95, 0.25),\n                        0 8px 24px rgba(30, 58, 95, 0.15);\n            position: relative;\n            overflow: hidden;\n        }\n        \n        .author-credentials-box::before {\n            content: \"\";\n            position: absolute;\n            top: -50%;\n            right: -20%;\n            width: 400px;\n            height: 400px;\n            background: radial-gradient(circle, rgba(184, 149, 106, 0.15) 0%, transparent 70%);\n            pointer-events: none;\n        }|s' "$file"
    
    # 14. ROI section with premium card design
    perl -i -0777 -pe 's|(\.roi-section \{[^}]*\})|.roi-section {\n            margin: var(--spacing-3xl) 0;\n            padding: 72px;\n            background: white;\n            border: 2px solid rgba(184, 149, 106, 0.2);\n            border-radius: var(--radius-lg);\n            box-shadow: 0 10px 40px rgba(184, 149, 106, 0.12),\n                        0 2px 8px rgba(184, 149, 106, 0.08);\n            position: relative;\n        }\n        \n        .roi-section::after {\n            content: \"\";\n            position: absolute;\n            bottom: 0;\n            left: 0;\n            right: 0;\n            height: 4px;\n            background: linear-gradient(90deg, #b8956a 0%, #9a7a56 50%, #b8956a 100%);\n            border-radius: 0 0 var(--radius-lg) var(--radius-lg);\n        }|s' "$file"
    
    # 15. Page title with beautiful typography
    perl -i -0777 -pe 's|(\.page-title \{[^}]*\})|.page-title {\n            font-size: 4em;\n            font-weight: 900;\n            font-family: '\''Plus Jakarta Sans'\'', sans-serif;\n            color: #1e3a5f;\n            line-height: 1.1;\n            letter-spacing: -0.04em;\n            margin: 24px 0;\n            max-width: 1100px;\n            position: relative;\n            z-index: 1;\n        }|s' "$file"
    
    # 16. Page subtitle refinement
    perl -i -0777 -pe 's|(\.page-subtitle \{[^}]*\})|.page-subtitle {\n            font-size: 1.35em;\n            color: #4a6fa5;\n            font-weight: 500;\n            margin-top: 20px;\n            line-height: 1.6;\n            max-width: 800px;\n        }|s' "$file"
    
    # 17. Section headings with better hierarchy
    perl -i -pe 's|h2 \{[^}]*font-size: 2\.2em;[^}]*\}|h2 {\n            font-family: '\''Plus Jakarta Sans'\'', sans-serif;\n            font-size: 2.8em;\n            font-weight: 800;\n            color: #1e3a5f;\n            letter-spacing: -0.03em;\n            line-height: 1.2;\n            margin: 60px 0 30px 0;\n        }|' "$file"
    
    # 18. Body text refinement
    perl -i -pe 's|font-size: 1em;|font-size: 1.05em;\n            line-height: 1.7;\n            color: #2d4a6f;|' "$file"
    
    # 19. Add container max-width (Skale-style)
    perl -i -0777 -pe 's|(<body>)|$1\n    <div style="max-width: 1440px; margin: 0 auto; padding: 0 64px;">|' "$file"
    perl -i -0777 -pe 's|(</body>)|    </div>\n$1|' "$file"
    
    # 20. Add subtle animations
    perl -i -0777 -pe 's|(<style>)|$1\n        /* Smooth Transitions */\n        * {\n            transition: opacity 0.3s ease, transform 0.3s ease;\n        }\n        \n        img {\n            will-change: transform;\n        }|' "$file"
    
    echo "✅ Enhanced all sections: $file"
done

echo ""
echo "All sections beautified with premium design!"
