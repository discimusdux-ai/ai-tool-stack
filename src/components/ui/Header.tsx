"use client";

import Link from "next/link";
import { useState } from "react";
import { CATEGORIES } from "@/lib/constants";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">⚡</span>
          <span className="text-xl font-extrabold text-gray-900">
            AI Tool <span className="text-brand-600">Stack</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/categories"
            className="text-sm font-medium text-gray-600 transition-colors hover:text-brand-600"
          >
            Categories
          </Link>
          <Link
            href="/blog"
            className="text-sm font-medium text-gray-600 transition-colors hover:text-brand-600"
          >
            Reviews
          </Link>
          <Link
            href="/compare"
            className="text-sm font-medium text-gray-600 transition-colors hover:text-brand-600"
          >
            Compare
          </Link>
          <Link
            href="/newsletter"
            className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
          >
            Get Newsletter
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-gray-100 bg-white px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            <Link
              href="/categories"
              className="text-sm font-medium text-gray-600"
              onClick={() => setMobileOpen(false)}
            >
              Categories
            </Link>
            <Link
              href="/blog"
              className="text-sm font-medium text-gray-600"
              onClick={() => setMobileOpen(false)}
            >
              Reviews
            </Link>
            <Link
              href="/compare"
              className="text-sm font-medium text-gray-600"
              onClick={() => setMobileOpen(false)}
            >
              Compare
            </Link>
            <Link
              href="/newsletter"
              className="rounded-lg bg-brand-600 px-4 py-2 text-center text-sm font-semibold text-white"
              onClick={() => setMobileOpen(false)}
            >
              Get Newsletter
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
