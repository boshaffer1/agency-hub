#!/bin/bash

# Extract the base64 photo from v4 and add it to v5

for file in cfi-fpap-affiliate-page-v5.html wharton-wsp-affiliate-page-v5.html; do
    
    # Get the base64 photo data from v4
    v4_file="${file/-v5/-v4}"
    
    # Extract just the src value with base64 data
    photo_data=$(grep -o 'src="data:image/jpeg;base64,[^"]*"' "$v4_file")
    
    if [ -n "$photo_data" ]; then
        # Replace the placeholder image with actual base64 photo
        perl -i -pe 's|src="https://via\.placeholder\.com/80"|'"$photo_data"'|g' "$file"
        echo "✅ Added your photo to $file"
    else
        echo "⚠️  Could not find photo in $v4_file"
    fi
done

echo ""
echo "Photo embedded successfully!"
