/**
 * Schema.org Structured Data Generators
 * Optimized for FP&A consulting E-E-A-T signals
 */

import { WithContext, Person, Organization, ProfessionalService, FAQPage, BreadcrumbList, Article, HowTo } from 'schema-dts';

/**
 * Person Schema for Paul Barnhurst
 * Critical for E-E-A-T in YMYL finance content
 */
export function generatePersonSchema(): WithContext<Person> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Paul Barnhurst',
    alternateName: 'The FP&A Guy',
    url: 'https://www.thefpandaguy.com',
    image: 'https://www.thefpandaguy.com/images/paul-barnhurst-headshot.jpg',
    jobTitle: 'FP&A Expert, Faculty Member & Consultant',
    worksFor: {
      '@type': 'Organization',
      name: 'The FP&A Guy',
      url: 'https://www.thefpandaguy.com'
    },
    alumniOf: [
      {
        '@type': 'EducationalOrganization',
        name: 'Wharton School of Business'
      }
    ],
    sameAs: [
      'https://www.linkedin.com/in/thefpandaguy/',
      'https://twitter.com/thefpaguy',
      'https://www.youtube.com/@thefpaguy'
    ],
    knowsAbout: [
      'Financial Planning and Analysis',
      'FP&A',
      'Financial Modeling',
      'Budgeting and Forecasting',
      'Scenario Analysis',
      'Strategic Finance',
      'CFO Services',
      'Corporate Finance',
      'Business Partnering',
      'Driver-Based Planning',
      'Rolling Forecasts',
      'SaaS Metrics'
    ],
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'CPA',
        credentialCategory: 'Professional Certification'
      },
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'CFI FPAP Faculty',
        credentialCategory: 'Teaching Credential'
      },
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'Wharton/Wall Street Prep Faculty',
        credentialCategory: 'Teaching Credential'
      }
    ],
    description: 'Paul Barnhurst is The FP&A Guy, a fractional CFO and FP&A consultant with 15+ years of experience. He designs courses for CFI\'s FPAP certification and serves as faculty for the Wharton & Wall Street Prep FP&A Certificate program.'
  };
}

/**
 * Organization Schema for The FP&A Guy
 */
export function generateOrganizationSchema(): WithContext<Organization> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'The FP&A Guy',
    url: 'https://www.thefpandaguy.com',
    logo: 'https://www.thefpandaguy.com/images/logo.png',
    description: 'Expert FP&A consulting, fractional CFO services, and financial modeling by Paul Barnhurst. Strategic finance leadership for growing companies.',
    founder: {
      '@type': 'Person',
      name: 'Paul Barnhurst'
    },
    sameAs: [
      'https://www.linkedin.com/company/thefpaguy/',
      'https://twitter.com/thefpaguy',
      'https://www.youtube.com/@thefpaguy'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      email: 'paul@thefpandaguy.com'
    }
  };
}

/**
 * Professional Service Schema for FP&A Services
 */
export function generateProfessionalServiceSchema(
  serviceName: string,
  description: string,
  serviceType: string,
  areaServed?: string[]
): WithContext<ProfessionalService> {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: serviceName,
    description: description,
    provider: {
      '@type': 'Person',
      name: 'Paul Barnhurst',
      jobTitle: 'FP&A Expert & Fractional CFO'
    },
    serviceType: serviceType,
    areaServed: areaServed || ['United States', 'Remote'],
    url: 'https://www.thefpandaguy.com',
    priceRange: '$$-$$$'
  };
}

/**
 * FAQ Schema Generator
 * Critical for rich snippets and increased CTR
 */
export interface FAQItem {
  question: string;
  answer: string;
}

export function generateFAQSchema(faqs: FAQItem[]): WithContext<FAQPage> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
}

/**
 * Breadcrumb Schema Generator
 * Improves SERP appearance with navigational context
 */
export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]): WithContext<BreadcrumbList> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
}

/**
 * Article Schema for Blog Posts
 */
export function generateArticleSchema(
  headline: string,
  description: string,
  datePublished: string,
  dateModified: string,
  imageUrl: string,
  keywords: string[]
): WithContext<Article> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: headline,
    description: description,
    image: imageUrl,
    datePublished: datePublished,
    dateModified: dateModified,
    author: {
      '@type': 'Person',
      name: 'Paul Barnhurst',
      url: 'https://www.thefpandaguy.com/about'
    },
    publisher: {
      '@type': 'Organization',
      name: 'The FP&A Guy',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.thefpandaguy.com/images/logo.png'
      }
    },
    keywords: keywords.join(', ')
  };
}

