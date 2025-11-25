# Programmatic SEO Data Templates

**Project:** The FP&A Guy pSEO Strategy
**Created:** 2025-11-20

This directory contains ready-to-use data templates for launching programmatic SEO pages.

---

## 📁 Files Included

### 1. **industries.csv** (40 industries)
Complete industry data for FP&A consulting pages.

**Fields:**
- `industry_slug`: URL-friendly identifier (e.g., "saas", "fintech")
- `industry_name`: Display name (e.g., "SaaS", "Fintech")
- `description`: Brief industry description
- `top_kpis`: Key metrics for this industry (comma-separated)
- `common_challenges`: Financial challenges specific to industry
- `regulatory_notes`: Compliance and regulatory considerations
- `typical_client_size`: Revenue or funding range
- `funding_stages`: Common funding stages for this industry

**Industries Included:** SaaS, Fintech, Healthcare, E-commerce, Marketplace, Consumer Apps, B2B Software, Hardware, Real Estate Tech, EdTech, Biotech, Manufacturing, Food & Beverage, Hospitality, Logistics, Energy, Professional Services, Media & Entertainment, Insurance, Telecommunications, Automotive, Agriculture, Construction, Retail, Nonprofit, Government Contractor, Cannabis, Sports & Fitness, Travel & Tourism, Gaming, Fashion & Apparel, Aerospace & Defense, Chemicals, Pharmaceuticals, Consumer Goods, Legal Services, Financial Services, Cybersecurity, Artificial Intelligence, Crypto & Blockchain

**Usage:**
```javascript
// Load industry data
const industries = loadCSV('industries.csv')

// Generate page for SaaS industry
const saasData = industries.find(i => i.industry_slug === 'saas')
// Use saasData.top_kpis, saasData.common_challenges, etc. in page generation
```

---

### 2. **locations-tier1.csv** (50 cities)
Top 50 US metro areas with detailed economic and startup ecosystem data.

**Fields:**
- `city_slug`: URL-friendly identifier (e.g., "san-francisco")
- `city_name`: Display name (e.g., "San Francisco")
- `state_code`: Two-letter state code (e.g., "CA")
- `state_name`: Full state name (e.g., "California")
- `population`: City population
- `metro_population`: Metro area population
- `business_count`: Number of businesses in metro
- `top_industries`: Key industries (comma-separated)
- `startup_ecosystem`: Description of startup environment
- `data_tier`: Quality tier (1 = most detailed)
- `median_income`: Median household income
- `cost_of_living_index`: Cost index (100 = national average)

**Cities Included:** San Francisco, New York, Los Angeles, Austin, Seattle, Boston, Denver, Atlanta, Miami, Chicago, Portland, San Diego, Washington DC, Philadelphia, Phoenix, Dallas, Houston, Minneapolis, Nashville, Salt Lake City, Raleigh, Columbus, Charlotte, Detroit, San Jose, Pittsburgh, Baltimore, Las Vegas, Indianapolis, Milwaukee, Kansas City, Tampa, New Orleans, Cincinnati, Cleveland, Sacramento, Omaha, Louisville, Memphis, Richmond, Oklahoma City, St. Louis, Jacksonville, Tucson, Fresno, Albuquerque, Buffalo, El Paso, Boise, Madison

**Note:** For remaining 250+ cities, use basic template with population and state only.

**Usage:**
```javascript
// Load location data
const locations = loadCSV('locations-tier1.csv')

// Generate page for San Francisco
const sfData = locations.find(l => l.city_slug === 'san-francisco')
// Use sfData.top_industries, sfData.startup_ecosystem, etc.
```

---

### 3. **tools.csv** (20 FP&A tools)
Financial planning and analysis software comparison data.

