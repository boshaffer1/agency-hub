#!/bin/bash

echo "=========================================="
echo "CFI FPAP AFFILIATE PAGE - STRUCTURE"
echo "=========================================="
echo ""

# Extract main headings and key sections
grep -E "(<h1|<h2|discount-banner|cta-button|faq-section|author-credentials|roi-section)" cfi-fpap-affiliate-page-v2.html | \
sed 's/<[^>]*>//g' | \
sed 's/^[[:space:]]*//' | \
grep -v "^$" | \
head -30

echo ""
echo "=========================================="
echo "WHARTON/WSP AFFILIATE PAGE - STRUCTURE"
echo "=========================================="
echo ""

# Extract main headings and key sections
grep -E "(<h1|<h2|discount-banner|cta-button|faq-section|author-credentials|roi-section)" wharton-wsp-affiliate-page-v2.html | \
sed 's/<[^>]*>//g' | \
sed 's/^[[:space:]]*//' | \
grep -v "^$" | \
head -30

echo ""
echo "=========================================="
echo "FILE SIZES & CONTENTS"
echo "=========================================="
ls -lh *-v2.html | awk '{print $9 ": " $5}'

echo ""
echo "Schema types in CFI page:"
grep -o '"@type": "[^"]*"' cfi-fpap-affiliate-page-v2.html | sort -u

echo ""
echo "Schema types in Wharton page:"
grep -o '"@type": "[^"]*"' wharton-wsp-affiliate-page-v2.html | sort -u

echo ""
echo "=========================================="
echo "DISCOUNT CODES"
echo "=========================================="
grep -A 2 "discount-code" cfi-fpap-affiliate-page-v2.html | grep -E "FPAGUY|FPABF|FPANY" | head -3

echo ""
echo "=========================================="
echo "CTA BUTTONS"
echo "=========================================="
echo "CFI page CTAs:"
grep -o 'cta-button.*>[^<]*' cfi-fpap-affiliate-page-v2.html | sed 's/.*>//' | head -3

echo ""
echo "Wharton page CTAs:"
grep -o 'cta-button.*>[^<]*' wharton-wsp-affiliate-page-v2.html | sed 's/.*>//' | head -3

