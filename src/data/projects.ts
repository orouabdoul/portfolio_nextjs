import type { PortfolioScreenName } from "@/components/visuals/PortfolioScreen";

export type ProjectScope = "design" | "dev" | "both";
export type LinkType = "prototype" | "demo" | "github" | "behance" | "app-store" | "website";

export interface ProjectLink {
  label: { fr: string; en: string };
  href: string;
  type: LinkType;
}

export interface Project {
  slug: string;
  year: string;
  scope: ProjectScope;
  categories: string[];
  name: string;
  type: { fr: string; en: string };
  /** Short — used on the card */
  summary: { fr: string; en: string };
  /** Long — used on the detail page */
  description: { fr: string; en: string };
  role: { fr: string; en: string };
  duration: { fr: string; en: string };
  problem: { fr: string; en: string };
  solution: { fr: string; en: string };
  tags: string[];
  links: ProjectLink[];
  screens: { name: PortfolioScreenName; label: { fr: string; en: string }; frame?: "mobile" | "web"; chromeLabel?: string; objectFit?: "cover" | "contain" }[];
  video?: string;
  videoChromeLabel?: string;
  video2?: string;
  videoChromeLabel2?: string;
  insights: {
    title: { fr: string; en: string };
    detail: { fr: string; en: string };
  }[];
}

