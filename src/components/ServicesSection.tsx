"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";
import { useLanguage } from "@/components/LanguageProvider";

const ease = [0.22, 1, 0.36, 1] as const;

const COMEUP_PROFILE = "https://comeup.com/fr/@abdoulayeissiaka";

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

type Service = {
  id: string;
  accent: string;
  icon: ReactNode;
  title: { fr: string; en: string };
  description: { fr: string; en: string };
  points: { fr: string[]; en: string[] };
  priceEur?: string;
  priceXof?: string;
  priceUsd: string;
  upwork: string;
  comeup?: string;
  popular?: boolean;
  badge?: { fr: string; en: string };
};

const icon = (children: ReactNode) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {children}
  </svg>
);

const services: Service[] = [
  {
    id: "bugs",
    accent: "bg-rose-50 text-rose-600 border-rose-200",
    icon: icon(<path d="M5 12.5l4.2 4.2L19 7" />),
    title: { fr: "Correction de bugs Flutter", en: "Flutter bug fixing" },
    description: {
      fr: "Votre application plante ou se comporte mal ? Je trouve la cause, je corrige et je teste.",
      en: "Is your app crashing or misbehaving? I find the cause, fix it and test it.",
    },
    points: {
      fr: ["Cause expliquée", "Testé sur Android et iOS", "Rapport des corrections"],
      en: ["Root cause explained", "Tested on Android and iOS", "Short fix report"],
    },
    priceEur: "30 €",
    priceXof: "19 700 FCFA",
    priceUsd: "$35",
    upwork: "https://www.upwork.com/services/product/2124106898655987886",
    comeup: "https://comeup.com/fr/service/566348",
  },
  {
    id: "audit",
    accent: "bg-amber-50 text-amber-600 border-amber-200",
    icon: icon(
      <>
        <circle cx="11" cy="11" r="6.5" />
        <path d="M20.5 20.5l-4.9-4.9" />
        <path d="M8.5 11l1.8 1.8L13.8 9.4" />
      </>,
    ),
    title: { fr: "Audit d'application Flutter", en: "Flutter app audit" },
    description: {
      fr: "Je passe votre code au crible et vous remets un rapport clair, avec les corrections classées par priorité.",
      en: "I review your code and give you a clear report, with fixes ranked by priority.",
    },
    points: {
      fr: ["Bugs et performances", "Sécurité et architecture", "Plan d'action priorisé"],
      en: ["Bugs and performance", "Security and architecture", "Prioritized action plan"],
    },
    priceEur: "15 €",
    priceXof: "9 800 FCFA",
    priceUsd: "$20",
    upwork: "https://www.upwork.com/services/product/2125948598984352051",
    comeup: "https://comeup.com/fr/service/566373",
    badge: { fr: "Petit budget", en: "Best to start" },
  },
  {
    id: "figma",
    accent: "bg-violet-50 text-violet-600 border-violet-200",
    icon: icon(
      <>
        <rect x="3" y="4" width="10" height="13" rx="2" />
        <rect x="14" y="7" width="7" height="13" rx="2" />
        <path d="M6 8h4M6 11h4" />
      </>,
    ),
    title: { fr: "Maquette Figma → Flutter", en: "Figma to Flutter" },
    description: {
      fr: "Votre maquette Figma devient un vrai écran Flutter, fidèle au pixel près. Pas de maquette ? Je la dessine.",
      en: "Your Figma design becomes a real Flutter screen, pixel-perfect. No design yet? I can draw it.",
    },
    points: {
      fr: ["Fidèle au design", "Téléphone et tablette", "Code propre et réutilisable"],
      en: ["Pixel-perfect", "Phone and tablet", "Clean, reusable code"],
    },
    priceEur: "25 €",
    priceXof: "16 400 FCFA",
    priceUsd: "$30",
    upwork: "https://www.upwork.com/services/product/2125949840489338063",
    comeup: "https://comeup.com/fr/service/567738",
  },
  {
    id: "play",
    accent: "bg-emerald-50 text-emerald-600 border-emerald-200",
    icon: icon(<path d="M6 3.5v17l14-8.5z" />),
    title: { fr: "Publication sur Google Play", en: "Google Play publishing" },
    description: {
      fr: "Votre application Flutter ou React Native publiée sur le Play Store et suivie jusqu'à la validation.",
      en: "Your Flutter or React Native app published on the Play Store and followed until approval.",
    },
    points: {
      fr: ["Release signée (AAB)", "Fiche Store complète", "Suivi jusqu'à l'acceptation"],
      en: ["Signed release (AAB)", "Complete store listing", "Followed until approval"],
    },
    priceEur: "20 €",
    priceXof: "13 100 FCFA",
    priceUsd: "$25",
    upwork: "https://www.upwork.com/services/product/2125950775530332467",
    comeup: "https://comeup.com/fr/service/567742",
  },
  {
    id: "api",
    accent: "bg-orange-50 text-orange-600 border-orange-200",
    icon: icon(
      <>
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v6c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
        <path d="M3 11v6c0 1.66 4.03 3 9 3s9-1.34 9-3v-6" />
      </>,
    ),
    title: { fr: "API REST Laravel", en: "Laravel REST API" },
    description: {
      fr: "Un backend propre et sécurisé, prêt à connecter à votre application mobile ou web.",
      en: "A clean and secure backend, ready to connect to your mobile or web app.",
    },
    points: {
      fr: ["Authentification par token", "Rôles et validation", "Documentation Postman"],
      en: ["Token authentication", "Roles and validation", "Postman documentation"],
    },
    priceEur: "95 €",
    priceXof: "62 300 FCFA",
    priceUsd: "$90",
    upwork: "https://www.upwork.com/services/product/2124187073628277865",
    comeup: "https://comeup.com/fr/service/566387",
  },
  {
    id: "app",
    accent: "bg-blue-50 text-blue-600 border-blue-200",
    icon: icon(
      <>
        <rect x="6" y="1.5" width="12" height="21" rx="3" />
        <path d="M11 18.5h2" />
      </>,
    ),
    title: { fr: "Application mobile complète", en: "Complete mobile app" },
    description: {
      fr: "De l'idée à l'application publiée : design Figma, app Flutter ou React Native, API et back-office.",
      en: "From idea to published app: Figma design, Flutter or React Native app, API and admin panel.",
    },
    points: {
      fr: ["Android et iOS", "API Laravel + back-office Vue 3", "Code source inclus"],
      en: ["Android and iOS", "Laravel API + Vue 3 admin panel", "Source code included"],
    },
    priceEur: "100 €",
    priceXof: "65 600 FCFA",
    priceUsd: "$500",
    upwork: "https://www.upwork.com/services/product/2124195442479888103",
    comeup: "https://comeup.com/fr/service/566396",
    popular: true,
  },
  {
    id: "push",
    accent: "bg-cyan-50 text-cyan-600 border-cyan-200",
    icon: icon(
      <>
        <path d="M6 16V11a6 6 0 0 1 12 0v5l1.5 2h-15z" />
        <path d="M10 20.5a2 2 0 0 0 4 0" />
      </>,
    ),
    title: { fr: "Notifications push Firebase", en: "Firebase push notifications" },
    description: {
      fr: "Des notifications qui arrivent au bon moment et ouvrent le bon écran, sur Android et iOS.",
      en: "Notifications that arrive on time and open the right screen, on Android and iOS.",
    },
    points: {
      fr: ["Firebase Cloud Messaging", "App ouverte ou fermée", "Envoi depuis votre backend"],
      en: ["Firebase Cloud Messaging", "Foreground, background, closed app", "Sent from your backend"],
    },
    priceUsd: "$45",
    upwork: "https://www.upwork.com/services/product/2124175859342838889",
  },
];

