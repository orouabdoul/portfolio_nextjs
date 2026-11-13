"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FadeUp } from "@/components/ui/motion";
import { useLanguage } from "@/components/LanguageProvider";

const EMAIL = "orouabdoulayeissiaka@gmail.com";
const WHATSAPP_MSG_FR = "Bonjour Amadou, j'ai découvert votre portfolio et je souhaiterais discuter d'un projet.";
const WHATSAPP_MSG_EN = "Hi Amadou, I discovered your portfolio and would like to discuss a project.";

export default function ContactSection() {
  const { language } = useLanguage();
  const isEnglish = language === "en";
  const [copied, setCopied] = useState(false);

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    });
  };

  const whatsappHref = `https://wa.me/22959000892?text=${encodeURIComponent(isEnglish ? WHATSAPP_MSG_EN : WHATSAPP_MSG_FR)}`;

  const contacts = [
    {
      channel: "E-mail",
      action: EMAIL,
      href: `mailto:${EMAIL}`,
      onClick: handleEmailClick,
      description: isEnglish ? "Click to copy address" : "Cliquer pour copier",
    },
    {
      channel: "WhatsApp",
      action: "+229 59 00 08 92",
      href: whatsappHref,
      onClick: undefined,
      description: isEnglish ? "Quick message, fast reply" : "Message rapide, réponse rapide",
    },
    {
      channel: "LinkedIn",
      action: "amadou-fullstack-mobile",
      href: "https://www.linkedin.com/in/amadou-fullstack-mobile",
      onClick: undefined,
      description: isEnglish ? "Connect professionally" : "Se connecter professionnellement",
    },
  ];

  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden bg-blue-500 px-5 py-16 sm:px-8 md:py-20 lg:px-20 lg:py-24"
    >
      {/* Subtle mesh */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-[400px] w-[400px] rounded-full bg-blue-400/30 blur-[80px]" />
      <div className="pointer-events-none absolute -bottom-10 left-10 h-[300px] w-[300px] rounded-full bg-indigo-500/20 blur-[60px]" />

      <div className="relative mx-auto flex max-w-[1280px] flex-col gap-8 sm:gap-10">
        <FadeUp visibleBeforeInView>
          <p className="font-['JetBrains_Mono'] text-xs uppercase tracking-widest text-white/75">
            {isEnglish ? "06 — Contact" : "06 — Contact"}
          </p>
          <div className="mt-5 grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-end md:gap-12">
            <h2 className="max-w-3xl font-['Sora'] text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-6xl">
              {isEnglish ? "Let's talk about your project." : "Parlons de votre projet."}
            </h2>
            <p className="max-w-md font-['Manrope'] text-sm leading-7 text-white/85 sm:text-base">
              {isEnglish
                ? "A first conversation to clarify the need, scope, and next steps. Choose the channel that works best for you."
                : "Un premier échange pour clarifier le besoin, le périmètre et les prochaines étapes. Choisissez le canal qui vous convient."}
            </p>
          </div>
        </FadeUp>

        <div className="grid gap-3 sm:grid-cols-3">
          {contacts.map(({ channel, action, href, onClick, description }) => (
            <FadeUp
              visibleBeforeInView
              key={channel}
              className="group flex min-h-36 flex-col justify-between gap-5 rounded-2xl border border-white/40 bg-white/10 p-5 backdrop-blur-sm transition-colors hover:bg-white/20 sm:p-6"
            >
              <div className="flex items-center justify-between">
                <span className="font-['JetBrains_Mono'] text-xs uppercase tracking-widest text-white/75">
                  {channel}
                </span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-white/40 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white/80" aria-hidden="true">
                  <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="flex flex-col gap-1.5">
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  onClick={onClick}
                  className="break-words font-['Sora'] text-base font-semibold leading-6 text-white underline decoration-white/40 underline-offset-4 transition-colors group-hover:decoration-white sm:text-lg"
                >
                  {action}
                </a>
                <span className="font-['Manrope'] text-[11px] text-white/55">{description}</span>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>

      {/* Toast */}
      <AnimatePresence>
        {copied && (
          <motion.div
            key="toast"
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.97 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-7 left-1/2 z-50 flex -translate-x-1/2 items-center gap-2.5 rounded-full border border-gray-700 bg-gray-900 px-5 py-3 shadow-2xl"
          >
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-500 text-[10px] text-white">✓</span>
            <span className="font-['Manrope'] text-sm text-white">
              {isEnglish ? "Email address copied!" : "Adresse email copiée !"}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
