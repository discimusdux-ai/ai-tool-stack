import { AFFILIATE_PROGRAMS, CATEGORIES } from "@/lib/constants";

export interface ToolReviewData {
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  rating: number;
  price: string;
  priceNote: string;
  tagline: string;
  description: string;
  longDescription: string;
  pros: string[];
  cons: string[];
  verdict: string;
  bestFor: string;
  notFor: string;
  affiliateUrl: string;
  features: { name: string; description: string }[];
  pricingTiers: { name: string; price: string; features: string[] }[];
  alternatives: string[];
  faqs: { q: string; a: string }[];
  commission: string;
  commissionType: string;
}

export const TOOL_REVIEWS: Record<string, ToolReviewData> = {
  "jasper-ai": {
    slug: "jasper-ai",
    name: "Jasper AI",
    category: "AI Writing",
    categorySlug: "ai-writing",
    rating: 4.7,
    price: "From $49/mo",
    priceNote: "Free trial available",
    tagline: "The enterprise AI writing platform for marketing teams",
    description: "Enterprise-grade AI writing and marketing platform for teams.",
    longDescription: "Jasper AI is the gold standard for teams that need consistent, brand-aligned content at scale. With its Brand Voice feature, multi-modal content workflows, and deep integrations with Surfer SEO and Grammarly, Jasper has become the go-to platform for marketing teams at companies like Airbnb, Hubspot, and IBM.",
    pros: [
      "Best-in-class Brand Voice customization",
      "Campaign workflows for multi-asset content creation",
      "Deep integrations: Surfer SEO, Grammarly, Google Docs",
      "Team collaboration with approval workflows",
      "50+ templates covering every content type",
      "Jasper Chat for iterative content refinement",
    ],
    cons: [
      "Higher price point than solo-user alternatives",
      "Word limits on lower-tier plans can feel restrictive",
      "Steeper learning curve for first-time AI writing users",
    ],
    verdict: "Jasper is the clear winner for marketing teams producing high-volume, brand-consistent content. The ROI pays for itself within a few content pieces when you factor in time saved. Solo bloggers and budget-conscious creators should look at Copy.ai or Writesonic instead.",
    bestFor: "Marketing teams, content agencies, enterprise brands needing brand voice consistency",
    notFor: "Solo bloggers on tight budgets or one-off copy needs",
    affiliateUrl: "https://www.jasper.ai",
    features: [
      { name: "Brand Voice", description: "Upload your brand guidelines and past content — Jasper learns your voice and applies it consistently across all outputs." },
      { name: "Campaigns", description: "Build multi-asset content campaigns from a single brief: blog posts, social captions, emails, and ads together." },
      { name: "Jasper Chat", description: "Conversational AI interface for iterative content creation, editing, and refinement." },
      { name: "SEO Mode", description: "Integration with Surfer SEO for real-time content optimization as you write." },
      { name: "50+ Templates", description: "Pre-built templates for ads, emails, blog posts, product descriptions, video scripts, and more." },
      { name: "Team Collaboration", description: "Shared workspaces, approval workflows, and user permissions for team environments." },
    ],
    pricingTiers: [
      { name: "Creator", price: "$49/mo", features: ["1 user", "1 Brand Voice", "Unlimited AI words", "50+ templates", "Jasper Chat", "Browser extension"] },
      { name: "Pro", price: "$69/mo", features: ["Up to 5 users", "3 Brand Voices", "SEO mode with Surfer", "Campaigns", "3 Instant Campaigns", "Performance analytics"] },
      { name: "Business", price: "Custom", features: ["Unlimited users", "Unlimited Brand Voices", "Custom AI model fine-tuning", "API access", "SSO / SAML", "Dedicated support"] },
    ],
    alternatives: ["copy-ai", "writesonic", "rytr"],
    faqs: [
      { q: "Does Jasper have a free trial?", a: "Yes, Jasper offers a 7-day free trial on all plans. No credit card required for the trial." },
      { q: "How does Brand Voice work?", a: "You provide Jasper with examples of your existing content and brand guidelines. It analyzes the style, tone, and vocabulary to generate content that sounds authentically like your brand." },
      { q: "Can Jasper write long-form blog posts?", a: "Yes. Jasper's long-form assistant and Campaign features are specifically built for blog posts up to 4,000+ words, complete with outlines, intros, and section-by-section generation." },
      { q: "Does Jasper integrate with SEO tools?", a: "Jasper has a native Surfer SEO integration in its SEO Mode. This lets you optimize content for target keywords in real-time as you write." },
    ],
    commission: "30% recurring for 12 months",
    commissionType: "recurring",
  },

  "semrush": {
    slug: "semrush",
    name: "Semrush",
    category: "SEO & Marketing",
    categorySlug: "seo-marketing",
    rating: 4.8,
    price: "From $139.95/mo",
    priceNote: "7-day free trial available",
    tagline: "The all-in-one SEO toolkit trusted by 10M+ marketing professionals",
    description: "All-in-one SEO, content marketing, and competitive analysis toolkit.",
    longDescription: "Semrush is the industry's most comprehensive SEO and digital marketing platform. With over 55 tools covering keyword research, backlink analysis, site auditing, content optimization, social media, and PPC research, it's the platform of choice for SEO agencies, in-house teams, and serious content marketers worldwide.",
    pros: [
      "Largest keyword database — 25+ billion keywords",
      "Comprehensive competitor analysis including ad strategies",
      "Site audit tool catches 130+ technical SEO issues",
      "Content Marketing toolkit with SEO Writing Assistant",
      "PPC and paid search research capabilities",
      "Local SEO and rank tracking tools",
    ],
    cons: [
      "Expensive for solo users and small teams",
      "Steep learning curve given the breadth of features",
      "Some data accuracy issues in low-traffic niches",
    ],
    verdict: "Semrush is the most complete SEO toolkit on the market. If budget allows, it's the single tool that can replace 5-6 individual SEO tools. The $200/sale affiliate commission makes it one of the best affiliate programs in the industry too.",
    bestFor: "SEO agencies, in-house marketing teams, content operations at scale",
    notFor: "Bloggers needing basic keyword research only (Ubersuggest or free tools suffice)",
    affiliateUrl: "https://www.semrush.com",
    features: [
      { name: "Keyword Research", description: "25B+ keyword database with difficulty scores, search volume trends, and keyword gap analysis." },
      { name: "Competitor Analysis", description: "Organic and paid competitor research including traffic estimates, top pages, and ad copy." },
      { name: "Backlink Analytics", description: "Comprehensive backlink database with toxic link detection and disavow recommendations." },
      { name: "Site Audit", description: "Technical SEO crawler checking 130+ factors including Core Web Vitals, crawlability, and on-page." },
      { name: "Position Tracking", description: "Daily rank tracking for your keywords and competitors across devices and locations." },
      { name: "Content Marketing", description: "Topic research, SEO content templates, and real-time writing assistant." },
    ],
    pricingTiers: [
      { name: "Pro", price: "$139.95/mo", features: ["5 projects", "500 keywords to track", "10,000 results/report", "Site audit", "Position tracking", "1 user"] },
      { name: "Guru", price: "$249.95/mo", features: ["15 projects", "1,500 keywords", "30,000 results/report", "Content Marketing toolkit", "Historical data", "3 users"] },
      { name: "Business", price: "$499.95/mo", features: ["40 projects", "5,000 keywords", "50,000 results/report", "API access", "White-label reports", "5 users"] },
    ],
    alternatives: ["ahrefs", "surfer-seo", "moz"],
    faqs: [
      { q: "Is Semrush worth the price?", a: "For SEO agencies and in-house teams, absolutely. A single Semrush subscription replaces tools like Ahrefs, Moz, SpyFu, and BuzzSumo. For solo bloggers, the Pro plan at $139.95/mo is significant — consider the free trial first." },
      { q: "How accurate is Semrush keyword data?", a: "Semrush pulls from clickstream data and search engine results. Accuracy is excellent for high-volume keywords. For niche terms with under 100 searches/month, take volume estimates with a grain of salt." },
      { q: "Does Semrush have a free version?", a: "Semrush offers 10 free searches/day with a free account. This covers basic keyword lookups but not full competitor analysis or site auditing." },
      { q: "Semrush vs Ahrefs — which is better?", a: "Semrush wins for breadth (PPC research, content tools, local SEO). Ahrefs wins for backlink data accuracy and interface simplicity. Most agencies use both." },
    ],
    commission: "$200/sale + 40% recurring",
    commissionType: "hybrid",
  },

  "clickup": {
    slug: "clickup",
    name: "ClickUp",
    category: "Project Management",
    categorySlug: "project-management",
    rating: 4.6,
    price: "Free plan available",
    priceNote: "Paid plans from $7/user/mo",
    tagline: "One app to replace them all — tasks, docs, goals, and chat",
    description: "All-in-one productivity platform replacing multiple apps.",
    longDescription: "ClickUp is the most feature-rich project management platform available, designed to replace tools like Trello, Asana, Notion, Slack, and Google Docs in a single workspace. With 15+ views, powerful automation, and an AI assistant (ClickUp Brain), it's a legitimate contender for teams of any size.",
    pros: [
      "Extremely generous free plan (unlimited tasks and members)",
      "15+ views: List, Board, Gantt, Calendar, Mind Map, and more",
      "ClickUp Brain AI for task creation, summaries, and automation",
      "Custom fields, statuses, and workflows",
      "Native docs and wikis",
      "Time tracking and workload management built in",
    ],
    cons: [
      "Feature overload can feel overwhelming for new users",
      "Mobile app less polished than desktop",
      "Occasional performance issues at scale",
    ],
    verdict: "ClickUp delivers exceptional value, especially on the free plan. If you're willing to invest time in setup, it can genuinely replace 3-5 separate tools. Teams that want a simpler interface should look at Asana or Linear instead.",
    bestFor: "Teams wanting an all-in-one workspace, startups replacing multiple tools",
    notFor: "Teams wanting simplicity — ClickUp's complexity can slow down adoption",
    affiliateUrl: "https://clickup.com",
    features: [
      { name: "ClickUp Brain", description: "AI assistant for generating tasks, summarizing threads, writing docs, and automating workflows." },
      { name: "15+ Views", description: "Visualize work as lists, boards, Gantt charts, calendars, timelines, mind maps, and more." },
      { name: "Custom Workflows", description: "Build custom statuses, fields, and automation rules without code." },
      { name: "Docs", description: "Rich text documents and wikis linked directly to tasks and projects." },
      { name: "Goals & OKRs", description: "Track team goals with measurable targets tied to tasks and projects." },
      { name: "Time Tracking", description: "Native time tracking with estimates, reports, and billable time management." },
    ],
    pricingTiers: [
      { name: "Free Forever", price: "$0", features: ["Unlimited tasks", "Unlimited members", "100MB storage", "2 factor auth", "Whiteboards (limited)", "ClickUp AI add-on available"] },
      { name: "Unlimited", price: "$7/user/mo", features: ["Unlimited storage", "Unlimited integrations", "Unlimited dashboards", "Guests & permissions", "Goals & portfolios", "ClickUp AI add-on"] },
      { name: "Business", price: "$12/user/mo", features: ["Google SSO", "Custom exporting", "Advanced time tracking", "Workload management", "Mind Maps", "ClickUp Brain included"] },
    ],
    alternatives: ["notion", "asana", "monday"],
    faqs: [
      { q: "Is ClickUp actually free forever?", a: "Yes. The Free Forever plan has no time limit and includes unlimited tasks, members, and basic features. Storage is limited to 100MB, and some advanced features require paid plans." },
      { q: "How does ClickUp compare to Asana?", a: "ClickUp has more features and a better free plan. Asana has a cleaner interface and better adoption for non-technical teams. If your team has time to learn, ClickUp delivers more value." },
      { q: "Can ClickUp replace Notion?", a: "Partially. ClickUp Docs covers basic wiki and documentation needs. Notion's docs are more powerful for knowledge bases. Most teams use ClickUp for project management and keep Notion for documentation." },
      { q: "Does ClickUp have a mobile app?", a: "Yes, iOS and Android apps are available. The mobile experience is functional but lighter than the desktop app. Most power features are desktop-first." },
    ],
    commission: "$4-5/signup",
    commissionType: "one-time",
  },

  "convertkit": {
    slug: "convertkit",
    name: "ConvertKit",
    category: "Email Marketing",
    categorySlug: "email-marketing",
    rating: 4.5,
    price: "Free up to 1,000 subscribers",
    priceNote: "Paid plans from $25/mo",
    tagline: "Email marketing built for creators, newsletters, and online businesses",
    description: "Email marketing and automation built for creators and small businesses.",
    longDescription: "ConvertKit (now rebranding as Kit) was built specifically for creators — bloggers, YouTubers, podcasters, course creators, and independent writers. It strips away the complexity of enterprise email tools and focuses on the workflows creators actually need: growing a list, selling digital products, and building subscriber relationships.",
    pros: [
      "Generous free plan — up to 1,000 subscribers",
      "Creator-focused workflows (courses, launches, newsletters)",
      "Visual automation builder that's actually intuitive",
      "Tagged-based segmentation instead of multiple lists",
      "Native commerce for selling digital products",
      "Excellent deliverability rates",
    ],
    cons: [
      "Less design flexibility than Mailchimp for visual emails",
      "No drag-and-drop email builder (text-focused by design)",
      "Pricing scales quickly with subscriber growth",
    ],
    verdict: "ConvertKit is the best email platform for creators and independent businesses. The automation is powerful, the free plan is genuinely useful, and the commerce features let you monetize your list directly. Heavy e-commerce brands should look at Klaviyo instead.",
    bestFor: "Bloggers, YouTubers, course creators, newsletter writers, indie hackers",
    notFor: "E-commerce brands needing cart abandonment, transactional emails, or Shopify-deep integration",
    affiliateUrl: "https://convertkit.com",
    features: [
      { name: "Visual Automations", description: "Drag-and-drop automation builder for welcome sequences, launch campaigns, and subscriber journeys." },
      { name: "Tag-Based Segmentation", description: "Tag subscribers based on behavior, interests, and purchases — no messy list management." },
      { name: "Creator Commerce", description: "Sell digital products, subscriptions, and paid newsletters directly to your email list." },
      { name: "Landing Pages", description: "Built-in landing page and opt-in form builder with dozens of templates." },
      { name: "Paid Newsletter (Recommendations)", description: "Monetize your newsletter with paid subscriptions and recommend other creators for mutual growth." },
      { name: "Deliverability", description: "Industry-leading inbox placement rates with dedicated IP warming for growing lists." },
    ],
    pricingTiers: [
      { name: "Free", price: "$0", features: ["Up to 1,000 subscribers", "Unlimited email sends", "Landing pages", "Forms", "Community support", "No automations"] },
      { name: "Creator", price: "$25/mo", features: ["1,000 subscribers (scales)", "Unlimited automations", "Integrations", "Free migration", "Live chat support", "30-day free trial"] },
      { name: "Creator Pro", price: "$50/mo", features: ["Advanced reporting", "Subscriber scoring", "Custom Facebook audiences", "Newsletter referrals", "Priority support"] },
    ],
    alternatives: ["mailchimp", "activecampaign", "beehiiv"],
    faqs: [
      { q: "Is ConvertKit free?", a: "Yes. ConvertKit's free plan supports up to 1,000 subscribers with unlimited email sends, landing pages, and forms. Automations and integrations require a paid plan from $25/mo." },
      { q: "How does ConvertKit compare to Mailchimp?", a: "ConvertKit wins on automation, deliverability, and creator features. Mailchimp wins on visual email design and e-commerce integrations. If you're a creator, ConvertKit is the better choice." },
      { q: "Can I sell products through ConvertKit?", a: "Yes. ConvertKit Commerce lets you sell digital products, ebooks, courses, and paid newsletter subscriptions directly. They take a 3.5% + 30¢ transaction fee." },
      { q: "What's the difference between Creator and Creator Pro?", a: "Creator Pro adds subscriber scoring, Facebook custom audiences, a newsletter referral system, and advanced reporting. Most creators start with Creator and upgrade as their list grows." },
    ],
    commission: "30% recurring",
    commissionType: "recurring",
  },

  "cursor": {
    slug: "cursor",
    name: "Cursor",
    category: "AI Coding Assistants",
    categorySlug: "ai-coding",
    rating: 4.6,
    price: "Free plan available",
    priceNote: "Pro from $20/mo",
    tagline: "The AI-first code editor that pairs you with Claude and GPT-4",
    description: "AI-first code editor built for pair programming with AI models.",
    longDescription: "Cursor is a fork of VS Code rebuilt from the ground up for AI-assisted development. It's not just an autocomplete extension — it's a full IDE where AI is the first-class citizen. With Tab (predictive edits), Composer (multi-file generation), and deep codebase awareness, Cursor has become the editor of choice for tens of thousands of developers.",
    pros: [
      "Works in VS Code — zero learning curve for existing users",
      "Codebase-aware AI that understands your entire project",
      "Composer can generate and edit across multiple files simultaneously",
      "Tab feature predicts your next edit, not just autocomplete",
      "Uses frontier models: Claude 3.5 Sonnet, GPT-4o",
      "Privacy mode keeps your code off training data",
    ],
    cons: [
      "Monthly cost adds up compared to free GitHub Copilot tier",
      "Heavy AI usage can hit rate limits on lower plans",
      "Linux support still slightly behind Windows/Mac",
    ],
    verdict: "Cursor is the best AI code editor available today. If you're doing serious development work, the $20/mo Pro plan pays for itself in hours saved within the first week. GitHub Copilot is a fine alternative for lighter use cases.",
    bestFor: "Full-stack developers, solo founders building products, engineers doing greenfield development",
    notFor: "Developers who prefer JetBrains IDEs or work in environments where VS Code isn't viable",
    affiliateUrl: "https://cursor.com",
    features: [
      { name: "Tab (Predictive Edits)", description: "AI predicts your next code edit — not just the next line, but context-aware multi-line completions." },
      { name: "Composer", description: "Generate entire features or edit across multiple files simultaneously with a single natural language instruction." },
      { name: "Chat with Codebase", description: "@codebase lets you ask questions about your entire project — 'where is X configured?' or 'find all places this function is called.'" },
      { name: "Model Selection", description: "Switch between Claude 3.5 Sonnet, GPT-4o, and other frontier models mid-session." },
      { name: "Rules for AI", description: "Set project-level instructions to guide AI behavior: coding standards, preferred libraries, architectural constraints." },
      { name: "Privacy Mode", description: "Enable to ensure your code is never used for AI training or stored on Cursor's servers." },
    ],
    pricingTiers: [
      { name: "Free (Hobby)", price: "$0", features: ["2,000 completions", "50 slow requests", "Basic Composer access", "VS Code extension included"] },
      { name: "Pro", price: "$20/mo", features: ["Unlimited Tab completions", "500 fast requests/mo", "Unlimited slow requests", "Claude 3.5 & GPT-4o access", "Privacy mode"] },
      { name: "Business", price: "$40/user/mo", features: ["Everything in Pro", "Team management", "SSO (SAML)", "Privacy mode enforced", "Centralized billing", "Admin dashboard"] },
    ],
    alternatives: ["github-copilot", "tabnine", "codeium"],
    faqs: [
      { q: "Do I need to learn a new editor?", a: "No. Cursor is built on VS Code. All your extensions, themes, keybindings, and settings transfer immediately. It looks and feels identical until you press Tab or open Composer." },
      { q: "Cursor vs GitHub Copilot — which is better?", a: "Cursor is significantly more powerful for serious development. Copilot is better for casual code assistance or developers already invested in the GitHub ecosystem. The multi-file Composer feature alone justifies Cursor's cost." },
      { q: "Is my code safe?", a: "With Privacy Mode enabled, Cursor doesn't store your code or use it for training. Without it, code snippets may be sent to AI providers for processing. Enterprise plans enforce privacy mode by default." },
      { q: "Does Cursor work offline?", a: "Core editing works offline. AI features require an internet connection to call the underlying models." },
    ],
    commission: "20% recurring",
    commissionType: "recurring",
  },

  "zapier": {
    slug: "zapier",
    name: "Zapier",
    category: "Business Automation",
    categorySlug: "business-automation",
    rating: 4.6,
    price: "Free plan available",
    priceNote: "Paid plans from $19.99/mo",
    tagline: "Connect 7,000+ apps and automate your work without code",
    description: "Connect and automate workflows across 7,000+ apps with no code.",
    longDescription: "Zapier is the dominant no-code automation platform, connecting over 7,000 apps through a simple trigger-action workflow model. From basic two-step automations (Zaps) to multi-step workflows with filters, delays, and code steps, Zapier handles everything from Gmail-to-Slack notifications to complex multi-system business processes.",
    pros: [
      "7,000+ app integrations — broadest catalog by far",
      "No-code interface accessible to non-technical users",
      "Multi-step Zaps with filters, formatters, and paths",
      "Zapier Tables and Interfaces for lightweight databases/apps",
      "AI Actions for natural language automation",
      "Excellent documentation and community",
    ],
    cons: [
      "Expensive vs. Make for high-volume workflows",
      "Complex logic requires workarounds compared to Make",
      "Task-based pricing can spike with automations that run frequently",
    ],
    verdict: "Zapier is the best automation platform for non-technical users who need to connect mainstream business apps quickly. For developers or teams with complex logic needs, Make (Integromat) offers more power at lower cost.",
    bestFor: "Business users, SMBs, teams needing quick app integrations without engineering resources",
    notFor: "High-volume automations where task costs add up, or complex branching logic that Make handles better",
    affiliateUrl: "https://zapier.com",
    features: [
      { name: "Zaps (Workflows)", description: "Build multi-step automated workflows triggered by events in one app and acting in others." },
      { name: "7,000+ Integrations", description: "The largest app integration catalog including every major business tool." },
      { name: "Paths (Branching)", description: "Conditional logic — different workflow paths based on data values." },
      { name: "Zapier Tables", description: "Lightweight database built into Zapier for storing and referencing automation data." },
      { name: "AI Actions", description: "Describe what you want in natural language and Zapier builds the automation." },
      { name: "Scheduled Triggers", description: "Run automations on a schedule — daily digests, weekly reports, monthly cleanups." },
    ],
    pricingTiers: [
      { name: "Free", price: "$0", features: ["100 tasks/mo", "5 Zaps", "2-step Zaps only", "15 minute polling", "Basic apps"] },
      { name: "Starter", price: "$19.99/mo", features: ["750 tasks/mo", "20 Zaps", "Multi-step Zaps", "Filters", "Formatter", "Premium apps"] },
      { name: "Professional", price: "$49/mo", features: ["2,000 tasks/mo", "Unlimited Zaps", "Paths (branching)", "Custom logic", "Auto-replay", "Priority support"] },
    ],
    alternatives: ["make", "n8n", "activepieces"],
    faqs: [
      { q: "What is a Zapier task?", a: "Each time a Zap successfully runs an action step, it uses one task. A 3-step Zap that triggers 100 times per month uses 300 tasks (100 × 3 action steps)." },
      { q: "Zapier vs Make — which should I use?", a: "Zapier for simplicity and breadth of integrations. Make for complex workflows, better value on high volume, and more powerful data manipulation. Many power users use Zapier for simple tasks and Make for complex ones." },
      { q: "Can Zapier connect to custom apps?", a: "Yes via Webhooks. Any app that can send or receive webhooks (HTTP requests) can be integrated with Zapier, even without an official integration." },
      { q: "Is there a free plan?", a: "Yes. Zapier's free plan allows 100 tasks/month and 5 Zaps, but limits you to 2-step workflows. Enough to test and automate simple personal tasks." },
    ],
    commission: "Up to $250/referral",
    commissionType: "one-time",
  },

  "canva": {
    slug: "canva",
    name: "Canva",
    category: "Design & Creative",
    categorySlug: "design-creative",
    rating: 4.7,
    price: "Free plan available",
    priceNote: "Pro from $15/mo",
    tagline: "The design platform that makes everyone a designer",
    description: "Visual design platform making professional design accessible to everyone.",
    longDescription: "Canva has democratized graphic design by making professional-quality design accessible to anyone without design training. With 600,000+ templates, an AI Magic Suite, video editing, presentation tools, and team collaboration features, Canva has evolved from a simple card maker into a complete visual content platform used by 150M+ creators and businesses.",
    pros: [
      "Massive template library — 600,000+ professionally designed templates",
      "Magic Studio AI for text-to-image, background removal, and AI video",
      "Drag-and-drop interface with zero learning curve",
      "Brand Kit for consistent visual identity across all designs",
      "Presentations, social graphics, print, and video in one tool",
      "Team collaboration with live editing",
    ],
    cons: [
      "Export quality limitations on free plan",
      "Not suitable for complex illustrations or print-production work",
      "AI features sometimes produce inconsistent results",
    ],
    verdict: "Canva is essential for any non-designer who creates visual content. The free plan is genuinely powerful. Pro is worth it for teams, brand kit features, and the expanded AI tools. Designers needing pixel-perfect control should look at Figma or Adobe.",
    bestFor: "Marketers, solopreneurs, small business owners, social media managers, educators",
    notFor: "Professional graphic designers needing vector precision, complex animations, or print-ready CMYK output",
    affiliateUrl: "https://www.canva.com",
    features: [
      { name: "Magic Studio", description: "AI suite including Magic Design, Magic Write, Magic Edit, background removal, and AI image generation." },
      { name: "600K+ Templates", description: "Templates for every format: social posts, presentations, logos, flyers, videos, email headers, and more." },
      { name: "Brand Kit", description: "Store brand colors, fonts, and logos for consistent application across all designs." },
      { name: "Video Editor", description: "Edit video with stock footage, animations, transitions, and auto-captions." },
      { name: "Presentations", description: "Build presentation decks with animations, presenter notes, and live audience engagement." },
      { name: "Print & Publish", description: "Order prints directly from Canva or export for external printing with bleed marks." },
    ],
    pricingTiers: [
      { name: "Free", price: "$0", features: ["750,000+ free templates", "5GB storage", "Basic AI tools", "Export as PDF, PNG, JPG", "3 team members"] },
      { name: "Pro", price: "$15/mo", features: ["600K+ templates", "100GB storage", "Full Magic Studio AI", "Brand Kit (unlimited)", "Background remover", "Priority support"] },
      { name: "Teams", price: "$10/user/mo", features: ["Everything in Pro", "Built for 3+ users", "Team collaboration", "Admin controls", "Brand Kit management", "Usage analytics"] },
    ],
    alternatives: ["adobe-firefly", "figma", "midjourney"],
    faqs: [
      { q: "Is Canva really free?", a: "Yes. Canva's free plan is genuinely useful with 750,000+ templates, 5GB storage, and basic AI tools. Pro unlocks the full template library, 100GB storage, and the Magic Studio AI suite." },
      { q: "Can Canva replace Photoshop?", a: "For most marketing and content creation tasks, yes. For professional photo retouching, layer masking, or precise color work, Photoshop is still superior. Canva fills the 80% use case Photoshop is overkill for." },
      { q: "Does Canva have video editing?", a: "Yes. Canva's video editor handles basic video editing, stock footage, animations, auto-captions, and background music. For professional video production, use dedicated tools like Premiere Pro or Descript." },
      { q: "Can multiple people edit a Canva design at the same time?", a: "Yes. Canva Pro and Teams support real-time collaborative editing, similar to Google Docs. Free users can share designs for others to view or comment." },
    ],
    commission: "Up to $36/sale",
    commissionType: "one-time",
  },

  "hubspot": {
    slug: "hubspot",
    name: "HubSpot",
    category: "CRM & Sales",
    categorySlug: "crm-sales",
    rating: 4.6,
    price: "Free CRM available",
    priceNote: "Paid hubs from $20/mo",
    tagline: "The all-in-one CRM platform for growing businesses",
    description: "All-in-one CRM platform with marketing, sales, and service hubs.",
    longDescription: "HubSpot is the most comprehensive CRM platform available, offering dedicated hubs for marketing, sales, customer service, content management, and operations — all built around a free CRM core. Used by 200,000+ companies, it's the default choice for B2B companies looking to align their entire customer journey.",
    pros: [
      "Free CRM with unlimited contacts — genuinely full-featured",
      "Unified platform: one data layer for marketing, sales, and service",
      "Powerful marketing automation and lead nurturing",
      "Sales pipeline with deal tracking, email sequences, and calling",
      "Reporting and analytics across the full funnel",
      "Extensive integrations and app marketplace",
    ],
    cons: [
      "Pricing escalates quickly when unlocking pro features",
      "Can be overkill for very small teams",
      "Advanced features locked behind expensive tiers",
    ],
    verdict: "HubSpot's free tier is genuinely best-in-class and hard to beat for startups. As you scale, the pricing becomes a significant investment — but the unified data and automation capabilities justify it for growing B2B companies.",
    bestFor: "B2B companies, SaaS startups, marketing and sales teams wanting unified visibility",
    notFor: "Solo founders or very small teams who need just a CRM (Pipedrive is cheaper)",
    affiliateUrl: "https://www.hubspot.com",
    features: [
      { name: "Free CRM", description: "Unlimited contacts, deal pipeline, meeting scheduling, and email tracking — permanently free." },
      { name: "Marketing Hub", description: "Email marketing, landing pages, forms, SEO, social media, and marketing automation." },
      { name: "Sales Hub", description: "Deal tracking, email sequences, calling, meeting scheduling, and sales forecasting." },
      { name: "Service Hub", description: "Ticketing, knowledge base, live chat, and customer feedback surveys." },
      { name: "AI Features", description: "ChatSpot AI assistant, AI email writer, and AI content generation across all hubs." },
      { name: "Reporting", description: "Custom dashboards and cross-hub reporting on the entire customer lifecycle." },
    ],
    pricingTiers: [
      { name: "Free", price: "$0", features: ["Unlimited contacts", "Deal pipeline", "Forms & landing pages", "Live chat", "Meeting scheduler", "Email tracking"] },
      { name: "Starter", price: "$20/mo", features: ["Remove HubSpot branding", "Email automations", "Ad retargeting", "Multiple pipelines", "Basic reporting", "Up to 1,000 contacts"] },
      { name: "Professional", price: "$1,600/mo", features: ["Advanced automation", "A/B testing", "Custom reporting", "Teams & permissions", "Sales sequences", "Forecasting"] },
    ],
    alternatives: ["pipedrive", "close-crm", "salesforce"],
    faqs: [
      { q: "Is HubSpot CRM really free forever?", a: "Yes. HubSpot's free CRM has no time limit and includes unlimited contacts, a deal pipeline, email tracking, meeting scheduling, and basic forms. Paid features are in the Marketing, Sales, and Service Hubs." },
      { q: "How does HubSpot compare to Salesforce?", a: "HubSpot is easier to implement and more affordable for SMBs. Salesforce is more customizable and scalable for enterprises with complex needs. Most companies under $50M ARR find HubSpot sufficient." },
      { q: "What's the HubSpot affiliate commission?", a: "HubSpot's affiliate program pays $250 for Starter and $500-$1,000+ for Professional tier referrals. It's one of the highest-paying CRM affiliate programs available." },
      { q: "Can HubSpot handle e-commerce?", a: "HubSpot has e-commerce integrations with Shopify, WooCommerce, and Magento. For dedicated e-commerce CRM and email, Klaviyo is typically the better choice." },
    ],
    commission: "$250-$1,000/sale",
    commissionType: "one-time",
  },

  "runway": {
    slug: "runway",
    name: "Runway",
    category: "AI Video",
    categorySlug: "ai-video",
    rating: 4.7,
    price: "Free plan available",
    priceNote: "Standard from $15/mo",
    tagline: "AI video generation and editing — from text to cinematic video",
    description: "AI video generation and editing platform with Gen-3 Alpha text-to-video.",
    longDescription: "Runway is the leading creative AI platform for video, pushing the frontier of generative video with its Gen-3 Alpha model. Used by filmmakers, marketers, and agencies, it combines powerful text-to-video and image-to-video generation with a full suite of video editing tools including background removal, inpainting, and motion tracking.",
    pros: [
      "Gen-3 Alpha produces the most cinematic AI video available",
      "Image-to-video creates consistent character motion",
      "Video inpainting for object removal and replacement",
      "Green screen / background removal without a studio",
      "Motion tracking and controlled camera movements",
      "Actively pushing the frontier — new features monthly",
    ],
    cons: [
      "GPU credits can run out quickly on complex generations",
      "Generation times can be slow (1-5 minutes per clip)",
      "Still occasional artifacts in complex motion scenes",
    ],
    verdict: "Runway is the best tool for marketers and creators who need high-quality AI-generated video. Gen-3 Alpha's quality is genuinely impressive. Serious video production teams should explore it alongside their traditional toolkit.",
    bestFor: "Marketers, content creators, indie filmmakers, agencies creating AI video content",
    notFor: "Users needing simple clip editing — CapCut or DaVinci Resolve are easier and cheaper",
    affiliateUrl: "https://runwayml.com",
    features: [
      { name: "Gen-3 Alpha Text-to-Video", description: "Generate cinematic video clips from text prompts with control over camera movement, style, and motion." },
      { name: "Image-to-Video", description: "Animate any image with consistent character movement and scene dynamics." },
      { name: "Video Inpainting", description: "Remove or replace objects, people, or backgrounds within existing video footage." },
      { name: "Background Removal", description: "Remove video backgrounds without a green screen using AI segmentation." },
      { name: "Motion Tracking", description: "Attach graphics or effects to tracked objects or people in video footage." },
      { name: "AI Magic Tools", description: "Expand frames, generate B-roll, upscale video resolution, and auto-subtitle." },
    ],
    pricingTiers: [
      { name: "Free", price: "$0", features: ["125 credits/mo", "720p generation", "Watermarked exports", "3 projects", "Basic editing tools"] },
      { name: "Standard", price: "$15/mo", features: ["625 credits/mo", "No watermarks", "1080p generation", "Unlimited projects", "Upscaling", "Priority generation"] },
      { name: "Pro", price: "$35/mo", features: ["2,250 credits/mo", "4K upscaling", "Custom AI training", "Advanced camera controls", "Multi-motion brush", "Priority support"] },
    ],
    alternatives: ["heygen", "descript", "sora"],
    faqs: [
      { q: "What are Runway credits?", a: "Credits are consumed for AI generation tasks. One second of Gen-3 video costs approximately 5-10 credits. Standard plan's 625 credits gives roughly 60-125 seconds of generated video per month." },
      { q: "How long does video generation take?", a: "Gen-3 Alpha clips (4-10 seconds) typically take 60-180 seconds to generate. Complex scenes with multiple elements may take longer. Pro plan users get queue priority." },
      { q: "Can I use Runway for commercial projects?", a: "Yes. Standard and Pro plan outputs can be used for commercial purposes. Free tier outputs include a watermark. Check Runway's content policy for specific restrictions." },
      { q: "Runway vs Sora — which is better?", a: "Runway Gen-3 Alpha is currently more accessible and widely available. Sora (OpenAI) has impressive results but limited API access. Runway remains the practical choice for most creators in 2026." },
    ],
    commission: "20% recurring",
    commissionType: "recurring",
  },

  "intercom": {
    slug: "intercom",
    name: "Intercom",
    category: "Customer Support",
    categorySlug: "customer-support",
    rating: 4.7,
    price: "From $39/mo",
    priceNote: "14-day free trial",
    tagline: "AI-first customer support — Fin AI Agent resolves 70%+ of tickets",
    description: "AI-first customer support with Fin AI Agent resolving up to 70% of tickets.",
    longDescription: "Intercom has reinvented itself as an AI-first customer support platform centered on Fin, their AI agent built on GPT-4. Fin reads your help center, resolves common questions autonomously, and hands off complex issues to human agents — all within the same customer-facing Messenger experience.",
    pros: [
      "Fin AI Agent resolves 70%+ of support tickets without human intervention",
      "Omnichannel: email, chat, SMS, and social in one inbox",
      "Messenger is the best-in-class customer-facing chat widget",
      "Deep integrations with Salesforce, HubSpot, Jira, and more",
      "Proactive messaging and targeted campaigns",
      "Product tours for in-app onboarding",
    ],
    cons: [
      "One of the more expensive customer support platforms",
      "Pricing can be opaque — seat costs add up",
      "Advanced automation requires careful setup",
    ],
    verdict: "Intercom is the best customer support platform for SaaS companies. Fin AI's ability to autonomously resolve 70%+ of tickets delivers immediate ROI by reducing support headcount requirements.",
    bestFor: "SaaS companies, tech startups, product-led growth businesses with high support volume",
    notFor: "E-commerce support (Gorgias is better) or very small teams that can't justify the cost",
    affiliateUrl: "https://www.intercom.com",
    features: [
      { name: "Fin AI Agent", description: "GPT-4 powered AI agent that reads your knowledge base and autonomously resolves customer questions." },
      { name: "Shared Inbox", description: "Unified inbox for all customer conversations across chat, email, and social channels." },
      { name: "Messenger", description: "Best-in-class customer-facing chat widget with customizable appearance and behavior." },
      { name: "Proactive Messages", description: "Target users with in-app messages, banners, and tooltips based on behavior." },
      { name: "Product Tours", description: "Interactive in-app onboarding flows without engineering resources." },
      { name: "Help Center", description: "Branded knowledge base that powers both Fin AI and self-service." },
    ],
    pricingTiers: [
      { name: "Essential", price: "$39/seat/mo", features: ["Shared inbox", "Basic AI features", "Help center", "Messenger", "3rd party integrations", "Email support"] },
      { name: "Advanced", price: "$99/seat/mo", features: ["Fin AI Agent", "Workflows automation", "Round robin assignment", "CSAT surveys", "Reporting", "Phone support"] },
      { name: "Expert", price: "$139/seat/mo", features: ["Workload management", "Custom roles", "SSO", "Multiple help centers", "SLA management", "24/7 support"] },
    ],
    alternatives: ["zendesk", "freshdesk", "tidio"],
    faqs: [
      { q: "How does Fin AI work?", a: "Fin reads your Intercom Help Center articles and uses GPT-4 to answer customer questions in natural language. When it can't answer confidently, it escalates to a human agent seamlessly." },
      { q: "What's the typical Fin AI resolution rate?", a: "Intercom reports Fin resolves 50-70% of conversations without human intervention. Your rate depends on help center quality and question complexity." },
      { q: "How does Intercom pricing work?", a: "Intercom charges per seat (per agent). The Essential plan is $39/seat/mo. Fin AI usage may have additional per-resolution fees depending on your contract." },
      { q: "Is Intercom good for e-commerce?", a: "Intercom can handle e-commerce but Gorgias is purpose-built for it with Shopify/WooCommerce deep integrations, order management, and CSAT tracking tailored to retail." },
    ],
    commission: "15% recurring for 12 months",
    commissionType: "recurring",
  },
};

export function getToolReview(slug: string): ToolReviewData | null {
  return TOOL_REVIEWS[slug] || null;
}

export function getAllToolReviews(): ToolReviewData[] {
  return Object.values(TOOL_REVIEWS);
}

export function getToolsByCategory(categorySlug: string): ToolReviewData[] {
  return Object.values(TOOL_REVIEWS).filter(
    (tool) => tool.categorySlug === categorySlug
  );
}

export function getFeaturedTools(limit = 6): ToolReviewData[] {
  return Object.values(TOOL_REVIEWS)
    .sort((a, b) => b.rating - a.rating)
    .slice(0, limit);
}
