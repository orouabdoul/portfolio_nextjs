"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";
import { usePathname } from "next/navigation";

const ease = [0.22, 1, 0.36, 1] as const;

function LinkedInIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <rect x="0.5" y="0.5" width="13" height="13" rx="2" stroke="currentColor" strokeWidth="1" />
      <rect x="2.5" y="6" width="2" height="5.5" fill="currentColor" />
      <circle cx="3.5" cy="3.75" r="1.25" fill="currentColor" />
      <path d="M7 7.5C7 6.67 7.67 6 8.5 6S10 6.67 10 7.5V11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="7" y1="6" x2="7" y2="11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 14 14" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" clipRule="evenodd" d="M7 1.17A5.83 5.83 0 0 0 5.16 12.53c.29.05.4-.13.4-.28v-.98c-1.63.35-1.97-.79-1.97-.79-.27-.68-.65-.86-.65-.86-.53-.36.04-.36.04-.36.59.04.9.6.9.6.52.89 1.37.63 1.71.48.05-.38.2-.63.37-.78-1.3-.15-2.67-.65-2.67-2.9 0-.64.23-1.16.6-1.57-.06-.15-.26-.74.06-1.55 0 0 .49-.15 1.61.6a5.59 5.59 0 0 1 2.94 0c1.12-.75 1.61-.6 1.61-.6.32.81.12 1.4.06 1.55.37.41.6.93.6 1.57 0 2.25-1.37 2.75-2.68 2.89.21.18.4.54.4 1.09v1.62c0 .15.1.34.4.28A5.83 5.83 0 0 0 7 1.17z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 14 14" fill="currentColor" aria-hidden="true">
      <path d="M7 1.4C3.91 1.4 1.4 3.91 1.4 7c0 1.04.28 2.03.76 2.87L1.4 12.6l2.84-.74A5.6 5.6 0 0 0 7 12.6c3.09 0 5.6-2.51 5.6-5.6 0-3.09-2.51-5.6-5.6-5.6zm0 1.05a4.55 4.55 0 0 1-2.38 8.44l-.15-.09-1.84.48.49-1.79-.1-.15A4.55 4.55 0 0 1 7 2.45zM5.6 4.95c-.11 0-.28.04-.42.21-.14.17-.54.53-.54 1.28s.55 1.48.63 1.59c.08.1 1.08 1.66 2.63 2.26 1.31.51 1.58.41 1.86.39.28-.03.91-.37 1.04-.73.13-.36.13-.66.09-.73-.04-.06-.13-.1-.28-.17-.14-.07-.85-.42-.98-.47-.13-.05-.23-.07-.33.07-.1.14-.38.47-.46.57-.08.1-.17.11-.31.04-.14-.07-.62-.23-1.17-.73-.43-.38-.72-.86-.8-1.01-.08-.14-.01-.22.06-.3.07-.07.14-.18.21-.26.07-.09.1-.14.14-.24.05-.1.02-.19-.01-.26-.03-.08-.32-.77-.45-1.06-.11-.27-.23-.23-.32-.23z" />
    </svg>
  );
}

const navLinks = [
  { label: { fr: "Accueil",      en: "Home"         }, href: "#accueil"     },
  { label: { fr: "À propos",     en: "About"        }, href: "#a-propos"    },
  { label: { fr: "Réalisations", en: "Work"         }, href: "#realisations"},
  { label: { fr: "Expertises",   en: "Expertise"    }, href: "#expertises"  },
  { label: { fr: "Méthode",      en: "Approach"     }, href: "#processus"   },
  { label: { fr: "Témoignages",  en: "Testimonials" }, href: "#temoignages" },
  { label: { fr: "Contact",      en: "Contact"      }, href: "#contact"     },
];

const socialLinks = [
  { icon: <LinkedInIcon />, label: "LinkedIn", href: "https://www.linkedin.com/in/amadou-fullstack-mobile" },
  { icon: <GitHubIcon />,   label: "GitHub",   href: "https://github.com/orouabdoul"                       },
  { icon: <WhatsAppIcon />, label: "WhatsApp", href: "https://wa.me/22959000892"                            },
];

