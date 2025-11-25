#!/bin/bash

# Create Squarespace-compatible versions (no JavaScript)

for file in cfi-fpap-affiliate-page-FINAL.html wharton-wsp-affiliate-page-FINAL.html; do
    
    # Create Squarespace version
    cp "$file" "${file/-FINAL/-SQUARESPACE}"
    newfile="${file/-FINAL/-SQUARESPACE}"
    
    # 1. Remove ALL <script> tags
    perl -i -0777 -pe 's|<script[^>]*>.*?</script>||gs' "$newfile"
    
    # 2. Remove click-to-copy functionality references
    perl -i -pe 's|Click to copy|Copy this code|g' "$newfile"
    perl -i -pe 's|title="Click to copy"|title="Copy this code"|g' "$newfile"
    
    # 3. Add simple instruction text for discount codes
    perl -i -0777 -pe 's|(<div[^>]*class="discount-code"[^>]*>)|$1<span style="font-size: 0.7em; display: block; margin-bottom: 4px; opacity: 0.8;">Copy & paste at checkout:</span>|g' "$newfile"
    
    # 4. Remove any JavaScript event handlers
    perl -i -pe 's|onclick="[^"]*"||g' "$newfile"
    perl -i -pe 's|addEventListener[^;]*;||g' "$newfile"
    
    # 5. Make discount codes more prominent since they're not clickable
    perl -i -0777 -pe 's|(class="discount-code"[^>]*style="[^"]*)|$1; user-select: all; cursor: text|g' "$newfile"
    
    # 6. Remove any remaining script references
    perl -i -0777 -pe 's|<noscript>.*?</noscript>||gs' "$newfile"
    
    echo "✅ Created Squarespace-clean version: $newfile"
done

echo ""
echo "Squarespace-compatible versions created!"
echo "These have:"
echo "  ✅ No JavaScript (no 'Script Disabled' warnings)"
echo "  ✅ Pure HTML/CSS only"
echo "  ✅ All content and styling intact"
echo "  ✅ Ready to paste into Squarespace code block"
