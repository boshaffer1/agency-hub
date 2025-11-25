# Correction Instructions: Fix All Fabrications

**Date:** 2025-11-20
**Purpose:** Step-by-step instructions to correct all fabricated information

---

## Quick Fix Commands

### 1. Fix "16 weeks" → "8 weeks"

```bash
# Find all files with "16 weeks"
grep -r "16 weeks" --include="*.html" --include="*.md" /Users/boshaffer/bo/agency-hub

# Replace in all HTML files
find /Users/boshaffer/bo/agency-hub -name "*.html" -type f -exec sed -i '' 's/16 weeks/8 weeks/g' {} \;

# Replace in all MD files
find /Users/boshaffer/bo/agency-hub -name "*.md" -type f -exec sed -i '' 's/16 weeks/8 weeks/g' {} \;
```

---

### 2. Fix "20-40 hrs" → "50-100 hrs" (CFI FPAP)

```bash
# Context-aware replacement needed - only for CFI FPAP rows
# Manual review required - search for:
grep -r "20-40" --include="*.html" --include="*.md" /Users/boshaffer/bo/agency-hub | grep -i "cfi\|fpap"
```

**Files to manually edit:**
- `certifications-hub-page-FINAL.html` (line 653, 653)
- `certifications-hub-page-BEAUTIFUL.html` (line 810)
- `certifications-hub-page-MODERN.html` (line 875)
- `certifications-hub-page-optimized.html` (line 919)
- `certifications-squarespace-HTML.html` (line 119)

**Change:** `20-40 hrs` → `50-100 hrs`

---

### 3. Remove "FP&A Board" References

```bash
# Find all occurrences
grep -rn "FP&A Board" --include="*.html" /Users/boshaffer/bo/agency-hub
```

**Files found:**
- `paul emails/wharton-wsp-affiliate-page-FINAL.html:840`
- `paul emails/wharton-wsp-affiliate-page-SQUARESPACE.html:728`
- `paul emails/cfi-fpap-affiliate-page-FINAL.html:984`
- `paul emails/cfi-fpap-affiliate-page-SQUARESPACE.html:875`

**Action:** Delete entire table row containing "FP&A Board" in each file

---

### 4. Remove "20-30 peers" References

```bash
# Find occurrences
grep -rn "20-30 peers" --include="*.html" /Users/boshaffer/bo/agency-hub
```

**Files found:**
- `paul emails/wharton-wsp-affiliate-page-FINAL.html:790`
- `paul emails/wharton-wsp-affiliate-page-SQUARESPACE.html:678`

**Change:**
`<li><strong>Format:</strong> Cohort-based with 20-30 peers</li>`
→
`<li><strong>Format:</strong> Cohort-based learning</li>`

---

### 5. Remove "Capstone Project" References

```bash
# Find all capstone mentions
grep -rn "capstone\|Capstone" --include="*.html" --include="*.md" /Users/boshaffer/bo/agency-hub
```

**Action:** Remove or replace all capstone references:
- Remove "Capstone project" bullet points
- Remove "Capstone Project" sections
- Remove "WEEK 16: Capstone Presentation" from curriculum outlines
- Replace with generic "Final assessments" if needed

---

## Files Requiring Manual Review & Correction

### Priority 1: Wharton Affiliate Pages (8 files)

**All need these corrections:**
1. 16 weeks → 8 weeks
2. Remove capstone project references
3. Remove "20-30 peers"
4. Remove "FP&A Board" from comparison tables
5. Update credential claim to "Wharton Online Certificate + 65 CPE credits"

**Files:**
1. `paul emails/wharton-wsp-affiliate-page.html`
2. `paul emails/wharton-wsp-affiliate-page-v2.html`
3. `paul emails/wharton-wsp-affiliate-page-v3.html`
4. `paul emails/wharton-wsp-affiliate-page-v4.html`
5. `paul emails/wharton-wsp-affiliate-page-v5.html`
6. `paul emails/wharton-wsp-affiliate-page-v5-cro.html`
7. `paul emails/wharton-wsp-affiliate-page-FINAL.html` ⚠️ **HIGHEST PRIORITY**
8. `paul emails/wharton-wsp-affiliate-page-SQUARESPACE.html` ⚠️ **HIGHEST PRIORITY**

---

### Priority 2: Certifications Hub Pages (6 files)

**All need these corrections:**
1. 16 weeks → 8 weeks (Wharton)
2. 20-40 hrs → 50-100 hrs (CFI FPAP)
3. Update FAQ answers with correct duration
4. Review ROI/salary claims (if no source, soften or remove)

**Files:**
1. `certifications-hub-page-FINAL.html` ⚠️ **HIGH PRIORITY**
2. `certifications-hub-page-optimized.html`
3. `certifications-hub-page-BEAUTIFUL.html`
4. `certifications-hub-page-MODERN.html`
5. `certifications-squarespace-HTML.html`
6. `certifications-squarespace-CODE-INJECTION.html`

**Additional for BEAUTIFUL.html:**
- Line 724: Review "CFI FPAP Faculty – Designed 2 courses" (verify with Paul)
- Line 725: Review "Wharton/WSP Faculty" (verify with Paul)

---

### Priority 3: Strategy & Documentation Files

