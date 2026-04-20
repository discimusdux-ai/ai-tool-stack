import Link from "next/link";
import { SITE_CONFIG, CATEGORIES } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl">⚡</span>
              <span className="text-lg font-extrabold text-gray-900">
                AI Tool <span className="text-brand-600">Stack</span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-gray-500">
              Honest, in-depth reviews and comparisons of the best AI and SaaS
              tools. Helping businesses make smarter software decisions.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-900">
              Categories
            </h3>
            <ul className="space-y-2">
              {CATEGORIES.slice(0, 6).map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/categories/${cat.slug}`}
                    className="text-sm text-gray-500 transition-colors hover:text-brand-600"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-900">
              Resources
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-gray-500 transition-colors hover:text-brand-600"
                >
                  Latest Reviews
                </Link>
              </li>
              <li>
                <Link
                  href="/compare"
                  className="text-sm text-gray-500 transition-colors hover:text-brand-600"
                >
                  Comparisons
                </Link>
              </li>
              <li>
                <Link
                  href="/newsletter"
                  className="text-sm text-gray-500 transition-colors hover:text-brand-600"
                >
                  Newsletter
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-gray-500 transition-colors hover:text-brand-600"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-900">
              Legal
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-gray-500 transition-colors hover:text-brand-600"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-gray-500 transition-colors hover:text-brand-600"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/disclosure"
                  className="text-sm text-gray-500 transition-colors hover:text-brand-600"
                >
                  Affiliate Disclosure
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-8 md:flex-row">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} {SITE_CONFIG.name}. All rights
            reserved.
          </p>
          <p className="text-xs text-gray-400">
            Affiliate Disclosure: Some links on this site are affiliate links.
            We may earn a commission at no extra cost to you.
          </p>
        </div>
      </div>
    </footer>
  );
}
