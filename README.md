# AI Tool Stack

AI & SaaS affiliate marketing platform — automated content, SEO-optimized reviews, comparison engine, and email funnels. Built with Next.js 15, Tailwind CSS, and Supabase.

## Tech Stack

- **Framework:** Next.js 15 (App Router, React 19)
- **Styling:** Tailwind CSS 4 + `@tailwindcss/typography`
- **Content:** MDX via `next-mdx-remote` + `gray-matter`
- **Database:** Supabase (PostgreSQL)
- **Deployment:** Vercel (planned)

## Project Structure

```
ai-tool-stack/
├── content/
│   └── blog/                    # MDX articles with frontmatter
├── src/
│   ├── app/
│   │   ├── blog/                # Blog listing + [slug] article pages
│   │   ├── compare/             # Comparison listing + [slug] pages
│   │   ├── categories/          # Category listing + [slug] pages
│   │   ├── newsletter/          # Newsletter signup page
│   │   ├── about/               # About page
│   │   ├── disclosure/          # Affiliate disclosure
│   │   ├── privacy/             # Privacy policy
│   │   ├── terms/               # Terms of service
│   │   ├── api/                 # API routes (analytics, subscribe)
│   │   ├── sitemap.ts           # Dynamic sitemap generation
│   │   ├── layout.tsx           # Root layout
│   │   └── page.tsx             # Homepage
│   ├── components/
│   │   ├── affiliate/           # CTAButton, ComparisonTable, ProductCard, RatingStars
│   │   ├── email/               # NewsletterForm
│   │   ├── seo/                 # StructuredData
│   │   └── ui/                  # Header, Footer, CategoryCard
│   ├── lib/
│   │   ├── affiliate-links.ts   # Centralized affiliate link management
│   │   ├── blog.ts              # MDX content reader/parser
│   │   ├── comparisons.ts       # Comparison data + utilities
│   │   ├── constants.ts         # Categories, programs, site config
│   │   ├── supabase.ts          # Supabase client + tracking helpers
│   │   └── types.ts             # Shared TypeScript types
│   └── styles/
│       └── globals.css           # Global styles + Tailwind
└── supabase/
    └── migrations/
        └── 001_initial_schema.sql  # Database schema
```

## Content System

Articles are MDX files in `content/blog/` with YAML frontmatter:

```mdx
---
title: "Best AI Writing Tools in 2026"
description: "..."
date: "2026-04-18"
category: "AI Writing"
tags: ["ai-writing", "content-marketing"]
featured: true
---

# Article content here...
```

## Supabase Schema

5 tables: `subscribers`, `analytics`, `articles`, `affiliate_clicks`, `email_sends`. See `supabase/migrations/001_initial_schema.sql` for full schema with RLS policies and helper functions.

## Getting Started

```bash
# Install dependencies
npm install

# Set environment variables
cp .env.example .env.local
# Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY

# Run development server
npm run dev
```

## Affiliate Links

All affiliate links are centralized in `src/lib/affiliate-links.ts`. Update partner IDs there — they propagate to all components automatically. Links include UTM parameters for internal analytics tracking.

## License

Private — All rights reserved.
