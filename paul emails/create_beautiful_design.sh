#!/bin/bash

# Create beautiful design inspired by Skale, Yasny, and Contra
# Using gold/navy brand colors with modern aesthetic

for file in cfi-fpap-affiliate-page-v3.html wharton-wsp-affiliate-page-v3.html; do
    
    # Create v4 - Beautiful modern design
    cp "$file" "${file/-v3/-v4}"
    newfile="${file/-v3/-v4}"
    
    # 1. Add Inter AND Plus Jakarta Sans fonts (Yasny uses both)
    perl -i -0777 -pe 's|(@import url\(.*?Inter.*?\);)|$1\n        @import url('\''https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap'\'');|' "$newfile"
    
    # 2. Update body with refined typography system
    perl -i -0777 -pe 's|(body \{[^}]*font-family:[^;]+;)|body {\n            font-family: '\''Inter'\'', -apple-system, BlinkMacSystemFont, '\''Segoe UI'\'', sans-serif;\n            font-size: 16px;\n            line-height: 1.6;\n            color: #1e3a5f;\n            background: #fafafa;|s' "$newfile"
    
    # 3. Add comprehensive spacing system (Skale-inspired)
    perl -i -0777 -pe 's|(<style>)|$1\n        /* Spacing System */\n        :root {\n            --spacing-xs: 10px;\n            --spacing-sm: 20px;\n            --spacing-md: 40px;\n            --spacing-lg: 60px;\n            --spacing-xl: 80px;\n            --spacing-2xl: 100px;\n            --spacing-3xl: 120px;\n            --radius-sm: 12px;\n            --radius-md: 20px;\n            --radius-lg: 32px;\n            --radius-full: 100px;\n        }|' "$newfile"
    
    # 4. Redesign hero section with full visual treatment
    perl -i -0777 -pe 's|(\.hero-section \{[^}]*\})|.hero-section {\n            background: linear-gradient(180deg, rgba(184, 149, 106, 0.04) 0%, rgba(255, 255, 255, 0) 100%);\n            padding: 100px 0 80px 0;\n            margin-bottom: 0;\n            position: relative;\n        }\n        \n        .hero-section::before {\n            content: \"\";\n            position: absolute;\n            top: 0;\n            left: 50%;\n            transform: translateX(-50%);\n            width: 100%;\n            max-width: 1440px;\n            height: 100%;\n            background: radial-gradient(ellipse at top, rgba(184, 149, 106, 0.12) 0%, transparent 60%);\n            pointer-events: none;\n            z-index: 0;\n        }|s' "$newfile"
    
    # 5. Modernize headings with beautiful typography
    perl -i -pe 's|h1 \{|h1 {\n            font-family: '\''Plus Jakarta Sans'\'', '\''Inter'\'', sans-serif;|' "$newfile"
    perl -i -pe 's|h2 \{|h2 {\n            font-family: '\''Plus Jakarta Sans'\'', '\''Inter'\'', sans-serif;|' "$newfile"
    
    # 6. Create beautiful badge design
    perl -i -0777 -pe 's|(\.badge \{[^}]*\})|.badge {\n            display: inline-block;\n            background: linear-gradient(135deg, rgba(184, 149, 106, 0.15) 0%, rgba(184, 149, 106, 0.08) 100%);\n            border: 1.5px solid rgba(184, 149, 106, 0.3);\n            color: #b8956a;\n            padding: 10px 28px;\n            border-radius: var(--radius-full);\n            font-size: 0.8em;\n            font-weight: 700;\n            letter-spacing: 1px;\n            text-transform: uppercase;\n            margin-bottom: 24px;\n            backdrop-filter: blur(10px);\n        }|s' "$newfile"
    
    # 7. Refined CTA buttons (Contra-inspired with gold)
    perl -i -0777 -pe 's|(\.cta-button \{[^}]*\})|.cta-button {\n            display: inline-block;\n            background: linear-gradient(135deg, #b8956a 0%, #9a7a56 100%);\n            color: white;\n            padding: 18px 48px;\n            text-decoration: none;\n            border-radius: var(--radius-full);\n            font-weight: 700;\n            font-size: 1.05em;\n            text-align: center;\n            transition: all 0.4s cubic-bezier(0.44, 0, 0.56, 1);\n            box-shadow: 0 8px 24px rgba(184, 149, 106, 0.25),\n                        0 2px 6px rgba(184, 149, 106, 0.15);\n            border: none;\n            cursor: pointer;\n            position: relative;\n            overflow: hidden;\n        }\n        \n        .cta-button::before {\n            content: \"\";\n            position: absolute;\n            top: 0;\n            left: -100%;\n            width: 100%;\n            height: 100%;\n            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);\n            transition: left 0.5s;\n        }\n        \n        .cta-button:hover::before {\n            left: 100%;\n        }|s' "$newfile"
    
    # 8. Enhanced hover with subtle lift
    perl -i -0777 -pe 's|(\.cta-button:hover \{[^}]*\})|.cta-button:hover {\n            transform: translateY(-3px);\n            box-shadow: 0 12px 32px rgba(184, 149, 106, 0.3),\n                        0 4px 12px rgba(184, 149, 106, 0.2);\n            background: linear-gradient(135deg, #c9a876 0%, #b8956a 100%);\n        }|s' "$newfile"
    
    # 9. Beautiful content cards (Skale case study style)
    perl -i -0777 -pe 's|(\.discount-banner \{[^}]*\})|.discount-banner {\n            background: white;\n            border: 1px solid rgba(184, 149, 106, 0.15);\n            border-left: 4px solid #b8956a;\n            padding: 56px 64px;\n            border-radius: var(--radius-lg);\n            margin: var(--spacing-3xl) 0;\n            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.04),\n                        0 1px 3px rgba(0, 0, 0, 0.02);\n            position: relative;\n        }|s' "$newfile"
    
    # 10. Refined discount code boxes
    perl -i -0777 -pe 's|(\.discount-code \{[^}]*\})|.discount-code {\n            background: linear-gradient(135deg, #b8956a 0%, #9a7a56 100%);\n            color: white;\n            padding: 16px 36px;\n            border-radius: var(--radius-full);\n            font-size: 1.4em;\n            font-weight: 800;\n            font-family: '\''Plus Jakarta Sans'\'', sans-serif;\n            letter-spacing: 0.5px;\n            display: inline-block;\n            margin: 12px 0;\n            cursor: pointer;\n            transition: all 0.3s cubic-bezier(0.44, 0, 0.56, 1);\n            box-shadow: 0 6px 20px rgba(184, 149, 106, 0.3);\n        }|s' "$newfile"
    
    echo "✅ Created beautiful design: $newfile"
done

echo ""
echo "Beautiful modern design created (v4)!"
