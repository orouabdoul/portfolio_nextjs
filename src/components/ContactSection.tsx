"use client";

import { useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";

function WhatsAppSvg() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="#3B82F6">
      <path d="M10 2C5.58 2 2 5.58 2 10c0 1.49.4 2.9 1.09 4.1L2 18l4.08-1.06A8.03 8.03 0 0 0 10 18c4.42 0 8-3.58 8-8 0-4.42-3.58-8-8-8zm0 1.5a6.5 6.5 0 1 1-3.4 12.07l-.21-.13-2.63.68.7-2.56-.14-.22A6.5 6.5 0 0 1 10 3.5zM8 7.07c-.16 0-.4.06-.6.3-.2.24-.77.75-.77 1.83s.79 2.12.9 2.27c.11.15 1.55 2.37 3.76 3.23 1.87.73 2.26.59 2.66.55.4-.04 1.3-.53 1.48-1.04.18-.51.18-.95.13-1.04-.05-.09-.19-.14-.4-.25-.2-.1-1.21-.6-1.4-.67-.19-.07-.33-.1-.47.1-.14.2-.54.67-.66.81-.12.14-.24.16-.45.05-.2-.1-.88-.32-1.67-1.04-.62-.55-1.03-1.23-1.15-1.44-.12-.2-.01-.32.09-.42.1-.1.2-.25.31-.37.1-.12.14-.2.21-.34.07-.14.03-.27-.01-.38-.05-.11-.46-1.1-.64-1.51-.16-.38-.33-.33-.46-.33z" />
    </svg>
  );
}

function EmailSvg() {
  return (
    <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
      <rect x="1" y="1" width="18" height="12" rx="2" stroke="#3B82F6" strokeWidth="1.5" />
      <path d="M1.5 2.5L10 8.5L18.5 2.5" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LinkedInSvg() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect x="1.5" y="1.5" width="17" height="17" rx="2.5" stroke="#3B82F6" strokeWidth="1.5" />
      <rect x="4.5" y="8.5" width="2.5" height="7" fill="#3B82F6" />
      <circle cx="5.75" cy="5.75" r="1.5" fill="#3B82F6" />
      <path d="M10 10.5C10 9.12 11.12 8 12.5 8S15 9.12 15 10.5V15.5" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" />
      <line x1="10" y1="8.5" x2="10" y2="15.5" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function GitHubSvg() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="#3B82F6">
      <path fillRule="evenodd" clipRule="evenodd" d="M10 1.67A8.33 8.33 0 0 0 7.37 17.9c.42.08.57-.18.57-.4v-1.4c-2.33.5-2.82-1.12-2.82-1.12a2.22 2.22 0 0 0-.93-1.22c-.76-.52.06-.51.06-.51.84.06 1.28.86 1.28.86.75 1.27 1.96.9 2.44.69.07-.54.29-.9.53-1.11-1.86-.21-3.82-.93-3.82-4.14 0-.91.33-1.66.86-2.24-.09-.21-.37-1.06.08-2.21 0 0 .7-.22 2.3.86a7.98 7.98 0 0 1 4.2 0c1.59-1.08 2.3-.86 2.3-.86.45 1.15.17 2 .08 2.21.53.58.86 1.33.86 2.24 0 3.22-1.96 3.93-3.83 4.13.3.26.57.77.57 1.56v2.31c0 .22.15.49.58.4A8.33 8.33 0 0 0 10 1.67z" />
    </svg>
  );
}

