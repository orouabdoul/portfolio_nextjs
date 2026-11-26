"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useLanguage, type Language } from "@/components/LanguageProvider";
import ThemeToggle, { headerButton } from "@/components/ThemeToggle";
import BrandMark from "@/components/BrandMark";

const navLinks: { id: string; label: Record<Language, string> }[] = [
  { id: "accueil", label: { fr: "Accueil", en: "Home" } },
  { id: "a-propos", label: { fr: "À propos", en: "About" } },
  { id: "realisations", label: { fr: "Réalisations", en: "Work" } },
  { id: "expertises", label: { fr: "Expertises", en: "Expertise" } },
  { id: "services", label: { fr: "Services", en: "Services" } },
  { id: "temoignages", label: { fr: "Témoignages", en: "Testimonials" } },
  { id: "processus", label: { fr: "Méthode", en: "Approach" } },
  { id: "contact", label: { fr: "Contact", en: "Contact" } },
];

const GlobeIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const MenuIcon = ({ open }: { open: boolean }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
    {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
  </svg>
);

function LanguageButton({ className = "", withIcon = true }: { className?: string; withIcon?: boolean }) {
  const { language, setLanguage } = useLanguage();
  const [pop, setPop] = useState(false);
  const next: Language = language === "fr" ? "en" : "fr";
  return (
    <button
      type="button"
      onClick={() => {
        setLanguage(next);
        setPop(true);
        window.setTimeout(() => setPop(false), 320);
      }}
      aria-label={language === "fr" ? "Switch to English" : "Passer en français"}
      title={language === "fr" ? "Switch to English" : "Passer en français"}
      className={`${headerButton} gap-1.5 px-2.5 py-2 font-['JetBrains_Mono'] text-xs font-medium ${className}`}
    >
      {withIcon && <GlobeIcon />}
      <span
        className="inline-block transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
        style={{ transform: pop ? "rotateX(360deg)" : "rotateX(0deg)" }}
      >
        {next.toUpperCase()}
      </span>
    </button>
  );
}

export default function Navbar() {
  const { language } = useLanguage();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("accueil");
  const sectionHref = (id: string) => (pathname === "/" ? `#${id}` : `/#${id}`);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Section active : celle qui traverse le milieu de l'écran.
  useEffect(() => {
    if (pathname !== "/") return;
    const ids = [...navLinks.map((l) => l.id), "expertises", "stack", "faq"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = entry.target.id;
          const match = navLinks.find((l) => l.id === id)?.id
            ?? (id === "stack" ? "expertises" : id === "faq" ? "processus" : undefined);
          if (match) setActiveSection(match);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [pathname]);

  const linkClass = (id: string) => {
    const active = pathname === "/" && activeSection === id;
    return `group relative whitespace-nowrap text-sm transition-colors duration-200 ${active ? "text-accent-hi" : "text-muted hover:text-accent-hi"}`;
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-300 ${
        scrolled || mobileMenuOpen ? "border-line bg-bg/80 backdrop-blur-xl" : "border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-4 sm:px-8 lg:px-20">
        {/* ── Marque ── */}
        <a
          href={sectionHref("accueil")}
          aria-label={language === "en" ? "Amadou Issiaka — Home" : "Amadou Issiaka — Accueil"}
          className="flex items-center gap-2 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500"
        >
          <BrandMark size={24} className="h-6 w-6 shrink-0" />
          <span className="font-['JetBrains_Mono'] text-base font-semibold tracking-[0.04em] text-fg">
            A.ISSIAKA
          </span>
        </a>

        {/* ── Liens (ordinateur) ── */}
        <ul className="hidden items-center gap-6 xl:flex 2xl:gap-7">
          {navLinks.map(({ id, label }) => {
            const active = pathname === "/" && activeSection === id;
            return (
              <li key={id}>
                <a href={sectionHref(id)} className={linkClass(id)} aria-current={active ? "true" : undefined}>
                  {label[language]}
                  <span
                    aria-hidden="true"
                    className={`absolute -bottom-1.5 left-0 h-px bg-accent-hi transition-[width] duration-[250ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${active ? "w-full" : "w-0 group-hover:w-full"}`}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        {/* ── Actions (ordinateur) ── */}
        <div className="hidden items-center gap-2 xl:flex">
          <LanguageButton />
          <ThemeToggle />
        </div>

        {/* ── Actions (mobile / tablette) ── */}
        <div className="flex items-center gap-2 xl:hidden">
          <LanguageButton withIcon={false} />
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={
              mobileMenuOpen
                ? language === "fr" ? "Fermer le menu" : "Close menu"
                : language === "fr" ? "Ouvrir le menu" : "Open menu"
            }
            className={`${headerButton} p-2.5`}
          >
            <MenuIcon open={mobileMenuOpen} />
          </button>
        </div>
      </nav>

      {/* ── Menu déroulant (mobile / tablette) ── */}
      {mobileMenuOpen && (
        <ul id="mobile-menu" className="border-t border-line bg-bg/95 px-5 py-3 backdrop-blur-xl sm:px-8 lg:px-20 xl:hidden">
          {navLinks.map(({ id, label }) => {
            const active = pathname === "/" && activeSection === id;
            return (
              <li key={id}>
                <a
                  href={sectionHref(id)}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-2.5 text-sm transition-colors duration-200 ${active ? "text-accent-hi" : "text-muted hover:text-accent-hi"}`}
                >
                  {label[language]}
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </header>
  );
}
