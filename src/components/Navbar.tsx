"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { useLanguage, type Language } from "@/components/LanguageProvider";
import ThemeToggle from "@/components/ThemeToggle";
import BrandMark from "@/components/BrandMark";
import { FlagFR, FlagGB, LanguageFlag } from "@/components/Flags";

const navLinks: { label: Record<Language, string>; href: string }[] = [
  { label: { fr: "À propos", en: "About" }, href: "#a-propos" },
  { label: { fr: "Réalisations", en: "Work" }, href: "#realisations" },
  { label: { fr: "Expertises", en: "Expertise" }, href: "#expertises" },
  { label: { fr: "Services", en: "Services" }, href: "#services" },
  { label: { fr: "Témoignages", en: "Testimonials" }, href: "#temoignages" },
  { label: { fr: "Méthode", en: "Approach" }, href: "#processus" },
  { label: { fr: "Contact", en: "Contact" }, href: "#contact" },
];

export default function Navbar() {
  const { language, setLanguage } = useLanguage();
  const pathname = usePathname();
  const [langOpen, setLangOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("accueil");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const sectionHref = (href: string) =>
    pathname === "/" ? href : `/${href}`;

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = [
      "accueil",
      "a-propos",
      "expertises",
      "services",
      "realisations",
      "processus",
      "temoignages",
      "contact",
    ];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.3 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <div className="fixed top-4 left-0 right-0 px-4 z-50 sm:px-8 lg:top-6 lg:px-20">
      <nav className={`w-full h-14 pl-2 pr-2 rounded-full border border-line backdrop-blur-xl flex justify-between items-center transition-all duration-500 sm:h-16 sm:pl-4 sm:pr-3 ${scrolled ? "bg-bg/85 shadow-[0_8px_32px_rgba(0,0,0,0.5)]" : "bg-bg/55"}`}>
        {/* ── Logo ── */}
        <a
          href={sectionHref("#accueil")}
          aria-label={language === "en" ? "Amadou Issiaka — Home" : "Amadou Issiaka — Accueil"}
          className="flex items-center gap-3 rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
        >
          <BrandMark size={40} className="h-9 w-9 shrink-0 drop-shadow-[0_0_14px_rgba(59,130,246,0.35)] sm:h-10 sm:w-10" />
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="font-['Sora'] text-[15px] font-bold tracking-tight text-fg">
              Amadou Issiaka
            </span>
            <span className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.14em] text-muted">
              Mobile &amp; Backend
            </span>
          </span>
        </a>

        {/* ── Nav links ── */}
        <div className="hidden items-center gap-3 whitespace-nowrap xl:flex 2xl:gap-8">
          <a href={sectionHref("#accueil")} className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
            <span className="whitespace-nowrap text-fg text-sm font-medium font-['Manrope'] tracking-tight">
            {language === "fr" ? "Accueil" : "Home"}
            </span>
          </a>
          {navLinks.map(({ label, href }) => {
            const id = href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <a
                key={href}
                href={sectionHref(href)}
                className={`whitespace-nowrap text-sm font-medium font-['Manrope'] tracking-tight transition-colors duration-200 ${isActive ? "text-fg" : "text-muted hover:text-fg"}`}
              >
                {label[language]}
              </a>
            );
          })}
        </div>

        {/* ── Right side ── */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            aria-label={mobileMenuOpen ? (language === "fr" ? "Fermer le menu" : "Close menu") : (language === "fr" ? "Ouvrir le menu" : "Open menu")}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-fg hover:bg-surface-2 xl:hidden"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              {mobileMenuOpen ? (
                <path d="M5 5L15 15M15 5L5 15" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
              ) : (
                <path d="M3 5H17M3 10H17M3 15H17" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
              )}
            </svg>
          </button>
          {/* Language selector */}
          <ThemeToggle />

          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setLangOpen((v) => !v)}
              aria-expanded={langOpen}
              aria-haspopup="listbox"
              aria-label={language === "fr" ? "Choisir la langue" : "Choose language"}
              className="h-10 px-4 bg-bg/60 rounded-full border border-line flex items-center gap-2 hover:border-line-strong transition-colors duration-200 cursor-pointer"
            >
              <span className="text-fg text-xs font-medium font-['Manrope'] tracking-wide">
                {language.toUpperCase()}
              </span>
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                className={`transition-transform duration-200 ${langOpen ? "rotate-180" : ""}`}
              >
                <path
                  d="M1 1L5 5L9 1"
                  stroke="#9CA3AF"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            {langOpen && (
              <div
                role="listbox"
                className="absolute right-0 top-12 w-48 p-2 bg-surface rounded-2xl border border-line flex flex-col gap-1 z-50 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-150"
              >
                <button
                  type="button"
                  role="option"
                  aria-selected={language === "fr"}
                  onClick={() => {
                    setLanguage("fr");
                    setLangOpen(false);
                  }}
                  className={`px-3 py-2.5 rounded-xl flex justify-between items-center cursor-pointer transition-colors ${
                    language === "fr" ? "bg-blue-500/20" : "hover:bg-surface-2"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <FlagFR />
                    <span                     className={`text-sm font-medium font-['Manrope'] tracking-tight ${
                      language === "fr" ? "text-fg" : "text-muted"
                    }`}>
                      Français
                    </span>
                  </div>
                  {language === "fr" && (
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path
                        d="M1.5 4L4 6.5L8.5 1.5"
                        stroke="#60A5FA"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </button>
                <button
                  type="button"
                  role="option"
                  aria-selected={language === "en"}
                  onClick={() => {
                    setLanguage("en");
                    setLangOpen(false);
                  }}
                  className={`px-3 py-2.5 rounded-xl flex justify-between items-center cursor-pointer transition-colors duration-150 ${
                    language === "en" ? "bg-blue-500/20" : "hover:bg-surface-2"
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    <FlagGB />
                    <span className={`text-sm font-medium font-['Manrope'] tracking-tight ${
                      language === "en" ? "text-fg" : "text-muted"
                    }`}>
                      English
                    </span>
                  </span>
                  {language === "en" && (
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path d="M1.5 4L4 6.5L8.5 1.5" stroke="#60A5FA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </button>
              </div>
            )}
          </div>

          {/* CTA */}
          <a
            href={sectionHref("#contact")}
            className="hidden h-11 shrink-0 whitespace-nowrap px-4 2xl:px-6 bg-blue-500 rounded-full text-white text-xs font-semibold font-['Sora'] tracking-tight hover:bg-blue-400 transition-all duration-200 shadow-[0_0_20px_rgba(59,130,246,0.30)] hover:shadow-[0_0_28px_rgba(59,130,246,0.50)] items-center sm:flex"
          >
            {language === "fr" ? "Démarrer un projet" : "Start a project"}
          </a>
        </div>
      </nav>
      {mobileMenuOpen && (
        <div className="absolute left-4 right-4 top-[calc(100%+0.5rem)] rounded-2xl border border-line bg-surface/95 p-4 shadow-2xl backdrop-blur-xl sm:left-8 sm:right-8 xl:hidden">
          <div className="grid grid-cols-2 gap-x-3 gap-y-4">

            {/* Left — Navigation */}
            <div className="flex flex-col gap-0.5">
              <p className="px-2 pb-1.5 font-['JetBrains_Mono'] text-[11px] uppercase tracking-widest text-subtle">
                {language === "fr" ? "Navigation" : "Navigation"}
              </p>
              {[{ label: language === "fr" ? "Accueil" : "Home", href: sectionHref("#accueil") }, ...navLinks.map(({ label, href }) => ({ label: label[language], href: sectionHref(href) }))].map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-xl px-2 py-2 text-sm font-medium font-['Manrope'] text-fg hover:bg-surface-2"
                >
                  {label}
                </a>
              ))}
            </div>

            {/* Right — Social + Language */}
            <div className="flex flex-col gap-4">

              {/* Social */}
              <div className="flex flex-col gap-0.5">
                <p className="px-2 pb-1.5 font-['JetBrains_Mono'] text-[11px] uppercase tracking-widest text-subtle">
                  Social
                </p>
                {[
                  { label: "LinkedIn", href: "https://www.linkedin.com/in/amadou-fullstack-mobile" },
                  { label: "GitHub",   href: "https://github.com/orouabdoul" },
                  { label: "WhatsApp", href: "https://wa.me/2290159000892" },
                ].map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="rounded-xl px-2 py-2 text-sm font-medium font-['Manrope'] text-fg hover:bg-surface-2"
                  >
                    {label}
                  </a>
                ))}
              </div>

              {/* Language */}
              <div className="flex flex-col gap-0.5">
                <p className="px-2 pb-1.5 font-['JetBrains_Mono'] text-[11px] uppercase tracking-widest text-subtle">
                  {language === "fr" ? "Langue" : "Language"}
                </p>
                {([
                  { code: "fr" as Language, label: "FR" },
                  { code: "en" as Language, label: "EN" },
                ] as const).map(({ code, label }) => (
                  <button
                    key={code}
                    type="button"
                    onClick={() => { setLanguage(code); setMobileMenuOpen(false); }}
                    className={`flex items-center gap-2 rounded-xl px-2 py-2 text-sm font-medium font-['Manrope'] transition-colors ${
                      language === code ? "bg-blue-500/20 text-accent-hi" : "text-muted hover:bg-surface-2 hover:text-fg"
                    }`}
                  >
                    <LanguageFlag lang={code} />
                    <span>{label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <a
            href={sectionHref("#contact")}
            onClick={() => setMobileMenuOpen(false)}
            className="mt-4 flex min-h-11 items-center justify-center rounded-full bg-blue-500 px-5 text-sm font-semibold font-['Sora'] text-white hover:bg-blue-400 transition-colors"
          >
            {language === "fr" ? "Démarrer un projet" : "Start a project"}
          </a>
        </div>
      )}
    </div>
  );
}
