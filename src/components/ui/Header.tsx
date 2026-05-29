"use client";

import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-gray-950/80 backdrop-blur-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600 text-sm shadow-lg shadow-brand-600/30 group-hover:bg-brand-500 transition-colors">
            ⚡
          </span>
          <span className="text-lg font-extrabold text-white">
            Your AI <span className="text-brand-400">Tool Stack</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/categories"
            className="text-sm font-medium text-gray-400 transition-colors hover:text-white"
          >
            Categories
          </Link>
          <Link
            href="/blog"
            className="text-sm font-medium text-gray-400 transition-colors hover:text-white"
          >
            Reviews
          </Link>
          <Link
            href="/compare"
            className="text-sm font-medium text-gray-400 transition-colors hover:text-white"
          >
            Compare
          </Link>
          <Link
            href="/newsletter"
            className="rounded-xl bg-brand-600 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-brand-500 shadow-lg shadow-brand-600/20"
          >
            Get Newsletter
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="text-gray-400 hover:text-white md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-white/8 bg-gray-950 px-4 pb-4 md:hidden">
          <nav className="flex flex-col gap-3 pt-4">
            <Link href="/categories" className="text-sm font-medium text-gray-400 hover:text-white" onClick={() => setMobileOpen(false)}>
              Categories
            </Link>
            <Link href="/blog" className="text-sm font-medium text-gray-400 hover:text-white" onClick={() => setMobileOpen(false)}>
              Reviews
            </Link>
            <Link href="/compare" className="text-sm font-medium text-gray-400 hover:text-white" onClick={() => setMobileOpen(false)}>
              Compare
            </Link>
            <Link
              href="/newsletter"
              className="inline-block rounded-xl bg-brand-600 px-4 py-2 text-center text-sm font-semibold text-white hover:bg-brand-500"
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
