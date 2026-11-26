"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { type ReactNode, useEffect, useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";

const EMAIL = "orouabdoulayeissiaka@gmail.com";
const PHONE_DISPLAY = "+229 01 59 00 08 92";
const WHATSAPP_URL = "https://wa.me/2290159000892";
const LINKEDIN_URL = "https://www.linkedin.com/in/amadou-fullstack-mobile";

const ROLES = {
  fr: ["Développeur Flutter", "Développeur React Native", "Développeur Laravel & API REST", "Designer UI/UX sur Figma"],
  en: ["Flutter Developer", "React Native Developer", "Laravel & REST API Developer", "UI/UX Designer on Figma"],
};

/** Les rôles s'écrivent puis s'effacent, l'un après l'autre. */
function TypedRole({ roles }: { roles: string[] }) {
  const [index, setIndex] = useState(0);
  const [length, setLength] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const word = roles[index % roles.length];

  useEffect(() => {
    const done = !deleting && length === word.length;
    const empty = deleting && length === 0;
    const delay = done ? 1600 : empty ? 250 : deleting ? 30 : 65;
    const id = window.setTimeout(() => {
      if (done) setDeleting(true);
      else if (empty) {
        setDeleting(false);
        setIndex((i) => (i + 1) % roles.length);
      } else setLength((l) => l + (deleting ? -1 : 1));
    }, delay);
    return () => window.clearTimeout(id);
  }, [length, deleting, word, roles.length]);

  return (
    <>
      <span className="sr-only">{roles.join(", ")}</span>
      <span aria-hidden="true" className="text-accent-hi">{word.slice(0, length)}</span>
      <span aria-hidden="true" className="ml-0.5 inline-block w-[0.6ch] animate-[caret-blink_1s_steps(1)_infinite] text-fg">▌</span>
    </>
  );
}

const icon = (path: ReactNode, size = 14) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {path}
  </svg>
);
const DownloadIcon = () => icon(<><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><path d="M7 10l5 5 5-5" /><path d="M12 15V3" /></>, 16);
const MailIcon = ({ size = 14 }: { size?: number }) => icon(<><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 5L2 7" /></>, size);
const PhoneIcon = () => icon(<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />);
const PinIcon = () => icon(<><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></>);
const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
  </svg>
);
const WhatsAppIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.06 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.48.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35zM12.05 21.79h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.89-9.88 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.89 6.99c0 5.45-4.44 9.88-9.88 9.88zm8.41-18.3A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.89 0-3.18-1.24-6.16-3.48-8.41z" />
  </svg>
);

const ease = [0.22, 1, 0.36, 1] as const;
const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease },
});

const squareIconButton =
  "inline-flex items-center justify-center rounded-md border border-line p-[11px] text-muted transition-[color,border-color,transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:scale-[1.06] hover:border-accent-hi/60 hover:text-accent-hi hover:shadow-[0_6px_18px_-8px_rgba(59,130,246,0.6)] active:scale-90";