**Fields:**
- `tool_slug`: URL-friendly identifier (e.g., "excel")
- `tool_name`: Display name (e.g., "Microsoft Excel")
- `category`: Tool category (Spreadsheet, EPM Platform, BI Platform, etc.)
- `vendor`: Company name
- `pricing_start`: Entry-level pricing
- `pricing_enterprise`: Enterprise pricing
- `key_features`: Main features (comma-separated)
- `g2_rating`: G2 rating out of 5
- `best_for`: Ideal use cases
- `learning_curve`: Low, Medium, High
- `strengths`: Key advantages
- `weaknesses`: Key limitations

**Tools Included:**
- **Spreadsheets:** Excel, Google Sheets
- **EPM Platforms:** Adaptive Insights, Anaplan, Planful, Vena, Prophix
- **FP&A Software:** Datarails, Jirav, Cube, Pigment, Boards
- **BI Tools:** Tableau, Power BI, Looker, Domo, Sisense
- **Accounting:** QuickBooks, Xero, NetSuite

**Usage:**
```javascript
// Generate comparison page: Excel vs Google Sheets
const excel = tools.find(t => t.tool_slug === 'excel')
const sheets = tools.find(t => t.tool_slug === 'google-sheets')

// Create side-by-side comparison table
const comparison = {
  pricing: { excel: excel.pricing_start, sheets: sheets.pricing_start },
  strengths: { excel: excel.strengths, sheets: sheets.strengths },
  // etc.
}
```

---

### 4. **glossary-top50.csv** (50 FP&A terms)
Core financial planning and analysis definitions with formulas and examples.

**Fields:**
- `term_slug`: URL-friendly identifier (e.g., "variance-analysis")
- `term_name`: Display name (e.g., "Variance Analysis")
- `category`: Term category (Metrics, Analysis, Forecasting, Accounting, etc.)
- `difficulty`: Beginner, Intermediate, Advanced
- `definition_short`: Brief 1-sentence definition
- `definition_long`: Comprehensive explanation
- `formula`: Mathematical formula (if applicable)
- `example_scenario`: Real-world example with numbers
- `related_terms`: Related glossary terms (comma-separated slugs)
- `search_volume_monthly`: Estimated monthly search volume

**Terms Included:** Variance Analysis, Rolling Forecast, Cash Conversion Cycle, ARR, MRR, CAC, LTV, Burn Rate, Runway, EBITDA, Gross Margin, Operating Margin, Net Retention, Churn Rate, Working Capital, DSO, Three Statement Model, Scenario Planning, Sensitivity Analysis, Budget, Forecast, KPI, Contribution Margin, Break-Even Analysis, Fixed Costs, Variable Costs, Unit Economics, Rule of 40, Magic Number, CAC Payback Period, Accounts Receivable, Accounts Payable, Depreciation, Amortization, Cash Flow Statement, Free Cash Flow, Revenue Recognition, Deferred Revenue, Cohort Analysis, Customer Lifetime, Revenue Growth Rate, YoY Growth, Balance Sheet, Income Statement, Financial Model, Capital Expenditure, Operating Expense

**Usage:**
```javascript
// Generate glossary page for "ARR"
const arr = glossary.find(t => t.term_slug === 'arr')

// Page content includes:
// - arr.definition_short (meta description)
// - arr.definition_long (main content)
// - arr.formula (formula section)
// - arr.example_scenario (example section)
// - Links to arr.related_terms (internal linking)
```

---

## 🚀 Getting Started

### Step 1: Review the Data
1. Open each CSV in Google Sheets or Excel
2. Review for accuracy and completeness
3. Add any missing industries, cities, tools, or terms relevant to your business

### Step 2: Customize for Your Business
- **Industries CSV:** Add specific insights from Paul Barnhurst's experience
- **Locations CSV:** For top 20 cities, add specific case studies or client examples
- **Tools CSV:** Update pricing (quarterly) and add Paul's expert opinions
- **Glossary CSV:** Enhance definitions with unique insights