**Need review and correction:**
1. `FPA_CERTIFICATIONS_PAGE_OPTIMIZATION.md`
2. `CERTIFICATIONS_SECTION_STRATEGY.md`
3. `CERTIFICATIONS_HUB_IMPLEMENTATION_GUIDE.md`
4. `CERTIFICATIONS_PAGE_IMPLEMENTATION_PLAN.md`
5. `paul emails/SEO_AUDIT_CRITICAL_FIXES.md`
6. `paul emails/CONVERSION_OPTIMIZATION_FRAMEWORK.md`
7. `paul emails/VISUAL_PAGE_PREVIEW.md`

**Changes needed:**
- Update all Wharton references: 16 weeks → 8 weeks
- Update all CFI FPAP references: 20-40 hrs → 50-100 hrs
- Remove capstone project mentions

---

## Specific Corrections by Section

### Wharton Program Details

**OLD (Incorrect):**
```
Duration: 16 weeks (6-10 hrs/week, cohort-based)
Format: Cohort-based with 20-30 peers
Capstone: Final project presentation
Certificate: FP&A Board Certification
```

**NEW (Verified):**
```
Duration: 8 weeks (8-10 hrs/week)
Format: Self-paced online with weekly office hours
Completion: Final assessments and coursework
Certificate: Wharton Online Certificate + 65 CPE credits
```

---

### CFI FPAP Details

**OLD (Incorrect):**
```
Duration: 20-40 hrs (Self-paced)
Cost: $497-997
```

**NEW (Verified):**
```
Duration: 50-100 hrs (Self-paced, 4 months average)
Cost: $347.90/year ($174 with student discount)
```

---

### FAQ Corrections

**OLD FAQ Answer:**
> "Timeframes vary: CFI FPAP (20-40 hours self-paced), Wharton/WSP (16 weeks cohort), AFP FPAC (3-6 months self-paced), FMI (40-80 hours), FMVA (80-120 hours)."

**NEW FAQ Answer:**
> "Timeframes vary: CFI FPAP (50-100 hours self-paced over 4 months), Wharton/WSP (8 weeks, 8-10 hrs/week), AFP FPAC (3-6 months self-paced), FMI (preparation time varies), FMVA (self-paced)."

---

## Claims Needing Verification (Ask Paul)

### Discount Codes
- [ ] **THEFPAGUY300** - Is this a real Wharton/WSP affiliate code?
- [ ] **FPAGUY30** - Is this a real CFI affiliate code?
- [ ] **"Only 40 codes left this month"** - Is this claim accurate?

**If codes don't exist:** Remove all discount code mentions

---

### Paul's Credentials
- [ ] **"CFI FPAP Faculty – Designed 2 courses"** - True or false?
- [ ] **"Wharton/WSP Teaching Faculty"** - True or false?
- [ ] **"CFI FPAP Course Designer & Faculty"** - True or false?

**If false:** Remove from all pages

---

### ROI/Salary Statistics
- [ ] **"10-20% salary increase within 6-12 months"** - Source?
- [ ] **"2-4x higher interview success rates"** - Source?
- [ ] **"6-12 month payback period"** - Source?
- [ ] **"Most see 10-20% salary increases"** - Source?

**If no source:** Replace with softer language like:
- "Many professionals report salary increases after certification"
- "Certifications may improve interview success rates"
- "Investment often pays back within the first year"

---

## After Corrections

### Testing Checklist
- [ ] Search for "16 weeks" - should only appear for non-Wharton programs
- [ ] Search for "capstone" - should return zero results for Wharton pages
- [ ] Search for "FP&A Board" - should return zero results
- [ ] Search for "20-30 peers" - should return zero results
- [ ] Search for "20-40" in context of CFI FPAP - should be "50-100"
- [ ] Verify all discount codes with Paul
- [ ] Verify all credential claims about Paul
- [ ] Source or soften all ROI/salary statistics

---

## Bulk Find-and-Replace Commands (USE WITH CAUTION)

```bash
# Navigate to project directory
cd /Users/boshaffer/bo/agency-hub

# 1. Fix "16 weeks" globally
find . -name "*.html" -o -name "*.md" | xargs sed -i '' 's/16 weeks/8 weeks/g'

# 2. Fix "16-week" globally (hyphenated version)
find . -name "*.html" -o -name "*.md" | xargs sed -i '' 's/16-week/8-week/g'

# 3. Create backup before mass changes
tar -czf backup-before-corrections-$(date +%Y%m%d).tar.gz *.html *.md paul\ emails/ pseo-data-templates/

# 4. Verify changes
git diff
```

---

## Recommended Workflow

1. **Create backup** of all files first
2. **Run automated find-and-replace** for "16 weeks" → "8 weeks"
3. **Manually edit** Priority 1 files (Wharton affiliate pages)
4. **Manually edit** Priority 2 files (Certifications hub pages)
5. **Verify with Paul** all discount codes and credentials
6. **Update or remove** unverified ROI/salary claims
7. **Test** using checklist above
8. **Review** git diff to ensure no unintended changes
9. **Commit** corrections with clear message

---

**Status:** Ready for execution
**Est. Time:** 2-3 hours for complete correction
**Priority:** Start with wharton-wsp-affiliate-page-FINAL.html and certifications-hub-page-FINAL.html