export default function HeroSection() {
  const { language } = useLanguage();
  const isEnglish = language === "en";

  return (
    <section
      id="accueil"
      className="relative w-full scroll-mt-16 overflow-hidden bg-bg px-5 pb-24 pt-32 sm:px-8 sm:pt-40 lg:px-20"
    >
      {/* Halo lumineux en haut, centré */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[820px] max-w-[140vw] -translate-x-1/2 rounded-[50%] bg-[radial-gradient(circle,rgba(59,130,246,0.28),transparent_65%)] opacity-40 blur-[40px]"
      />

      <div className="relative mx-auto grid max-w-[1280px] items-center gap-12 md:grid-cols-[1.4fr_1fr]">
        {/* ── Colonne texte ── */}
        <div>
          <motion.p
            {...fadeUp(0.05)}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-surface/70 px-3 py-1 font-['JetBrains_Mono'] text-xs text-muted"
          >
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent-hi" aria-hidden="true" />
            {isEnglish
              ? "Cotonou, Benin · available for remote work"
              : "Cotonou, Bénin · disponible en télétravail"}
          </motion.p>

          <motion.h1
            {...fadeUp(0.12)}
            className="font-['Sora'] text-4xl font-bold tracking-[-0.03em] text-fg sm:text-6xl"
          >
            Amadou ISSIAKA
          </motion.h1>

          <motion.p {...fadeUp(0.2)} className="mt-3 font-['Sora'] text-lg text-muted sm:text-xl">
            {isEnglish ? "Mobile & Backend Developer" : "Développeur Mobile & Backend"}
          </motion.p>

          <motion.div
            {...fadeUp(0.28)}
            className="mt-6 max-w-xl rounded-lg border border-line bg-surface/60 p-4 font-['JetBrains_Mono'] text-sm"
          >
            <TypedRole key={language} roles={ROLES[language]} />
          </motion.div>

          <motion.p {...fadeUp(0.36)} className="mt-6 max-w-xl font-['Manrope'] text-base leading-[1.6] text-muted">
            {isEnglish
              ? "I design and build complete mobile apps — from the Figma mockup to the published app, with their Laravel API and admin panel."
              : "Je conçois et développe des applications mobiles complètes — de la maquette Figma à l'application publiée, avec leur API Laravel et leur back-office."}
          </motion.p>

          <motion.div {...fadeUp(0.44)} className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={isEnglish ? "/cv-en.pdf" : "/cv-fr.pdf"}
              download
              className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-5 py-2.5 font-['Sora'] text-sm font-medium text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-blue-500"
            >
              <DownloadIcon />
              {isEnglish ? "Download my CV" : "Télécharger mon CV"}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-md border border-accent-hi/40 px-5 py-2.5 font-['Sora'] text-sm font-medium text-accent-hi transition-[transform,background-color] duration-200 hover:-translate-y-0.5 hover:bg-accent-hi/10"
            >
              {isEnglish ? "Contact me" : "Me contacter"}
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-[#25D366] px-5 py-2.5 font-['Sora'] text-sm font-medium text-white transition-transform duration-200 hover:-translate-y-0.5"
            >
              <WhatsAppIcon />
              WhatsApp
            </a>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={squareIconButton}>
              <LinkedInIcon />
            </a>
            <a href={`mailto:${EMAIL}`} aria-label="E-mail" className={squareIconButton}>
              <MailIcon size={16} />
            </a>
          </motion.div>

          <motion.div
            {...fadeUp(0.52)}
            className="mt-8 flex flex-wrap gap-x-6 gap-y-3 font-['JetBrains_Mono'] text-xs text-muted"
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 transition-colors hover:text-accent-hi">
              <span className="text-accent-hi"><PhoneIcon /></span>
              {PHONE_DISPLAY}
            </a>
            <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-1.5 transition-colors hover:text-accent-hi">
              <span className="text-accent-hi"><MailIcon /></span>
              {EMAIL}
            </a>
            <span className="inline-flex items-center gap-1.5">
              <span className="text-accent-hi"><PinIcon /></span>
              Cotonou, {isEnglish ? "Benin" : "Bénin"}
            </span>
          </motion.div>
        </div>

        {/* ── Photo ronde ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25, ease }}
          className="relative mx-auto w-56 sm:w-72"
        >
          <div className="relative aspect-square overflow-hidden rounded-full bg-[radial-gradient(circle_at_50%_35%,rgba(59,130,246,0.45),var(--surface)_70%)] shadow-[0_0_0_1px_rgba(96,165,250,0.35),0_18px_60px_-22px_rgba(59,130,246,0.6)]">
            <Image
              src="/amadou-hero.webp"
              alt={isEnglish ? "Professional portrait of Amadou Issiaka" : "Portrait professionnel d'Amadou Issiaka"}
              fill
              priority
              unoptimized
              sizes="(max-width: 639px) 224px, 288px"
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
