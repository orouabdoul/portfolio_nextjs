"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";

const RADIUS = 22;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

/** Bouton flottant « Remonter en haut » avec un anneau de progression de lecture. */
export default function BackToTop() {
  const { language } = useLanguage();
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setVisible(scrollTop > window.innerHeight * 0.8);
      setProgress(max > 0 ? Math.min(scrollTop / max, 1) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const label = language === "en" ? "Back to top" : "Remonter en haut";

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label={label}
      title={label}
      className={`fixed bottom-5 right-5 z-40 flex h-[52px] w-[52px] items-center justify-center rounded-full bg-bg/90 shadow-[0_10px_30px_rgba(0,0,0,0.35)] ring-1 ring-line backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-surface focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 sm:bottom-7 sm:right-7 ${
        visible ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <svg width="52" height="52" viewBox="0 0 52 52" className="absolute inset-0" aria-hidden="true">
        <circle cx="26" cy="26" r={RADIUS} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="3" />
        <circle
          cx="26"
          cy="26"
          r={RADIUS}
          fill="none"
          stroke="#3B82F6"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={CIRCUMFERENCE * (1 - progress)}
          transform="rotate(-90 26 26)"
        />
      </svg>
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" className="relative">
        <path d="M4 11 L9 6 L14 11" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}
