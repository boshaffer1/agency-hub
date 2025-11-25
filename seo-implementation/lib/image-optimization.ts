/**
 * Image Optimization Utilities for FP&A Content
 * WebP conversion, compression, lazy loading, descriptive alt text
 */

export interface ImageConfig {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
}

export interface OptimizedImage extends ImageConfig {
  srcSet?: string;
  webpSrc?: string;
  loading: 'lazy' | 'eager';
}

/**
 * Generate descriptive alt text for FP&A images
 * Following accessibility and SEO best practices
 */
export const altTextTemplates = {
  // Professional headshots
  headshot: (name: string, role: string) =>
    `${name}, ${role} - Professional headshot`,

  // Certification badges
  certificationBadge: (certName: string) =>
    `Official ${certName} certification badge`,

  // Financial diagrams/charts
  financialChart: (chartType: string, metric: string) =>
    `${chartType} showing ${metric} analysis`,

  // Dashboard screenshots
  dashboard: (dashboardType: string, purpose: string) =>
    `${dashboardType} dashboard for ${purpose}`,

  // Excel/Model screenshots
  modelScreenshot: (modelType: string, feature: string) =>
    `${modelType} financial model demonstrating ${feature}`,

  // Infographics
  infographic: (topic: string, comparison?: string) =>
    comparison
      ? `Infographic comparing ${topic}: ${comparison}`
      : `Infographic explaining ${topic}`,

  // Process diagrams
  processDiagram: (processName: string) =>
    `Flowchart illustrating ${processName} process`,

  // Template previews
  templatePreview: (templateName: string) =>
    `Preview of ${templateName} Excel template`,

  // Social proof
  clientLogo: (companyName: string) =>
    `${companyName} logo - client of The FP&A Guy`,

  // Case study visuals
  caseStudyResult: (metric: string, improvement: string) =>
    `Case study results: ${improvement} improvement in ${metric}`
};

/**
 * Common FP&A image categories with optimized alt text
 */
export const fpaImageCatalog = {
  // Paul's professional images
  paulHeadshot: {
    src: '/images/paul-barnhurst-headshot.jpg',
    alt: altTextTemplates.headshot('Paul Barnhurst', 'FP&A Expert, CFI Faculty & Wharton Instructor'),
    width: 400,
    height: 400,
    priority: true // Load eagerly on landing/about pages
  },

  // Certification badges
  cfiBadge: {
    src: '/images/cfi-fpap-badge.png',
    alt: altTextTemplates.certificationBadge('CFI FPAP'),
    width: 200,
    height: 200
  },

  whartonBadge: {
    src: '/images/wharton-executive-education-badge.png',
    alt: altTextTemplates.certificationBadge('Wharton Executive Education'),
    width: 200,
    height: 200
  },

  // Financial model examples
  threeStatementModel: {
    src: '/images/three-statement-financial-model.jpg',
    alt: altTextTemplates.modelScreenshot('Three-statement', 'integrated P&L, balance sheet, and cash flow'),
    width: 800,
    height: 600
  },

  saasMetricsModel: {
    src: '/images/saas-metrics-dashboard.jpg',
    alt: altTextTemplates.dashboard('SaaS metrics', 'MRR, ARR, CAC, and LTV tracking'),
    width: 800,
    height: 600
  },

  budgetVarianceAnalysis: {
    src: '/images/budget-variance-analysis-dashboard.jpg',
    alt: altTextTemplates.financialChart('Variance analysis chart', 'budget vs actual'),
    width: 800,
    height: 600
  },

  cashFlowForecast: {
    src: '/images/13-week-cash-flow-forecast.jpg',
    alt: altTextTemplates.modelScreenshot('Cash flow forecast', '13-week rolling projection'),
    width: 800,
    height: 600
  },

  // Comparison infographics
  certificationComparison: {
    src: '/images/fpa-certification-comparison.png',
    alt: altTextTemplates.infographic('FP&A certifications', 'CFI FPAP vs Wharton vs MBA'),
    width: 800,
    height: 600
  },

  // Social sharing images
  fractionalCFOSocial: {
    src: '/images/social/fractional-cfo-services.jpg',
    alt: 'Fractional CFO Services by Paul Barnhurst - The FP&A Guy',
    width: 1200,
    height: 630
  },

  financialModelingSocial: {
    src: '/images/social/financial-modeling-services.jpg',
    alt: 'Custom Financial Modeling Services - Investor-Ready Models',
    width: 1200,
    height: 630
  }
};

