"use client";

import { getAffiliateUrl } from "@/lib/affiliate-links";
import { trackAffiliateClick } from "@/lib/track-click";

interface Props {
  productId: string;
  label?: string;
  size?: "sm" | "md" | "lg";
  fallbackUrl?: string;
  className?: string;
}

export function CTAButton({ productId, label = "Try Free", size = "md", fallbackUrl, className = "" }: Props) {
  const sizes = { sm: "px-4 py-2 text-xs", md: "px-6 py-3 text-sm", lg: "px-8 py-4 text-base" };
  const affiliateHref = getAffiliateUrl(productId);
  const href = affiliateHref !== "#" ? affiliateHref : (fallbackUrl || "#");
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className={`cta-button cta-glow ${sizes[size]} ${className}`}
      onClick={() => trackAffiliateClick(productId, label)}
    >
      {label} →
    </a>
  );
}
