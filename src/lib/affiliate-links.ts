/**
 * Centralized Affiliate Link Management
 *
 * All affiliate links are managed here. When a merchant changes their URL,
 * update it in ONE place and it propagates everywhere.
 */

export interface AffiliateLink {
  id: string;
  name: string;
  url: string;
  category: string;
  trackingParams?: Record<string, string>;
  isActive: boolean;
  lastChecked?: string;
}

const AFFILIATE_LINKS: Record<string, AffiliateLink> = {
  // AI Writing Tools
  "jasper-ai": {
    id: "jasper-ai",
    name: "Jasper AI",
    url: "https://www.jasper.ai",
    category: "ai-writing",
    trackingParams: { fpr: "PARTNER_ID" },
    isActive: true,
  },
  "copy-ai": {
    id: "copy-ai",
    name: "Copy.ai",
    url: "https://www.copy.ai",
    category: "ai-writing",
    trackingParams: { via: "PARTNER_ID" },
    isActive: true,
  },

  // SEO & Marketing
  semrush: {
    id: "semrush",
    name: "Semrush",
    url: "https://www.semrush.com",
    category: "seo-marketing",
    trackingParams: { ref: "PARTNER_ID" },
    isActive: true,
  },
  "surfer-seo": {
    id: "surfer-seo",
    name: "Surfer SEO",
    url: "https://surferseo.com",
    category: "seo-marketing",
    trackingParams: { fp_ref: "PARTNER_ID" },
    isActive: true,
  },
  unbounce: {
    id: "unbounce",
    name: "Unbounce",
    url: "https://unbounce.com",
    category: "seo-marketing",
    trackingParams: { ref: "PARTNER_ID" },
    isActive: true,
  },

  // Email Marketing
  convertkit: {
    id: "convertkit",
    name: "ConvertKit",
    url: "https://convertkit.com",
    category: "email-marketing",
    trackingParams: { lmref: "PARTNER_ID" },
    isActive: true,
  },

  // CRM & Sales
  pipedrive: {
    id: "pipedrive",
    name: "Pipedrive",
    url: "https://www.pipedrive.com",
    category: "crm-sales",
    trackingParams: { ref: "PARTNER_ID" },
    isActive: true,
  },

  // Project Management
  monday: {
    id: "monday",
    name: "Monday.com",
    url: "https://monday.com",
    category: "project-management",
    trackingParams: { ref: "PARTNER_ID" },
    isActive: true,
  },
  clickup: {
    id: "clickup",
    name: "ClickUp",
    url: "https://clickup.com",
    category: "project-management",
    trackingParams: { ref: "PARTNER_ID" },
    isActive: true,
  },

  // Design & Creative
  canva: {
    id: "canva",
    name: "Canva",
    url: "https://www.canva.com",
    category: "design-creative",
    trackingParams: { ref: "PARTNER_ID" },
    isActive: true,
  },

  // Business Automation
  teachable: {
    id: "teachable",
    name: "Teachable",
    url: "https://teachable.com",
    category: "business-automation",
    trackingParams: { ref: "PARTNER_ID" },
    isActive: true,
  },
};

/**
 * Get the full tracked affiliate URL for a product
 */
export function getAffiliateUrl(productId: string): string {
  const link = AFFILIATE_LINKS[productId];
  if (!link || !link.isActive) {
    console.warn(`Affiliate link not found or inactive: ${productId}`);
    return "#";
  }

  const url = new URL(link.url);
  if (link.trackingParams) {
    for (const [key, value] of Object.entries(link.trackingParams)) {
      url.searchParams.set(key, value);
    }
  }

  // Add UTM params for internal tracking
  url.searchParams.set("utm_source", "aitoolstack");
  url.searchParams.set("utm_medium", "affiliate");
  url.searchParams.set("utm_campaign", productId);

  return url.toString();
}

/**
 * Get all affiliate links for a category
 */
export function getLinksByCategory(category: string): AffiliateLink[] {
  return Object.values(AFFILIATE_LINKS).filter(
    (link) => link.category === category && link.isActive
  );
}

/**
 * Get a single affiliate link config
 */
export function getAffiliateLink(productId: string): AffiliateLink | undefined {
  return AFFILIATE_LINKS[productId];
}

export default AFFILIATE_LINKS;
