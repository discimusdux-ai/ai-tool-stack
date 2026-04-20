import type { ComparisonData } from "./types";

export const COMPARISONS: ComparisonData[] = [
  {
    slug: "jasper-vs-copyai",
    title: "Jasper vs Copy.ai",
    description:
      "Which AI writing tool is better for content marketing in 2026? We compare features, pricing, output quality, and more.",
    category: "AI Writing",
    winner: "jasper-ai",
    verdict:
      "Jasper wins for teams and long-form content with its Brand Voice and campaign features. Copy.ai is the better choice for solo marketers who need quick, affordable copy generation.",
    tools: [
      {
        id: "jasper-ai",
        name: "Jasper AI",
        rating: 4.7,
        price: "$49/mo",
        bestFor: "Teams & long-form content",
        pros: [
          "Superior brand voice customization",
          "Excellent long-form editor with templates",
          "Team collaboration and workflows",
          "Integrations with Surfer SEO and Grammarly",
          "Multi-language support (30+ languages)",
        ],
        cons: [
          "Higher price point than competitors",
          "Can feel complex for simple tasks",
          "Word limits on lower tiers",
        ],
        features: {
          longForm: true,
          brandVoice: true,
          templates: "50+",
          teamFeatures: true,
          seoIntegration: true,
          api: true,
          freeTrialDays: "7",
          languages: "30+",
        },
      },
      {
        id: "copy-ai",
        name: "Copy.ai",
        rating: 4.4,
        price: "$36/mo",
        bestFor: "Solo marketers & quick copy",
        pros: [
          "Generous free plan with 2,000 words/month",
          "Intuitive chat-based interface",
          "Fast short-form copy generation",
          "Workflow automation features",
          "Growing template library",
        ],
        cons: [
          "Long-form output quality trails Jasper",
          "Fewer integrations available",
          "Brand voice less refined",
        ],
        features: {
          longForm: true,
          brandVoice: true,
          templates: "90+",
          teamFeatures: true,
          seoIntegration: false,
          api: true,
          freeTrialDays: "Free plan",
          languages: "25+",
        },
      },
    ],
    featureLabels: {
      longForm: "Long-Form Editor",
      brandVoice: "Brand Voice",
      templates: "Templates",
      teamFeatures: "Team Features",
      seoIntegration: "SEO Integration",
      api: "API Access",
      freeTrialDays: "Free Trial",
      languages: "Languages",
    },
  },
  {
    slug: "semrush-vs-ahrefs",
    title: "Semrush vs Ahrefs",
    description:
      "The definitive 2026 SEO tool comparison. We test keyword research, backlink analysis, site audits, and rank tracking head-to-head.",
    category: "SEO Tools",
    winner: "semrush",
    verdict:
      "Semrush wins overall with its broader marketing suite covering SEO, PPC, social, and content marketing. Ahrefs is the stronger choice for pure backlink analysis and technical SEO research.",
    tools: [
      {
        id: "semrush",
        name: "Semrush",
        rating: 4.8,
        price: "$129.95/mo",
        bestFor: "All-in-one digital marketing",
        pros: [
          "Most comprehensive marketing toolkit available",
          "Superior PPC and advertising research",
          "Content marketing and social media tools",
          "Excellent keyword magic tool",
          "Detailed competitive analysis",
        ],
        cons: [
          "Higher learning curve",
          "Can be overwhelming for beginners",
          "Expensive for freelancers on lower tiers",
        ],
        features: {
          keywordDatabase: "26B+",
          backlinkIndex: "43T+ links",
          siteAudit: true,
          rankTracking: true,
          contentTools: true,
          ppcResearch: true,
          socialMedia: true,
          apiAccess: true,
        },
      },
      {
        id: "ahrefs",
        name: "Ahrefs",
        rating: 4.7,
        price: "$99/mo",
        bestFor: "SEO-focused teams & agencies",
        pros: [
          "Best-in-class backlink index",
          "Intuitive, clean interface",
          "Excellent content explorer for research",
          "Strong site audit capabilities",
          "Accurate rank tracking",
        ],
        cons: [
          "No built-in PPC research tools",
          "Limited social media features",
          "Per-user pricing adds up for teams",
        ],
        features: {
          keywordDatabase: "28B+",
          backlinkIndex: "35T+ links",
          siteAudit: true,
          rankTracking: true,
          contentTools: true,
          ppcResearch: false,
          socialMedia: false,
          apiAccess: true,
        },
      },
    ],
    featureLabels: {
      keywordDatabase: "Keyword Database",
      backlinkIndex: "Backlink Index",
      siteAudit: "Site Audit",
      rankTracking: "Rank Tracking",
      contentTools: "Content Tools",
      ppcResearch: "PPC Research",
      socialMedia: "Social Media Tools",
      apiAccess: "API Access",
    },
  },
  {
    slug: "monday-vs-clickup",
    title: "Monday.com vs ClickUp",
    description:
      "Comparing the two hottest project management tools of 2026. Features, pricing, templates, and team workflows analyzed.",
    category: "Productivity",
    winner: "clickup",
    verdict:
      "ClickUp wins on value with its generous free plan and deep customization. Monday.com is better for teams that want polished simplicity and visual project management.",
    tools: [
      {
        id: "monday",
        name: "Monday.com",
        rating: 4.5,
        price: "$9/seat/mo",
        bestFor: "Visual project management",
        pros: [
          "Beautiful, intuitive interface",
          "200+ workflow templates",
          "Strong automation builder",
          "Excellent dashboards and reporting",
          "Easy onboarding for non-technical teams",
        ],
        cons: [
          "Per-seat pricing gets expensive",
          "Less customizable than ClickUp",
          "Storage limits on lower plans",
        ],
        features: {
          freePlan: false,
          customFields: true,
          automations: true,
          timeTracking: true,
          docs: true,
          ganttCharts: true,
          apiAccess: true,
          mobileApp: true,
        },
      },
      {
        id: "clickup",
        name: "ClickUp",
        rating: 4.6,
        price: "$7/member/mo",
        bestFor: "Teams wanting maximum flexibility",
        pros: [
          "Generous free forever plan",
          "Extremely customizable workflows",
          "Built-in docs, whiteboards, and chat",
          "AI features across all plan tiers",
          "Lower per-user pricing",
        ],
        cons: [
          "Steeper learning curve due to depth",
          "Can feel cluttered with too many features",
          "Performance can lag on very large workspaces",
        ],
        features: {
          freePlan: true,
          customFields: true,
          automations: true,
          timeTracking: true,
          docs: true,
          ganttCharts: true,
          apiAccess: true,
          mobileApp: true,
        },
      },
    ],
    featureLabels: {
      freePlan: "Free Plan",
      customFields: "Custom Fields",
      automations: "Automations",
      timeTracking: "Time Tracking",
      docs: "Built-in Docs",
      ganttCharts: "Gantt Charts",
      apiAccess: "API Access",
      mobileApp: "Mobile App",
    },
  },
  {
    slug: "convertkit-vs-mailchimp",
    title: "ConvertKit vs Mailchimp",
    description:
      "Which email marketing platform is right for you? We compare creator-focused ConvertKit with the industry staple Mailchimp.",
    category: "Email Marketing",
    winner: "convertkit",
    verdict:
      "ConvertKit wins for creators, bloggers, and course sellers with its tag-based system and automation focus. Mailchimp is better for e-commerce businesses and teams needing design-heavy email campaigns.",
    tools: [
      {
        id: "convertkit",
        name: "ConvertKit",
        rating: 4.5,
        price: "$25/mo (1K subs)",
        bestFor: "Creators & bloggers",
        pros: [
          "Tag-based subscriber system (no duplicate charges)",
          "Powerful visual automation builder",
          "Built for creators with commerce features",
          "Excellent deliverability rates",
          "Clean, focused interface",
        ],
        cons: [
          "Fewer email template designs",
          "Limited reporting compared to Mailchimp",
          "No built-in CRM features",
        ],
        features: {
          freePlan: true,
          automations: true,
          landingPages: true,
          abTesting: true,
          ecommerce: true,
          segmentation: "Tag-based",
          templates: "Limited",
          analytics: "Basic",
        },
      },
      {
        id: "mailchimp",
        name: "Mailchimp",
        rating: 4.3,
        price: "$13/mo (500 subs)",
        bestFor: "E-commerce & small businesses",
        pros: [
          "Extensive email template library",
          "Strong e-commerce integrations",
          "Built-in CRM and audience tools",
          "Advanced analytics and reporting",
          "Social media scheduling included",
        ],
        cons: [
          "Charges for unsubscribed contacts",
          "Automation feels clunkier than ConvertKit",
          "Pricing jumps at higher tiers",
        ],
        features: {
          freePlan: true,
          automations: true,
          landingPages: true,
          abTesting: true,
          ecommerce: true,
          segmentation: "List-based",
          templates: "100+",
          analytics: "Advanced",
        },
      },
    ],
    featureLabels: {
      freePlan: "Free Plan",
      automations: "Automations",
      landingPages: "Landing Pages",
      abTesting: "A/B Testing",
      ecommerce: "E-Commerce",
      segmentation: "Segmentation",
      templates: "Email Templates",
      analytics: "Analytics",
    },
  },
];

export function getComparisonBySlug(
  slug: string
): ComparisonData | undefined {
  return COMPARISONS.find((c) => c.slug === slug);
}

export function getComparisonsByCategory(category: string): ComparisonData[] {
  return COMPARISONS.filter((c) => c.category === category);
}
