"use client";

import { useSyncExternalStore } from "react";
import { useLanguage } from "@/components/LanguageProvider";

type Theme = "dark" | "light";

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
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="4.2" />
    <path d="M12 2.5v2.2M12 19.3v2.2M4.6 4.6l1.6 1.6M17.8 17.8l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.6 19.4l1.6-1.6M17.8 6.2l1.6-1.6" />
  </svg>
);

const MoonIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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

  return (
    <button
      type="button"
      onClick={() => {
        applyTheme(next);
      }}
      aria-label={label}
      title={label}
      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line bg-bg/60 text-fg transition-colors duration-200 hover:border-line-strong hover:text-accent-hi focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 ${className}`}
    >
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}
