"use client";
import { useEffect, useState } from "react";

export function ReadingProgress() {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const el = document.getElementById("article-body");
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = el.offsetHeight - window.innerHeight;
      const done = Math.min(Math.max(-rect.top, 0), Math.max(total, 1));
      setPct(total > 0 ? (done / total) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed left-0 top-0 z-[60] h-1 w-full bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-brand-500 via-brand-400 to-accent-400 transition-[width] duration-150"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}
