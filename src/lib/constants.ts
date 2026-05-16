export interface Category {
  name: string;
  slug: string;
  description: string;
  icon: string;
  toolCount: number;
}

export const CATEGORIES: Category[] = [
  {
    name: "AI Writing Tools",
    slug: "ai-writing",
    description:
      "Content generation, copywriting, and AI writing assistants for marketers and creators.",
    icon: "✍️",
    toolCount: 15,
  },
  {
    name: "SEO & Marketing",
    slug: "seo-marketing",
    description:
      "Search optimization, keyword research, and digital marketing automation platforms.",
    icon: "📈",
    toolCount: 12,
  },
  {
    name: "Project Management",
    slug: "project-management",
    description:
      "Task tracking, team collaboration, and workflow management tools.",
    icon: "📋",
    toolCount: 10,
  },
  {
    name: "Email Marketing",
    slug: "email-marketing",
    description:
      "Email automation, newsletter platforms, and subscriber management tools.",
    icon: "📧",
    toolCount: 8,
  },
  {
    name: "CRM & Sales",
    slug: "crm-sales",
    description:
      "Customer relationship management, sales pipelines, and lead tracking.",
    icon: "🤝",
    toolCount: 9,
  },
  {
    name: "Design & Creative",
    slug: "design-creative",
    description:
      "Graphic design, video editing, and creative AI tools for visual content.",
    icon: "🎨",
    toolCount: 11,
  },
  {
    name: "AI Coding Assistants",
    slug: "ai-coding",
    description:
      "Code generation, debugging, and developer productivity tools powered by AI.",
    icon: "💻",
    toolCount: 8,
  },
  {
    name: "Business Automation",
    slug: "business-automation",
    description:
      "Workflow automation, integration platforms, and no-code business tools.",
    icon: "⚡",
    toolCount: 10,
  },
  {
    name: "Web Hosting & Builders",
    slug: "web-hosting",
    description:
      "Website builders, hosting platforms, and deployment tools for every budget.",
    icon: "🌐",
    toolCount: 7,
  },
  {
    name: "AI Video & Podcasting",
    slug: "ai-video",
    description:
      "AI-powered video generation, editing, avatars, and content repurposing tools.",
    icon: "🎬",
    toolCount: 8,
  },
  {
    name: "Customer Support & Chatbots",
    slug: "customer-support",
    description:
      "AI chatbots, helpdesk platforms, and automated customer service tools.",
    icon: "💬",
    toolCount: 7,
  },
  {
    name: "AI Image Generation",
    slug: "ai-image",
    description:
      "Text-to-image generators, photo editing AI, and creative image tools.",
    icon: "🖼️",
    toolCount: 6,
  },
];

export interface AffiliateProgram {
  name: string;
  slug: string;
  category: string;
  commission: string;
  commissionType: "recurring" | "one-time" | "hybrid";
  cookieDuration: string;
  url: string;
  description: string;
  rating: number;
  featured: boolean;
}

