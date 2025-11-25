/**
 * Internal Linking Strategy for FP&A Content
 * Hub-and-spoke architecture connecting services, guides, and resources
 */

export interface InternalLink {
  url: string;
  anchor: string;
  context: string;
  priority: 'high' | 'medium' | 'low';
}

export interface ContentHubConfig {
  pillarPage: string;
  subtopics: string[];
  relatedServices: string[];
}

/**
 * Content Hub Structure (Pillar & Spoke Model)
 */
export const contentHubs: Record<string, ContentHubConfig> = {
  // Financial Planning Hub
  'financial-planning': {
    pillarPage: '/guides/financial-planning-analysis-guide',
    subtopics: [
      '/guides/how-to-build-financial-model',
      '/guides/budgeting-best-practices',
      '/guides/forecasting-techniques',
      '/guides/scenario-planning-guide'
    ],
    relatedServices: [
      '/services/fpa-consulting',
      '/services/strategic-planning',
      '/services/financial-modeling'
    ]
  },

  // Fractional CFO Hub
  'fractional-cfo': {
    pillarPage: '/services/fractional-cfo',
    subtopics: [
      '/guides/when-to-hire-fractional-cfo',
      '/guides/cfo-vs-controller',
      '/resources/fractional-cfo-roi-calculator',
      '/case-studies/startup-cfo-success'
    ],
    relatedServices: [
      '/services/strategic-planning',
      '/services/cash-flow-management',
      '/services/fundraising-support'
    ]
  },

  // Financial Modeling Hub
  'financial-modeling': {
    pillarPage: '/guides/financial-modeling-complete-guide',
    subtopics: [
      '/guides/three-statement-model-tutorial',
      '/guides/dcf-valuation-guide',
      '/guides/saas-financial-model',
      '/templates/startup-financial-model',
      '/guides/financial-modeling-best-practices'
    ],
    relatedServices: [
      '/services/financial-modeling',
      '/services/startup-cfo',
      '/services/saas-fpa'
    ]
  },

  // Budgeting & Forecasting Hub
  'budgeting-forecasting': {
    pillarPage: '/guides/budgeting-forecasting-guide',
    subtopics: [
      '/guides/rolling-forecast-implementation',
      '/guides/driver-based-planning',
      '/guides/zero-based-budgeting',
      '/guides/budget-variance-analysis',
      '/templates/budget-template'
    ],
    relatedServices: [
      '/services/budgeting-forecasting',
      '/services/fpa-consulting',
      '/services/strategic-planning'
    ]
  },

  // SaaS FP&A Hub
  'saas-fpa': {
    pillarPage: '/industries/saas-fpa-services',
    subtopics: [
      '/guides/saas-metrics-guide',
      '/guides/mrr-forecasting',
      '/guides/saas-unit-economics',
      '/calculators/ltv-cac-calculator',
      '/guides/saas-burn-rate-analysis'
    ],
    relatedServices: [
      '/services/saas-fpa',
      '/services/financial-modeling',
      '/services/startup-cfo'
    ]
  }
};

/**
 * Service Page Internal Linking Strategy
 * Each service page should link to:
 * 1. Related services (cross-sell)
 * 2. Educational content (authority)
 * 3. Case studies (proof)
 * 4. Tools/templates (lead magnets)
 */
