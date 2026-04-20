# ⚡ AI Tool Stack

AI & SaaS affiliate marketing platform — expert reviews, honest comparisons, and automated content engine.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS 4
- **Content**: MDX
- **Database**: Supabase (subscribers, analytics)
- **Hosting**: Vercel
- **Language**: TypeScript

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/                    # Next.js routes
│   ├── page.tsx            # Homepage
│   ├── blog/               # Blog articles
│   ├── reviews/            # Tool reviews
│   ├── compare/            # Head-to-head comparisons
│   ├── categories/         # Category pages
│   └── api/                # Subscribe + Analytics endpoints
├── components/
│   ├── ui/                 # Header, Footer, CategoryCard
│   ├── affiliate/          # ComparisonTable, ProductCard, CTAButton, RatingStars
│   ├── email/              # NewsletterForm
│   └── seo/                # StructuredData
├── content/                # MDX articles
├── lib/                    # Supabase client, affiliate links, constants
└── styles/                 # Global CSS + Tailwind theme
```

## Environment Variables

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

## Affiliate Programs

| Program | Commission | Type |
|---------|-----------|------|
| Jasper AI | 30% recurring/12mo | AI Writing |
| Semrush | $200 + 40% recurring | SEO |
| Surfer SEO | 25% recurring/12mo | SEO |
| ConvertKit | 30% recurring | Email |
| Pipedrive | 20-33% recurring/12mo | CRM |
| Unbounce | 20% lifetime | Landing Pages |
| Teachable | 30% recurring | Courses |
| Monday.com | Up to $150/sale | PM |
| ClickUp | $4-5/signup | PM |
| Canva | Up to $36/sale | Design |

## License

Private — Discimusdux LLC