export const AFFILIATE_PROGRAMS: AffiliateProgram[] = [
  // ── AI Writing ──────────────────────────────────────────
  {
    name: "Jasper AI",
    slug: "jasper-ai",
    category: "ai-writing",
    commission: "30% recurring for 12 months",
    commissionType: "recurring",
    cookieDuration: "30 days",
    url: "#",
    description:
      "Enterprise-grade AI writing and marketing platform for teams.",
    rating: 4.7,
    featured: true,
  },
  {
    name: "Copy.ai",
    slug: "copy-ai",
    category: "ai-writing",
    commission: "45% first month",
    commissionType: "one-time",
    cookieDuration: "60 days",
    url: "#",
    description:
      "AI-powered copywriting and workflow automation for marketers.",
    rating: 4.4,
    featured: false,
  },
  {
    name: "Writesonic",
    slug: "writesonic",
    category: "ai-writing",
    commission: "30% recurring",
    commissionType: "recurring",
    cookieDuration: "30 days",
    url: "#",
    description:
      "AI writing assistant for blog posts, ads, and product descriptions.",
    rating: 4.3,
    featured: false,
  },

  // ── SEO & Marketing ────────────────────────────────────
  {
    name: "Semrush",
    slug: "semrush",
    category: "seo-marketing",
    commission: "$200/sale + 40% recurring",
    commissionType: "hybrid",
    cookieDuration: "120 days",
    url: "#",
    description:
      "All-in-one SEO, content marketing, and competitive analysis toolkit.",
    rating: 4.8,
    featured: true,
  },
  {
    name: "Surfer SEO",
    slug: "surfer-seo",
    category: "seo-marketing",
    commission: "25% recurring for 12 months",
    commissionType: "recurring",
    cookieDuration: "30 days",
    url: "#",
    description: "AI-powered SEO content optimization and strategy platform.",
    rating: 4.6,
    featured: true,
  },
  {
    name: "Ahrefs",
    slug: "ahrefs",
    category: "seo-marketing",
    commission: "20% recurring",
    commissionType: "recurring",
    cookieDuration: "60 days",
    url: "#",
    description:
      "Industry-leading backlink analysis, keyword research, and SEO audit tools.",
    rating: 4.7,
    featured: true,
  },
  {
    name: "Unbounce",
    slug: "unbounce",
    category: "seo-marketing",
    commission: "20% lifetime recurring",
    commissionType: "recurring",
    cookieDuration: "120 days",
    url: "#",
    description:
      "AI-powered landing page builder with smart traffic optimization.",
    rating: 4.3,
    featured: false,
  },

  // ── Project Management ─────────────────────────────────
  {
    name: "Monday.com",
    slug: "monday",
    category: "project-management",
    commission: "Up to $150/sale",
    commissionType: "one-time",
    cookieDuration: "30 days",
    url: "#",
    description: "Work management platform for teams of all sizes.",
    rating: 4.5,
    featured: true,
  },
  {
    name: "ClickUp",
    slug: "clickup",
    category: "project-management",
    commission: "$4-5/signup",
    commissionType: "one-time",
    cookieDuration: "30 days",
    url: "#",
    description: "All-in-one productivity platform replacing multiple apps.",
    rating: 4.6,
    featured: true,
  },
  {
    name: "Notion",
    slug: "notion",
    category: "project-management",
    commission: "50% of first payment",
    commissionType: "one-time",
    cookieDuration: "30 days",
    url: "#",
    description:
      "Connected workspace for notes, docs, wikis, and project management.",
    rating: 4.7,
    featured: false,
  },

  // ── Email Marketing ────────────────────────────────────
  {
    name: "ConvertKit",
    slug: "convertkit",
    category: "email-marketing",
    commission: "30% recurring",
    commissionType: "recurring",
    cookieDuration: "90 days",
    url: "#",
    description:
      "Email marketing and automation built for creators and small businesses.",
    rating: 4.5,
    featured: true,
  },
  {
    name: "Mailchimp",
    slug: "mailchimp",
    category: "email-marketing",
    commission: "Up to $150/referral",
    commissionType: "one-time",
    cookieDuration: "30 days",
    url: "#",
    description:
      "All-in-one email marketing, CRM, and e-commerce platform.",
    rating: 4.3,
    featured: false,
  },
  {
    name: "ActiveCampaign",
    slug: "activecampaign",
    category: "email-marketing",
    commission: "20-30% recurring",
    commissionType: "recurring",
    cookieDuration: "90 days",
    url: "#",
    description:
      "Advanced email marketing automation with CRM and sales features.",
    rating: 4.5,
    featured: true,
  },

  // ── CRM & Sales ────────────────────────────────────────
  {
    name: "Pipedrive",
    slug: "pipedrive",
    category: "crm-sales",
    commission: "20-33% recurring for 12 months",
    commissionType: "recurring",
    cookieDuration: "90 days",
    url: "#",
    description: "Sales CRM designed to help small teams close more deals.",
    rating: 4.4,
    featured: true,
  },
  {
    name: "HubSpot",
    slug: "hubspot",
    category: "crm-sales",
    commission: "$250-$1,000/sale",
    commissionType: "one-time",
    cookieDuration: "180 days",
    url: "#",
    description:
      "All-in-one CRM platform with marketing, sales, and service hubs.",
    rating: 4.6,
    featured: true,
  },
  {
    name: "Close CRM",
    slug: "close-crm",
    category: "crm-sales",
    commission: "10% recurring for 12 months",
    commissionType: "recurring",
    cookieDuration: "60 days",
    url: "#",
    description:
      "Sales CRM built for startups and SMBs with built-in calling and email.",
    rating: 4.3,
    featured: false,
  },

  // ── Design & Creative ──────────────────────────────────
  {
    name: "Canva",
    slug: "canva",
    category: "design-creative",
    commission: "Up to $36/sale",
    commissionType: "one-time",
    cookieDuration: "30 days",
    url: "#",
    description:
      "Visual design platform making professional design accessible to everyone.",
    rating: 4.7,
    featured: true,
  },
  {
    name: "Midjourney",
    slug: "midjourney",
    category: "design-creative",
    commission: "Affiliate program pending",
    commissionType: "one-time",
    cookieDuration: "N/A",
    url: "#",
    description:
      "AI image generation creating stunning art and visuals from text prompts.",
    rating: 4.8,
    featured: true,
  },
  {
    name: "Adobe Firefly",
    slug: "adobe-firefly",
    category: "design-creative",
    commission: "85% first month / 8.33% recurring",
    commissionType: "hybrid",
    cookieDuration: "30 days",
    url: "#",
    description:
      "Adobe's generative AI creative tools integrated with Creative Cloud.",
    rating: 4.5,
    featured: false,
  },
  {
    name: "Figma",
    slug: "figma",
    category: "design-creative",
    commission: "Referral program",
    commissionType: "one-time",
    cookieDuration: "30 days",
    url: "#",
    description:
      "Collaborative interface design tool with AI-powered layout and prototyping.",
    rating: 4.8,
    featured: true,
  },

  // ── AI Coding ──────────────────────────────────────────
  {
    name: "GitHub Copilot",
    slug: "github-copilot",
    category: "ai-coding",
    commission: "Referral program",
    commissionType: "one-time",
    cookieDuration: "30 days",
    url: "#",
    description:
      "AI pair programmer that suggests code completions in your editor.",
    rating: 4.7,
    featured: true,
  },
  {
    name: "Cursor",
    slug: "cursor",
    category: "ai-coding",
    commission: "20% recurring",
    commissionType: "recurring",
    cookieDuration: "30 days",
    url: "#",
    description:
      "AI-first code editor built for pair programming with AI models.",
    rating: 4.6,
    featured: true,
  },
  {
    name: "Tabnine",
    slug: "tabnine",
    category: "ai-coding",
    commission: "25% recurring",
    commissionType: "recurring",
    cookieDuration: "60 days",
    url: "#",
    description:
      "AI code assistant with privacy-first approach and on-premise options.",
    rating: 4.3,
    featured: false,
  },
  {
    name: "Replit",
    slug: "replit",
    category: "ai-coding",
    commission: "20% first payment",
    commissionType: "one-time",
    cookieDuration: "30 days",
    url: "#",
    description:
      "Browser-based IDE with AI coding assistant and instant deployment.",
    rating: 4.4,
    featured: false,
  },

  // ── Business Automation ────────────────────────────────
  {
    name: "Zapier",
    slug: "zapier",
    category: "business-automation",
    commission: "Up to $250/referral",
    commissionType: "one-time",
    cookieDuration: "90 days",
    url: "#",
    description:
      "Connect and automate workflows across 7,000+ apps with no code.",
    rating: 4.6,
    featured: true,
  },
  {
    name: "Make (Integromat)",
    slug: "make",
    category: "business-automation",
    commission: "20% recurring for 12 months",
    commissionType: "recurring",
    cookieDuration: "120 days",
    url: "#",
    description:
      "Visual automation platform for complex workflows and integrations.",
    rating: 4.5,
    featured: true,
  },
  {
    name: "n8n",
    slug: "n8n",
    category: "business-automation",
    commission: "20% recurring",
    commissionType: "recurring",
    cookieDuration: "60 days",
    url: "#",
    description:
      "Open-source workflow automation with AI agent capabilities and self-hosting.",
    rating: 4.5,
    featured: true,
  },
  {
    name: "Bardeen",
    slug: "bardeen",
    category: "business-automation",
    commission: "25% recurring",
    commissionType: "recurring",
    cookieDuration: "30 days",
    url: "#",
    description:
      "Browser-based automation for web scraping, data entry, and workflows.",
    rating: 4.3,
    featured: false,
  },
  {
    name: "Teachable",
    slug: "teachable",
    category: "business-automation",
    commission: "30% recurring",
    commissionType: "recurring",
    cookieDuration: "90 days",
    url: "#",
    description:
      "Course creation platform for entrepreneurs and educators.",
    rating: 4.4,
    featured: false,
  },

  // ── Web Hosting ────────────────────────────────────────
  {
    name: "Vercel",
    slug: "vercel",
    category: "web-hosting",
    commission: "Referral credits",
    commissionType: "one-time",
    cookieDuration: "30 days",
    url: "#",
    description:
      "Frontend cloud platform for deploying Next.js and modern web apps.",
    rating: 4.8,
    featured: true,
  },
  {
    name: "Cloudflare",
    slug: "cloudflare",
    category: "web-hosting",
    commission: "$200-250/referral",
    commissionType: "one-time",
    cookieDuration: "60 days",
    url: "#",
    description:
      "CDN, DNS, security, and serverless platform for fast, secure websites.",
    rating: 4.7,
    featured: true,
  },
  {
    name: "Hostinger",
    slug: "hostinger",
    category: "web-hosting",
    commission: "60% per sale",
    commissionType: "one-time",
    cookieDuration: "30 days",
    url: "#",
    description:
      "Affordable web hosting with AI website builder and managed WordPress.",
    rating: 4.4,
    featured: false,
  },

  // ── AI Video & Podcasting ──────────────────────────────
  {
    name: "Runway",
    slug: "runway",
    category: "ai-video",
    commission: "20% recurring",
    commissionType: "recurring",
    cookieDuration: "30 days",
    url: "#",
    description:
      "AI video generation and editing platform with Gen-3 Alpha text-to-video.",
    rating: 4.7,
    featured: true,
  },
  {
    name: "HeyGen",
    slug: "heygen",
    category: "ai-video",
    commission: "20% recurring for 12 months",
    commissionType: "recurring",
    cookieDuration: "60 days",
    url: "#",
    description:
      "AI avatar video creation with 200+ avatars and 40+ languages.",
    rating: 4.5,
    featured: true,
  },
  {
    name: "Descript",
    slug: "descript",
    category: "ai-video",
    commission: "15% recurring",
    commissionType: "recurring",
    cookieDuration: "60 days",
    url: "#",
    description:
      "Edit video by editing text — revolutionary AI-powered video and podcast editor.",
    rating: 4.6,
    featured: true,
  },
  {
    name: "Opus Clip",
    slug: "opus-clip",
    category: "ai-video",
    commission: "25% recurring",
    commissionType: "recurring",
    cookieDuration: "30 days",
    url: "#",
    description:
      "AI-powered long-to-short video repurposing with viral clip detection.",
    rating: 4.4,
    featured: false,
  },
  {
    name: "CapCut",
    slug: "capcut",
    category: "ai-video",
    commission: "Referral program",
    commissionType: "one-time",
    cookieDuration: "30 days",
    url: "#",
    description:
      "Free AI video editor with auto-captions, effects, and templates.",
    rating: 4.5,
    featured: false,
  },

  // ── Customer Support & Chatbots ────────────────────────
  {
    name: "Intercom",
    slug: "intercom",
    category: "customer-support",
    commission: "15% recurring for 12 months",
    commissionType: "recurring",
    cookieDuration: "90 days",
    url: "#",
    description:
      "AI-first customer support with Fin AI Agent resolving up to 70% of tickets.",
    rating: 4.7,
    featured: true,
  },
  {
    name: "Zendesk",
    slug: "zendesk",
    category: "customer-support",
    commission: "$50-150/sale",
    commissionType: "one-time",
    cookieDuration: "90 days",
    url: "#",
    description:
      "Enterprise customer support suite with AI-powered ticketing and omnichannel.",
    rating: 4.5,
    featured: true,
  },
  {
    name: "Tidio",
    slug: "tidio",
    category: "customer-support",
    commission: "20% recurring",
    commissionType: "recurring",
    cookieDuration: "60 days",
    url: "#",
    description:
      "Live chat and AI chatbot platform built for small businesses and e-commerce.",
    rating: 4.4,
    featured: false,
  },
  {
    name: "Freshdesk",
    slug: "freshdesk",
    category: "customer-support",
    commission: "15% recurring",
    commissionType: "recurring",
    cookieDuration: "60 days",
    url: "#",
    description:
      "Affordable helpdesk with Freddy AI for ticket triage and automation.",
    rating: 4.3,
    featured: false,
  },
  {
    name: "Chatbase",
    slug: "chatbase",
    category: "customer-support",
    commission: "20% recurring",
    commissionType: "recurring",
    cookieDuration: "30 days",
    url: "#",
    description:
      "Build custom AI chatbots trained on your data — no code required.",
    rating: 4.3,
    featured: false,
  },

  // ── AI Image Generation ────────────────────────────────
  {
    name: "DALL·E 3",
    slug: "dall-e",
    category: "ai-image",
    commission: "Via OpenAI program",
    commissionType: "one-time",
    cookieDuration: "30 days",
    url: "#",
    description:
      "OpenAI's image generation model with exceptional prompt adherence and text rendering.",
    rating: 4.6,
    featured: true,
  },
  {
    name: "Leonardo.ai",
    slug: "leonardo",
    category: "ai-image",
    commission: "20% recurring",
    commissionType: "recurring",
    cookieDuration: "30 days",
    url: "#",
    description:
      "AI image generation platform with fine-tuning, game assets, and design tools.",
    rating: 4.5,
    featured: true,
  },
  {
    name: "Stable Diffusion",
    slug: "stable-diffusion",
    category: "ai-image",
    commission: "Via Stability AI",
    commissionType: "one-time",
    cookieDuration: "30 days",
    url: "#",
    description:
      "Open-source AI image generation with full model customization and local deployment.",
    rating: 4.4,
    featured: false,
  },
];

export const SITE_CONFIG = {
  name: "Your AI Tool Stack",
  description: "Find the best AI & SaaS tools for your business",
  url: "https://youraitoolstack.com",
  author: "Your AI Tool Stack Team",
  socials: {
    twitter: "https://twitter.com/youraitoolstack",
    github: "https://github.com/discimusdux-ai/ai-tool-stack",
  },
};
