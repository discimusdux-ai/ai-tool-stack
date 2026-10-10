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
  /** true = url is a plain product link, not a personal referral link yet (earns nothing) */
  needsReferralLink?: boolean;
  /** Reader-facing offer data for AffiliatePicks / AffiliateCompare (verify on vendor page) */
  offer?: {
    tagline: string;
    bestFor: string;
    startingPrice: string;
    freePlan: string;
    verified: string;
  };
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
    // TODO(Josh): replace with personal FirstPromoter referral link. The old URL
    // (affiliates.writesonic.com/signup/36620) is the partner-program SIGNUP form, not a referral link.
    url: "https://writesonic.com",
    category: "ai-writing",
    trackingParams: {},
    isActive: true, // Own platform (FirstPromoter), 20% recurring 12mo
    lastChecked: "2026-10-10",
    needsReferralLink: true,
    offer: {
      tagline: "SEO articles + AI-search (GEO) visibility tracking",
      bestFor: "Brands that want to rank in Google and get cited by ChatGPT/Gemini",
      startingPrice: "$79/mo (billed annually)",
      freePlan: "Free trial",
      verified: "2026-10-10",
    },
  },
  rytr: {
    id: "rytr",
    name: "Rytr",
    url: "https://rytr.me/?via=youraitoolstack",
    category: "ai-writing",
    trackingParams: {},
    isActive: true, // Approved 2026-09-14, own platform (affiliates.rytr.me), 30% recurring 12mo
    lastChecked: "2026-10-10",
    offer: {
      tagline: "Cheap, fast short-form copy: emails, captions, product blurbs",
      bestFor: "Freelancers and small businesses on a tight budget",
      startingPrice: "$9/mo ($7.50/mo annual)",
      freePlan: "Yes — 10K characters/mo",
      verified: "2026-10-10",
    },
    note: "Affiliate link: rytr.me/?via=youraitoolstack",
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
    isActive: false, // Unverified: plain link, no affiliate tracking (audit 2026-08-19)
    lastChecked: "2026-08-19",
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
    // TODO(Josh): replace with personal referral link. The old URL (/partners/affiliates) was the
    // partner-program application page, not a referral link.
    url: "https://www.synthesia.io",
    category: "ai-video",
    trackingParams: {},
    isActive: true, // HubSpot form (not Impact/PartnerStack), 25% per sale
    lastChecked: "2026-10-10",
    needsReferralLink: true,
    offer: {
      tagline: "Studio-style AI avatar videos for training and explainers",
      bestFor: "Teams making training, onboarding and how-to videos",
      startingPrice: "$19/mo ($14/mo annual)",
      freePlan: "Yes — watermark, 500 credits/mo",
      verified: "2026-10-10",
    },
  },

  fliki: {
    id: "fliki",
    name: "Fliki",
    url: "https://fliki.ai/?via=youraitoolstack",
    category: "ai-video",
    trackingParams: {},
    isActive: true, // Approved 2026-09-11, own platform (affiliates.fliki.ai), 30% lifetime commission
    lastChecked: "2026-10-10",
    offer: {
      tagline: "Turn scripts, blog posts or slides into voiceover videos",
      bestFor: "Faceless YouTube, explainers and repurposing written content",
      startingPrice: "$28/mo ($21/mo annual)",
      freePlan: "Yes — 720p, watermark",
      verified: "2026-10-10",
    },
    note: "Affiliate link: fliki.ai/?via=youraitoolstack",
  },

  // ── Email Marketing ────────────────────────────────────
  convertkit: {
    id: "convertkit",
    name: "ConvertKit",
    url: "https://convertkit.com",
    category: "email-marketing",
    trackingParams: {},
    isActive: false, // Unverified: plain link, no affiliate tracking (audit 2026-08-19)
    lastChecked: "2026-08-19",
  },
  mailchimp: {
    id: "mailchimp",
    name: "Mailchimp",
    url: "https://mailchimp.com",
    category: "email-marketing",
    trackingParams: {},
    isActive: false, // Unverified: plain link, no affiliate tracking (audit 2026-08-19)
    lastChecked: "2026-08-19",
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
    isActive: false, // Unverified: plain link, no affiliate tracking (audit 2026-08-19)
    lastChecked: "2026-08-19",
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
    isActive: false, // Unverified: plain link, no affiliate tracking (audit 2026-08-19)
    lastChecked: "2026-08-19",
  },

  // ── Design & Creative ──────────────────────────────────
  canva: {
    id: "canva",
    name: "Canva",
    url: "https://www.canva.com",
    category: "design-creative",
    trackingParams: {},
    isActive: false, // Unverified: plain link, no affiliate tracking (audit 2026-08-19)
    lastChecked: "2026-08-19",
  },
  midjourney: {
    id: "midjourney",
    name: "Midjourney",
    url: "https://www.midjourney.com",
    category: "design-creative",
    trackingParams: {},
    isActive: false, // Unverified: plain link, no affiliate tracking (audit 2026-08-19)
    lastChecked: "2026-08-19",
  },
  "adobe-firefly": {
    id: "adobe-firefly",
    name: "Adobe Firefly",
    url: "https://www.adobe.com/products/firefly.html",
    category: "design-creative",
    trackingParams: {},
    isActive: false, // Unverified: plain link, no affiliate tracking (audit 2026-08-19)
    lastChecked: "2026-08-19",
  },
  figma: {
    id: "figma",
    name: "Figma",
    url: "https://www.figma.com",
    category: "design-creative",
    trackingParams: {},
    isActive: false, // Unverified: plain link, no affiliate tracking (audit 2026-08-19)
    lastChecked: "2026-08-19",
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
    isActive: false, // Unverified: plain link, no affiliate tracking (audit 2026-08-19)
    lastChecked: "2026-08-19",
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
    isActive: false, // Unverified: plain link, no affiliate tracking (audit 2026-08-19)
    lastChecked: "2026-08-19",
  },
  "opus-clip": {
    id: "opus-clip",
    name: "Opus Clip",
    url: "https://opus.pro/?via=aitoolstack",
    category: "ai-video",
    trackingParams: {},
    isActive: true, // Approved 2026-07-07, own platform (affiliates.opus.pro), 20% recurring 12mo
    lastChecked: "2026-10-10",
    offer: {
      tagline: "Auto-cut long videos into captioned Shorts, Reels and TikToks",
      bestFor: "Podcasters and YouTubers repurposing long-form video",
      startingPrice: "$15/mo (Pro $14.50/mo annual)",
      freePlan: "Yes — 60 credits/mo, watermark",
      verified: "2026-10-10",
    },
    note: "Affiliate link: opus.pro/?via=aitoolstack | agent.opus.pro/?via=aitoolstack",
  },
  vizard: {
    id: "vizard",
    name: "Vizard",
    url: "https://vizard.ai",
    category: "ai-video",
    trackingParams: {},
    isActive: false, // Unverified: plain link, no affiliate tracking (audit 2026-08-19)
    lastChecked: "2026-08-19",
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
    isActive: false, // Unverified: plain link, no affiliate tracking (audit 2026-08-19)
    lastChecked: "2026-08-19",
  },
  n8n: {
    id: "n8n",
    name: "n8n",
    url: "https://n8n.io",
    category: "business-automation",
    trackingParams: {},
    isActive: false, // Unverified: plain link, no affiliate tracking (audit 2026-08-19)
    lastChecked: "2026-08-19",
  },
  bardeen: {
    id: "bardeen",
    name: "Bardeen",
    url: "https://www.bardeen.ai",
    category: "business-automation",
    trackingParams: {},
    isActive: false, // Unverified: plain link, no affiliate tracking (audit 2026-08-19)
    lastChecked: "2026-08-19",
  },
  activepieces: {
    id: "activepieces",
    name: "Activepieces",
    url: "https://www.activepieces.com",
    category: "business-automation",
    trackingParams: {},
    isActive: false, // Unverified: plain link, no affiliate tracking (audit 2026-08-19)
    lastChecked: "2026-08-19",
  },

  // ── Customer Support & Chatbots ────────────────────────
  intercom: {
    id: "intercom",
    name: "Intercom",
    url: "https://www.intercom.com",
    category: "customer-support",
    trackingParams: {},
    isActive: false, // Unverified: plain link, no affiliate tracking (audit 2026-08-19)
    lastChecked: "2026-08-19",
  },
  zendesk: {
    id: "zendesk",
    name: "Zendesk",
    url: "https://www.zendesk.com",
    category: "customer-support",
    trackingParams: {},
    isActive: false, // Unverified: plain link, no affiliate tracking (audit 2026-08-19)
    lastChecked: "2026-08-19",
  },
  tidio: {
    id: "tidio",
    name: "Tidio",
    url: "https://www.tidio.com",
    category: "customer-support",
    trackingParams: {},
    isActive: false, // Unverified: plain link, no affiliate tracking (audit 2026-08-19)
    lastChecked: "2026-08-19",
  },
  freshdesk: {
    id: "freshdesk",
    name: "Freshdesk",
    url: "https://www.freshworks.com/freshdesk",
    category: "customer-support",
    trackingParams: {},
    isActive: false, // Unverified: plain link, no affiliate tracking (audit 2026-08-19)
    lastChecked: "2026-08-19",
  },
  chatbase: {
    id: "chatbase",
    name: "Chatbase",
    url: "https://www.chatbase.co",
    category: "customer-support",
    trackingParams: {},
    isActive: false, // Unverified: plain link, no affiliate tracking (audit 2026-08-19)
    lastChecked: "2026-08-19",
  },
  teachable: {
    id: "teachable",
    name: "Teachable",
    url: "https://teachable.com",
    category: "business-automation",
    trackingParams: {},
    isActive: false, // Unverified: plain link, no affiliate tracking (audit 2026-08-19)
    lastChecked: "2026-08-19",
  },

  // ── AI Image Generation ────────────────────────────────
  "dall-e": {
    id: "dall-e",
    name: "DALL·E 3",
    url: "https://openai.com/dall-e-3",
    category: "ai-image",
    trackingParams: {},
    isActive: false, // Unverified: plain link, no affiliate tracking (audit 2026-08-19)
    lastChecked: "2026-08-19",
  },
  "stable-diffusion": {
    id: "stable-diffusion",
    name: "Stable Diffusion",
    url: "https://stability.ai",
    category: "ai-image",
    trackingParams: {},
    isActive: false, // Unverified: plain link, no affiliate tracking (audit 2026-08-19)
    lastChecked: "2026-08-19",
  },
  leonardo: {
    id: "leonardo",
    name: "Leonardo.ai",
    url: "https://leonardo.ai",
    category: "ai-image",
    trackingParams: {},
    isActive: false, // Unverified: plain link, no affiliate tracking (audit 2026-08-19)
    lastChecked: "2026-08-19",
  },

  // ── AI Coding ──────────────────────────────────────────
  "github-copilot": {
    id: "github-copilot",
    name: "GitHub Copilot",
    url: "https://github.com/features/copilot",
    category: "ai-coding",
    trackingParams: {},
    isActive: false, // Unverified: plain link, no affiliate tracking (audit 2026-08-19)
    lastChecked: "2026-08-19",
  },
  cursor: {
    id: "cursor",
    name: "Cursor",
    url: "https://cursor.sh",
    category: "ai-coding",
    trackingParams: {},
    isActive: false, // Unverified: plain link, no affiliate tracking (audit 2026-08-19)
    lastChecked: "2026-08-19",
  },
  replit: {
    id: "replit",
    name: "Replit",
    url: "https://replit.com",
    category: "ai-coding",
    trackingParams: {},
    isActive: false, // Unverified: plain link, no affiliate tracking (audit 2026-08-19)
    lastChecked: "2026-08-19",
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
