"use client";

const TOOLS_ROW1 = [
  { name: "ChatGPT", color: "#10a37f", emoji: "🤖" },
  { name: "Claude", color: "#d97706", emoji: "🧠" },
  { name: "Midjourney", color: "#e879f9", emoji: "🎨" },
  { name: "Cursor", color: "#6366f1", emoji: "💻" },
  { name: "Notion AI", color: "#ffffff", emoji: "📝" },
  { name: "Perplexity", color: "#22d3ee", emoji: "🔍" },
  { name: "GitHub Copilot", color: "#f0f6fc", emoji: "⚡" },
  { name: "Jasper", color: "#7c3aed", emoji: "✍️" },
  { name: "Runway", color: "#3b82f6", emoji: "🎬" },
  { name: "ElevenLabs", color: "#facc15", emoji: "🎙️" },
  { name: "Zapier", color: "#ff4a00", emoji: "🔗" },
  { name: "HubSpot", color: "#ff7a59", emoji: "📊" },
];

const TOOLS_ROW2 = [
  { name: "Figma", color: "#f24e1e", emoji: "🖼️" },
  { name: "Descript", color: "#06b6d4", emoji: "✂️" },
  { name: "Surfer SEO", color: "#22c55e", emoji: "📈" },
  { name: "Framer", color: "#0099ff", emoji: "🪄" },
  { name: "Monday.com", color: "#f97316", emoji: "📋" },
  { name: "Ahrefs", color: "#f59e0b", emoji: "🔎" },
  { name: "Semrush", color: "#ff4500", emoji: "📡" },
  { name: "Webflow", color: "#4353ff", emoji: "🌐" },
  { name: "Loom", color: "#625afa", emoji: "📹" },
  { name: "ConvertKit", color: "#fb923c", emoji: "📧" },
  { name: "Intercom", color: "#1f8ded", emoji: "💬" },
  { name: "Typeform", color: "#262627", emoji: "📋" },
];

function MarqueeRow({ tools, reverse = false }: { tools: typeof TOOLS_ROW1; reverse?: boolean }) {
  const doubled = [...tools, ...tools];
  return (
    <div className="relative overflow-hidden py-3">
      {/* Fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-gray-950 to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-gray-950 to-transparent" />
      <div
        className="flex gap-3 w-max"
        style={{
          animation: `marquee${reverse ? "Reverse" : ""} 40s linear infinite`,
        }}
      >
        {doubled.map((tool, i) => (
          <div
            key={i}
            className="flex shrink-0 items-center gap-2.5 rounded-xl border border-white/8 bg-white/4 px-4 py-2.5 backdrop-blur-sm hover:border-brand-400/30 hover:bg-white/8 transition-all"
          >
            <span className="text-lg leading-none">{tool.emoji}</span>
            <span
              className="text-sm font-semibold whitespace-nowrap"
              style={{ color: tool.color === "#ffffff" || tool.color === "#f0f6fc" || tool.color === "#262627" ? "#e5e7eb" : tool.color }}
            >
              {tool.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ToolMarquee() {
  return (
    <section className="relative overflow-hidden border-y border-white/5 bg-gray-950/80 py-6 backdrop-blur-sm">
      <div className="mb-3 text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-gray-500">
          Tools We've Reviewed
        </span>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marqueeReverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
      <MarqueeRow tools={TOOLS_ROW1} />
      <MarqueeRow tools={TOOLS_ROW2} reverse />
    </section>
  );
}
