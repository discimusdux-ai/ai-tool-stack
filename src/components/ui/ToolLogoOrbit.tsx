"use client";

import { useEffect, useRef } from "react";

const TOOLS = [
  { name: "ChatGPT", color: "#10a37f", letter: "G" },
  { name: "Cursor", color: "#6366f1", letter: "C" },
  { name: "Midjourney", color: "#e879f9", letter: "M" },
  { name: "Notion", color: "#ffffff", letter: "N" },
  { name: "Claude", color: "#d97706", letter: "A" },
  { name: "Perplexity", color: "#22d3ee", letter: "P" },
  { name: "GitHub", color: "#f0f6fc", letter: "GH" },
  { name: "Zapier", color: "#ff4a00", letter: "Z" },
  { name: "Jasper", color: "#7c3aed", letter: "J" },
  { name: "Figma", color: "#f24e1e", letter: "F" },
  { name: "Runway", color: "#3b82f6", letter: "R" },
  { name: "HubSpot", color: "#ff7a59", letter: "H" },
];

export function ToolLogoOrbit() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const angleRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = canvas.width = canvas.offsetWidth;
    const H = canvas.height = canvas.offsetHeight;
    const cx = W / 2;
    const cy = H / 2;

    const orbits = [
      { r: Math.min(W, H) * 0.32, speed: 0.003, tools: TOOLS.slice(0, 6) },
      { r: Math.min(W, H) * 0.48, speed: -0.0018, tools: TOOLS.slice(6, 12) },
    ];

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      // Draw orbit rings
      orbits.forEach((orbit) => {
        ctx.beginPath();
        ctx.arc(cx, cy, orbit.r, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(99,102,241,0.12)";
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 8]);
        ctx.stroke();
        ctx.setLineDash([]);
      });

      // Draw tool logos
      angleRef.current += 0.005;
      orbits.forEach((orbit) => {
        const baseAngle = angleRef.current * (orbit.speed / 0.005);
        orbit.tools.forEach((tool, i) => {
          const angle = baseAngle + (i / orbit.tools.length) * Math.PI * 2;
          const x = cx + orbit.r * Math.cos(angle);
          const y = cy + orbit.r * Math.sin(angle);

          // Glow
          const grd = ctx.createRadialGradient(x, y, 2, x, y, 22);
          grd.addColorStop(0, tool.color + "40");
          grd.addColorStop(1, "transparent");
          ctx.fillStyle = grd;
          ctx.beginPath();
          ctx.arc(x, y, 22, 0, Math.PI * 2);
          ctx.fill();

          // Circle
          ctx.beginPath();
          ctx.arc(x, y, 16, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(15,15,25,0.9)";
          ctx.fill();
          ctx.strokeStyle = tool.color + "60";
          ctx.lineWidth = 1.5;
          ctx.stroke();

          // Letter
          ctx.fillStyle = tool.color;
          ctx.font = `bold ${tool.letter.length > 1 ? "8" : "11"}px Inter, sans-serif`;
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillText(tool.letter, x, y);
        });
      });

      animRef.current = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-70 pointer-events-none"
      style={{ mixBlendMode: "screen" }}
    />
  );
}
