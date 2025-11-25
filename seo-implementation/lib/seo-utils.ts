/**
 * SEO Utilities for FP&A Consulting Services
 * Optimized for financial services E-E-A-T signals
 */

export interface MetaTags {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: 'summary' | 'summary_large_image';
}

export interface ServicePageMeta {
  serviceName: string;
  benefit: string;
  credibilitySignal: string;
  specificValue: string;
  cta: string;
}

/**
 * Generate optimized meta tags for FP&A service pages
 * Formula: [Primary Keyword] | [Benefit/Outcome] | The FP&A Guy
 * Max 60 chars title, 155 chars description
 */
export function generateServiceMeta(config: ServicePageMeta): MetaTags {
  const title = `${config.serviceName} | ${config.benefit} | The FP&A Guy`;

  const description = `${config.serviceName}: ${config.specificValue}. ${config.credibilitySignal}. ${config.cta}`;

  // Ensure constraints
  const truncatedTitle = title.length > 60 ? title.substring(0, 57) + '...' : title;
  const truncatedDesc = description.length > 155 ? description.substring(0, 152) + '...' : description;

  return {
    title: truncatedTitle,
    description: truncatedDesc,
    ogType: 'website',
    twitterCard: 'summary_large_image'
  };
}

/**
 * Service page meta configurations
 * Based on FP&A SEO keyword strategy
 */
export const servicePageMetas: Record<string, ServicePageMeta> = {
  'fractional-cfo': {
    serviceName: 'Fractional CFO Services',
    benefit: 'Strategic Financial Leadership',
    credibilitySignal: '15+ years FP&A experience',
    specificValue: 'Part-time CFO expertise without full-time cost',
    cta: 'Get your free consultation today'
  },
  'financial-modeling': {
    serviceName: 'Financial Modeling Services',
    benefit: 'Custom 3-Statement Models',
    credibilitySignal: 'CFI Faculty & certified modeler',
    specificValue: 'Build investor-ready financial projections',
    cta: 'See modeling examples'
  },
  'budgeting-forecasting': {
    serviceName: 'Budgeting & Forecasting',
    benefit: 'Accurate Financial Planning',
    credibilitySignal: 'Wharton-trained FP&A expert',
    specificValue: 'Rolling forecasts and driver-based planning',
    cta: 'Schedule a planning session'
  },
  'fpa-consulting': {
    serviceName: 'FP&A Consulting Services',
    benefit: 'Transform Your Finance Function',
    credibilitySignal: 'Served 50+ companies',
    specificValue: 'Strategic business partnering for growth',
    cta: 'Start your FP&A transformation'
  },
  'strategic-planning': {
    serviceName: 'Strategic Financial Planning',
    benefit: 'Data-Driven Strategy Execution',
    credibilitySignal: 'Ex-Fortune 500 FP&A leader',
    specificValue: 'Align finance with business objectives',
    cta: 'Book strategic planning call'
  },
  'saas-fpa': {
    serviceName: 'SaaS FP&A Services',
    benefit: 'Metrics-Driven Growth Planning',
    credibilitySignal: 'SaaS finance specialist',
    specificValue: 'MRR forecasting, unit economics, burn analysis',
    cta: 'Optimize your SaaS metrics'
  },
  'startup-cfo': {
    serviceName: 'Startup CFO Services',
    benefit: 'Fundraising & Growth Support',
    credibilitySignal: 'Series A-C experience',
    specificValue: 'Build investor-ready financial infrastructure',
    cta: 'Prepare for your next round'
  },
  'cash-flow-management': {
    serviceName: 'Cash Flow Management',
    benefit: 'Ensure Financial Stability',
    credibilitySignal: 'CPA & finance expert',
    specificValue: '13-week cash flow forecasting & optimization',
    cta: 'Improve cash visibility'
  }
};

/**
 * Generate keyword-optimized meta tags for blog/guide content
 */
export function generateContentMeta(
  primaryKeyword: string,
  title: string,
  focusArea: string
): MetaTags {
  const optimizedTitle = `${title} | ${primaryKeyword} Guide | The FP&A Guy`;
  const description = `Learn ${primaryKeyword}: ${focusArea}. Expert insights from Paul Barnhurst, FP&A consultant & Wharton faculty. Download templates & examples.`;

  return {
    title: optimizedTitle.substring(0, 60),
    description: description.substring(0, 155),
    ogType: 'article',
    twitterCard: 'summary_large_image'
  };
}

/**
 * Generate meta tags for resource/tool pages
 */
export function generateToolMeta(
  toolName: string,
  toolPurpose: string,
  freeOrPaid: 'free' | 'paid' = 'free'
): MetaTags {
  const price = freeOrPaid === 'free' ? 'Free' : 'Premium';
  const title = `${price} ${toolName} | FP&A Tools | The FP&A Guy`;
  const description = `${toolName}: ${toolPurpose}. ${price} financial planning tool by Paul Barnhurst. Download Excel template now.`;

  return {
    title: title.substring(0, 60),
    description: description.substring(0, 155),
    ogType: 'website',
    twitterCard: 'summary_large_image'
  };
}

/**
 * Generate structured keywords array based on page type
 */
export function generateKeywords(
  pageType: 'service' | 'blog' | 'tool' | 'about',
  specificKeywords: string[]
): string[] {
  const baseKeywords = [
    'FP&A',
    'financial planning and analysis',
    'Paul Barnhurst',
    'The FP&A Guy'
  ];

  const typeKeywords: Record<typeof pageType, string[]> = {
    service: ['FP&A consulting', 'fractional CFO', 'financial modeling', 'business partnering'],
    blog: ['FP&A best practices', 'financial planning guide', 'budgeting tips'],
    tool: ['financial calculator', 'FP&A template', 'Excel model', 'free tool'],
    about: ['FP&A expert', 'financial consultant', 'Wharton faculty', 'CFI instructor']
  };

  return [...baseKeywords, ...typeKeywords[pageType], ...specificKeywords];
}

/**
 * Helper to create Open Graph meta tags
 */
export function generateOGTags(
  title: string,
  description: string,
  image: string,
  url: string,
  type: 'website' | 'article' = 'website'
) {
  return {
    'og:title': title,
    'og:description': description,
    'og:image': image,
    'og:url': url,
    'og:type': type,
    'og:site_name': 'The FP&A Guy'
  };
}

/**
 * Helper to create Twitter Card meta tags
 */
export function generateTwitterTags(
  title: string,
  description: string,
  image: string,
  cardType: 'summary' | 'summary_large_image' = 'summary_large_image'
) {
  return {
    'twitter:card': cardType,
    'twitter:site': '@thefpaguy',
    'twitter:creator': '@thefpaguy',
    'twitter:title': title,
    'twitter:description': description,
    'twitter:image': image
  };
}

/**
 * URL slugification for consistent routing
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/--+/g, '-')
    .trim();
}

/**
 * Generate canonical URL for page
 */
export function generateCanonicalUrl(path: string): string {
  const baseUrl = 'https://www.thefpandaguy.com';
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${baseUrl}${cleanPath}`;
}
