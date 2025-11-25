#!/bin/bash

for file in cfi-fpap-affiliate-page-v2.html wharton-wsp-affiliate-page-v2.html; do
    # Remove placeholder note
    perl -i -pe 's|<p style="margin-bottom: 20px; font-size: 0\.95em; color: #6c757d;">.*?Note:.*?uploaded image URL.*?</p>||gs' "$file"
    
    # Simplify discount banner - keep only primary code prominent
    perl -i -0777 -pe 's|(<div class="discount-banner">.*?<h2>)🎓 Exclusive Discount Codes: Save Up to 40%</h2>\s*<p style="font-size: 1\.2em; margin: 10px 0;">Choose your best deal:</p>\s*(<div class="discount-code">FPAGUY30</div>)\s*<p style="font-size: 0\.95em;">30% OFF - Valid Anytime</p>\s*<div class="discount-code" style="margin-top: 20px;">FPABF</div>\s*<p style="font-size: 0\.95em;">40% OFF - Black Friday \(November\)</p>\s*<div class="discount-code" style="margin-top: 20px;">FPANY</div>\s*<p style="font-size: 0\.95em;">40% OFF - Year-End Sale \(December-January\)</p>|$1🎓 Save 30-40% with Exclusive Discount Codes</h2>\n            <p style="font-size: 1.3em; margin: 15px 0;">Use code for instant savings:</p>\n            $2\n            <p style="font-size: 1em; margin-top: 15px;"><strong>30% OFF Anytime</strong></p>\n            <p style="font-size: 0.9em; margin-top: 15px; opacity: 0.9;">🔥 Special codes: <strong>FPABF</strong> (40% off Black Friday) • <strong>FPANY</strong> (40% off Year-End Sale)</p>|gs' "$file"
    
    echo "CRO fixes applied to $file"
done

# Add click-to-copy JavaScript before </body>
for file in cfi-fpap-affiliate-page-v2.html wharton-wsp-affiliate-page-v2.html; do
    perl -i -pe 'if (m|</body>|) {
        $_ = qq{
    <script>
    // Click-to-copy discount codes
    document.querySelectorAll(".discount-code").forEach(function(el) {
        el.style.cursor = "pointer";
        el.title = "Click to copy";
        el.addEventListener("click", function() {
            var code = this.innerText;
            navigator.clipboard.writeText(code).then(function() {
                var originalBg = el.style.backgroundColor;
                el.style.backgroundColor = "#b8956a";
                el.style.color = "white";
                el.innerText = "✓ Copied!";
                setTimeout(function() {
                    el.style.backgroundColor = originalBg;
                    el.style.color = "#1e3a5f";
                    el.innerText = code;
                }, 1500);
            });
        });
    });
    </script>
$_}
    }' "$file"
done

echo "All CRO optimizations complete!"
