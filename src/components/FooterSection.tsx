"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";
import { usePathname } from "next/navigation";

const ease = [0.22, 1, 0.36, 1] as const;

function FadeInView({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const columnVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
};

function LinkedInIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <rect x="0.5" y="0.5" width="13" height="13" rx="2" stroke="#60A5FA" strokeWidth="1" />
      <rect x="2.5" y="6" width="2" height="5.5" fill="#60A5FA" />
      <circle cx="3.5" cy="3.75" r="1.25" fill="#60A5FA" />
      <path d="M7 7.5C7 6.67 7.67 6 8.5 6S10 6.67 10 7.5V11.5" stroke="#60A5FA" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="7" y1="6" x2="7" y2="11.5" stroke="#60A5FA" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="#60A5FA" aria-hidden="true">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 1.17A5.83 5.83 0 0 0 5.16 12.53c.29.05.4-.13.4-.28v-.98c-1.63.35-1.97-.79-1.97-.79-.27-.68-.65-.86-.65-.86-.53-.36.04-.36.04-.36.59.04.9.6.9.6.52.89 1.37.63 1.71.48.05-.38.2-.63.37-.78-1.3-.15-2.67-.65-2.67-2.9 0-.64.23-1.16.6-1.57-.06-.15-.26-.74.06-1.55 0 0 .49-.15 1.61.6a5.59 5.59 0 0 1 2.94 0c1.12-.75 1.61-.6 1.61-.6.32.81.12 1.4.06 1.55.37.41.6.93.6 1.57 0 2.25-1.37 2.75-2.68 2.89.21.18.4.54.4 1.09v1.62c0 .15.1.34.4.28A5.83 5.83 0 0 0 7 1.17z"
      />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="#60A5FA" aria-hidden="true">
      <path d="M7 1.4C3.91 1.4 1.4 3.91 1.4 7c0 1.04.28 2.03.76 2.87L1.4 12.6l2.84-.74A5.6 5.6 0 0 0 7 12.6c3.09 0 5.6-2.51 5.6-5.6 0-3.09-2.51-5.6-5.6-5.6zm0 1.05a4.55 4.55 0 0 1-2.38 8.44l-.15-.09-1.84.48.49-1.79-.1-.15A4.55 4.55 0 0 1 7 2.45zM5.6 4.95c-.11 0-.28.04-.42.21-.14.17-.54.53-.54 1.28s.55 1.48.63 1.59c.08.1 1.08 1.66 2.63 2.26 1.31.51 1.58.41 1.86.39.28-.03.91-.37 1.04-.73.13-.36.13-.66.09-.73-.04-.06-.13-.1-.28-.17-.14-.07-.85-.42-.98-.47-.13-.05-.23-.07-.33.07-.1.14-.38.47-.46.57-.08.1-.17.11-.31.04-.14-.07-.62-.23-1.17-.73-.43-.38-.72-.86-.8-1.01-.08-.14-.01-.22.06-.3.07-.07.14-.18.21-.26.07-.09.1-.14.14-.24.05-.1.02-.19-.01-.26-.03-.08-.32-.77-.45-1.06-.11-.27-.23-.23-.32-.23z" />
    </svg>
  );
}

const navLinks = [
  { label: { fr: "Accueil", en: "Home" }, href: "#accueil" },
  { label: { fr: "À propos", en: "About" }, href: "#a-propos" },
  { label: { fr: "Réalisations", en: "Work" }, href: "#realisations" },
  { label: { fr: "Expertises", en: "Expertise" }, href: "#expertises" },
  { label: { fr: "Méthode", en: "Approach" }, href: "#processus" },
  { label: { fr: "Témoignages", en: "Testimonials" }, href: "#temoignages" },
  { label: { fr: "Contact", en: "Contact" }, href: "#contact" },
];

const socialLinks = [
  { icon: <LinkedInIcon />, label: "LinkedIn", href: "https://www.linkedin.com/in/amadou-fullstack-mobile" },
  { icon: <GitHubIcon />, label: "GitHub", href: "https://github.com/orouabdoul" },
  { icon: <WhatsAppIcon />, label: "WhatsApp", href: "https://wa.me/22959000892" },
];

