"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

const QUICK_CATEGORIES = [
  { label: "AI Writing", slug: "ai-writing", emoji: "✍️" },
  { label: "AI Coding", slug: "ai-coding", emoji: "💻" },
  { label: "Design", slug: "design-creative", emoji: "🎨" },
  { label: "SEO", slug: "seo-marketing", emoji: "📈" },
  { label: "Video", slug: "ai-video", emoji: "🎬" },
  { label: "Automation", slug: "business-automation", emoji: "⚡" },
];

const SUGGESTIONS = [
  "Best AI writing tools",
  "ChatGPT vs Claude",
  "Cursor vs GitHub Copilot",
  "Best SEO tools 2026",
  "Midjourney alternatives",
  "Monday.com review",
];

export function HeroSearch() {
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);
  const [highlightIndex, setHighlightIndex] = useState(-1);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const filtered = query.length > 1
    ? SUGGESTIONS.filter((s) => s.toLowerCase().includes(query.toLowerCase())).slice(0, 4)
    : SUGGESTIONS.slice(0, 4);

  const handleSubmit = (val?: string) => {
    const q = val || query;
    if (!q.trim()) return;
    router.push(`/blog?q=${encodeURIComponent(q.trim())}`);
  };

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (!focused) return;
      if (e.key === "ArrowDown") setHighlightIndex((i) => Math.min(i + 1, filtered.length - 1));
      if (e.key === "ArrowUp") setHighlightIndex((i) => Math.max(i - 1, -1));
      if (e.key === "Enter") {
        if (highlightIndex >= 0) {
          handleSubmit(filtered[highlightIndex]);
          setFocused(false);
        } else {
          handleSubmit();
        }
      }
      if (e.key === "Escape") setFocused(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [focused, highlightIndex, filtered, query]);

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Search input */}
      <div className="relative">
        <div
          className={`flex items-center gap-3 rounded-2xl border ${
            focused ? "border-brand-400/60 shadow-lg shadow-brand-900/30" : "border-white/10"
          } bg-white/5 px-4 py-3 backdrop-blur-sm transition-all`}
        >
          <svg className="h-5 w-5 shrink-0 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => { setQuery(e.target.value); setHighlightIndex(-1); }}
            onFocus={() => setFocused(true)}
            onBlur={() => setTimeout(() => setFocused(false), 150)}
            placeholder="Search tools, comparisons, reviews..."
            className="flex-1 bg-transparent text-white placeholder-gray-500 outline-none text-sm md:text-base"
          />
          {query && (
            <button
              onClick={() => { setQuery(""); inputRef.current?.focus(); }}
              className="text-gray-500 hover:text-gray-300 transition-colors"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
          <button
            onClick={() => handleSubmit()}
            className="shrink-0 rounded-xl bg-brand-600 px-4 py-1.5 text-sm font-semibold text-white transition-all hover:bg-brand-500 hover:-translate-y-0.5"
          >
            Search
          </button>
        </div>

        {/* Dropdown suggestions */}
        {focused && (
          <div className="absolute left-0 right-0 top-full z-50 mt-2 overflow-hidden rounded-2xl border border-white/10 bg-gray-900/95 backdrop-blur-xl shadow-2xl shadow-black/50">
            <div className="p-2">
              <p className="px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-gray-500">
                {query.length > 1 ? "Results" : "Popular searches"}
              </p>
              {filtered.map((s, i) => (
                <button
                  key={s}
                  className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition-colors ${
                    i === highlightIndex ? "bg-brand-500/20 text-white" : "text-gray-300 hover:bg-white/5"
                  }`}
                  onMouseDown={() => { setQuery(s); handleSubmit(s); }}
                >
                  <svg className="h-4 w-4 shrink-0 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Quick category pills */}
      <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
        <span className="text-xs text-gray-500 mr-1">Quick:</span>
        {QUICK_CATEGORIES.map((cat) => (
          <button
            key={cat.slug}
            onClick={() => router.push(`/categories/${cat.slug}`)}
            className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-gray-300 transition-all hover:border-brand-400/40 hover:bg-brand-500/10 hover:text-brand-300"
          >
            <span>{cat.emoji}</span>
            {cat.label}
          </button>
        ))}
      </div>
    </div>
  );
}