const ArrowIcon = () => (
  <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M2 7H12M8 3L12 7L8 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function ServicesSection() {
  const { language } = useLanguage();
  const locale = language === "en" ? "en" : "fr";
  const isEnglish = locale === "en";

  return (
    <section
      id="services"
      className="w-full border-y border-blue-100/70 bg-[#F1F5FB] px-5 py-16 sm:px-8 md:py-20 lg:px-20 lg:py-24"
    >
      <div className="mx-auto flex max-w-[1280px] flex-col gap-10 sm:gap-12">
        <FadeInView>
          <p className="font-['JetBrains_Mono'] text-xs uppercase tracking-widest text-blue-500">
            {isEnglish ? "05 — Services" : "05 — Services"}
          </p>
          <div className="mt-5 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-2xl font-['Sora'] text-3xl font-bold leading-tight tracking-tight text-gray-950 sm:text-4xl lg:text-5xl">
              {isEnglish ? "Fixed-price services." : "Des services à prix fixe."}
            </h2>
            <p className="max-w-md font-['Manrope'] text-sm leading-6 text-gray-500 sm:text-base">
              {isEnglish
                ? "Clear scope, clear delivery time and secure payment through ComeUp or Upwork."
                : "Un périmètre clair, un délai annoncé et un paiement sécurisé via ComeUp ou Upwork."}
            </p>
          </div>
        </FadeInView>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service, index) => (
            <FadeInView key={service.id} delay={0.08 * index} className="h-full">
              <motion.article
                whileHover={{ y: -3 }}
                transition={{ duration: 0.22, ease }}
                className={`relative flex h-full flex-col rounded-3xl border bg-white p-6 sm:p-7 ${service.popular ? "border-blue-500 shadow-[0_18px_40px_rgba(37,99,235,0.14)]" : "border-gray-200"}`}
              >
                {service.popular && (
                  <span className="absolute right-5 top-5 rounded-full bg-blue-600 px-3 py-1 font-['JetBrains_Mono'] text-[10px] font-semibold uppercase tracking-widest text-white">
                    {isEnglish ? "Popular" : "Populaire"}
                  </span>
                )}
                {!service.popular && service.badge && (
                  <span className="absolute right-5 top-5 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 font-['JetBrains_Mono'] text-[10px] font-semibold uppercase tracking-widest text-amber-700">
                    {service.badge[locale]}
                  </span>
                )}
                <div className={`flex h-11 w-11 items-center justify-center rounded-2xl border ${service.accent}`}>
                  {service.icon}
                </div>
                <h3 className="mt-6 font-['Sora'] text-xl font-bold leading-tight text-gray-950">
                  {service.title[locale]}
                </h3>
                <p className="mt-3 font-['Manrope'] text-sm leading-6 text-gray-600 xl:min-h-[72px]">
                  {service.description[locale]}
                </p>
                <ul className="mt-5 flex flex-1 flex-col gap-2 border-t border-gray-100 pt-5">
                  {service.points[locale].map((point) => (
                    <li key={point} className="flex items-start gap-2 font-['Manrope'] text-sm text-gray-700">
                      <svg className="mt-1 shrink-0 text-blue-600" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M5 12.5l4.2 4.2L19 7" />
                      </svg>
                      {point}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 font-['Manrope'] text-xs text-gray-500">
                  {isEnglish ? "Starting at" : "À partir de"}{" "}
                  <span className="font-['Sora'] text-lg font-bold text-gray-950">
                    {isEnglish || !service.priceXof ? service.priceUsd : service.priceXof}
                  </span>
                  {!isEnglish && service.priceEur && <span className="ml-1.5 text-gray-400">· {service.priceEur}</span>}
                </p>
                <div className="mt-4 flex flex-col gap-2">
                  {(() => {
                    const comeupFirst = !isEnglish && Boolean(service.comeup);
                    const primary = comeupFirst
                      ? { href: service.comeup as string, label: "Commander sur ComeUp" }
                      : { href: service.upwork, label: isEnglish ? "Order on Upwork" : "Commander sur Upwork" };
                    const secondary = comeupFirst
                      ? { href: service.upwork, label: "Aussi sur Upwork (USD)" }
                      : service.comeup
                        ? { href: service.comeup, label: isEnglish ? "Also on ComeUp (EUR)" : "Aussi sur ComeUp (EUR)" }
                        : null;
                    return (
                      <>
                        <a
                          href={primary.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex min-h-[44px] items-center justify-center gap-2 rounded-full bg-blue-600 px-5 font-['Sora'] text-sm font-semibold text-white transition-colors hover:bg-blue-500"
                        >
                          {primary.label}
                          <ArrowIcon />
                        </a>
                        {secondary ? (
                          <a
                            href={secondary.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex min-h-[40px] items-center justify-center rounded-full border border-gray-200 px-5 font-['Sora'] text-xs font-semibold text-gray-600 transition-colors hover:border-gray-400 hover:text-gray-950"
                          >
                            {secondary.label}
                          </a>
                        ) : (
                          <p className="flex min-h-[40px] items-center justify-center font-['Manrope'] text-xs text-gray-400">
                            {isEnglish ? "Available on Upwork only" : "Disponible uniquement sur Upwork"}
                          </p>
                        )}
                      </>
                    );
                  })()}
                </div>
              </motion.article>
            </FadeInView>
          ))}
        </div>

        <FadeInView>
          <div className="flex flex-col gap-4 rounded-3xl border border-gray-200 bg-white p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
            <div>
              <p className="font-['Sora'] text-lg font-bold text-gray-950">
                {isEnglish ? "A custom project?" : "Un projet sur mesure ?"}
              </p>
              <p className="mt-1 font-['Manrope'] text-sm text-gray-500">
                {isEnglish
                  ? "Tell me about your needs and I will send you a quote, or let's talk in a free 30-min call."
                  : "Décrivez votre besoin et je vous envoie un devis, ou parlons-en lors d'un appel gratuit de 30 min."}
              </p>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row">
              <a
                href="#contact"
                className="flex min-h-[44px] items-center justify-center rounded-full bg-gray-950 px-5 font-['Sora'] text-sm font-semibold text-white transition-colors hover:bg-gray-800"
              >
                {isEnglish ? "Request a quote" : "Demander un devis"}
              </a>
              <a
                href="https://calendly.com/orouabdoulayeissiaka/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[44px] items-center justify-center rounded-full border border-gray-300 px-5 font-['Sora'] text-sm font-semibold text-gray-700 transition-colors hover:border-gray-500 hover:text-gray-950"
              >
                {isEnglish ? "Book a call" : "Réserver un appel"}
              </a>
            </div>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