function Pill({
  label,
  active = false,
  onClick,
}: {
  label: string;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-xs font-['Manrope'] leading-5 tracking-tight shrink-0 cursor-pointer transition-colors duration-150 ${
        active
          ? "bg-blue-500 text-white font-semibold"
          : "border border-gray-950/20 text-gray-950 hover:border-blue-400 hover:text-blue-500"
      }`}
    >
      {label}
    </button>
  );
}

const contacts = [
  { icon: <EmailSvg />, channel: "E-mail", action: "orouabdoulayeissiaka@gmail.com", href: "mailto:orouabdoulayeissiaka@gmail.com" },
  { icon: <LinkedInSvg />, channel: "LinkedIn", action: "/in/amadou-issiaka", href: "https://linkedin.com/in/amadou-issiaka" },
  { icon: <GitHubSvg />, channel: "GitHub", action: "/orouabdoul", href: "https://github.com/orouabdoul" },
  { icon: <WhatsAppSvg />, channel: "Brief", action: "Démarrer un projet", href: "#contact" },
];

const typeOptions = [
  { value: "mobile", fr: "Application mobile", en: "Mobile app" },
  { value: "design", fr: "Design UX/UI", en: "UX/UI design" },
  { value: "mvp", fr: "MVP / prototype", en: "MVP / prototype" },
  { value: "redesign", fr: "Refonte", en: "Redesign" },
  { value: "other", fr: "Autre", en: "Other" },
];
const stadeOptions = [
  { value: "idea", fr: "Idée", en: "Idea" },
  { value: "design", fr: "Maquettes prêtes", en: "Design ready" },
  { value: "in_progress", fr: "Projet en cours", en: "In progress" },
];
const delaiOptions = [
  { value: "urgent", fr: "Urgent", en: "Urgent" },
  { value: "1_3_months", fr: "1 à 3 mois", en: "1–3 months" },
  { value: "flexible", fr: "Flexible", en: "Flexible" },
];

export default function ContactSection() {
  const { language } = useLanguage();
  const isEnglish = language === "en";
  const [type, setType] = useState("mobile");
  const [stade, setStade] = useState("design");
  const [delai, setDelai] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="contact" className="w-full relative bg-blue-500 px-5 py-16 overflow-hidden sm:px-8 md:py-20 lg:px-20 lg:py-28">

      {/* Subtle left-edge gradient */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.10)_0%,transparent_2%)] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto flex flex-col gap-6 relative">

        {/* ── Header ── */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-px bg-white/80" />
          <span className="text-white/80 text-xs font-['JetBrains_Mono'] uppercase tracking-widest leading-4">
            {isEnglish ? "06 — Contact" : "06 — Contact"}
          </span>
        </div>
        <h2 className="text-white text-4xl font-bold font-['Sora'] leading-[1.1] tracking-[-1px] sm:text-5xl lg:text-[80px]">
          {isEnglish ? "Have an ambitious idea?" : "Vous avez une idée ambitieuse."}
          <br />{isEnglish ? "Let's build a product" : "Construisons un produit"}
          <br />{isEnglish ? "people trust and choose." : "qui rassure et convertit."}
        </h2>

        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-white/80 text-xs font-['Manrope'] sm:gap-x-5 sm:text-sm">
          <span>{isEnglish ? "Reply within 48 hours" : "Réponse sous 48 h"}</span>
          <span className="w-1.5 h-1.5 bg-white/60 rounded-full" />
          <span>{isEnglish ? "Clear project scope" : "Cadrage clair"}</span>
          <span className="w-1.5 h-1.5 bg-white/60 rounded-full" />
          <span>{isEnglish ? "Outcome-focused" : "Mission orientée résultat"}</span>
        </div>

        {/* ── 2-column layout ── */}
        <div className="flex flex-col gap-8 items-stretch pt-6 lg:flex-row lg:gap-12 lg:items-start lg:pt-10">

          {/* ── Left: 2×2 contact cards grid ── */}
          <div className="w-full grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:w-[min(44%,540px)] lg:gap-5 lg:shrink-0">
            {contacts.map(({ icon, channel, action, href }) => (
              <a
                key={channel}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="min-h-32 p-5 bg-white/10 rounded-2xl border border-white/30 flex flex-col justify-between gap-5 hover:bg-white/20 transition-colors duration-200 sm:min-h-40 sm:p-6 sm:rounded-3xl lg:h-48"
              >
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0">
                  {icon}
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-white/70 text-xs font-['JetBrains_Mono'] uppercase leading-4 tracking-wide">
                    {channel === "Brief" && isEnglish ? "Project brief" : channel}
                  </span>
                  <span className="text-slate-100 text-base font-semibold font-['Sora'] leading-6 truncate">
                    {channel === "Brief"
                      ? isEnglish ? "Start a project brief" : action
                      : action}
                  </span>
                </div>
              </a>
            ))}
          </div>

          {/* ── Right: Brief form ── */}
          <div className="w-full min-w-0 flex-1 p-5 bg-white rounded-2xl flex flex-col gap-3 sm:p-8 sm:rounded-3xl lg:p-10">

            {/* Step indicators */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center shrink-0">
                <span className="text-white text-xs font-['JetBrains_Mono'] leading-4">1</span>
              </div>
              <div className="flex-1 h-0.5 bg-blue-500" />
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center shrink-0">
                <span className="text-white text-xs font-['JetBrains_Mono'] leading-4">2</span>
              </div>
              <div className="flex-1 h-0.5 bg-blue-500/30" />
              <div className="w-8 h-8 rounded-full border-2 border-blue-500/40 flex items-center justify-center shrink-0">
                <span className="text-blue-500 text-xs font-['JetBrains_Mono'] leading-4">3</span>
              </div>
            </div>

            {/* Form title */}
            <h3 className="text-gray-950 text-2xl font-bold font-['Sora'] leading-8 pt-3 sm:text-3xl sm:leading-10">
              {isEnglish ? "Project brief in 3 questions" : "Brief de projet en 3 questions"}
            </h3>

            {sent ? (
              <div className="flex-1 flex flex-col items-center justify-center gap-4 py-8">
                <div className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center">
                  <svg width="24" height="20" viewBox="0 0 24 20" fill="none">
                    <path d="M2 10L9 17L22 2" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="text-gray-950 text-xl font-bold font-['Sora'] text-center">
                  {isEnglish ? "Message sent!" : "Message envoyé !"}
                </p>
                <p className="text-gray-400 text-sm font-['Manrope'] text-center">
                  {isEnglish ? "I'll get back to you within 48 hours." : "Je reviens vers vous sous 48 h."}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">

                {/* Step 1 — Type de projet */}
                <div className="flex flex-col gap-3 pt-3">
                  <span className="text-blue-500 text-xs font-['JetBrains_Mono'] uppercase leading-4 tracking-wide">
                    {isEnglish ? "1 · Project type" : "1 · Type de projet"}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {typeOptions.map((option) => (
                      <Pill key={option.value} label={isEnglish ? option.en : option.fr} active={type === option.value} onClick={() => setType(option.value)} />
                    ))}
                  </div>
                </div>

                {/* Step 2 — Stade du projet */}
                <div className="flex flex-col gap-3 pt-2">
                  <span className="text-blue-500 text-xs font-['JetBrains_Mono'] uppercase leading-4 tracking-wide">
                    {isEnglish ? "2 · Project stage" : "2 · Stade du projet"}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {stadeOptions.map((option) => (
                      <Pill key={option.value} label={isEnglish ? option.en : option.fr} active={stade === option.value} onClick={() => setStade(option.value)} />
                    ))}
                  </div>
                </div>

                {/* Step 3 — Délai souhaité */}
                <div className="flex flex-col gap-3 pt-2">
                  <span className="text-blue-500 text-xs font-['JetBrains_Mono'] uppercase leading-4 tracking-wide">
                    {isEnglish ? "3 · Desired timeline" : "3 · Délai souhaité"}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {delaiOptions.map((option) => (
                      <Pill key={option.value} label={isEnglish ? option.en : option.fr} active={delai === option.value} onClick={() => setDelai(delai === option.value ? "" : option.value)} />
                    ))}
                  </div>
                </div>

                {/* Text inputs */}
                <div className="flex flex-col gap-3 pt-3 sm:flex-row">
                  <input
                    type="text"
                    name="nom"
                    placeholder={isEnglish ? "Name" : "Nom"}
                    required
                    className="flex-1 h-12 px-4 bg-slate-100 rounded-xl border border-gray-950/10 text-gray-700 text-sm font-['Manrope'] leading-5 tracking-tight outline-none focus:border-blue-400 transition-colors placeholder:text-gray-400"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    className="flex-1 h-12 px-4 bg-slate-100 rounded-xl border border-gray-950/10 text-gray-700 text-sm font-['Manrope'] leading-5 tracking-tight outline-none focus:border-blue-400 transition-colors placeholder:text-gray-400"
                  />
                </div>

                {/* Textarea */}
                <textarea
                  name="message"
                  placeholder={isEnglish ? "A short message about your project" : "Message court"}
                  required
                  className="w-full h-24 px-4 pt-3 bg-slate-100 rounded-xl border border-gray-950/10 text-gray-700 text-sm font-['Manrope'] leading-5 tracking-tight resize-none outline-none focus:border-blue-400 transition-colors placeholder:text-gray-400"
                />

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full h-14 bg-gray-950 rounded-full flex items-center justify-center gap-2 cursor-pointer hover:bg-gray-800 transition-colors duration-200"
                >
                  <span className="text-white text-base font-semibold font-['Sora'] leading-6 tracking-tight">
                    {isEnglish ? "Send project inquiry" : "Envoyer ma demande de projet"}
                  </span>
                  <svg width="12" height="10" viewBox="0 0 12 10" fill="none" className="shrink-0">
                    <path d="M1 5H11M7 1L11 5L7 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                {/* Caption */}
                <div className="flex justify-center">
                  <span className="text-gray-400 text-xs font-['Manrope'] leading-4 tracking-tight">
                    {isEnglish ? "Response within 48 hours" : "Réponse sous 48 h"}
                  </span>
                </div>

              </form>
            )}

          </div>
        </div>
      </div>
    </section>
  );
}
