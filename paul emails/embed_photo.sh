#!/bin/bash

# Read base64 photo
PHOTO_BASE64=$(cat paul-headshot-base64.txt | tr -d '\n')

# Create data URI
DATA_URI="data:image/jpeg;base64,$PHOTO_BASE64"

# Replace in both files
for file in cfi-fpap-affiliate-page-v2.html wharton-wsp-affiliate-page-v2.html; do
    sed -i '' "s|paul-barnhurst-headshot.jpg|$DATA_URI|g" "$file"
    echo "Updated $file with embedded photo"
done