### Step 3: Import to Database
```javascript
// Example: Import to Supabase
const { createClient } = require('@supabase/supabase-js')
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)

// Import industries
const industries = loadCSV('industries.csv')
await supabase.from('industries').insert(industries)

// Import locations
const locations = loadCSV('locations-tier1.csv')
await supabase.from('locations').insert(locations)

// etc.
```

### Step 4: Generate Pages
Use these templates with the content generation script:

```javascript
const industries = await supabase.from('industries').select('*')

for (const industry of industries.data) {
  const content = await generateContent({
    template: 'industry-fpa-page',
    data: industry,
    instructions: `
      Create expert content for ${industry.industry_name} FP&A consulting.
      Focus on these KPIs: ${industry.top_kpis}
      Address these challenges: ${industry.common_challenges}
    `
  })

  // Write page to filesystem
  writePage(`/services/${industry.industry_slug}-fpa-consulting`, content)
}
```

---

## 📊 Data Quality Tiers

### Tier 1: High Detail (50 locations, 40 industries)
- Comprehensive data
- Unique insights
- Expert review: 100%
- Update frequency: Quarterly

### Tier 2: Medium Detail (150 locations, 50 tools)
- Standard data
- AI-generated with data overlay
- Expert review: 25%
- Update frequency: Semi-annual

### Tier 3: Basic Detail (100+ locations, 150 glossary terms)
- Basic data only
- Fully automated
- Expert review: 10% (spot checks)
- Update frequency: Annual

---

## 🔄 Update Schedule

### Quarterly Updates:
- Tool pricing (pricing changes frequently)
- Top 20 city startup ecosystem data
- Industry KPI benchmarks

### Annual Updates:
- Population and demographic data
- New industries or cities
- New tools or glossary terms
- Regulatory changes

### Continuous Updates:
- Search volume estimates
- G2 ratings
- Competitive landscape

---

## 📈 Expansion Ideas

### Add More Data Types:
1. **Company Stage Data** (8 stages: Pre-seed, Seed, Series A-D, Growth, IPO)
   - Typical challenges per stage
   - Financial metrics benchmarks
   - Investor expectations

2. **Problem-Solution Data** (60 problems)
   - Common FP&A problems
   - Step-by-step solutions
   - Tools and templates needed

3. **Case Study Data** (20+ case studies)
   - Client industry and size
   - Challenge, solution, results
   - Metrics and testimonials

4. **Resource Data** (templates, calculators, guides)
   - Financial model templates
   - ROI calculators
   - Downloadable guides

---

## 🔍 SEO Optimization

### Target Keywords Per Template:

**Industry Pages:**
- Primary: "{Industry} FP&A consulting"
- Secondary: "{Industry} financial planning", "{Industry} CFO services"
- Long-tail: "FP&A for {Industry} companies", "{Industry} financial modeling"

**Location Pages:**
- Primary: "Fractional CFO {City, State}"
- Secondary: "CFO services {City}", "Part-time CFO {City}"
- Long-tail: "Fractional CFO for startups {City}", "{City} financial consultant"

**Tool Comparison Pages:**
- Primary: "{Tool A} vs {Tool B} for FP&A"
- Secondary: "{Tool A} {Tool B} comparison", "Best FP&A tool"
- Long-tail: "Should I use {Tool A} or {Tool B} for financial planning"

**Glossary Pages:**
- Primary: "{Term} definition"
- Secondary: "What is {Term}", "{Term} formula", "{Term} example"
- Long-tail: "How to calculate {Term}", "{Term} best practices for FP&A"

---

## 💾 Data Sources

### Current Data Sources:
- **Industries:** Manual research + expert knowledge
- **Locations:** US Census Bureau, city economic development sites
- **Tools:** Vendor websites, G2 reviews, expert analysis
- **Glossary:** Financial textbooks + expert definitions