export default function FooterSection() {
  const { language, setLanguage } = useLanguage();
  const isEnglish = language === "en";
  const pathname = usePathname();
  const sectionHref = (href: string) => (pathname === "/" ? href : `/${href}`);

  return (
    <footer className="relative w-full overflow-hidden bg-gray-950 px-5 pb-8 pt-16 sm:px-8 md:pt-20 lg:px-20 lg:pb-10 lg:pt-24">

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(31,41,55,0.4)_0%,transparent_6%)]" />

      <div className="relative mx-auto flex max-w-[1280px] flex-col gap-10 md:gap-16">

        {/* ── Big display title ── */}
        <FadeInView>
          <h2 className="select-none font-['Sora'] text-5xl font-extrabold leading-none tracking-tighter sm:text-7xl lg:text-[96px]">
            <span style={{ WebkitTextStroke: "2px #3B82F6", color: "transparent" }}>
              {isEnglish ? "Let's " : "Cons"}
            </span>
            <span className="text-slate-100">
              {isEnglish ? "build." : "truisons."}
            </span>
          </h2>
        </FadeInView>

        {/* ── Mid section: 3 columns ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={columnVariants}
          className="grid grid-cols-1 gap-8 border-t border-gray-800 pt-10 sm:grid-cols-2 lg:flex lg:items-start lg:justify-between lg:pt-14"
        >

          {/* Navigation */}
          <motion.div variants={itemVariants} className="flex w-full flex-col gap-4 lg:w-64 lg:gap-5">
            <span className="font-['JetBrains_Mono'] text-xs uppercase leading-4 tracking-widest text-blue-400">
              {isEnglish ? "Navigation" : "Navigation"}
            </span>
            <div className="flex flex-col gap-2.5">
              {navLinks.map(({ label, href }) => (
                <a
                  key={href}
                  href={sectionHref(href)}
                  className="font-['Manrope'] text-base leading-6 text-gray-400 transition-colors duration-150 hover:text-slate-100"
                >
                  {label[language]}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Social */}
          <motion.div variants={itemVariants} className="flex w-full flex-col gap-4 lg:w-64 lg:gap-5">
            <span className="font-['JetBrains_Mono'] text-xs uppercase leading-4 tracking-widest text-blue-400">
              {isEnglish ? "Social" : "Réseaux"}
            </span>
            <div className="flex flex-col gap-3">
              {socialLinks.map(({ icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-6 items-end gap-3 transition-opacity hover:opacity-80"
                >
                  <span className="mb-0.5 shrink-0">{icon}</span>
                  <span className="font-['Manrope'] text-base leading-6 tracking-tight text-gray-400">
                    {label}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Language */}
          <motion.div variants={itemVariants} className="flex w-full flex-col gap-4 lg:w-64 lg:gap-5">
            <span className="font-['JetBrains_Mono'] text-xs uppercase leading-4 tracking-widest text-blue-400">
              {isEnglish ? "Language" : "Langue"}
            </span>
            <button
              type="button"
              onClick={() => setLanguage(isEnglish ? "fr" : "en")}
              aria-label={isEnglish ? "Switch to French" : "Passer en anglais"}
              className="flex w-fit cursor-pointer items-center gap-2 rounded-full border border-gray-800 bg-gray-900/60 px-5 py-2.5 transition-colors duration-150 hover:bg-gray-900"
            >
              <span aria-hidden="true">{isEnglish ? "🇬🇧" : "🇫🇷"}</span>
              <span className="font-['Manrope'] text-sm font-medium leading-5 tracking-wide text-slate-100">
                {language.toUpperCase()}
              </span>
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className="shrink-0" aria-hidden="true">
                <path d="M1 1L5 5L9 1" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </motion.div>

        </motion.div>

        {/* ── Bottom bar ── */}
        <div className="flex flex-col-reverse items-start justify-between gap-4 border-t border-gray-800 pt-6 md:flex-row md:items-center">
          <span className="font-['JetBrains_Mono'] text-[10px] leading-4 text-gray-400 sm:text-xs md:max-w-[75%]">
            {isEnglish
              ? "© 2026 Amadou Issiaka Abdoulaye — All rights reserved"
              : "© 2026 Amadou Issiaka Abdoulaye — Tous droits réservés"}
          </span>
          <a
            href={sectionHref("#accueil")}
            className="flex items-center gap-2 transition-opacity hover:opacity-80"
          >
            <span className="font-['JetBrains_Mono'] text-xs uppercase leading-4 tracking-wider text-blue-400">
              {isEnglish ? "Back to top" : "Retour en haut"}
            </span>
            <svg width="8" height="10" viewBox="0 0 8 10" fill="none" className="shrink-0" aria-hidden="true">
              <path d="M4 9V1M1 4L4 1L7 4" stroke="#60A5FA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

      </div>
    </footer>
  );
}
