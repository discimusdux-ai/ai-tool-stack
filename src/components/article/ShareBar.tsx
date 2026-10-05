"use client";
import { useState } from "react";

export function ShareBar({ url, title }: { url: string; title: string }) {
  const [copied, setCopied] = useState(false);
  const u = encodeURIComponent(url);
  const t = encodeURIComponent(title);
  const btn = "flex h-9 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 text-sm text-gray-300 transition hover:border-brand-400/50 hover:bg-brand-500/10 hover:text-white";
  return (
    <div className="flex flex-wrap items-center gap-2">
      <a className={btn} href={`https://x.com/intent/post?url=${u}&text=${t}`} target="_blank" rel="noopener noreferrer">𝕏 Share</a>
      <a className={btn} href={`https://www.linkedin.com/sharing/share-offsite/?url=${u}`} target="_blank" rel="noopener noreferrer">in Share</a>
      <button
        type="button"
        className={btn}
        onClick={() => {
          navigator.clipboard?.writeText(url);
          setCopied(true);
          setTimeout(() => setCopied(false), 1800);
        }}
      >
        {copied ? "✓ Copied" : "🔗 Copy link"}
      </button>
    </div>
  );
}