/**
 * HowTo Schema for Educational Guides
 */
export interface HowToStep {
  name: string;
  text: string;
  image?: string;
}

export function generateHowToSchema(
  name: string,
  description: string,
  steps: HowToStep[],
  totalTime?: string
): WithContext<HowTo> {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: name,
    description: description,
    totalTime: totalTime,
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
      image: step.image
    }))
  };
}

/**
 * Service-Specific Schema Collections
 */

export const fractionalCFOServiceSchema = generateProfessionalServiceSchema(
  'Fractional CFO Services',
  'Part-time Chief Financial Officer services for startups and growing companies. Strategic financial leadership without full-time cost.',
  'CFO Services',
  ['United States', 'Remote']
);

export const financialModelingServiceSchema = generateProfessionalServiceSchema(
  'Financial Modeling Services',
  'Custom three-statement financial models, DCF valuation models, and scenario analysis for fundraising and strategic planning.',
  'Financial Modeling',
  ['United States', 'Remote']
);

export const budgetingForecastingServiceSchema = generateProfessionalServiceSchema(
  'Budgeting & Forecasting Services',
  'Rolling forecasts, annual budgets, driver-based planning, and variance analysis for data-driven decision making.',
  'Budgeting and Forecasting',
  ['United States', 'Remote']
);

/**
 * Pre-built FAQ Collections for Common Pages
 */

export const fractionalCFOFAQs: FAQItem[] = [
  {
    question: 'What is a fractional CFO?',
    answer: 'A fractional CFO is a part-time Chief Financial Officer who provides strategic financial leadership to companies that need CFO-level expertise but don\'t require or can\'t afford a full-time executive. Services typically include financial strategy, fundraising support, board reporting, and building financial infrastructure.'
  },
  {
    question: 'How much does a fractional CFO cost?',
    answer: 'Fractional CFO services typically cost $5,000-$15,000 per month depending on scope and time commitment. This is 40-70% less expensive than a full-time CFO ($200,000-$400,000+ annually) while providing similar strategic value. Most engagements are 1-3 days per week.'
  },
  {
    question: 'When should I hire a fractional CFO?',
    answer: 'Consider a fractional CFO when you\'re: (1) preparing for fundraising (Series A+), (2) experiencing rapid growth (>50% YoY), (3) struggling with cash flow management, (4) building financial infrastructure for scale, or (5) needing board-level financial reporting. Typically companies with $2M-$50M revenue benefit most.'
  },
  {
    question: 'What\'s the difference between a fractional CFO and a bookkeeper?',
    answer: 'Bookkeepers record transactions and maintain financial records (backward-looking). Fractional CFOs provide strategic financial leadership: financial planning, fundraising, investor relations, strategic analysis, and executive decision support (forward-looking). Many companies need both - bookkeeper for day-to-day accounting, fractional CFO for strategy.'
  }
];

export const financialModelingFAQs: FAQItem[] = [
  {
    question: 'What types of financial models do you build?',
    answer: 'I build investor-ready financial models including: three-statement models (P&L, balance sheet, cash flow), DCF valuation models, SaaS metrics models (ARR, MRR, CAC, LTV), scenario analysis models, budget vs actual models, and industry-specific models for fundraising or M&A.'
  },
  {
    question: 'How long does it take to build a financial model?',
    answer: 'Timeline depends on complexity: (1) Simple three-statement model: 1-2 weeks, (2) Fundraising model with scenarios: 2-3 weeks, (3) Complex M&A or acquisition model: 3-4 weeks. Rush delivery available for time-sensitive fundraising or board presentations.'
  },
  {
    question: 'Do you provide Excel templates or custom models?',
    answer: 'Both. I offer pre-built Excel templates ($297-$497) for common modeling needs. For custom models, I build from scratch based on your specific business model, revenue drivers, and use case. Custom models include documentation, assumptions log, and training on how to update the model.'
  },
  {
    question: 'What makes a financial model investor-ready?',
    answer: 'Investor-ready models have: (1) Clear assumptions and drivers, (2) Dynamic scenarios (base, best, worst), (3) Integrated three statements, (4) Professional formatting, (5) Audit trail documentation, (6) Sensitivity analysis, (7) Output dashboards with key metrics. I ensure models meet institutional investor standards.'
  }
];

/**
 * Helper to inject schema into HTML head
 */
export function schemaToScript(schema: WithContext<any>): string {
  return `<script type="application/ld+json">
${JSON.stringify(schema, null, 2)}
</script>`;
}
