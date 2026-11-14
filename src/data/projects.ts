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
  screens: { name: PortfolioScreenName; label: { fr: string; en: string } }[];
  insights: {
    title: { fr: string; en: string };
    detail: { fr: string; en: string };
  }[];
}

export const projects: Project[] = [
  {
    slug: "fastgrab",
    year: "2024",
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
  {
    slug: "learning-shop",
    year: "2024",
    scope: "design",
    categories: ["mobile", "design"],
    name: "Learning Shop",
    type: { fr: "Commerce mobile · UI/UX Design", en: "Mobile commerce · UI/UX Design" },
    summary: {
      fr: "Parcours d'achat de chaussures pensé pour convertir, du catalogue à la confirmation. Mission design uniquement.",
      en: "Conversion-focused shoe-shopping flow, from product discovery to confirmation. Design-only engagement.",
    },
    description: {
      fr: "Learning Shop est une mission design pure sur une application e-commerce mobile. L'objectif était de concevoir un parcours d'achat de chaussures optimisé pour la conversion — du catalogue à l'écran de confirmation — en travaillant uniquement sur Figma.",
      en: "Learning Shop is a pure design engagement for a mobile e-commerce app. The goal was to design a conversion-optimized shoe-shopping flow — from catalog to confirmation screen — working exclusively in Figma.",
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
      // Ajoutez votre lien prototype Figma ici :
      // { label: { fr: "Prototype Figma", en: "Figma Prototype" }, href: "https://figma.com/proto/...", type: "prototype" },
    ],
    screens: [
      { name: "shoes-home",      label: { fr: "Catalogue",    en: "Catalog" } },
      { name: "shoes-product",   label: { fr: "Produit",      en: "Product" } },
      { name: "shoes-cart",      label: { fr: "Panier",       en: "Cart" } },
      { name: "shoes-confirmed", label: { fr: "Confirmation", en: "Confirmation" } },
    ],
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
