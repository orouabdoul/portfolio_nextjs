"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";

const ease = [0.22, 1, 0.36, 1] as const;

const faqs: { q: { fr: string; en: string }; a: { fr: string; en: string } }[] = [
  {
    q: {
      fr: "Comment se passe une commande ?",
      en: "How does an order work?",
    },
    a: {
      fr: "Vous pouvez commander directement un service sur ComeUp ou Upwork : le paiement est sécurisé par la plateforme et le délai est annoncé dès le départ. Pour un projet sur mesure, décrivez votre besoin dans le formulaire de contact et je vous envoie une proposition.",
      en: "You can order a service directly on ComeUp or Upwork: payment is secured by the platform and the delivery time is set from the start. For a custom project, describe your needs in the contact form and I will send you a proposal.",
    },
  },
  {
    q: {
      fr: "Quels sont les délais ?",
      en: "How long does it take?",
    },
    a: {
      fr: "Cela dépend du travail : quelques jours pour une correction de bug ou des notifications push, quelques semaines pour une application complète. Le délai exact est indiqué dans chaque offre, et je vous préviens tout de suite si un point risque de le modifier.",
      en: "It depends on the work: a few days for a bug fix or push notifications, a few weeks for a complete app. The exact delivery time is shown in each offer, and I tell you right away if anything may change it.",
    },
  },
  {
    q: {
      fr: "Est-ce que je reçois le code source ?",
      en: "Do I get the source code?",
    },
    a: {
      fr: "Oui. À la livraison, vous recevez le code source complet, avec un court guide pour lancer et faire évoluer le projet.",
      en: "Yes. At delivery, you receive the full source code, with a short guide to run and extend the project.",
    },
  },
  {
    q: {
      fr: "Combien de révisions sont prévues ?",
      en: "How many revisions are included?",
    },
    a: {
      fr: "Le nombre de révisions dépend de l'offre choisie et il est indiqué dans chaque pack. Les révisions servent à ajuster ce qui a été convenu au départ ; une nouvelle fonctionnalité fait l'objet d'une offre séparée.",
      en: "The number of revisions depends on the package and is shown in each offer. Revisions adjust what was agreed at the start; a new feature is handled as a separate offer.",
    },
  },
  {
    q: {
      fr: "Publiez-vous l'application sur Google Play et l'App Store ?",
      en: "Do you publish the app on Google Play and the App Store?",
    },
    a: {
      fr: "Oui, je peux préparer les versions et soumettre l'application. Vous avez besoin de vos propres comptes développeur Google Play et Apple. Le délai de validation dépend ensuite de Google et d'Apple.",
      en: "Yes, I can prepare the builds and submit the app. You need your own Google Play and Apple developer accounts. Review time then depends on Google and Apple.",
    },
  },
  {
    q: {
      fr: "Et si un bug apparaît après la livraison ?",
      en: "What if a bug appears after delivery?",
    },
    a: {
      fr: "Si un bug provenant de mon code apparaît dans les jours qui suivent la livraison, je le corrige gratuitement. La durée de cette garantie est précisée dans chaque offre.",
      en: "If a bug coming from my code appears in the days after delivery, I fix it for free. The length of this guarantee is stated in each offer.",
    },
  },
  {
    q: {
      fr: "Travaillez-vous avec des clients hors du Bénin ?",
      en: "Do you work with clients outside Benin?",
    },
    a: {
      fr: "Oui. Je travaille à distance avec des clients en Afrique, en Europe et ailleurs, en français et en anglais (par écrit).",
      en: "Yes. I work remotely with clients in Africa, Europe and elsewhere, in French and in English (written).",
    },
  },
];

export default function FaqSection() {
  const { language } = useLanguage();
  const locale = language === "en" ? "en" : "fr";
  const isEnglish = locale === "en";

  return (
    <section
      id="faq"
      className="w-full bg-white px-5 py-16 sm:px-8 md:py-20 lg:px-20 lg:py-24"
    >
      <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease }}
        >
          <p className="font-['JetBrains_Mono'] text-xs uppercase tracking-widest text-blue-500">
            {isEnglish ? "08 — FAQ" : "08 — Questions fréquentes"}
          </p>
          <h2 className="mt-5 font-['Sora'] text-3xl font-bold leading-tight tracking-tight text-gray-950 sm:text-4xl lg:text-5xl">
            {isEnglish ? "Before you order." : "Avant de commander."}
          </h2>
          <p className="mt-4 max-w-md font-['Manrope'] text-sm leading-7 text-gray-500 sm:text-base">
            {isEnglish
              ? "The answers to the questions clients ask most often. Something else? Write to me in the form below."
              : "Les réponses aux questions que les clients posent le plus souvent. Une autre question ? Écrivez-moi dans le formulaire ci-dessous."}
          </p>
        </motion.div>

        <div className="flex flex-col gap-3">
          {faqs.map((item, index) => (
            <motion.details
              key={item.q.fr}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: 0.04 * index, ease }}
              className="group rounded-2xl border border-gray-200 bg-white px-5 py-4 transition-colors open:border-blue-200 open:bg-blue-50/40 sm:px-6"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-['Sora'] text-[15px] font-semibold text-gray-950 sm:text-base [&::-webkit-details-marker]:hidden">
                {item.q[locale]}
                <span
                  aria-hidden="true"
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition-transform duration-200 group-open:rotate-45 group-open:border-blue-200 group-open:text-blue-600"
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M6 1.5v9M1.5 6h9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </span>
              </summary>
              <p className="mt-3 font-['Manrope'] text-sm leading-7 text-gray-600 sm:text-[15px]">
                {item.a[locale]}
              </p>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
}
