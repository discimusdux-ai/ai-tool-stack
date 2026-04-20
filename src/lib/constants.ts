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
    name: "Monday.com",
    slug: "monday",
    category: "project-management",
    commission: "Up to $150/sale",
    commissionType: "one-time",
    cookieDuration: "30 days",
    url: "#",
    description:
      "Work management platform for teams of all sizes.",
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
    featured: false,
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
    featured: true,
  },
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
];

export const SITE_CONFIG = {
  name: "AI Tool Stack",
  description: "Find the best AI & SaaS tools for your business",
  url: "https://aitoolstack.com",
  author: "AI Tool Stack Team",
  socials: {
    twitter: "https://twitter.com/aitoolstack",
    github: "https://github.com/discimusdux-ai/ai-tool-stack",
  },
};
