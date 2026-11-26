"use client";

import { useState, useSyncExternalStore } from "react";
import { useLanguage } from "@/components/LanguageProvider";

type Theme = "dark" | "light";

/** Bouton carré du header : bordure fine, se soulève et s'éclaire au survol. */
export const headerButton =
  "inline-flex items-center justify-center rounded-md border border-line text-muted transition-[color,border-color,transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:scale-[1.06] hover:border-accent-hi/60 hover:text-accent-hi hover:shadow-[0_6px_18px_-8px_rgba(59,130,246,0.6)] active:scale-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500";

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.classList.add("theme-switching");
  root.classList.toggle("light", theme === "light");
  try {
    localStorage.setItem("theme", theme);
  } catch {
    // Stockage indisponible : le thème reste valable pour la visite en cours.
  }
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute("content", theme === "light" ? "#f5f9fc" : "#060e18");
  window.setTimeout(() => root.classList.remove("theme-switching"), 400);
}

function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
  return () => observer.disconnect();
}

function getSnapshot(): Theme {
  return document.documentElement.classList.contains("light") ? "light" : "dark";
}

const SunIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="4.2" />
    <path d="M12 2.5v2.2M12 19.3v2.2M4.6 4.6l1.6 1.6M17.8 17.8l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.6 19.4l1.6-1.6M17.8 6.2l1.6-1.6" />
  </svg>
);

const MoonIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20.5 14.2A8.5 8.5 0 0 1 9.8 3.5a8.5 8.5 0 1 0 10.7 10.7z" />
  </svg>
);

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const { language } = useLanguage();
  // Le script placé dans <head> applique le thème avant l'affichage ;
  // ici on lit simplement la classe de <html> et on suit ses changements.
  const theme = useSyncExternalStore<Theme>(subscribe, getSnapshot, () => "dark");

  const next: Theme = theme === "dark" ? "light" : "dark";
  const label =
    language === "en"
      ? next === "light" ? "Switch to light mode" : "Switch to dark mode"
      : next === "light" ? "Passer en mode clair" : "Passer en mode sombre";

  const [spin, setSpin] = useState(0);

  return (
    <button
      type="button"
      onClick={() => {
        applyTheme(next);
        setSpin((n) => n + 1);
      }}
      aria-label={label}
      title={label}
      className={`${headerButton} p-2.5 ${className}`}
    >
      <span key={spin} className={spin ? "inline-flex animate-[icon-spin_0.45s_cubic-bezier(0.22,1,0.36,1)]" : "inline-flex"}>
        {theme === "dark" ? <SunIcon /> : <MoonIcon />}
      </span>
    </button>
  );
}
