"use client";
import { useEffect, useState } from "react";

export interface TocItem { id: string; text: string; }

export function TableOfContents({ items }: { items: TocItem[] }) {
  const [active, setActive] = useState<string>(items[0]?.id ?? "");
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length) setActive(visible[0].target.id);
      },
      { rootMargin: "0px 0px -70% 0px" }
    );
    items.forEach((i) => {
      const el = document.getElementById(i.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [items]);

  if (items.length < 2) return null;
  return (
    <nav aria-label="Table of contents" className="rounded-2xl border border-white/10 bg-gray-900/60 p-5 backdrop-blur">
      <p className="mb-3 text-xs font-bold uppercase tracking-widest text-gray-500">On this page</p>
      <ul className="space-y-1 border-l border-white/10">
        {items.map((i) => (
          <li key={i.id}>
            <a
              href={`#${i.id}`}
              className={`-ml-px block border-l-2 py-1 pl-3 text-sm transition-colors ${
                active === i.id
                  ? "border-brand-400 font-semibold text-white"
                  : "border-transparent text-gray-400 hover:border-white/30 hover:text-gray-200"
              }`}
            >
              {i.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
