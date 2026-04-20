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
  // ── AI Writing Tools ────────────────────────────────────
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

  // ── SEO & Marketing ────────────────────────────────────
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
  ahrefs: {
    id: "ahrefs",
    name: "Ahrefs",
    url: "https://ahrefs.com",
    category: "seo-marketing",
    trackingParams: { ref: "PARTNER_ID" },
    isActive: true,
  },

  // ── Email Marketing ────────────────────────────────────
  convertkit: {
    id: "convertkit",
    name: "ConvertKit",
    url: "https://convertkit.com",
    category: "email-marketing",
    trackingParams: { lmref: "PARTNER_ID" },
    isActive: true,
  },
  mailchimp: {
    id: "mailchimp",
    name: "Mailchimp",
    url: "https://mailchimp.com",
    category: "email-marketing",
    trackingParams: { ref: "PARTNER_ID" },
    isActive: true,
  },

  // ── CRM & Sales ────────────────────────────────────────
  pipedrive: {
    id: "pipedrive",
    name: "Pipedrive",
    url: "https://www.pipedrive.com",
    category: "crm-sales",
    trackingParams: { ref: "PARTNER_ID" },
    isActive: true,
  },

  // ── Project Management ─────────────────────────────────
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

  // ── Design & Creative ──────────────────────────────────
  canva: {
    id: "canva",
    name: "Canva",
    url: "https://www.canva.com",
    category: "design-creative",
    trackingParams: { ref: "PARTNER_ID" },
    isActive: true,
  },
  midjourney: {
    id: "midjourney",
    name: "Midjourney",
    url: "https://www.midjourney.com",
    category: "design-creative",
    trackingParams: {},
    isActive: true,
  },
  "adobe-firefly": {
    id: "adobe-firefly",
    name: "Adobe Firefly",
    url: "https://www.adobe.com/products/firefly.html",
    category: "design-creative",
    trackingParams: { ref: "PARTNER_ID" },
    isActive: true,
  },
  figma: {
    id: "figma",
    name: "Figma",
    url: "https://www.figma.com",
    category: "design-creative",
    trackingParams: { ref: "PARTNER_ID" },
    isActive: true,
  },

  // ── AI Video & Podcasting ──────────────────────────────
  runway: {
    id: "runway",
    name: "Runway",
    url: "https://runwayml.com",
    category: "ai-video",
    trackingParams: { ref: "PARTNER_ID" },
    isActive: true,
  },
  heygen: {
    id: "heygen",
    name: "HeyGen",
    url: "https://www.heygen.com",
    category: "ai-video",
    trackingParams: { ref: "PARTNER_ID" },
    isActive: true,
  },
  descript: {
    id: "descript",
    name: "Descript",
    url: "https://www.descript.com",
    category: "ai-video",
    trackingParams: { ref: "PARTNER_ID" },
    isActive: true,
  },
  capcut: {
    id: "capcut",
    name: "CapCut",
    url: "https://www.capcut.com",
    category: "ai-video",
    trackingParams: {},
    isActive: true,
  },
  "opus-clip": {
    id: "opus-clip",
    name: "Opus Clip",
    url: "https://www.opus.pro",
    category: "ai-video",
    trackingParams: { ref: "PARTNER_ID" },
    isActive: true,
  },
  vizard: {
    id: "vizard",
    name: "Vizard",
    url: "https://vizard.ai",
    category: "ai-video",
    trackingParams: { ref: "PARTNER_ID" },
    isActive: true,
  },

  // ── Automation & Workflow ──────────────────────────────
  zapier: {
    id: "zapier",
    name: "Zapier",
    url: "https://zapier.com",
    category: "automation",
    trackingParams: { ref: "PARTNER_ID" },
    isActive: true,
  },
  make: {
    id: "make",
    name: "Make",
    url: "https://www.make.com",
    category: "automation",
    trackingParams: { pc: "PARTNER_ID" },
    isActive: true,
  },
  n8n: {
    id: "n8n",
    name: "n8n",
    url: "https://n8n.io",
    category: "automation",
    trackingParams: { ref: "PARTNER_ID" },
    isActive: true,
  },
  bardeen: {
    id: "bardeen",
    name: "Bardeen",
    url: "https://www.bardeen.ai",
    category: "automation",
    trackingParams: { ref: "PARTNER_ID" },
    isActive: true,
  },
  activepieces: {
    id: "activepieces",
    name: "Activepieces",
    url: "https://www.activepieces.com",
    category: "automation",
    trackingParams: { ref: "PARTNER_ID" },
    isActive: true,
  },

  // ── Customer Support & Chatbots ────────────────────────
  intercom: {
    id: "intercom",
    name: "Intercom",
    url: "https://www.intercom.com",
    category: "customer-support",
    trackingParams: { ref: "PARTNER_ID" },
    isActive: true,
  },
  zendesk: {
    id: "zendesk",
    name: "Zendesk",
    url: "https://www.zendesk.com",
    category: "customer-support",
    trackingParams: { ref: "PARTNER_ID" },
    isActive: true,
  },
  tidio: {
    id: "tidio",
    name: "Tidio",
    url: "https://www.tidio.com",
    category: "customer-support",
    trackingParams: { ref: "PARTNER_ID" },
    isActive: true,
  },
  freshdesk: {
    id: "freshdesk",
    name: "Freshdesk",
    url: "https://www.freshworks.com/freshdesk",
    category: "customer-support",
    trackingParams: { ref: "PARTNER_ID" },
    isActive: true,
  },
  chatbase: {
    id: "chatbase",
    name: "Chatbase",
    url: "https://www.chatbase.co",
    category: "customer-support",
    trackingParams: { ref: "PARTNER_ID" },
    isActive: true,
  },

  // ── Business & Education ───────────────────────────────
  teachable: {
    id: "teachable",
    name: "Teachable",
    url: "https://teachable.com",
    category: "business-automation",
    trackingParams: { ref: "PARTNER_ID" },
    isActive: true,
  },

  // ── AI Image Generation ────────────────────────────────
  "dall-e": {
    id: "dall-e",
    name: "DALL·E 3",
    url: "https://openai.com/dall-e-3",
    category: "ai-image",
    trackingParams: {},
    isActive: true,
  },
  "stable-diffusion": {
    id: "stable-diffusion",
    name: "Stable Diffusion",
    url: "https://stability.ai",
    category: "ai-image",
    trackingParams: {},
    isActive: true,
  },
  leonardo: {
    id: "leonardo",
    name: "Leonardo.ai",
    url: "https://leonardo.ai",
    category: "ai-image",
    trackingParams: { ref: "PARTNER_ID" },
    isActive: true,
  },

  // ── AI Coding ──────────────────────────────────────────
  "github-copilot": {
    id: "github-copilot",
    name: "GitHub Copilot",
    url: "https://github.com/features/copilot",
    category: "ai-coding",
    trackingParams: {},
    isActive: true,
  },
  cursor: {
    id: "cursor",
    name: "Cursor",
    url: "https://cursor.sh",
    category: "ai-coding",
    trackingParams: {},
    isActive: true,
  },
  replit: {
    id: "replit",
    name: "Replit",
    url: "https://replit.com",
    category: "ai-coding",
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
 * Get all categories with tool counts
 */
export function getCategories(): { category: string; count: number }[] {
  const counts: Record<string, number> = {};
  for (const link of Object.values(AFFILIATE_LINKS)) {
    if (link.isActive) {
      counts[link.category] = (counts[link.category] || 0) + 1;
    }
  }
  return Object.entries(counts)
    .map(([category, count]) => ({ category, count }))
    .sort((a, b) => b.count - a.count);
}

/**
 * Get a single affiliate link config
 */
export function getAffiliateLink(productId: string): AffiliateLink | undefined {
  return AFFILIATE_LINKS[productId];
}

/**
 * Get all active affiliate links
 */
export function getAllActiveLinks(): AffiliateLink[] {
  return Object.values(AFFILIATE_LINKS).filter((link) => link.isActive);
}

export default AFFILIATE_LINKS;
