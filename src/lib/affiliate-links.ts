/**
 * Centralized Affiliate Link Management
 *
 * All affiliate links are managed here. When a merchant changes their URL,
 * update it in ONE place and it propagates everywhere.
 *
 * isActive: false = no affiliate program exists, program is dead, or platform is blocked.
 * The "Try Free →" button will render as href="#" for inactive links.
 *
 * BLOCKED PLATFORMS (do not mark active until explicitly unblocked):
 * - Impact.com: Semrush, Grammarly, HubSpot, Monday.com
 * - PartnerStack: Surfer SEO, Notion, ElevenLabs
 */

export interface AffiliateLink {
  id: string;
  name: string;
  url: string;
  category: string;
  trackingParams?: Record<string, string>;
  isActive: boolean;
  lastChecked?: string;
  note?: string;
}

const AFFILIATE_LINKS: Record<string, AffiliateLink> = {
  // ── AI Writing Tools ────────────────────────────────────
  "jasper-ai": {
    id: "jasper-ai",
    name: "Jasper AI",
    url: "https://www.jasper.ai",
    category: "ai-writing",
    trackingParams: {},
    isActive: false, // Affiliate program ended January 26, 2025
    lastChecked: "2026-06-04",
    note: "Program permanently closed Jan 2025",
  },
  "copy-ai": {
    id: "copy-ai",
    name: "Copy.ai",
    url: "https://www.copy.ai",
    category: "ai-writing",
    trackingParams: {},
    isActive: false, // No affiliate program
    lastChecked: "2026-06-04",
  },
  writesonic: {
    id: "writesonic",
    name: "Writesonic",
    url: "https://writesonic.com?fp_ref=fortuna26",
    category: "ai-writing",
    trackingParams: {},
    isActive: true, // Verified: own platform (affiliates.writesonic.com), 20% recurring 12mo
    lastChecked: "2026-06-04",
  },

  // ── SEO & Marketing ────────────────────────────────────
  semrush: {
    id: "semrush",
    name: "Semrush",
    url: "https://www.semrush.com",
    category: "seo-marketing",
    trackingParams: {},
    isActive: false, // Platform: Impact.com — BLOCKED pending account resolution
    lastChecked: "2026-06-04",
    note: "Impact.com platform — blocked until account restored",
  },
  "surfer-seo": {
    id: "surfer-seo",
    name: "Surfer SEO",
    url: "https://surferseo.com",
    category: "seo-marketing",
    trackingParams: {},
    isActive: false, // Platform: PartnerStack — BLOCKED
    lastChecked: "2026-06-04",
    note: "PartnerStack platform — blocked",
  },
  unbounce: {
    id: "unbounce",
    name: "Unbounce",
    url: "https://unbounce.com",
    category: "seo-marketing",
    trackingParams: {},
    isActive: true,
    lastChecked: "2026-06-04",
  },
  ahrefs: {
    id: "ahrefs",
    name: "Ahrefs",
    url: "https://ahrefs.com",
    category: "seo-marketing",
    trackingParams: {},
    isActive: false, // Ahrefs publicly states they have no affiliate program
    lastChecked: "2026-06-04",
  },

  // ── AI Video & Voice ───────────────────────────────────
  synthesia: {
    id: "synthesia",
    name: "Synthesia",
    url: "https://www.synthesia.io/partners/affiliates",
    category: "ai-video",
    trackingParams: {},
    isActive: true, // Verified: HubSpot form (not Impact/PartnerStack), 25% per sale
    lastChecked: "2026-06-04",
  },

  // ── Email Marketing ────────────────────────────────────
  convertkit: {
    id: "convertkit",
    name: "ConvertKit",
    url: "https://convertkit.com",
    category: "email-marketing",
    trackingParams: {},
    isActive: true,
    lastChecked: "2026-06-04",
  },
  mailchimp: {
    id: "mailchimp",
    name: "Mailchimp",
    url: "https://mailchimp.com",
    category: "email-marketing",
    trackingParams: {},
    isActive: true,
    lastChecked: "2026-06-04",
  },

  // ── CRM & Sales ────────────────────────────────────────
  hubspot: {
    id: "hubspot",
    name: "HubSpot",
    url: "https://www.hubspot.com",
    category: "crm-sales",
    trackingParams: {},
    isActive: false, // Platform: Impact.com — BLOCKED
    lastChecked: "2026-06-04",
    note: "Impact.com platform — blocked until account restored",
  },
  pipedrive: {
    id: "pipedrive",
    name: "Pipedrive",
    url: "https://www.pipedrive.com/en/affiliate-partnership",
    category: "crm-sales",
    trackingParams: {},
    isActive: true,
    lastChecked: "2026-06-04",
  },

  // ── Project Management ─────────────────────────────────
  monday: {
    id: "monday",
    name: "Monday.com",
    url: "https://monday.com",
    category: "project-management",
    trackingParams: {},
    isActive: false, // Platform: Impact.com — BLOCKED
    lastChecked: "2026-06-04",
    note: "Impact.com platform — blocked until account restored",
  },
  notion: {
    id: "notion",
    name: "Notion",
    url: "https://www.notion.com",
    category: "project-management",
    trackingParams: {},
    isActive: false, // Platform: PartnerStack — BLOCKED
    lastChecked: "2026-06-04",
    note: "PartnerStack platform — blocked",
  },
  clickup: {
    id: "clickup",
    name: "ClickUp",
    url: "https://clickup.com",
    category: "project-management",
    trackingParams: {},
    isActive: true,
    lastChecked: "2026-06-04",
  },

  // ── Design & Creative ──────────────────────────────────
  canva: {
    id: "canva",
    name: "Canva",
    url: "https://www.canva.com",
    category: "design-creative",
    trackingParams: {},
    isActive: true,
    lastChecked: "2026-06-04",
  },
  midjourney: {
    id: "midjourney",
    name: "Midjourney",
    url: "https://www.midjourney.com",
    category: "design-creative",
    trackingParams: {},
    isActive: true,
    lastChecked: "2026-06-04",
  },
  "adobe-firefly": {
    id: "adobe-firefly",
    name: "Adobe Firefly",
    url: "https://www.adobe.com/products/firefly.html",
    category: "design-creative",
    trackingParams: {},
    isActive: true,
    lastChecked: "2026-06-04",
  },
  figma: {
    id: "figma",
    name: "Figma",
    url: "https://www.figma.com",
    category: "design-creative",
    trackingParams: {},
    isActive: true,
    lastChecked: "2026-06-04",
  },

  // ── AI Video & Podcasting ──────────────────────────────
  runway: {
    id: "runway",
    name: "Runway",
    url: "https://runwayml.com",
    category: "ai-video",
    trackingParams: {},
    isActive: false, // No public affiliate program
    lastChecked: "2026-06-04",
  },
  heygen: {
    id: "heygen",
    name: "HeyGen",
    url: "https://www.heygen.com",
    category: "ai-video",
    trackingParams: {},
    isActive: true,
    lastChecked: "2026-06-04",
  },
  descript: {
    id: "descript",
    name: "Descript",
    url: "https://www.descript.com",
    category: "ai-video",
    trackingParams: {},
    isActive: false, // No affiliate program
    lastChecked: "2026-06-04",
  },
  capcut: {
    id: "capcut",
    name: "CapCut",
    url: "https://www.capcut.com",
    category: "ai-video",
    trackingParams: {},
    isActive: true,
    lastChecked: "2026-06-04",
  },
  "opus-clip": {
    id: "opus-clip",
    name: "Opus Clip",
    url: "https://www.opus.pro",
    category: "ai-video",
    trackingParams: {},
    isActive: true,
    lastChecked: "2026-06-04",
  },
  vizard: {
    id: "vizard",
    name: "Vizard",
    url: "https://vizard.ai",
    category: "ai-video",
    trackingParams: {},
    isActive: true,
    lastChecked: "2026-06-04",
  },

  // ── Business Automation ────────────────────────────────
  zapier: {
    id: "zapier",
    name: "Zapier",
    url: "https://zapier.com",
    category: "business-automation",
    trackingParams: {},
    isActive: false, // No public affiliate program — tech partner program only
    lastChecked: "2026-06-04",
  },
  make: {
    id: "make",
    name: "Make",
    url: "https://www.make.com",
    category: "business-automation",
    trackingParams: {},
    isActive: true,
    lastChecked: "2026-06-04",
  },
  n8n: {
    id: "n8n",
    name: "n8n",
    url: "https://n8n.io",
    category: "business-automation",
    trackingParams: {},
    isActive: true,
    lastChecked: "2026-06-04",
  },
  bardeen: {
    id: "bardeen",
    name: "Bardeen",
    url: "https://www.bardeen.ai",
    category: "business-automation",
    trackingParams: {},
    isActive: true,
    lastChecked: "2026-06-04",
  },
  activepieces: {
    id: "activepieces",
    name: "Activepieces",
    url: "https://www.activepieces.com",
    category: "business-automation",
    trackingParams: {},
    isActive: true,
    lastChecked: "2026-06-04",
  },

  // ── Customer Support & Chatbots ────────────────────────
  intercom: {
    id: "intercom",
    name: "Intercom",
    url: "https://www.intercom.com",
    category: "customer-support",
    trackingParams: {},
    isActive: true,
    lastChecked: "2026-06-04",
  },
  zendesk: {
    id: "zendesk",
    name: "Zendesk",
    url: "https://www.zendesk.com",
    category: "customer-support",
    trackingParams: {},
    isActive: true,
    lastChecked: "2026-06-04",
  },
  tidio: {
    id: "tidio",
    name: "Tidio",
    url: "https://www.tidio.com",
    category: "customer-support",
    trackingParams: {},
    isActive: true,
    lastChecked: "2026-06-04",
  },
  freshdesk: {
    id: "freshdesk",
    name: "Freshdesk",
    url: "https://www.freshworks.com/freshdesk",
    category: "customer-support",
    trackingParams: {},
    isActive: true,
    lastChecked: "2026-06-04",
  },
  chatbase: {
    id: "chatbase",
    name: "Chatbase",
    url: "https://www.chatbase.co",
    category: "customer-support",
    trackingParams: {},
    isActive: true,
    lastChecked: "2026-06-04",
  },
  teachable: {
    id: "teachable",
    name: "Teachable",
    url: "https://teachable.com",
    category: "business-automation",
    trackingParams: {},
    isActive: true,
    lastChecked: "2026-06-04",
  },

  // ── AI Image Generation ────────────────────────────────
  "dall-e": {
    id: "dall-e",
    name: "DALL·E 3",
    url: "https://openai.com/dall-e-3",
    category: "ai-image",
    trackingParams: {},
    isActive: true,
    lastChecked: "2026-06-04",
  },
  "stable-diffusion": {
    id: "stable-diffusion",
    name: "Stable Diffusion",
    url: "https://stability.ai",
    category: "ai-image",
    trackingParams: {},
    isActive: true,
    lastChecked: "2026-06-04",
  },
  leonardo: {
    id: "leonardo",
    name: "Leonardo.ai",
    url: "https://leonardo.ai",
    category: "ai-image",
    trackingParams: {},
    isActive: true,
    lastChecked: "2026-06-04",
  },

  // ── AI Coding ──────────────────────────────────────────
  "github-copilot": {
    id: "github-copilot",
    name: "GitHub Copilot",
    url: "https://github.com/features/copilot",
    category: "ai-coding",
    trackingParams: {},
    isActive: true,
    lastChecked: "2026-06-04",
  },
  cursor: {
    id: "cursor",
    name: "Cursor",
    url: "https://cursor.sh",
    category: "ai-coding",
    trackingParams: {},
    isActive: true,
    lastChecked: "2026-06-04",
  },
  replit: {
    id: "replit",
    name: "Replit",
    url: "https://replit.com",
    category: "ai-coding",
    trackingParams: {},
    isActive: true,
    lastChecked: "2026-06-04",
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
