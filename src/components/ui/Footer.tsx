import Link from "next/link";
import { SITE_CONFIG, CATEGORIES } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-white/8 bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 group">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600 text-sm shadow-lg shadow-brand-600/30">
                ⚡
              </span>
              <span className="text-lg font-extrabold text-white">
                Your AI <span className="text-brand-400">Tool Stack</span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-gray-500">
              Honest, in-depth reviews and comparisons of the best AI and SaaS
              tools. Helping businesses make smarter software decisions.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-gray-400">
              Categories
            </h3>
            <ul className="space-y-2">
              {CATEGORIES.slice(0, 6).map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/categories/${cat.slug}`}
                    className="text-sm text-gray-500 transition-colors hover:text-brand-400"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-gray-400">
              Resources
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/blog", label: "Latest Reviews" },
                { href: "/compare", label: "Comparisons" },
                { href: "/newsletter", label: "Newsletter" },
                { href: "/about", label: "About Us" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-500 transition-colors hover:text-brand-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-gray-400">
              Legal
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/privacy", label: "Privacy Policy" },
                { href: "/terms", label: "Terms of Service" },
                { href: "/disclosure", label: "Affiliate Disclosure" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-500 transition-colors hover:text-brand-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/8 pt-8 md:flex-row">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <p className="text-xs text-gray-600">
            Affiliate Disclosure: Some links on this site are affiliate links. We may earn a commission at no extra cost to you.
          </p>
        </div>
      </div>
    </footer>
  );
}