/**
 * Generate responsive image srcSet
 */
export function generateSrcSet(
  basePath: string,
  widths: number[] = [400, 800, 1200, 1600]
): string {
  return widths
    .map(width => `${basePath}?w=${width} ${width}w`)
    .join(', ');
}

/**
 * Generate sizes attribute for responsive images
 */
export function generateSizes(breakpoints: { maxWidth: string; size: string }[]): string {
  return breakpoints
    .map((bp, idx) =>
      idx === breakpoints.length - 1
        ? bp.size
        : `(max-width: ${bp.maxWidth}) ${bp.size}`
    )
    .join(', ');
}

/**
 * Common responsive sizing patterns
 */
export const responsiveSizes = {
  // Full width on mobile, 50% on tablet, 33% on desktop
  gallery: generateSizes([
    { maxWidth: '768px', size: '100vw' },
    { maxWidth: '1024px', size: '50vw' },
    { maxWidth: '9999px', size: '33vw' }
  ]),

  // Full width on mobile, 66% on desktop (blog content)
  contentImage: generateSizes([
    { maxWidth: '768px', size: '100vw' },
    { maxWidth: '9999px', size: '66vw' }
  ]),

  // Hero images
  hero: generateSizes([
    { maxWidth: '768px', size: '100vw' },
    { maxWidth: '1024px', size: '100vw' },
    { maxWidth: '9999px', size: '1200px' }
  ]),

  // Thumbnail images
  thumbnail: generateSizes([
    { maxWidth: '768px', size: '150px' },
    { maxWidth: '9999px', size: '200px' }
  ])
};

/**
 * Optimize image configuration for Next.js Image component
 */
export function optimizeImage(config: ImageConfig): OptimizedImage {
  const { priority = false, ...baseConfig } = config;

  return {
    ...baseConfig,
    loading: priority ? 'eager' : 'lazy',
    sizes: responsiveSizes.contentImage,
    srcSet: config.src ? generateSrcSet(config.src) : undefined
  };
}

/**
 * WebP conversion recommendations
 * For manual implementation or CI/CD pipeline
 */
export const webpConversionGuide = {
  tools: [
    'cwebp (Google)',
    'squoosh.app (web-based)',
    'ImageOptim (Mac)',
    'sharp (Node.js library)'
  ],

  commands: {
    singleFile: 'cwebp -q 80 input.jpg -o output.webp',
    batch: 'for i in *.jpg; do cwebp -q 80 "$i" -o "${i%.jpg}.webp"; done',
    withFallback: 'Use <picture> element with WebP source and JPEG fallback'
  },

  qualitySettings: {
    photography: 80,
    screenshots: 85,
    diagrams: 90,
    icons: 95
  }
};

/**
 * Picture element generator for WebP with fallback
 */
export function generatePictureElement(
  webpSrc: string,
  fallbackSrc: string,
  alt: string,
  width?: number,
  height?: number
): string {
  return `<picture>
  <source srcset="${webpSrc}" type="image/webp">
  <img src="${fallbackSrc}"
       alt="${alt}"
       ${width ? `width="${width}"` : ''}
       ${height ? `height="${height}"` : ''}
       loading="lazy">
</picture>`;
}

/**
 * Image optimization checklist for FP&A content
 */
export const imageOptimizationChecklist = [
  '✅ Convert to WebP format (80-90% smaller than JPEG)',
  '✅ Compress without quality loss (use 80-85 quality setting)',
  '✅ Add descriptive alt text with FP&A keywords',
  '✅ Implement lazy loading for below-fold images',
  '✅ Use responsive srcSet for different screen sizes',
  '✅ Specify width/height to prevent layout shift',
  '✅ Optimize social sharing images (1200x630px)',
  '✅ Add structured data for image objects',
  '✅ Use CDN for faster delivery',
  '✅ Test with Lighthouse performance audit'
];

/**
 * Critical images that should NOT be lazy loaded
 */
export const criticalImages = [
  'paul-barnhurst-headshot.jpg', // Hero section
  'logo.png', // Header
  'cfi-fpap-badge.png', // Above fold certifications
  'wharton-badge.png' // Above fold certifications
];

export function shouldLoadEagerly(imageName: string): boolean {
  return criticalImages.some(critical => imageName.includes(critical));
}
