"use client";

import { useState } from "react";
import Link from "next/link";

interface Tool {
  name: string;
  emoji: string;
  color: string;
  scores: { speed: number; ease: number; value: number; power: number; support: number };
  price: string;
  best: string;
}

const COMPARISON_PAIRS: { tools: [Tool, Tool]; slug: string }[] = [
  {
    slug: "cursor-vs-github-copilot",
    tools: [
      {
        name: "Cursor",
        emoji: "💻",
        color: "#6366f1",
        scores: { speed: 95, ease: 88, value: 90, power: 96, support: 80 },
        price: "$20/mo",
        best: "Full AI-native editor",
      },
      {
        name: "Copilot",
        emoji: "⚡",
        color: "#e2e8f0",
        scores: { speed: 88, ease: 92, value: 82, power: 85, support: 90 },
        price: "$10/mo",
        best: "IDE plugin approach",
      },
    ],
  },
  {
    slug: "monday-vs-clickup",
    tools: [
      {
        name: "Monday",
        emoji: "📋",
        color: "#f97316",
        scores: { speed: 90, ease: 93, value: 75, power: 88, support: 91 },
        price: "$9/seat",
        best: "Visual project mgmt",
      },
      {
        name: "ClickUp",
        emoji: "✅",
        color: "#7c3aed",
        scores: { speed: 82, ease: 78, value: 93, power: 95, support: 83 },
        price: "Free / $7",
        best: "Power users & devs",
      },
    ],
  },
  {
    slug: "convertkit-vs-mailchimp",
    tools: [
      {
        name: "ConvertKit",
        emoji: "📧",
        color: "#fb923c",
        scores: { speed: 87, ease: 90, value: 85, power: 82, support: 88 },
        price: "Free / $9",
        best: "Creators & bloggers",
      },
      {
        name: "Mailchimp",
        emoji: "🐒",
        color: "#ffe01b",
        scores: { speed: 83, ease: 86, value: 72, power: 88, support: 79 },
        price: "Free / $13",
        best: "SMB all-in-one",
      },
    ],
  },
];

const METRICS = [
  { key: "speed" as const, label: "Performance", icon: "⚡" },
  { key: "ease" as const, label: "Ease of Use", icon: "🎯" },
  { key: "value" as const, label: "Value", icon: "💰" },
  { key: "power" as const, label: "Features", icon: "🔧" },
  { key: "support" as const, label: "Support", icon: "🤝" },
];

function ScoreBar({ scoreA, scoreB, colorA, colorB }: { scoreA: number; scoreB: number; colorA: string; colorB: string }) {
  const total = scoreA + scoreB;
  const pctA = (scoreA / total) * 100;
  return (
    <div className="relative flex h-2 w-full overflow-hidden rounded-full bg-white/5">
      <div
        className="h-full rounded-l-full transition-all duration-700"
        style={{ width: `${pctA}%`, backgroundColor: colorA + "cc" }}
      />
      <div
        className="h-full flex-1 rounded-r-full transition-all duration-700"
        style={{ backgroundColor: colorB + "cc" }}
      />
    </div>
  );
}

export function ComparisonWidget() {
  const [activeIndex, setActiveIndex] = useState(0);
  const pair = COMPARISON_PAIRS[activeIndex];
  const [a, b] = pair.tools;

  const winner = (metric: keyof Tool["scores"]) =>
    a.scores[metric] >= b.scores[metric] ? "a" : "b";

  return (
    <section className="relative py-24">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-brand-950/20 to-transparent" />
      <div className="relative mx-auto max-w-5xl px-4">
        <div className="mb-14 text-center">
          <span className="mb-3 inline-block rounded-full bg-hot-500/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-hot-400">
            Interactive Compare
          </span>
          <h2 className="mb-4 text-3xl font-extrabold text-white md:text-4xl">
            See How Tools Stack Up
          </h2>
          <p className="text-gray-400">Pick a comparison to see our breakdown</p>
        </div>

        {/* Tabs */}
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {COMPARISON_PAIRS.map((p, i) => (
            <button
              key={p.slug}
              onClick={() => setActiveIndex(i)}
              className={`rounded-xl px-4 py-2 text-sm font-semibold transition-all ${
                i === activeIndex
                  ? "bg-brand-600 text-white shadow-lg shadow-brand-600/30"
                  : "border border-white/10 bg-white/5 text-gray-400 hover:bg-white/8 hover:text-white"
              }`}
            >
              {p.tools[0].name} vs {p.tools[1].name}
            </button>
          ))}
        </div>

        {/* Comparison card */}
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/3 backdrop-blur-sm">
          {/* Header */}
          <div className="grid grid-cols-[1fr_80px_1fr] items-center border-b border-white/8 bg-white/3 p-6">
            <div className="flex items-center gap-3">
              <div
                className="flex h-12 w-12 items-center justify-center rounded-xl text-2xl ring-1"
                style={{ backgroundColor: a.color + "20", borderColor: a.color + "40" }}
              >
                {a.emoji}
              </div>
              <div>
                <div className="text-lg font-bold text-white">{a.name}</div>
                <div className="text-xs text-gray-500">{a.price}</div>
              </div>
            </div>

            <div className="text-center">
              <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-xs font-bold text-gray-400">
                VS
              </span>
            </div>

            <div className="flex items-center justify-end gap-3 text-right">
              <div>
                <div className="text-lg font-bold text-white">{b.name}</div>
                <div className="text-xs text-gray-500">{b.price}</div>
              </div>
              <div
                className="flex h-12 w-12 items-center justify-center rounded-xl text-2xl ring-1"
                style={{ backgroundColor: b.color + "20", borderColor: b.color + "40" }}
              >
                {b.emoji}
              </div>
            </div>
          </div>

          {/* Metric rows */}
          <div className="divide-y divide-white/5 px-6">
            {METRICS.map((metric) => {
              const w = winner(metric.key);
              return (
                <div key={metric.key} className="py-4">
                  <div className="mb-2 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span>{metric.icon}</span>
                      <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                        {metric.label}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-sm font-bold">
                      <span
                        className={w === "a" ? "text-white" : "text-gray-500"}
                        style={w === "a" ? { color: a.color } : {}}
                      >
                        {a.scores[metric.key]}
                      </span>
                      <span
                        className={w === "b" ? "text-white" : "text-gray-500"}
                        style={w === "b" ? { color: b.color } : {}}
                      >
                        {b.scores[metric.key]}
                      </span>
                    </div>
                  </div>
                  <ScoreBar
                    scoreA={a.scores[metric.key]}
                    scoreB={b.scores[metric.key]}
                    colorA={a.color}
                    colorB={b.color}
                  />
                </div>
              );
            })}
          </div>

          {/* Footer */}
          <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4 border-t border-white/8 bg-white/3 p-6">
            <div className="rounded-xl bg-white/5 p-3">
              <p className="text-xs text-gray-500 mb-1">Best for</p>
              <p className="text-sm font-semibold text-gray-200">{a.best}</p>
            </div>
            <Link
              href={`/compare/${pair.slug}`}
              className="shrink-0 rounded-xl bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-600/30 transition-all hover:bg-brand-500 hover:-translate-y-0.5 whitespace-nowrap"
            >
              Full Breakdown →
            </Link>
            <div className="rounded-xl bg-white/5 p-3 text-right">
              <p className="text-xs text-gray-500 mb-1">Best for</p>
              <p className="text-sm font-semibold text-gray-200">{b.best}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
