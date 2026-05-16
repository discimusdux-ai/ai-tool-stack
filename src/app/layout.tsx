import type { Metadata } from "next";
import Script from "next/script";
import "@/styles/globals.css";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";

export const metadata: Metadata = {
  title: {
    default: "Your AI Tool Stack — Find the Best AI & SaaS Tools for Your Business",
    template: "%s | Your AI Tool Stack",
  },
  description:
    "Expert reviews, honest comparisons, and in-depth guides for the best AI and SaaS tools in 2026. Find the perfect tools to grow your business.",
  keywords: [
    "AI tools",
    "SaaS reviews",
    "software comparisons",
    "best AI tools 2026",
    "business software",
    "productivity tools",
  ],
  authors: [{ name: "Your AI Tool Stack" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Your AI Tool Stack",
    title: "Your AI Tool Stack — Find the Best AI & SaaS Tools",
    description:
      "Expert reviews and comparisons of the best AI and SaaS tools for businesses and creators.",
    url: "https://youraitoolstack.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Your AI Tool Stack",
    description: "Expert AI & SaaS tool reviews and comparisons.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://youraitoolstack.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Your AI Tool Stack",
  "url": "https://youraitoolstack.com",
  "description": "Expert reviews, honest comparisons, and in-depth guides for the best AI and SaaS tools in 2026.",
  "publisher": {
    "@type": "Organization",
    "name": "Your AI Tool Stack",
    "url": "https://youraitoolstack.com"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://youraitoolstack.com/blog?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex min-h-screen flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-GPGPK3MJN0"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GPGPK3MJN0');
          `}
        </Script>
      </body>
    </html>
  );
}