export default function FooterSection() {
  const { language, setLanguage } = useLanguage();
  const isEnglish = language === "en";
  const pathname = usePathname();
  const sectionHref = (href: string) => (pathname === "/" ? href : `/${href}`);

  return (
    <footer className="relative w-full overflow-hidden border-t border-gray-800 bg-gray-950 px-5 py-10 sm:px-8 sm:py-12 lg:px-20 lg:py-14">

      <div className="relative mx-auto flex max-w-[1280px] flex-col gap-10">

        {/* ── Main grid ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55, ease }}
          className="grid grid-cols-2 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12"
        >

          {/* Brand */}
          <div className="col-span-2 flex flex-col gap-4 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-500 shadow-[0_0_16px_rgba(59,130,246,0.4)]">
                <span className="font-['Sora'] text-xs font-bold text-white">AIA</span>
              </div>
              <span className="font-['Sora'] text-sm font-semibold tracking-wide text-slate-100">
                AMADOU ISSIAKA
              </span>
            </div>
            <p className="font-['Manrope'] text-sm leading-6 text-gray-400 lg:max-w-[200px]">
              {isEnglish
                ? "Mobile developer & product designer based in Benin."
                : "Développeur mobile & product designer basé au Bénin."}
            </p>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.6)]" />
              <span className="font-['JetBrains_Mono'] text-[11px] text-emerald-400">
                {isEnglish ? "Available for projects" : "Disponible pour projets"}
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-3">
            <p className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-widest text-blue-400">
              {isEnglish ? "Navigation" : "Navigation"}
            </p>
            <ul className="flex flex-col gap-2">
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={sectionHref(href)}
                    className="font-['Manrope'] text-sm text-gray-400 transition-colors hover:text-slate-100"
                  >
                    {label[language]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="flex flex-col gap-3">
            <p className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-widest text-blue-400">
              Social
            </p>
            <ul className="flex flex-col gap-2.5">
              {socialLinks.map(({ icon, label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 text-gray-400 transition-colors hover:text-slate-100"
                  >
                    <span className="shrink-0">{icon}</span>
                    <span className="font-['Manrope'] text-sm">{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Language */}
          <div className="flex flex-col gap-3">
            <p className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-widest text-blue-400">
              {isEnglish ? "Language" : "Langue"}
            </p>
            <div className="flex flex-col gap-2">
              {([
                { code: "fr" as const, flag: "🇫🇷", label: "Français" },
                { code: "en" as const, flag: "🇬🇧", label: "English"  },
              ]).map(({ code, flag, label }) => (
                <button
                  key={code}
                  type="button"
                  onClick={() => setLanguage(code)}
                  className={`flex items-center gap-2.5 font-['Manrope'] text-sm transition-colors ${
                    language === code ? "text-slate-100" : "text-gray-500 hover:text-gray-300"
                  }`}
                >
                  <span>{flag}</span>
                  <span>{label}</span>
                  {language === code && (
                    <svg width="8" height="6" viewBox="0 0 10 8" fill="none" aria-hidden="true">
                      <path d="M1.5 4L4 6.5L8.5 1.5" stroke="#60A5FA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          </div>

        </motion.div>

        {/* ── Bottom bar ── */}
        <div className="flex flex-col-reverse items-start justify-between gap-3 border-t border-gray-800 pt-6 sm:flex-row sm:items-center">
          <span className="font-['JetBrains_Mono'] text-[10px] text-gray-600">
            © 2026 Amadou Issiaka Abdoulaye
            {isEnglish ? " — All rights reserved" : " — Tous droits réservés"}
          </span>
          <a
            href={sectionHref("#accueil")}
            className="flex items-center gap-1.5 font-['JetBrains_Mono'] text-[10px] uppercase tracking-wider text-gray-500 transition-colors hover:text-blue-400"
          >
            {isEnglish ? "Back to top" : "Retour en haut"}
            <svg width="8" height="10" viewBox="0 0 8 10" fill="none" aria-hidden="true">
              <path d="M4 9V1M1 4L4 1L7 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

      </div>
    </footer>
  );
}
