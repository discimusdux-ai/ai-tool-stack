"use client";

import { useEffect } from "react";
import { captureAttribution } from "@/lib/track-click";

export function UtmCapture() {
  useEffect(() => {
    captureAttribution();
  }, []);
  return null;
}
