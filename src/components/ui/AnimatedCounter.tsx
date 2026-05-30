"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  label: string;
  icon: string;
}

export function AnimatedCounter({
  end,
  suffix = "",
  prefix = "",
  duration = 2000,
  label,
  icon,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const startTime = performance.now();
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(animate);
      else setCount(end);
    };
    requestAnimationFrame(animate);
  }, [started, end, duration]);

  return (
    <div ref={ref} className="flex flex-col items-center gap-2 text-center group">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-500/10 text-3xl ring-1 ring-brand-500/20 transition-all group-hover:scale-110 group-hover:bg-brand-500/20">
        {icon}
      </div>
      <span className="text-3xl font-extrabold text-white tabular-nums">
        {prefix}{count.toLocaleString()}{suffix}
      </span>
      <span className="text-xs font-medium text-gray-400 uppercase tracking-widest">{label}</span>
    </div>
  );
}