export const servicePageLinks: Record<string, InternalLink[]> = {
  'fractional-cfo': [
    {
      url: '/services/strategic-planning',
      anchor: 'strategic financial planning',
      context: 'As your fractional CFO, I provide strategic financial planning including',
      priority: 'high'
    },
    {
      url: '/services/financial-modeling',
      anchor: 'investor-ready financial models',
      context: 'Need to build investor-ready financial models for fundraising?',
      priority: 'high'
    },
    {
      url: '/guides/when-to-hire-fractional-cfo',
      anchor: 'when to hire a fractional CFO',
      context: 'Learn more about when to hire a fractional CFO in our complete guide.',
      priority: 'medium'
    },
    {
      url: '/case-studies/startup-cfo-success',
      anchor: 'See how we helped a Series A startup',
      context: 'See how we helped a Series A startup close their funding round.',
      priority: 'high'
    },
    {
      url: '/resources/fractional-cfo-roi-calculator',
      anchor: 'Calculate the ROI of a fractional CFO',
      context: 'Calculate the ROI of a fractional CFO for your company.',
      priority: 'medium'
    }
  ],

  'financial-modeling': [
    {
      url: '/guides/financial-modeling-complete-guide',
      anchor: 'financial modeling best practices',
      context: 'I follow proven financial modeling best practices in every model I build.',
      priority: 'medium'
    },
    {
      url: '/guides/three-statement-model-tutorial',
      anchor: 'three-statement financial models',
      context: 'All models include integrated three-statement financial models.',
      priority: 'high'
    },
    {
      url: '/services/fractional-cfo',
      anchor: 'fractional CFO services',
      context: 'Need ongoing financial leadership? Consider our fractional CFO services.',
      priority: 'high'
    },
    {
      url: '/templates/startup-financial-model',
      anchor: 'startup financial model template',
      context: 'For simpler needs, download our startup financial model template.',
      priority: 'low'
    },
    {
      url: '/industries/saas-fpa-services',
      anchor: 'SaaS financial modeling',
      context: 'Building a SaaS company? See our specialized SaaS financial modeling services.',
      priority: 'medium'
    }
  ],

  'budgeting-forecasting': [
    {
      url: '/guides/rolling-forecast-implementation',
      anchor: 'rolling forecasts',
      context: 'I specialize in implementing rolling forecasts that adapt to changing business conditions.',
      priority: 'high'
    },
    {
      url: '/guides/driver-based-planning',
      anchor: 'driver-based planning',
      context: 'Using driver-based planning to connect operational metrics to financial outcomes.',
      priority: 'high'
    },
    {
      url: '/services/fpa-consulting',
      anchor: 'broader FP&A transformation',
      context: 'Looking for broader FP&A transformation? Explore our comprehensive FP&A consulting.',
      priority: 'medium'
    },
    {
      url: '/guides/budget-variance-analysis',
      anchor: 'variance analysis framework',
      context: 'Learn about our variance analysis framework for actionable insights.',
      priority: 'medium'
    }
  ],

  'saas-fpa': [
    {
      url: '/guides/saas-metrics-guide',
      anchor: 'essential SaaS metrics',
      context: 'I track all essential SaaS metrics including MRR, ARR, CAC, and LTV.',
      priority: 'high'
    },
    {
      url: '/guides/mrr-forecasting',
      anchor: 'MRR forecasting model',
      context: 'Build an accurate MRR forecasting model with cohort analysis.',
      priority: 'high'
    },
    {
      url: '/services/startup-cfo',
      anchor: 'fractional CFO for startups',
      context: 'Need ongoing strategic finance support? Consider a fractional CFO for startups.',
      priority: 'high'
    },
    {
      url: '/calculators/ltv-cac-calculator',
      anchor: 'LTV:CAC calculator',
      context: 'Use our free LTV:CAC calculator to benchmark your unit economics.',
      priority: 'medium'
    }
  ]
};

/**
 * Guide/Blog Post Internal Linking Strategy
 * Educational content should link to:
 * 1. Related guides (topical authority)
 * 2. Relevant services (conversion)
 * 3. Tools/templates (engagement)
 */
export const guidePageLinks: Record<string, InternalLink[]> = {
  'how-to-build-financial-model': [
    {
      url: '/guides/three-statement-model-tutorial',
      anchor: 'three-statement model',
      context: 'Start with a three-statement model connecting P&L, balance sheet, and cash flow.',
      priority: 'high'
    },
    {
      url: '/guides/financial-modeling-best-practices',
      anchor: 'financial modeling best practices',
      context: 'Follow these financial modeling best practices to ensure accuracy.',
      priority: 'high'
    },
    {
      url: '/services/financial-modeling',
      anchor: 'professional financial modeling services',
      context: 'Need help building a custom model? Explore our professional financial modeling services.',
      priority: 'high'
    },
    {
      url: '/templates/startup-financial-model',
      anchor: 'download our startup model template',
      context: 'To get started quickly, download our startup model template.',
      priority: 'medium'
    }
  ],

  'budgeting-best-practices': [
    {
      url: '/guides/rolling-forecast-implementation',
      anchor: 'rolling forecasts',
      context: 'Consider implementing rolling forecasts for more agile planning.',
      priority: 'high'
    },
    {
      url: '/guides/driver-based-planning',
      anchor: 'driver-based budgeting',
      context: 'Use driver-based budgeting to connect operational metrics to financial outcomes.',
      priority: 'high'
    },
    {
      url: '/services/budgeting-forecasting',
      anchor: 'budgeting and forecasting consulting',
      context: 'Need expert help implementing these practices? Consider our budgeting and forecasting consulting.',
      priority: 'high'
    }
  ],

  'saas-metrics-guide': [
    {
      url: '/guides/mrr-forecasting',
      anchor: 'forecast MRR growth',
      context: 'Learn how to forecast MRR growth with cohort analysis.',
      priority: 'high'
    },
    {
      url: '/guides/saas-unit-economics',
      anchor: 'optimize unit economics',
      context: 'Use these metrics to optimize unit economics and improve CAC payback.',
      priority: 'high'
    },
    {
      url: '/services/saas-fpa',
      anchor: 'SaaS FP&A consulting',
      context: 'Get expert help optimizing your SaaS metrics with our SaaS FP&A consulting.',
      priority: 'high'
    },
    {
      url: '/calculators/ltv-cac-calculator',
      anchor: 'LTV:CAC calculator',
      context: 'Calculate your LTV:CAC ratio with our free LTV:CAC calculator.',
      priority: 'medium'
    }
  ]
};

