"use client";

import { useState } from "react";

export function ExpandableFeature({
  name,
  description,
}: {
  name: string;
  description: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <button
      onClick={() => setOpen(!open)}
      className="w-full text-left rounded-xl border border-white/10 bg-[#0d1117] p-5 transition-all hover:border-brand-500/40"
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-brand-600/20 text-brand-400 text-sm ring-1 ring-brand-500/20">
            ✦
          </div>
          <span className="font-semibold text-white">{name}</span>
        </div>
        <span
          className={`flex-shrink-0 text-brand-400 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        >
          ▼
        </span>
      </div>
      {open && (
        <p className="mt-3 pl-11 text-sm text-gray-400 leading-relaxed">
          {description}
        </p>
      )}
    </button>
  );
}

export function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <button
      onClick={() => setOpen(!open)}
      className="w-full text-left rounded-xl border border-white/10 bg-[#0d1117] p-6 transition-all hover:border-brand-500/40"
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-semibold text-white text-left">{q}</h3>
        <span
          className={`flex-shrink-0 text-brand-400 transition-transform mt-0.5 ${
            open ? "rotate-180" : ""
          }`}
        >
          ▼
        </span>
      </div>
      {open && (
        <p className="mt-3 text-sm text-gray-400 leading-relaxed">{a}</p>
      )}
    </button>
  );
}
