import type { Metadata } from "next";
import "@/styles/globals.css";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";

export const metadata: Metadata = {
  title: {
    default: "AI Tool Stack — Find the Best AI & SaaS Tools for Your Business",
    template: "%s | AI Tool Stack",
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
  authors: [{ name: "AI Tool Stack" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "AI Tool Stack",
    title: "AI Tool Stack — Find the Best AI & SaaS Tools",
    description:
      "Expert reviews and comparisons of the best AI and SaaS tools for businesses and creators.",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Tool Stack",
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
      </head>
      <body className="flex min-h-screen flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