### Recommended Future Data Sources:
- **Crunchbase API:** For startup ecosystem data (top 50 cities)
- **Bureau of Labor Statistics:** For employment and industry data
- **Financial Modeling Prep API:** For real-time financial metrics
- **G2 API:** For automated tool ratings and reviews

---

## ✅ Quality Control

### Before Using Data:
1. **Accuracy Check:** Verify all formulas and calculations
2. **Completeness:** Ensure all required fields are populated
3. **Uniqueness:** No duplicate entries (check slugs)
4. **Expert Review:** Paul reviews sample of each data type
5. **Schema Validation:** Ensure data structure matches templates

### During Page Generation:
1. **Content Review:** 10-100% expert review (varies by tier)
2. **Copyscape Check:** >90% unique content
3. **Schema Validation:** All schema markup validates
4. **Link Check:** All internal links work
5. **Speed Test:** Pages load in <3 seconds

---

## 🛠️ Technical Requirements

### Database Schema:

```sql
-- Industries table
CREATE TABLE industries (
  id SERIAL PRIMARY KEY,
  industry_slug TEXT UNIQUE NOT NULL,
  industry_name TEXT NOT NULL,
  description TEXT,
  top_kpis TEXT,
  common_challenges TEXT,
  regulatory_notes TEXT,
  typical_client_size TEXT,
  funding_stages TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Locations table
CREATE TABLE locations (
  id SERIAL PRIMARY KEY,
  city_slug TEXT UNIQUE NOT NULL,
  city_name TEXT NOT NULL,
  state_code TEXT NOT NULL,
  state_name TEXT NOT NULL,
  population INTEGER,
  metro_population INTEGER,
  business_count INTEGER,
  top_industries TEXT,
  startup_ecosystem TEXT,
  data_tier INTEGER,
  median_income INTEGER,
  cost_of_living_index INTEGER,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Tools table
CREATE TABLE tools (
  id SERIAL PRIMARY KEY,
  tool_slug TEXT UNIQUE NOT NULL,
  tool_name TEXT NOT NULL,
  category TEXT,
  vendor TEXT,
  pricing_start TEXT,
  pricing_enterprise TEXT,
  key_features TEXT,
  g2_rating DECIMAL(2,1),
  best_for TEXT,
  learning_curve TEXT,
  strengths TEXT,
  weaknesses TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Glossary table
CREATE TABLE glossary (
  id SERIAL PRIMARY KEY,
  term_slug TEXT UNIQUE NOT NULL,
  term_name TEXT NOT NULL,
  category TEXT,
  difficulty TEXT,
  definition_short TEXT,
  definition_long TEXT,
  formula TEXT,
  example_scenario TEXT,
  related_terms TEXT,
  search_volume_monthly INTEGER,
  created_at TIMESTAMP DEFAULT NOW()
);
```

---

## 📚 Related Documents

- **Full Strategy:** `/PROGRAMMATIC_SEO_STRATEGY_FPA_GUY.md`
- **Quick Start Guide:** `/PSEO_QUICK_START_CHECKLIST.md`
- **SEO Audit:** `/TECHNICAL_SEO_AUDIT_ULTRA_DETAILED.md`
- **Competitor Analysis:** `/COMPETITOR_ANALYSIS_STRATEGIC_ROADMAP.md`

---

## 🎯 Success Metrics

### Data Quality Goals:
- ✅ 100% of Tier 1 data expert-reviewed
- ✅ 90%+ unique content generated from templates
- ✅ <5% error rate in formulas and calculations
- ✅ Quarterly updates for high-priority data

### Page Performance Goals:
- ✅ 85%+ indexation rate by Month 3
- ✅ 50,000+ monthly organic visits by Month 12
- ✅ 8-12% conversion rate on programmatic pages
- ✅ $400K+ annual revenue from pSEO pages

---

**Questions?** Review the full strategy document or contact: Paul Barnhurst, The FP&A Guy

---

**Last Updated:** 2025-11-20
**Version:** 1.0
**Status:** Ready for implementation