export const projects: Project[] = [
  // ── MyMonto ─────────────────────────────────────────────────────────────
  {
    slug: "mymonto",
    year: "2024 – 2025",
    scope: "dev",
    categories: ["mobile"],
    name: "MyMonto",
    type: { fr: "Services automobiles · Application Flutter", en: "Car services · Flutter app" },
    summary: {
      fr: "Application Flutter (Play Store) centralisant assurance, réparations et GPS pour les conducteurs au Bénin. Développement front-end et intégration API au sein d'une équipe de trois.",
      en: "Flutter app (Play Store) centralizing insurance, repairs and GPS for drivers in Benin. Front-end development and API integration within a three-person team.",
    },
    description: {
      fr: "MyMonto Garage est une application Flutter disponible sur le Play Store, développée pour COSIT-BÉNIN (2024-2025). L'application regroupe les services clés pour les conducteurs : assurance, réparations en garage et localisation GPS. Elle dispose de deux espaces distincts — espace client et espace garage. J'ai construit l'intégralité de l'interface Flutter et intégré les APIs REST backend, en collaboration avec le designer et le développeur back-end.",
      en: "MyMonto Garage is a Flutter app available on the Play Store, built for COSIT-BÉNIN (2024-2025). The app brings together key driver services: insurance, garage repairs, and GPS location. It has two distinct spaces — customer space and garage space. I built the full Flutter interface and integrated the backend REST APIs, working with the designer and backend developer.",
    },
    role: {
      fr: "Développeur Flutter (front-end & intégration API)",
      en: "Flutter Developer (front-end & API integration)",
    },
    duration: { fr: "6 mois", en: "6 months" },
    problem: {
      fr: "Les conducteurs au Bénin devaient jongler entre plusieurs interlocuteurs pour gérer leur assurance, trouver un garage et localiser leur véhicule. Il n'existait pas d'application centralisant ces services dans une interface unifiée et mobile.",
      en: "Drivers in Benin had to juggle multiple contacts to manage their insurance, find a garage, and locate their vehicle. No app centralized these services in a unified, mobile interface.",
    },
    solution: {
      fr: "Une application Flutter avec deux espaces (client et garage) intégrant assurance, réparations et GPS dans une interface cohérente. Développement de tous les écrans des deux espaces et intégration complète des APIs REST, en coordination avec le designer et le back-end.",
      en: "A Flutter app with two spaces (customer and garage) integrating insurance, repairs and GPS in a coherent interface. All screens of both spaces built and full REST API integration, in coordination with the designer and backend.",
    },
    tags: ["Flutter", "Dart", "REST API"],
    links: [
      {
        label: { fr: "Télécharger sur Play Store", en: "Get on Play Store" },
        href: "https://play.google.com/store/apps/details?id=com.cositbenin2021.my_monto_mobile_garage&hl=fr",
        type: "app-store",
      },
    ],
    video: "/videos/mymonto-demo.mp4",
    videoChromeLabel: "MyMonto Garage · Démo Flutter",
    screens: [
      { name: "mymonto-1", label: { fr: "Capture 1", en: "Screen 1" }, frame: "web" },
      { name: "mymonto-2", label: { fr: "Capture 2", en: "Screen 2" }, frame: "web" },
      { name: "mymonto-3", label: { fr: "Capture 3", en: "Screen 3" }, frame: "web" },
      { name: "mymonto-4", label: { fr: "Capture 4", en: "Screen 4" }, frame: "web" },
    ],
    insights: [
      {
        title: { fr: "Deux espaces, une app", en: "Two spaces, one app" },
        detail: {
          fr: "Séparer clairement l'espace client et l'espace garage dans la même application permet aux deux types d'utilisateurs d'accéder directement à leurs fonctionnalités sans confusion, tout en partageant la même base de code Flutter.",
          en: "Clearly separating the customer space and garage space within the same app lets both user types access their features directly without confusion, while sharing the same Flutter codebase.",
        },
      },
      {
        title: { fr: "L'intégration API comme discipline", en: "API integration as a discipline" },
        detail: {
          fr: "Travailler en équipe avec un designer et un back-end séparé demande une rigueur sur les contrats d'API : typage des réponses, gestion des erreurs et états de chargement cohérents dans tous les écrans.",
          en: "Working as a team with a separate designer and backend requires rigour on API contracts: typed responses, error handling and consistent loading states across all screens.",
        },
      },
      {
        title: { fr: "Un service complet en mobile", en: "A complete service on mobile" },
        detail: {
          fr: "Réunir assurance, garage et GPS dans une seule application réduit la friction pour le conducteur : un seul point d'entrée pour tout ce qui concerne son véhicule, accessible en quelques secondes depuis son téléphone.",
          en: "Bringing insurance, garage, and GPS together in one app reduces friction for the driver: a single entry point for everything vehicle-related, accessible in seconds from their phone.",
        },
      },
    ],
  },
  // ── DoroFaba ─────────────────────────────────────────────────────────────
  {
    slug: "dorofaba",
    year: "2025",
    scope: "both",
    categories: ["web", "design"],
    name: "DoroFaba",
    type: { fr: "Gestion commerce · Application web", en: "Retail management · Web app" },
    summary: {
      fr: "Application web permettant aux petits commerçants de suivre leurs ventes, leur stock et leurs clients en un seul endroit. Conçue, développée et mise en ligne.",
      en: "Web app that lets small retailers track their sales, stock and customers in one place. Designed, built and put online.",
    },
    description: {
      fr: "DoroFaba est un projet personnel : une application web full-stack conçue et développée pour les petits commerçants béninois. L'objectif : remplacer le cahier et les feuilles volantes par un outil numérique simple, accessible sur mobile, qui centralise ventes, stock et fidélisation clients. Connexion par numéro de téléphone, interface adaptée aux non-techniciens, en ligne sur dorofaba.com et en cours de présentation aux commerçants.",
      en: "DoroFaba is a personal project: a full-stack web app designed and built for small Beninese retailers. The goal: replace notebooks and loose sheets with a simple, mobile-accessible digital tool that centralizes sales, stock and customer loyalty. Phone-number login, interface adapted for non-technical users, online at dorofaba.com and currently being presented to retailers.",
    },
    role: {
      fr: "Designer UI/UX · Développeur full-stack Laravel",
      en: "UI/UX Designer · Full-stack Laravel Developer",
    },
    duration: { fr: "3 mois", en: "3 months" },
    problem: {
      fr: "Les petits commerçants au Bénin gèrent leur stock, leurs ventes et leurs clients sur papier — ce qui mène à des ruptures de stock imprévues, des pertes non détectées et aucune visibilité sur les clients fidèles. Sans outil numérique adapté à leur réalité (mobile, simple, sans abonnement complexe), ils restaient bloqués sur des méthodes artisanales.",
      en: "Small retailers in Benin manage their stock, sales and customers on paper — leading to unexpected stockouts, undetected losses and no visibility on loyal customers. Without a digital tool adapted to their reality (mobile, simple, no complex subscription), they were stuck with artisanal methods.",
    },
    solution: {
      fr: "Une application web Laravel mobile-friendly avec suivi des ventes en temps réel, alertes de rupture et de surstock, et module de fidélisation client. Connexion par numéro de téléphone pour éliminer la friction à l'inscription, et interface pensée pour des utilisateurs peu à l'aise avec la technologie.",
      en: "A mobile-friendly Laravel web app with real-time sales tracking, low-stock and overstock alerts, and a customer loyalty module. Phone-number login to eliminate sign-up friction, and an interface designed for users with limited tech comfort.",
    },
    tags: ["Laravel", "PHP", "MySQL", "Tailwind CSS"],
    links: [
      {
        label: { fr: "Voir l'application", en: "View app" },
        href: "https://www.dorofaba.com/connexion",
        type: "website",
      },
    ],
    screens: [
      { name: "dorofaba-connexion", label: { fr: "Connexion",        en: "Login" },            frame: "web", chromeLabel: "dorofaba.com" },
      { name: "dorofaba-dashboard", label: { fr: "Espace marchand",  en: "Merchant dashboard" }, frame: "web", chromeLabel: "dorofaba.com" },
      { name: "dorofaba-boutique",  label: { fr: "Boutique publique", en: "Public storefront" }, frame: "web", chromeLabel: "dorofaba.com" },
    ],
    insights: [
      {
        title: { fr: "Visibilité immédiate", en: "Immediate visibility" },
        detail: {
          fr: "Afficher le total des ventes du jour, le stock restant et les clients du mois dès l'accueil transforme l'application en tableau de bord de décision — pas seulement en registre de saisie.",
          en: "Showing today's total sales, remaining stock and this month's customers right on the home screen turns the app into a decision dashboard — not just a data entry register.",
        },
      },
      {
        title: { fr: "Prévenir la rupture", en: "Prevent the stockout" },
        detail: {
          fr: "Une alerte proactive quand un article passe sous le seuil minimum vaut mieux qu'un constat d'absence. Configurer ce seuil par article rend la gestion de stock actionnable, sans rapport à lire.",
          en: "A proactive alert when an item drops below its minimum threshold is better than discovering it's gone. Setting this threshold per item makes stock management actionable, with no report to read.",
        },
      },
      {
        title: { fr: "Le numéro de téléphone comme identité", en: "Phone number as identity" },
        detail: {
          fr: "Remplacer email + mot de passe par un login numéro de téléphone réduit les abandons à l'inscription de façon spectaculaire dans un contexte où beaucoup d'utilisateurs n'ont pas d'adresse email active.",
          en: "Replacing email + password with a phone-number login dramatically reduces sign-up drop-offs in a context where many users don't have an active email address.",
        },
      },
    ],
  },
  // ── SIM AH ─────────────────────────────────────────────────────────────
  {
    slug: "sim-ah",
    year: "2023",
    scope: "dev",
    categories: ["mobile"],
    name: "SIM AH",
    type: { fr: "Prix agricoles · Application Flutter", en: "Agricultural prices · Flutter app" },
    summary: {
      fr: "Application Flutter co-développée permettant de suivre les prix agricoles en temps réel, marché par marché, dans le cadre du projet SIM Agricole Harmonisé du Bénin.",
      en: "Co-developed Flutter app for tracking agricultural prices in real time, market by market, as part of Benin's Harmonised Agricultural Market Information System.",
    },
    description: {
      fr: "SIM AH (simagricole-harmonise.bj) est une application Flutter développée pour COSIT-BÉNIN (2023) permettant aux acteurs du marché agricole béninois de consulter les prix des produits en temps réel, par marché et par secteur. J'ai co-développé l'interface Flutter en binôme avec un autre développeur, et intégré les APIs REST backend en coordination avec le designer et le développeur back-end.",
      en: "SIM AH (simagricole-harmonise.bj) is a Flutter app built for COSIT-BÉNIN (2023) letting Beninese agricultural market players check product prices in real time, by market and by sector. I co-developed the Flutter interface in pair with another developer, and integrated the backend REST APIs in coordination with the designer and backend developer.",
    },
    role: {
      fr: "Co-développeur Flutter (front-end & intégration API)",
      en: "Co-Flutter Developer (front-end & API integration)",
    },
    duration: { fr: "3 mois", en: "3 months" },
    problem: {
      fr: "Les producteurs, commerçants et acheteurs du marché agricole béninois n'avaient pas d'accès facile aux prix en vigueur dans les différents marchés. Cette opacité créait des inégalités : ceux qui connaissaient les prix négociaient mieux que ceux qui ne les connaissaient pas.",
      en: "Producers, traders and buyers in Benin's agricultural market had no easy access to current prices across different markets. This opacity created inequalities: those who knew prices negotiated better than those who didn't.",
    },
    solution: {
      fr: "Une application Flutter permettant de consulter les prix agricoles en temps réel, marché par marché et secteur par secteur. Co-développement des écrans en binôme et intégration des APIs REST de simagricole-harmonise.bj, avec une interface adaptée aux conditions d'usage mobile sur le terrain.",
      en: "A Flutter app for consulting agricultural prices in real time, market by market and sector by sector. Co-development of screens in pair and integration of the simagricole-harmonise.bj REST APIs, with an interface adapted to mobile field conditions.",
    },
    tags: ["Flutter", "Dart", "REST API"],
    links: [
      {
        label: { fr: "Plateforme SIM AH", en: "SIM AH Platform" },
        href: "https://simagricole-harmonise.bj",
        type: "website",
      },
      {
        label: { fr: "Voir le design Figma", en: "View Figma design" },
        href: "https://www.figma.com/design/fQMQmaFhFCpiQPRSfkP3Hk/Untitled?node-id=0-1&p=f&t=YSGqCJCJXaVzJnDV-0",
        type: "prototype",
      },
    ],
    screens: [
      { name: "simah-1", label: { fr: "Splash", en: "Splash" }, objectFit: "contain" as const },
      { name: "simah-2", label: { fr: "Onboarding", en: "Onboarding" }, objectFit: "contain" as const },
      { name: "simah-3", label: { fr: "Vérification", en: "Verification" }, objectFit: "contain" as const },
      { name: "simah-4", label: { fr: "Tableau de bord", en: "Dashboard" }, objectFit: "contain" as const },
      { name: "simah-5", label: { fr: "Liste des filières", en: "Product list" }, objectFit: "contain" as const },
    ],
    insights: [
      {
        title: { fr: "L'information comme équité", en: "Information as equity" },
        detail: {
          fr: "Rendre les prix agricoles accessibles à tous les acteurs du marché en temps réel réduit l'asymétrie d'information — l'outil numérique devient un levier d'équité économique, pas seulement de commodité.",
          en: "Making agricultural prices accessible to all market players in real time reduces information asymmetry — the digital tool becomes a lever for economic equity, not just convenience.",
        },
      },
      {
        title: { fr: "Le binôme comme méthode", en: "Pair programming as method" },
        detail: {
          fr: "Co-développer les écrans Flutter à deux permet une relecture en continu et une montée en qualité rapide : chaque fonctionnalité est écrite par un développeur et revue immédiatement par l'autre.",
          en: "Co-developing Flutter screens in a pair allows continuous review and fast quality improvement: each feature is written by one developer and immediately reviewed by the other.",
        },
      },
      {
        title: { fr: "Adapté au terrain", en: "Adapted to the field" },
        detail: {
          fr: "Une application utilisée sur les marchés agricoles doit être lisible en plein soleil, rapide sur une connexion lente et intuitive sans formation. Ces contraintes réelles ont guidé les décisions d'interface tout au long du projet.",
          en: "An app used on agricultural markets must be readable in full sunlight, fast on a slow connection and intuitive without training. These real constraints guided interface decisions throughout the project.",
        },
      },
    ],
  },
  {
    slug: "devlink-africa",
    year: "2026",
    scope: "dev",
    categories: ["web"],
    name: "DevLink Africa",
    type: { fr: "Plateforme communautaire · Développement web", en: "Community platform · Web development" },
    summary: {
      fr: "Plateforme communautaire pour développeurs africains — discussions, ressources, profils et code en temps réel. Conçue et développée de bout en bout.",
      en: "Community platform for African developers — discussions, resources, profiles and live code blocks. Designed and built end-to-end.",
    },
    description: {
      fr: "DevLink Africa est une plateforme web full-stack dédiée aux développeurs du continent africain. J'ai conçu et développé l'intégralité du produit : authentification, profils développeurs, fil de discussions (Questions, Discussions, Ressources), rendu Markdown avec coloration syntaxique, likes, recherche et filtres par pays (54 pays africains). La plateforme est disponible en français et en anglais.",
      en: "DevLink Africa is a full-stack web platform dedicated to African developers. I designed and built the entire product: authentication, developer profiles, discussion feed (Questions, Discussions, Resources), Markdown rendering with syntax highlighting, likes, search and country filters (54 African countries). The platform is available in French and English.",
    },
    role: {
      fr: "Développeur full-stack",
      en: "Full-stack developer",
    },
    duration: { fr: "3 mois", en: "3 months" },
    problem: {
      fr: "Les développeurs africains manquaient d'un espace communautaire centré sur leurs réalités — langues locales, contexte continental, besoins techniques spécifiques. Les plateformes existantes comme Stack Overflow ou GitHub Discussions ne répondaient pas à ces particularités.",
      en: "African developers lacked a community space centered on their realities — local languages, continental context, specific technical needs. Existing platforms like Stack Overflow or GitHub Discussions did not address these specificities.",
    },
    solution: {
      fr: "Une plateforme communautaire multilingue (FR/EN) avec trois types de contenus — Questions, Discussions, Ressources — un profil développeur complet, un fil en temps réel, et des filtres par pays. Architecture Laravel + Vue.js + Inertia.js pour une expérience SPA fluide sans API REST séparée.",
      en: "A multilingual (FR/EN) community platform with three content types — Questions, Discussions, Resources — a complete developer profile, a real-time feed, and country filters. Laravel + Vue.js + Inertia.js architecture for a smooth SPA experience without a separate REST API.",
    },
    tags: ["Laravel", "Vue.js", "Inertia.js", "Tailwind CSS", "MySQL"],
    links: [
      {
        label: { fr: "Voir la plateforme", en: "View platform" },
        href: "https://devlinkafrica.alwaysdata.net",
        type: "website",
      },
      {
        label: { fr: "Code source", en: "Source code" },
        href: "https://github.com/orouabdoul/devlink-africa",
        type: "github",
      },
    ],
    screens: [
      { name: "devlink-africa-accueil",     label: { fr: "Accueil",      en: "Home" },        frame: "web", chromeLabel: "devlinkafrica.alwaysdata.net" },
      { name: "devlink-africa-fil",         label: { fr: "Fil",          en: "Feed" },        frame: "web", chromeLabel: "devlinkafrica.alwaysdata.net" },
      { name: "devlink-africa-discussion",  label: { fr: "Discussion",   en: "Discussion" },  frame: "web", chromeLabel: "devlinkafrica.alwaysdata.net" },
      { name: "devlink-africa-developpeurs",label: { fr: "Développeurs", en: "Developers" },  frame: "web", chromeLabel: "devlinkafrica.alwaysdata.net" },
    ],
    video: "/videos/devlink-africa-demo.mp4",
    videoChromeLabel: "devlinkafrica.alwaysdata.net",
    insights: [
      {
        title: { fr: "Trois types, une expérience", en: "Three types, one experience" },
        detail: {
          fr: "Distinguer Questions, Discussions et Ressources structure les échanges sans fragmenter la communauté. Un fil unifié les réunit, avec des badges de type bien visibles pour orienter rapidement.",
          en: "Distinguishing Questions, Discussions, and Resources structures exchanges without fragmenting the community. A unified feed brings them together, with clearly visible type badges for quick orientation.",
        },
      },
      {
        title: { fr: "Le continent comme filtre", en: "The continent as filter" },
        detail: {
          fr: "Intégrer les 54 pays africains comme filtre natif transforme la géographie en atout communautaire. Les développeurs trouvent des pairs dans leur contexte, sans chercher.",
          en: "Integrating all 54 African countries as a native filter turns geography into a community asset. Developers find peers in their context, without searching.",
        },
      },
      {
        title: { fr: "Le code au centre", en: "Code at the center" },
        detail: {
          fr: "Le rendu Markdown avec coloration syntaxique est une décision fondamentale : les discussions techniques restent lisibles, copiables, partageable — sans quitter la plateforme.",
          en: "Markdown rendering with syntax highlighting is a fundamental decision: technical discussions remain readable, copyable, shareable — without leaving the platform.",
        },
      },
    ],
  },
  // ── The Globul ─────────────────────────────────────────────────────────────
  {
    slug: "the-globul",
    year: "2025",
    scope: "both",
    categories: ["mobile", "design"],
    name: "The Globul",
    type: { fr: "Journaux de célébrités · Design & React Native", en: "Celebrity diaries · Design & React Native" },
    summary: {
      fr: "Application iOS & Android où des personnalités publiques partagent leur quotidien avec leurs fans via des abonnements payants. Identité visuelle, design system et développement React Native.",
      en: "iOS & Android app where public figures share their daily lives with fans through paid subscriptions. Visual identity, design system and React Native development.",
    },
    description: {
      fr: "The Globul est une application mobile (iOS & Android) permettant à des personnalités publiques de partager leur quotidien en écriture avec leurs fans abonnés. J'ai d'abord créé l'identité visuelle complète et le design system (palette marine/or/beige, typographie, composants UI, icônes line-art, dark mode natif), conçu les écrans clés sur Figma, puis rejoint l'équipe de développement pour implémenter les designs en React Native.",
      en: "The Globul is a mobile app (iOS & Android) for public figures to share their daily lives in writing with subscribing fans. I first created the complete visual identity and design system (navy/gold/beige palette, typography, UI components, line-art icons, native dark mode), designed the key screens in Figma, then joined the development team to implement the designs in React Native.",
    },
    role: {
      fr: "Designer UI/UX · Développeur React Native (front-end)",
      en: "UI/UX Designer · React Native Developer (front-end)",
    },
    duration: { fr: "3 mois", en: "3 months" },
    problem: {
      fr: "Les personnalités publiques n'avaient pas de canal intime pour partager leur quotidien avec leurs fans — les réseaux sociaux sont trop publics et éphémères. Les fans n'avaient pas d'accès privilégié et structuré aux contenus de leurs personnalités préférées.",
      en: "Public figures had no intimate channel to share their daily lives with fans — social networks are too public and ephemeral. Fans had no privileged, structured access to content from their favorite personalities.",
    },
    solution: {
      fr: "Une application avec un parcours découverte → abonnement → lecture. Identité visuelle forte (marine/or/beige, dark mode natif) pour refléter l'exclusivité du contenu. Des écrans immersifs centrés sur la lecture, pensés pour retenir l'attention sans distraire.",
      en: "An app with a discovery → subscription → reading flow. A strong visual identity (navy/gold/beige, native dark mode) to reflect the exclusivity of the content. Immersive reading-focused screens designed to hold attention without distraction.",
    },
    tags: ["Figma", "React Native", "Design System"],
    links: [
      {
        label: { fr: "Voir le design Figma", en: "View Figma design" },
        href: "https://www.figma.com/design/I4iXYt2Wr7mMZjU4blwpi2/Globul?node-id=56-2&p=f&t=YSGqCJCJXaVzJnDV-0",
        type: "prototype",
      },
    ],
    video: "/videos/globul-demo.mp4",
    videoChromeLabel: "The Globul · Prototype Figma",
    screens: [
      { name: "globul-1", label: { fr: "Capture 1", en: "Screen 1" } },
      { name: "globul-2", label: { fr: "Capture 2", en: "Screen 2" } },
      { name: "globul-3", label: { fr: "Capture 3", en: "Screen 3" } },
      { name: "globul-4", label: { fr: "Capture 4", en: "Screen 4" } },
      { name: "globul-5", label: { fr: "Capture 5", en: "Screen 5" } },
      { name: "globul-6", label: { fr: "Capture 6", en: "Screen 6" } },
      { name: "globul-7", label: { fr: "Capture 7", en: "Screen 7" } },
      { name: "globul-8", label: { fr: "Capture 8", en: "Screen 8" } },
      { name: "globul-9", label: { fr: "Capture 9", en: "Screen 9" } },
      { name: "globul-10", label: { fr: "Capture 10", en: "Screen 10" } },
      { name: "globul-11", label: { fr: "Capture 11", en: "Screen 11" } },
      { name: "globul-12", label: { fr: "Capture 12", en: "Screen 12" } },
      { name: "globul-13", label: { fr: "Capture 13", en: "Screen 13" } },
      { name: "globul-14", label: { fr: "Capture 14", en: "Screen 14" } },
      { name: "globul-15", label: { fr: "Capture 15", en: "Screen 15" } },
    ],
    insights: [
      {
        title: { fr: "L'identité avant l'interface", en: "Identity before interface" },
        detail: {
          fr: "Définir la palette marine/or/beige, les icônes line-art et le dark mode natif avant de concevoir les écrans garantit une cohérence visuelle immédiate — chaque composant reflète l'univers de la marque, pas seulement une interface générique.",
          en: "Defining the navy/gold/beige palette, line-art icons and native dark mode before designing the screens ensures immediate visual consistency — every component reflects the brand universe, not just a generic interface.",
        },
      },
      {
        title: { fr: "Lecture sans friction", en: "Frictionless reading" },
        detail: {
          fr: "Concevoir un mode de lecture immersif — plein écran, typographie lisible, navigation effacée — place le contenu de la personnalité au centre, sans que l'interface s'impose entre l'auteur et le fan.",
          en: "Designing an immersive reading mode — full screen, readable typography, recessed navigation — places the personality's content at the center, without the interface imposing itself between author and fan.",
        },
      },
      {
        title: { fr: "Du Figma au natif", en: "From Figma to native" },
        detail: {
          fr: "Après la phase design, contribuer au front-end React Native a rendu l'implémentation plus fidèle aux maquettes. Concevoir puis développer soi-même réduit les pertes de traduction entre design et code.",
          en: "After the design phase, contributing to the React Native front-end made the implementation more faithful to the mockups. Designing then developing yourself reduces translation losses between design and code.",
        },
      },
    ],
  },
  // ── MediCare BJ ─────────────────────────────────────────────────────────────
  {
    slug: "medicare-bj",
    year: "2025",
    scope: "dev",
    categories: ["mobile"],
    name: "MediCare BJ",
    type: { fr: "Santé numérique · Applications React Native", en: "Digital health · React Native apps" },
    summary: {
      fr: "Deux applications React Native interconnectées — patient et médecin — pour centraliser les dossiers médicaux et supprimer le papier dans les cabinets béninois.",
      en: "Two interconnected React Native apps — patient and doctor — to centralize medical records and eliminate paper in Beninese practices.",
    },
    description: {
      fr: "MediCare BJ est un système de santé numérique composé de deux applications React Native : une app patient (dossier médical, rendez-vous, QR code unique) et une app médecin (dossiers, consultations, prescriptions, suivi). La connexion entre les deux se fait par scan du QR code du patient lors de la consultation. J'ai contribué au développement React Native des deux applications.",
      en: "MediCare BJ is a digital health system made up of two React Native apps: a patient app (medical record, appointments, unique QR code) and a doctor app (records, consultations, prescriptions, follow-ups). The connection between the two happens by scanning the patient's QR code during the consultation. I contributed to the React Native development of both apps.",
    },
    role: {
      fr: "Développeur React Native",
      en: "React Native Developer",
    },
    duration: { fr: "3 mois", en: "3 months" },
    problem: {
      fr: "Le système de santé au Bénin est fragmenté : les dossiers médicaux sont éparpillés sur papier entre différents établissements, inaccessibles en urgence. Patients et médecins n'ont aucun outil numérique commun pour le suivi des consultations.",
      en: "Benin's health system is fragmented: medical records are scattered on paper across different facilities, inaccessible in emergencies. Patients and doctors have no shared digital tool for tracking consultations.",
    },
    solution: {
      fr: "Deux applications React Native interconnectées : app patient avec dossier centralisé et QR code unique, app médecin avec accès au dossier par scan. Les deux applications partagent les mêmes données en temps réel, éliminant les doublons et les pertes d'information entre établissements.",
      en: "Two interconnected React Native apps: a patient app with a centralized record and unique QR code, a doctor app with record access by scan. Both apps share the same real-time data, eliminating duplicates and information loss across facilities.",
    },
    tags: ["React Native"],
    links: [
      {
        label: { fr: "Code source", en: "Source code" },
        href: "https://github.com/orouabdoul/medicare-mobile-react-native",
        type: "github",
      },
    ],
    video: "/videos/medicare-demo-patient.mp4",
    videoChromeLabel: "MediCare BJ · Espace patient",
    video2: "/videos/medicare-demo-medecin.mp4",
    videoChromeLabel2: "MediCare BJ · Espace médecin",
    screens: [
      { name: "medicare-splash",       label: { fr: "Splash",       en: "Splash" } },
      { name: "medicare-presentation", label: { fr: "Présentation", en: "Onboarding" } },
      { name: "medicare-login",        label: { fr: "Connexion",    en: "Login" } },
      { name: "medicare-p1", label: { fr: "Patient · Écran 1", en: "Patient · Screen 1" } },
      { name: "medicare-p2", label: { fr: "Patient · Écran 2", en: "Patient · Screen 2" } },
      { name: "medicare-p3", label: { fr: "Patient · Écran 3", en: "Patient · Screen 3" } },
      { name: "medicare-p4", label: { fr: "Patient · Écran 4", en: "Patient · Screen 4" } },
      { name: "medicare-p5", label: { fr: "Patient · Écran 5", en: "Patient · Screen 5" } },
      { name: "medicare-p6", label: { fr: "Patient · Écran 6", en: "Patient · Screen 6" } },
      { name: "medicare-p8", label: { fr: "Patient · Écran 8", en: "Patient · Screen 8" } },
      { name: "medicare-p9", label: { fr: "Patient · Écran 9", en: "Patient · Screen 9" } },
      { name: "medicare-m1", label: { fr: "Médecin · Écran 1", en: "Doctor · Screen 1" } },
      { name: "medicare-m2", label: { fr: "Médecin · Écran 2", en: "Doctor · Screen 2" } },
      { name: "medicare-m3", label: { fr: "Médecin · Écran 3", en: "Doctor · Screen 3" } },
      { name: "medicare-m4", label: { fr: "Médecin · Écran 4", en: "Doctor · Screen 4" } },
      { name: "medicare-m6", label: { fr: "Médecin · Écran 6", en: "Doctor · Screen 6" } },
      { name: "medicare-m7", label: { fr: "Médecin · Écran 7", en: "Doctor · Screen 7" } },
      { name: "medicare-m8", label: { fr: "Médecin · Écran 8", en: "Doctor · Screen 8" } },
      { name: "medicare-m9", label: { fr: "Médecin · Écran 9", en: "Doctor · Screen 9" } },
    ],
    insights: [
      {
        title: { fr: "Le QR code comme clé d'accès", en: "The QR code as access key" },
        detail: {
          fr: "Associer un QR code unique à chaque patient permet au médecin d'accéder instantanément au dossier lors d'une consultation — sans saisie manuelle, sans risque d'erreur d'identité.",
          en: "Associating a unique QR code with each patient lets the doctor instantly access the record during a consultation — no manual entry, no risk of identity error.",
        },
      },
      {
        title: { fr: "Deux apps, une source de vérité", en: "Two apps, one source of truth" },
        detail: {
          fr: "Synchroniser les deux applications sur la même base de données garantit que le médecin voit exactement les mêmes informations que le patient a renseignées — aucun silo, aucune version divergente du dossier.",
          en: "Syncing both apps on the same database ensures the doctor sees exactly the same information the patient has entered — no silos, no diverging versions of the record.",
        },
      },
      {
        title: { fr: "Réduire le papier sans changer les habitudes", en: "Reduce paper without changing habits" },
        detail: {
          fr: "La transition numérique dans la santé échoue souvent par résistance au changement. Concevoir une app médecin qui mime le flux d'une consultation classique — accueil, examen, prescription — réduit la friction d'adoption.",
          en: "Digital transition in healthcare often fails due to resistance to change. Designing a doctor app that mirrors the flow of a classic consultation — intake, examination, prescription — reduces adoption friction.",
        },
      },
    ],
  },
  // ── MINIZON ─────────────────────────────────────────────────────────────
  {
    slug: "minizon",
    year: "2025",
    scope: "both",
    categories: ["mobile", "design"],
    name: "MINIZON",
    type: { fr: "Covoiturage · Application mobile", en: "Ride-sharing · Mobile app" },
    summary: {
      fr: "Application Android & iOS de covoiturage au Bénin — paiement Mobile Money avec entiercement automatique, vérification des conducteurs et messagerie intégrée. Conçue et développée de bout en bout, en solo.",
      en: "Android & iOS ride-sharing app for Benin — Mobile Money payment with automatic escrow, driver verification and in-app messaging. Designed and built end-to-end, solo.",
    },
    description: {
      fr: "MINIZON est une application Flutter complète de covoiturage pour Android & iOS, conçue et développée en solo pour le marché béninois. J'ai pris en charge l'intégralité du produit : UX, interface, back-end Laravel (API REST + back-office), paiements Mobile Money via FedaPay avec entiercement, vérification des conducteurs, messagerie et notifications push Firebase. L'application est en phase de test, avec une sortie Play Store prévue.",
      en: "MINIZON is a full Flutter ride-sharing app for Android & iOS, designed and built solo for the Beninese market. I handled the full product: UX, interface, Laravel backend (REST API + back-office), Mobile Money payments via FedaPay with escrow, driver verification, messaging and Firebase push notifications. The app is in testing, with a Play Store release coming soon.",
    },
    role: {
      fr: "Designer UI/UX · Développeur Flutter & Laravel (solo)",
      en: "UI/UX Designer · Flutter & Laravel Developer (solo)",
    },
    duration: { fr: "En phase de test", en: "In testing" },
    problem: {
      fr: "Les conducteurs et passagers au Bénin n'avaient pas de plateforme locale de covoiturage adaptée — pas de paiement Mobile Money intégré, pas de vérification des conducteurs, pas de système de litiges. Les mises en relation se faisaient de façon informelle, sans traçabilité ni sécurité.",
      en: "Drivers and passengers in Benin had no local ride-sharing platform adapted to their context — no integrated Mobile Money payment, no driver verification, no dispute system. Connections happened informally, with no traceability or safety.",
    },
    solution: {
      fr: "Une application Flutter (Android & iOS) avec paiement Mobile Money via FedaPay (MTN, Moov) et entiercement automatique : les fonds sont bloqués à la réservation, puis libérés au conducteur 24 h après le trajet si aucun litige n'est ouvert. Vérification des conducteurs (permis, véhicule), messagerie intégrée, notifications push Firebase et back-office Laravel.",
      en: "A Flutter app (Android & iOS) with Mobile Money payment via FedaPay (MTN, Moov) and automatic escrow: funds are held at booking, then released to the driver 24 hours after the trip if no dispute is raised. Driver verification (licence, vehicle), in-app messaging, Firebase push notifications and a Laravel back-office.",
    },
    tags: ["Flutter", "Laravel", "FedaPay", "Firebase", "REST API"],
    links: [
      {
        label: { fr: "Voir le design Figma", en: "View Figma design" },
        href: "https://www.figma.com/design/NzlZqIrdzZSJtjiK1PRvW2/MINIZON?node-id=369-44&p=f&t=YSGqCJCJXaVzJnDV-0",
        type: "prototype",
      },
    ],
    screens: [
      { name: "minizon-1", label: { fr: "Capture 1", en: "Screen 1" } },
      { name: "minizon-2", label: { fr: "Capture 2", en: "Screen 2" } },
      { name: "minizon-3", label: { fr: "Capture 3", en: "Screen 3" } },
      { name: "minizon-4", label: { fr: "Capture 4", en: "Screen 4" } },
      { name: "minizon-5", label: { fr: "Capture 5", en: "Screen 5" } },
      { name: "minizon-6", label: { fr: "Capture 6", en: "Screen 6" } },
      { name: "minizon-7", label: { fr: "Capture 7", en: "Screen 7" } },
      { name: "minizon-8", label: { fr: "Capture 8", en: "Screen 8" } },
      { name: "minizon-9", label: { fr: "Capture 9", en: "Screen 9" } },
      { name: "minizon-10", label: { fr: "Capture 10", en: "Screen 10" } },
      { name: "minizon-11", label: { fr: "Capture 11", en: "Screen 11" } },
    ],
    insights: [
      {
        title: { fr: "L'entiercement comme garantie", en: "Escrow as trust" },
        detail: {
          fr: "Bloquer les fonds à la réservation et les libérer automatiquement 24 h après le trajet supprime le risque d'impayé pour le conducteur et rassure le passager — sans intermédiaire humain.",
          en: "Holding funds at booking and releasing them automatically 24 hours after the trip eliminates non-payment risk for the driver and reassures the passenger — without a human intermediary.",
        },
      },
      {
        title: { fr: "La vérification comme différenciation", en: "Verification as differentiation" },
        detail: {
          fr: "Exiger permis de conduire, documents du véhicule et obtenir un badge 'vérifié' avant d'accepter des courses crée un niveau de confiance que les mises en relation informelles ne peuvent pas offrir.",
          en: "Requiring a driving licence, vehicle documents and earning a 'verified' badge before accepting rides creates a level of trust that informal connections cannot offer.",
        },
      },
      {
        title: { fr: "Un back-office indépendant", en: "An independent back-office" },
        detail: {
          fr: "Construire un back-office Laravel dédié — gestion des litiges, commission configurable (10–20 %), supervision des utilisateurs et paiements — permet d'opérer la plateforme sans toucher au code mobile.",
          en: "Building a dedicated Laravel back-office — dispute management, configurable commission (10–20%), user and payment oversight — lets the platform be operated without touching the mobile code.",
        },
      },
    ],
  },
  {
    slug: "fastgrab",
    year: "2025",
    scope: "both",
    categories: ["mobile", "design"],
    name: "FastGrab",
    type: { fr: "Livraison · UI/UX Design", en: "Food delivery · UI/UX Design" },
    summary: {
      fr: "Parcours de commande mobile fluide, de la découverte du restaurant à la validation. Conçu et développé de bout en bout.",
      en: "Seamless mobile ordering flow, from restaurant discovery through checkout. Designed and built end-to-end.",
    },
    description: {
      fr: "FastGrab est une application mobile de livraison de nourriture conçue et développée de bout en bout. J'ai pris en charge l'UX Research, la conception UI sur Figma et l'intégralité du développement Flutter — de la première maquette à l'app fonctionnelle.",
      en: "FastGrab is a food delivery mobile app designed and built end-to-end. I handled UX Research, UI design in Figma, and all Flutter development — from the first wireframe to a working app.",
    },
    role: {
      fr: "Designer UI/UX · Développeur Flutter",
      en: "UI/UX Designer · Flutter Developer",
    },
    duration: { fr: "6 semaines", en: "6 weeks" },
    problem: {
      fr: "Les applications de livraison existantes sur le marché local étaient surchargées d'informations, rendant la commande stressante et lente. L'objectif était de concevoir un parcours où un utilisateur peut commander en moins de trois étapes, sans friction.",
      en: "Existing delivery apps on the local market were overloaded with information, making ordering stressful and slow. The goal was to design a flow where a user can order in fewer than three steps, without friction.",
    },
    solution: {
      fr: "Un parcours en trois écrans progressifs — découverte, sélection, commande — avec un accent sur la lisibilité et la confiance à chaque étape. Les informations clés apparaissent au bon moment, sans surcharger l'utilisateur ni ralentir sa décision.",
      en: "A three-screen progressive flow — discovery, selection, checkout — with a focus on readability and trust at each step. Key information appears at the right moment, without overwhelming the user or slowing their decision.",
    },
    tags: ["Flutter", "Figma", "Firebase", "UX Research"],
    links: [
      // Ajoutez votre lien prototype Figma ici :
      // { label: { fr: "Prototype Figma", en: "Figma Prototype" }, href: "https://figma.com/proto/...", type: "prototype" },
    ],
    screens: [
      { name: "fastgrab-home",       label: { fr: "Accueil",    en: "Home" } },
      { name: "fastgrab-restaurant", label: { fr: "Restaurant", en: "Restaurant" } },
      { name: "fastgrab-item",       label: { fr: "Article",    en: "Item" } },
      { name: "fastgrab-checkout",   label: { fr: "Commande",   en: "Checkout" } },
    ],
    insights: [
      {
        title: { fr: "Une progression lisible", en: "A clear progression" },
        detail: {
          fr: "Séparer la découverte, le choix du restaurant et la commande réduit la charge cognitive et guide l'utilisateur naturellement sans qu'il ait besoin de réfléchir à l'étape suivante.",
          en: "Separating discovery, restaurant selection, and checkout reduces cognitive load and guides the user naturally without them having to think about the next step.",
        },
      },
      {
        title: { fr: "Le choix avant l'action", en: "Choice before action" },
        detail: {
          fr: "Montrer les informations utiles — horaires, avis, délai — avant de confirmer l'étape suivante évite les abandons à mi-parcours et renforce la confiance.",
          en: "Showing useful information — hours, reviews, delivery time — before confirming the next step prevents mid-flow drop-offs and builds trust.",
        },
      },
      {
        title: { fr: "Une validation compréhensible", en: "An understandable checkout" },
        detail: {
          fr: "Garder le récapitulatif de commande au centre de l'écran, avec le total et le CTA de paiement toujours visibles, réduit l'hésitation avant la confirmation.",
          en: "Keeping the order summary central on screen, with total and payment CTA always visible, reduces hesitation before confirmation.",
        },
      },
    ],
  },
  // ── Salesium ────────────────────────────────────────────────────────────
  {
    slug: "salesium",
    year: "2025",
    scope: "design",
    categories: ["design", "mobile", "web"],
    name: "Salesium",
    type: { fr: "Design UI · Suivi commercial terrain", en: "UI Design · Field sales tracking" },
    summary: {
      fr: "Conception UI complète d'une plateforme de suivi des commerciaux terrain et agences distribuant des recharges téléphoniques au Bénin — géofencing, signature numérique et détection de fraude.",
      en: "Complete UI design of a field sales tracking platform for telecom recharge distributors in Benin — geofencing, digital signature and fraud detection.",
    },
    description: {
      fr: "Salesium est une plateforme de suivi des commerciaux terrain (Vendeurs Motorisés) et agences distribuant des recharges téléphoniques au Bénin. J'ai conçu l'interface complète : application mobile Flutter pour les VM (tableau de bord, navigation GPS vers les points de vente, enregistrement des opérations avec signature numérique) et pour les caissières en agence, ainsi que l'interface web admin Next.js pour la supervision, le géofencing et la détection de fraude.",
      en: "Salesium is a tracking platform for field sales agents (Motorized Vendors) and telecom recharge agencies in Benin. I designed the complete interface: Flutter mobile app for field agents (dashboard, GPS navigation to points of sale, transaction recording with digital signature) and for agency cashiers, plus the Next.js web admin interface for supervision, geofencing and fraud detection.",
    },
    role: { fr: "Designer UI/UX (mobile & web)", en: "UI/UX Designer (mobile & web)" },
    duration: { fr: "En cours", en: "Ongoing" },
    problem: {
      fr: "Les agences distributrices de recharges téléphoniques au Bénin n'avaient aucun outil pour suivre les mouvements des commerciaux terrain, détecter les fraudes sur les transactions ou vérifier que les visites aux points de vente étaient bien effectuées.",
      en: "Telecom recharge distribution agencies in Benin had no tool to track field agents' movements, detect transaction fraud or verify that point-of-sale visits were actually carried out.",
    },
    solution: {
      fr: "Un système à trois interfaces cohérentes : app mobile VM pour l'enregistrement géolocalisé des opérations et la navigation GPS, app mobile caissières pour la gestion des transactions en agence, et tableau de bord web admin pour la supervision, le géofencing et les rapports de fraude.",
      en: "A three-interface system: VM mobile app for geolocated transaction recording and GPS navigation, cashier mobile app for agency transaction management, and web admin dashboard for supervision, geofencing and fraud reporting.",
    },
    tags: ["Figma", "Flutter", "Next.js", "GPS", "UI/UX"],
    links: [
      {
        label: { fr: "Voir le design Figma", en: "View Figma design" },
        href: "https://www.figma.com/design/a9NZ60G8Mf60EEWTnVP0zr/SALESIUM?node-id=0-1&p=f&t=YSGqCJCJXaVzJnDV-0",
        type: "prototype",
      },
    ],
    screens: [
      { name: "salesium-1", label: { fr: "Onboarding – GPS", en: "Onboarding – GPS" }, objectFit: "contain" as const },
      { name: "salesium-2", label: { fr: "Onboarding – Transactions", en: "Onboarding – Transactions" }, objectFit: "contain" as const },
      { name: "salesium-3", label: { fr: "Onboarding – Performance", en: "Onboarding – Performance" }, objectFit: "contain" as const },
      { name: "salesium-4", label: { fr: "Tableau de bord", en: "Dashboard" }, objectFit: "contain" as const },
      { name: "salesium-5", label: { fr: "Navigation GPS", en: "GPS Navigation" }, objectFit: "contain" as const },
      { name: "salesium-6", label: { fr: "Statistiques", en: "Statistics" }, objectFit: "contain" as const },
      { name: "salesium-7", label: { fr: "Profil", en: "Profile" }, objectFit: "contain" as const },
      { name: "salesium-8", label: { fr: "Rapports", en: "Reports" }, objectFit: "contain" as const },
    ],
    video: "/videos/salesium-demo.mp4",
    insights: [
      {
        title: { fr: "Trois interfaces, un seul système", en: "Three interfaces, one system" },
        detail: {
          fr: "Concevoir trois interfaces cohérentes (admin web, VM mobile, caissière mobile) pour des profils très différents impose une logique de design system forte : chaque écran doit être autonome mais immédiatement reconnaissable comme faisant partie du même produit.",
          en: "Designing three coherent interfaces (web admin, field VM mobile, cashier mobile) for very different user profiles demands a strong design system approach: each screen must be standalone but immediately recognizable as part of the same product.",
        },
      },
      {
        title: { fr: "GPS et UX terrain", en: "GPS and field UX" },
        detail: {
          fr: "Un commercial sur le terrain utilise son téléphone en plein soleil, en mouvement, avec parfois une connexion limitée. L'interface mobile a été conçue pour maximiser la lisibilité : typographie large, contrastes élevés, actions principales toujours visibles sans scroll.",
          en: "A field agent uses their phone in full sunlight, while moving, sometimes with limited connectivity. The mobile interface was designed for maximum readability: large typography, high contrast, primary actions always visible without scrolling.",
        },
      },
      {
        title: { fr: "Signature numérique comme preuve", en: "Digital signature as proof" },
        detail: {
          fr: "Intégrer la signature numérique directement dans le flux d'opération transforme un acte commercial en preuve légale. Ce choix de design réduit les litiges et renforce la confiance entre distributeurs et points de vente.",
          en: "Integrating digital signature directly into the transaction flow turns a commercial act into legal proof. This design choice reduces disputes and builds trust between distributors and retail points.",
        },
      },
    ],
  },
  // ── E-commerce App ─────────────────────────────────────────────────────────────
  {
    slug: "ecommerce-app",
    year: "2024",
    scope: "both",
    categories: ["mobile", "design"],
    name: "E-commerce App",
    type: { fr: "Shopping mobile · MVP Flutter", en: "Mobile shopping · Flutter MVP" },
    summary: {
      fr: "Démo d'une application mobile e-commerce pour produits électroniques — conçue pour les startups et solopreneurs qui veulent tester leur marché rapidement.",
      en: "Demo of a mobile e-commerce app for electronics — designed for startups and solopreneurs who want to test their market fast.",
    },
    description: {
      fr: "Une application mobile Flutter e-commerce pour la vente de produits électroniques (montres, écouteurs, TV, etc.). Simple, prête à vendre et rapide à lancer : idéale comme base MVP pour une startup early-stage ou un solopreneur qui veut valider son marché sans partir de zéro. Interface soignée, parcours d'achat fluide, et architecture modulaire pour s'adapter rapidement à n'importe quelle gamme de produits.",
      en: "A Flutter mobile e-commerce app for selling electronics (watches, earbuds, TVs, etc.). Simple, ready to sell and fast to launch: ideal as an MVP base for an early-stage startup or solopreneur who wants to validate their market without starting from scratch. Polished UI, smooth purchase flow, and modular architecture to quickly adapt to any product range.",
    },
    role: {
      fr: "Designer UI/UX · Développeur Flutter",
      en: "UI/UX Designer · Flutter Developer",
    },
    duration: { fr: "1 mois", en: "1 month" },
    problem: {
      fr: "Lancer une boutique en ligne mobile prend trop de temps et coûte trop cher pour une startup ou un solopreneur en phase de validation. Les solutions no-code manquent de personnalisation, et partir de zéro demande plusieurs mois.",
      en: "Launching a mobile online store takes too long and costs too much for a startup or solopreneur in validation phase. No-code solutions lack customisation, and starting from scratch takes several months.",
    },
    solution: {
      fr: "Une application Flutter e-commerce clé en main, avec catalogue produits, fiches détail, panier et paiement — livrable en quelques jours. L'architecture modulaire permet d'adapter facilement les catégories, les couleurs et les produits à n'importe quel secteur.",
      en: "A turnkey Flutter e-commerce app with product catalogue, detail pages, cart and checkout — deliverable in a few days. The modular architecture makes it easy to adapt categories, colours and products to any sector.",
    },
    tags: ["Flutter", "Dart", "UI/UX", "Figma"],
    links: [],
    video: "/videos/ecommerce-demo.mp4",
    videoChromeLabel: "E-commerce App · Démo Flutter",
    screens: [
      { name: "ecommerce-1", label: { fr: "Accueil",          en: "Home" } },
      { name: "ecommerce-2", label: { fr: "Catalogue",        en: "Catalogue" } },
      { name: "ecommerce-3", label: { fr: "Fiche produit",    en: "Product page" } },
      { name: "ecommerce-4", label: { fr: "Détail",           en: "Detail" } },
      { name: "ecommerce-5", label: { fr: "Panier",           en: "Cart" } },
      { name: "ecommerce-6", label: { fr: "Commande",         en: "Checkout" } },
      { name: "ecommerce-7", label: { fr: "Confirmation",     en: "Confirmation" } },
    ],
    insights: [
      {
        title: { fr: "Un MVP en jours, pas en mois", en: "An MVP in days, not months" },
        detail: {
          fr: "Une base Flutter bien structurée avec catalogue, panier et paiement permet à un entrepreneur de tester son idée e-commerce en quelques jours plutôt qu'en plusieurs mois de développement from scratch.",
          en: "A well-structured Flutter base with catalogue, cart and checkout lets an entrepreneur test their e-commerce idea in a few days rather than months of development from scratch.",
        },
      },
      {
        title: { fr: "Le design comme premier levier de conversion", en: "Design as the first conversion lever" },
        detail: {
          fr: "Dans une boutique mobile, la confiance se gagne d'abord par l'interface : photos nettes, hiérarchie lisible et bouton d'achat visible réduisent l'hésitation et augmentent les conversions avant même la première vente.",
          en: "In a mobile shop, trust is built first through the interface: clear photos, readable hierarchy and a visible buy button reduce hesitation and boost conversions before the first sale.",
        },
      },
      {
        title: { fr: "Modulaire par conception", en: "Modular by design" },
        detail: {
          fr: "Structurer l'app autour de composants réutilisables (carte produit, fiche, panier) permet de changer de secteur — électronique, mode, cosmétique — sans réécrire l'interface. L'idée se valide, l'app s'adapte.",
          en: "Structuring the app around reusable components (product card, detail, cart) makes it easy to switch sectors — electronics, fashion, cosmetics — without rewriting the UI. The idea gets validated, the app adapts.",
        },
      },
    ],
  },
  // ── The Cabe ─────────────────────────────────────────────────────────────
  {
    slug: "the-cabe",
    year: "2025",
    scope: "design",
    categories: ["mobile", "web", "design"],
    name: "The Cabe",
    type: { fr: "Beauté & bien-être · Design système · Mobile & Web", en: "Beauty & wellness · Design system · Mobile & Web" },
    summary: {
      fr: "Conception complète d'une plateforme de réservation beauté pour hommes, femmes et jeunes mamans — application mobile, web responsive et dashboard admin, avec design system Figma.",
      en: "Full design of a beauty reservation platform for men, women and new mothers — mobile app, responsive web and admin dashboard, with a Figma design system.",
    },
    description: {
      fr: "The Cabe est une plateforme de réservation de services de beauté et de bien-être dédiée aux hommes, femmes et jeunes mamans au Bénin. J'ai conçu l'intégralité du système de design : identité visuelle (orange, vert, gris), design system Figma, parcours utilisateur de bout en bout pour trois espaces distincts — client, prestataire et administrateur. Le projet couvre une application mobile React Native (Android & iOS), une interface web responsive Next.js et un dashboard d'administration web.",
      en: "The Cabe is a beauty and wellness reservation platform for men, women and new mothers in Benin. I designed the full design system: visual identity (orange, green, grey), Figma design system, end-to-end user journeys for three distinct spaces — client, provider and administrator. The project covers a React Native mobile app (Android & iOS), a Next.js responsive web interface and a web admin dashboard.",
    },
    role: {
      fr: "Designer UI/UX · Product Designer",
      en: "UI/UX Designer · Product Designer",
    },
    duration: { fr: "2 mois", en: "2 months" },
    problem: {
      fr: "Les salons de beauté au Bénin gèrent leurs rendez-vous par téléphone ou messagerie — pas de visibilité, pas de suivi, pas de marketplace intégrée. Les clientes perdent du temps à chercher un service disponible, et les prestataires n'ont aucun outil de gestion centralisé.",
      en: "Beauty salons in Benin manage appointments by phone or messaging — no visibility, no tracking, no integrated marketplace. Clients waste time searching for an available service, and providers have no centralised management tool.",
    },
    solution: {
      fr: "Un design système complet couvrant trois espaces (client, prestataire, admin) sur deux plateformes (mobile et web). Interface client pour réserver coiffure, soins maman/bébé, manucure et commandes marketplace. Interface prestataire pour gérer les créneaux. Dashboard admin pour superviser l'ensemble.",
      en: "A complete design system covering three spaces (client, provider, admin) across two platforms (mobile and web). Client interface to book hairdressing, mum/baby care, manicure and marketplace orders. Provider interface to manage time slots. Admin dashboard to supervise everything.",
    },
    tags: ["Figma", "Design System", "UI/UX", "React Native", "Next.js"],
    // TODO: ajouter ici le lien Figma de The Cabe (l'ancien lien ouvrait le fichier MINIZON)
    links: [],
    video: "/videos/cabe-demo.mp4",
    videoChromeLabel: "The Cabe · Prototype Figma",
    screens: [
      { name: "cabe-1", label: { fr: "Accueil",          en: "Home" } },
      { name: "cabe-2", label: { fr: "Services",         en: "Services" } },
      { name: "cabe-3", label: { fr: "Réservation",      en: "Booking" } },
      { name: "cabe-4", label: { fr: "Soins Maman",      en: "Mum Care" } },
      { name: "cabe-5", label: { fr: "Marketplace",      en: "Marketplace" } },
      { name: "cabe-6", label: { fr: "Profil",           en: "Profile" } },
      { name: "cabe-7", label: { fr: "Tableau de bord",  en: "Dashboard" } },
    ],
    insights: [
      {
        title: { fr: "Trois espaces, un seul design system", en: "Three spaces, one design system" },
        detail: {
          fr: "Concevoir client, prestataire et admin avec les mêmes composants (boutons, formulaires, cartes) garantit une cohérence visuelle immédiate et réduit le temps de développement : un composant conçu une fois est utilisable dans les trois contextes.",
          en: "Designing client, provider and admin with the same components (buttons, forms, cards) ensures immediate visual consistency and reduces development time: a component designed once is reusable across all three contexts.",
        },
      },
      {
        title: { fr: "Le soin maman/bébé comme cas complexe", en: "Mum/baby care as a complex case" },
        detail: {
          fr: "Les forfaits post-partum (3 séances/semaine, 12 séances/mois) nécessitaient une interface de suivi de progression claire — ni un simple calendrier, ni une liste de tâches, mais une vue séance par séance avec historique et état d'avancement.",
          en: "Post-partum packages (3 sessions/week, 12 sessions/month) required a clear progression tracking interface — neither a simple calendar nor a task list, but a session-by-session view with history and progress state.",
        },
      },
      {
        title: { fr: "La réservation en 3 étapes maximum", en: "Booking in 3 steps maximum" },
        detail: {
          fr: "Réserver un service de beauté ne doit pas prendre plus de 3 interactions : choisir le service, choisir le créneau, confirmer. Toute friction supplémentaire augmente le taux d'abandon — le design a été pensé pour minimiser les écrans intermédiaires.",
          en: "Booking a beauty service should take no more than 3 interactions: choose the service, choose the slot, confirm. Any extra friction increases drop-off — the design was built to minimise intermediate screens.",
        },
      },
    ],
  },
  {
    slug: "learning-shop",
    year: "2025",
    scope: "design",
    categories: ["mobile", "design"],
    name: "Shop Shoes",
    type: { fr: "Commerce mobile · UI/UX Design", en: "Mobile commerce · UI/UX Design" },
    summary: {
      fr: "Parcours d'achat de chaussures pensé pour convertir, du catalogue à la confirmation. Mission design uniquement.",
      en: "Conversion-focused shoe-shopping flow, from product discovery to confirmation. Design-only engagement.",
    },
    description: {
      fr: "Shop Shoes est une mission design pure sur une application e-commerce mobile. L'objectif était de concevoir un parcours d'achat de chaussures optimisé pour la conversion — du catalogue à l'écran de confirmation — en travaillant uniquement sur Figma.",
      en: "Shop Shoes is a pure design engagement for a mobile e-commerce app. The goal was to design a conversion-optimized shoe-shopping flow — from catalog to confirmation screen — working exclusively in Figma.",
    },
    role: {
      fr: "Designer UI/UX (mission design uniquement)",
      en: "UI/UX Designer (design-only engagement)",
    },
    duration: { fr: "4 semaines", en: "4 weeks" },
    problem: {
      fr: "Le client avait une boutique en ligne web mais aucune application mobile. Les utilisateurs abandonnaient fréquemment leur panier sur mobile en raison d'une UX non optimisée pour les petits écrans et les interactions tactiles.",
      en: "The client had a web store but no mobile app. Users frequently abandoned their carts on mobile due to a UX not optimized for small screens and touch interactions.",
    },
    solution: {
      fr: "Un parcours mobile-first en quatre étapes avec une navigation claire entre catalogue, fiche produit, panier et confirmation. Accent sur la hiérarchie visuelle, les micro-interactions et la réduction des frictions à chaque point de décision.",
      en: "A mobile-first four-step flow with clear navigation between catalog, product page, cart, and confirmation. Focus on visual hierarchy, micro-interactions, and friction reduction at each decision point.",
    },
    tags: ["Figma", "Prototyping", "UX Research", "Design System"],
    links: [
      {
        label: { fr: "Voir le design Figma", en: "View Figma design" },
        href: "https://www.figma.com/design/LEAXvM9iXeYL9V5XISf5Tl/learning-shop?node-id=0-1&p=f&t=YSGqCJCJXaVzJnDV-0",
        type: "prototype",
      },
    ],
    screens: [
      { name: "shoes-home",      label: { fr: "Catalogue",    en: "Catalog" } },
      { name: "shoes-product",   label: { fr: "Produit",      en: "Product" } },
      { name: "shoes-cart",      label: { fr: "Panier",       en: "Cart" } },
      { name: "shoes-confirmed", label: { fr: "Confirmation", en: "Confirmation" } },
    ],
    video: "/videos/learning-shop-demo.mp4",
    videoChromeLabel: "Prototype Figma · Shop Shoes",
    insights: [
      {
        title: { fr: "Parcourir le catalogue", en: "Browse the catalog" },
        detail: {
          fr: "Mettre en avant les produits et les filtres dès l'entrée réduit le temps de décision et incite à explorer sans friction, même sur un petit écran.",
          en: "Bringing products and filters forward from the start reduces decision time and encourages exploration without friction, even on small screens.",
        },
      },
      {
        title: { fr: "Décider sur la fiche produit", en: "Decide on the product page" },
        detail: {
          fr: "Regrouper taille, couleur et CTA dans une barre fixe en bas de l'écran rend la fiche produit actionnable d'une seule main, sans scroll superflu.",
          en: "Grouping size, color, and CTA in a fixed bar at the bottom makes the product page actionable with one hand, without unnecessary scrolling.",
        },
      },
      {
        title: { fr: "Suivre l'achat jusqu'au bout", en: "Follow the purchase through" },
        detail: {
          fr: "Une confirmation visuelle forte avec récapitulatif de commande et prochaine étape visible réduit l'anxiété post-achat et incite au retour.",
          en: "A strong visual confirmation with order summary and next step visible reduces post-purchase anxiety and encourages return visits.",
        },
      },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
