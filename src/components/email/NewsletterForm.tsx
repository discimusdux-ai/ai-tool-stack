"use client";

import { useState } from "react";

interface Props {
  variant?: "hero" | "inline" | "sidebar";
}

export function NewsletterForm({ variant = "inline" }: Props) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className={`rounded-lg border border-accent-400/30 bg-accent-500/10 p-4 text-center ${variant === "hero" ? "text-white" : "text-accent-600"}`}>
        <p className="font-semibold">✅ You&apos;re in! Check your inbox for the welcome email.</p>
      </div>
    );
  }

  const isHero = variant === "hero";

  return (
    <form onSubmit={handleSubmit} className={`flex gap-3 ${isHero ? "flex-col sm:flex-row sm:justify-center" : "flex-col sm:flex-row"}`}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
        className={`rounded-lg border px-4 py-3 text-sm outline-none transition-colors focus:ring-2 ${
          isHero
            ? "border-white/20 bg-white/10 text-white placeholder-white/50 focus:ring-white/30"
            : "border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:border-brand-500 focus:ring-brand-500/20"
        } flex-1`}
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className={`rounded-lg px-6 py-3 text-sm font-semibold transition-all ${
          isHero
            ? "bg-white text-brand-700 hover:bg-gray-100"
            : "bg-brand-600 text-white hover:bg-brand-700"
        } disabled:opacity-50`}
      >
        {status === "loading" ? "Subscribing..." : "Subscribe Free"}
      </button>
      {status === "error" && (
        <p className="text-sm text-red-400">Something went wrong. Try again.</p>
      )}
    </form>
  );
}
