"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";

const EMAIL = "orouabdoulayeissiaka@gmail.com";
const WHATSAPP_NUMBER = "22959000892";
const ease = [0.22, 1, 0.36, 1] as const;

type Brief = {
  projectType: string;
  stage: string;
  timeline: string;
  budget: string;
  name: string;
  email: string;
  message: string;
};

const EMPTY_BRIEF: Brief = {
  projectType: "",
  stage: "",
  timeline: "",
  budget: "",
  name: "",
  email: "",
  message: "",
};

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

const EnvelopeIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="4" width="20" height="16" rx="3" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
  </svg>
);

export default function ContactSection() {
  const { language } = useLanguage();
  const isEnglish = language === "en";
  const [step, setStep] = useState(1);
  const [brief, setBrief] = useState<Brief>(EMPTY_BRIEF);

  const projectTypes = isEnglish
    ? ["Mobile app", "Website", "Digital product", "UX/UI design"]
    : ["Application mobile", "Site web", "Produit digital", "Design UX/UI"];
  const projectStages = isEnglish
    ? ["Just an idea", "Design ready", "Already in progress"]
    : ["Juste une idée", "Maquette prête", "Déjà en cours"];
  const timelines = isEnglish
    ? ["As soon as possible", "Within 1–3 months", "Still flexible"]
    : ["Dès que possible", "Dans 1 à 3 mois", "Encore flexible"];
  const budgets = isEnglish
    ? ["Under $100", "$100–$500", "$500–$1,000", "$1,000–$2,000", "Over $2,000", "To be discussed"]
    : ["Moins de 65 000 FCFA", "65 000 – 330 000 FCFA", "330 000 – 655 000 FCFA", "655 000 – 1 310 000 FCFA", "Plus de 1 310 000 FCFA", "À définir"];

  function updateBrief(field: keyof Brief, value: string) {
    setBrief((current) => ({ ...current, [field]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const message = isEnglish
      ? [
          "Hello Amadou, I would like to discuss a project.",
          `Project: ${brief.projectType}`,
          `Stage: ${brief.stage}`,
          `Timeline: ${brief.timeline}`,
          `Budget: ${brief.budget}`,
          `Name: ${brief.name}`,
          `Email: ${brief.email}`,
          `Details: ${brief.message}`,
        ].join("\n")
      : [
          "Bonjour Amadou, je souhaite discuter d'un projet.",
          `Projet : ${brief.projectType}`,
          `Stade : ${brief.stage}`,
          `Délai : ${brief.timeline}`,
          `Budget : ${brief.budget}`,
          `Nom : ${brief.name}`,
          `E-mail : ${brief.email}`,
          `Détails : ${brief.message}`,
        ].join("\n");

    window.location.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  }

  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 px-5 py-16 sm:px-8 md:py-20 lg:px-20 lg:py-24"
    >
      <div className="pointer-events-none absolute -right-20 -top-20 h-[400px] w-[400px] rounded-full bg-blue-400/30 blur-[80px]" />
      <div className="pointer-events-none absolute -bottom-10 left-10 h-[300px] w-[300px] rounded-full bg-indigo-500/20 blur-[60px]" />

      <div className="relative mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-14">

        {/* ── Left — copy ── */}
        <FadeInView className="flex flex-col">
          <p className="font-['JetBrains_Mono'] text-xs uppercase tracking-widest text-white/70">
            {isEnglish ? "09 — Contact" : "09 — Contact"}
          </p>
          <h2 className="mt-5 font-['Sora'] text-3xl font-bold leading-[1.08] tracking-tight text-white sm:text-4xl lg:text-5xl">
            {isEnglish
              ? "Have an idea? Let's build something that matters."
              : "Vous avez une idée. Construisons quelque chose qui compte."}
          </h2>
          <p className="mt-5 font-['Manrope'] text-sm leading-7 text-white/80 sm:text-base">
            {isEnglish
              ? "Tell me a little about it. Together, we'll find the right next step."
              : "Parlez-m'en. Ensemble, nous trouverons la prochaine étape adaptée."}
          </p>

          {/* Contact alternatives */}
          <div className="mt-10 flex flex-col gap-3">
            <a
              href={`mailto:${EMAIL}`}
              className="group inline-flex items-center gap-3 font-['Manrope'] text-sm text-white/70 transition-colors hover:text-white"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 transition-colors group-hover:bg-white/20">
                <EnvelopeIcon />
              </span>
              {EMAIL}
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 font-['Manrope'] text-sm text-white/70 transition-colors hover:text-white"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 transition-colors group-hover:bg-white/20">
                <WhatsAppIcon />
              </span>
              {isEnglish ? "Chat on WhatsApp" : "Discuter sur WhatsApp"}
            </a>
          </div>
        </FadeInView>

        {/* ── Right — form card ── */}
        <FadeInView
          delay={0.15}
          className="rounded-3xl bg-white p-5 text-gray-950 shadow-[0_24px_70px_rgba(15,23,42,0.2)] sm:p-7 lg:p-8"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-[0.16em] text-blue-600">
                {isEnglish ? "A quick project brief" : "Brief intelligent en 3 clics"}
              </p>
              <h3 className="mt-2 font-['Sora'] text-xl font-bold leading-tight text-gray-950 sm:text-2xl">
                {isEnglish ? "Let's talk about your project." : "Parlons de votre projet."}
              </h3>
            </div>
            <span className="shrink-0 rounded-full bg-blue-50 px-3 py-1.5 font-['JetBrains_Mono'] text-[10px] text-blue-700">
              {step} / 3
            </span>
          </div>

          <div
            className="mt-5 grid grid-cols-3 gap-2"
            aria-label={isEnglish ? `Step ${step} of 3` : `Étape ${step} sur 3`}
          >
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex flex-col gap-1.5">
                <span className={`h-1 rounded-full transition-colors duration-300 ${item <= step ? "bg-blue-600" : "bg-gray-200"}`} />
                <span className={`font-['JetBrains_Mono'] text-[9px] uppercase tracking-wider transition-colors duration-300 ${item === step ? "text-blue-700" : "text-gray-400"}`}>
                  {isEnglish
                    ? ["Project", "Plan", "Contact"][item - 1]
                    : ["Projet", "Plan", "Contact"][item - 1]}
                </span>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <fieldset className="mt-5">
                <legend className="font-['Sora'] text-sm font-semibold text-gray-900">
                  {isEnglish ? "What would you like to create?" : "Quel projet souhaitez-vous réaliser ?"}
                </legend>
                <div className="mt-3 grid grid-cols-2 gap-2">
                  {projectTypes.map((option) => (
                    <label key={option} className="cursor-pointer">
                      <input
                        type="radio"
                        name="projectType"
                        value={option}
                        checked={brief.projectType === option}
                        onChange={(event) => updateBrief("projectType", event.target.value)}
                        className="peer sr-only"
                      />
                      <span className="flex min-h-10 items-center rounded-xl border border-gray-200 px-3 py-2 font-['Manrope'] text-xs text-gray-600 transition-colors peer-checked:border-blue-500 peer-checked:bg-blue-50 peer-checked:text-blue-800 peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-blue-500 sm:text-sm">
                        {option}
                      </span>
                    </label>
                  ))}
                </div>
              </fieldset>
            )}

            {step === 2 && (
              <div className="mt-5 flex flex-col gap-4">
                <fieldset>
                  <legend className="font-['Sora'] text-sm font-semibold text-gray-900">
                    {isEnglish ? "Where are you with it?" : "Où en êtes-vous dans le projet ?"}
                  </legend>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {projectStages.map((option) => (
                      <label key={option} className="cursor-pointer">
                        <input
                          type="radio"
                          name="stage"
                          value={option}
                          checked={brief.stage === option}
                          onChange={(event) => updateBrief("stage", event.target.value)}
                          className="peer sr-only"
                        />
                        <span className="inline-flex min-h-9 items-center rounded-full border border-gray-200 px-3 py-1.5 font-['Manrope'] text-xs text-gray-600 transition-colors peer-checked:border-blue-500 peer-checked:bg-blue-50 peer-checked:text-blue-800 peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-blue-500">
                          {option}
                        </span>
                      </label>
                    ))}
                  </div>
                </fieldset>
                <fieldset>
                  <legend className="font-['Sora'] text-sm font-semibold text-gray-900">
                    {isEnglish ? "When would you like to start?" : "Quand souhaitez-vous commencer ?"}
                  </legend>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {timelines.map((option) => (
                      <label key={option} className="cursor-pointer">
                        <input
                          type="radio"
                          name="timeline"
                          value={option}
                          checked={brief.timeline === option}
                          onChange={(event) => updateBrief("timeline", event.target.value)}
                          className="peer sr-only"
                        />
                        <span className="inline-flex min-h-9 items-center rounded-full border border-gray-200 px-3 py-1.5 font-['Manrope'] text-xs text-gray-600 transition-colors peer-checked:border-blue-500 peer-checked:bg-blue-50 peer-checked:text-blue-800 peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-blue-500">
                          {option}
                        </span>
                      </label>
                    ))}
                  </div>
                </fieldset>
                <label className="flex flex-col gap-1.5 font-['Sora'] text-sm font-semibold text-gray-900">
                  {isEnglish ? "Estimated budget" : "Budget estimé"}
                  <select
                    required
                    value={brief.budget}
                    onChange={(event) => updateBrief("budget", event.target.value)}
                    className="h-10 rounded-xl border border-gray-200 bg-white px-3 font-['Manrope'] text-xs font-normal text-gray-700 outline-none focus:border-blue-500"
                  >
                    <option value="" disabled>
                      {isEnglish ? "Choose a range" : "Choisissez une fourchette"}
                    </option>
                    {budgets.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </label>
              </div>
            )}

            {step === 3 && (
              <div className="mt-5 flex flex-col gap-3">
                <label className="flex flex-col gap-1.5 font-['Sora'] text-xs font-semibold text-gray-800">
                  {isEnglish ? "A few words about your project" : "Quelques mots sur votre projet"}
                  <textarea
                    required
                    minLength={10}
                    maxLength={1000}
                    rows={3}
                    value={brief.message}
                    onChange={(event) => updateBrief("message", event.target.value)}
                    placeholder={isEnglish ? "What would you like to achieve?" : "Quel résultat souhaitez-vous obtenir ?"}
                    className="resize-y rounded-xl border border-gray-200 px-3 py-2.5 font-['Manrope'] text-xs font-normal leading-5 text-gray-800 outline-none placeholder:text-gray-400 focus:border-blue-500"
                  />
                </label>
                <div className="grid gap-3 sm:grid-cols-2">
                  <label className="flex flex-col gap-1.5 font-['Sora'] text-xs font-semibold text-gray-800">
                    {isEnglish ? "Your name" : "Votre nom"}
                    <input
                      required
                      autoComplete="name"
                      value={brief.name}
                      onChange={(event) => updateBrief("name", event.target.value)}
                      className="h-10 rounded-xl border border-gray-200 px-3 font-['Manrope'] text-xs font-normal text-gray-800 outline-none focus:border-blue-500"
                    />
                  </label>
                  <label className="flex flex-col gap-1.5 font-['Sora'] text-xs font-semibold text-gray-800">
                    {isEnglish ? "Your email" : "Votre e-mail"}
                    <input
                      required
                      type="email"
                      autoComplete="email"
                      value={brief.email}
                      onChange={(event) => updateBrief("email", event.target.value)}
                      className="h-10 rounded-xl border border-gray-200 px-3 font-['Manrope'] text-xs font-normal text-gray-800 outline-none focus:border-blue-500"
                    />
                  </label>
                </div>
              </div>
            )}

            <div className="mt-5 flex gap-2">
              {step > 1 && (
                <button
                  type="button"
                  onClick={() => setStep((current) => current - 1)}
                  className="min-h-11 rounded-xl border border-gray-200 px-4 font-['Sora'] text-xs font-semibold text-gray-700 transition-colors hover:bg-gray-50"
                >
                  {isEnglish ? "Back" : "Retour"}
                </button>
              )}
              {step < 3 ? (
                <button
                  type="button"
                  disabled={
                    step === 1
                      ? !brief.projectType
                      : !brief.stage || !brief.timeline || !brief.budget
                  }
                  onClick={() => setStep((current) => current + 1)}
                  className="flex min-h-11 flex-1 items-center justify-center gap-2 rounded-xl bg-gray-950 px-4 font-['Sora'] text-xs font-semibold text-white transition-colors hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  {isEnglish ? "Continue" : "Continuer"}
                  <span aria-hidden="true">→</span>
                </button>
              ) : (
                <button
                  type="submit"
                  className="flex min-h-11 flex-1 items-center justify-center gap-2 rounded-xl bg-gray-950 px-4 font-['Sora'] text-xs font-semibold text-white transition-colors hover:bg-gray-800"
                >
                  {isEnglish ? "Send my brief" : "Envoyer mon brief"}
                  <span aria-hidden="true">→</span>
                </button>
              )}
            </div>
            <p className="mt-2 text-center font-['Manrope'] text-[10px] leading-4 text-gray-500">
              {isEnglish
                ? "WhatsApp will open with your brief ready to send."
                : "WhatsApp s'ouvrira avec votre brief prêt à envoyer."}
            </p>
          </form>
        </FadeInView>

      </div>
    </section>
  );
}