/**
 * Generate contextual internal links based on page type and content
 */
export function generateContextualLinks(
  pageType: 'service' | 'guide' | 'case-study' | 'tool',
  pageTopic: string,
  currentUrl: string
): InternalLink[] {
  const linkMap = pageType === 'service' ? servicePageLinks : guidePageLinks;
  const links = linkMap[pageTopic] || [];

  // Filter out self-references
  return links.filter(link => link.url !== currentUrl);
}

/**
 * Anchor Text Diversity for Natural Link Profile
 * Avoid exact-match anchors, vary phrasing
 */
export const anchorTextVariations: Record<string, string[]> = {
  'fractional-cfo': [
    'fractional CFO services',
    'part-time CFO support',
    'outsourced CFO expertise',
    'strategic financial leadership',
    'learn more about fractional CFO services'
  ],
  'financial-modeling': [
    'financial modeling services',
    'custom financial models',
    'investor-ready models',
    'three-statement modeling',
    'explore our modeling services'
  ],
  'budgeting-forecasting': [
    'budgeting and forecasting',
    'rolling forecast implementation',
    'driver-based planning',
    'budget variance analysis',
    'see our forecasting services'
  ],
  'fpa-consulting': [
    'FP&A consulting',
    'financial planning expertise',
    'strategic finance consulting',
    'business partnering services',
    'comprehensive FP&A services'
  ]
};

/**
 * Get random anchor text variation to maintain natural link diversity
 */
export function getAnchorVariation(topic: string): string {
  const variations = anchorTextVariations[topic];
  if (!variations || variations.length === 0) return topic;

  return variations[Math.floor(Math.random() * variations.length)];
}

/**
 * Link Placement Recommendations
 * Where to place internal links for maximum SEO and UX benefit
 */
export const linkPlacementGuide = {
  servicePages: [
    'Introduction paragraph (context for related service)',
    'Features/Benefits section (link to educational content)',
    'Process section (link to methodology guides)',
    'CTA section (link to case studies)',
    'FAQ section (link to related FAQs)',
    'Footer (link to related services)'
  ],

  guidePages: [
    'Introduction (link to pillar content)',
    'Section headers (link to deep-dive subtopics)',
    'Examples (link to templates/tools)',
    'Conclusion (link to relevant services)',
    'Related reading section (3-5 related guides)',
    'CTA (link to free consultation)'
  ],

  toolPages: [
    'Description (link to methodology guide)',
    'Instructions (link to tutorial content)',
    'Results interpretation (link to consulting services)',
    'Related tools section',
    'Upgrade CTA (link to custom service)'
  ]
};

/**
 * Internal Linking Best Practices Checklist
 */
export const internalLinkingBestPractices = [
  '✅ Link from high-authority pages to new content',
  '✅ Use descriptive, contextual anchor text (not "click here")',
  '✅ Vary anchor text to avoid over-optimization',
  '✅ Link deep into site (not just to homepage)',
  '✅ Create hub-and-spoke content architecture',
  '✅ Link related services for cross-selling',
  '✅ Connect educational content to service pages',
  '✅ Use breadcrumbs for hierarchical navigation',
  '✅ Add "Related Articles" section to blog posts',
  '✅ Audit and fix broken internal links monthly'
];

/**
 * Priority Link Map (which pages should link to what)
 * For manual implementation or automated link suggestions
 */
export const priorityLinkMap = {
  'Homepage': [
    { to: '/services/fractional-cfo', priority: 'high' },
    { to: '/services/financial-modeling', priority: 'high' },
    { to: '/services/fpa-consulting', priority: 'high' },
    { to: '/about', priority: 'medium' },
    { to: '/case-studies', priority: 'medium' }
  ],

  'About Page': [
    { to: '/services/fractional-cfo', priority: 'high' },
    { to: '/certifications/cfi-fpap', priority: 'medium' },
    { to: '/certifications/wharton-fpa', priority: 'medium' },
    { to: '/contact', priority: 'high' }
  ],

  'Services Overview': [
    { to: '/services/fractional-cfo', priority: 'high' },
    { to: '/services/financial-modeling', priority: 'high' },
    { to: '/services/budgeting-forecasting', priority: 'high' },
    { to: '/services/saas-fpa', priority: 'medium' },
    { to: '/case-studies', priority: 'medium' }
  ]
};
