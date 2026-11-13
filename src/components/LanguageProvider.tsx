"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { usePathname } from "next/navigation";

export type Language = "fr" | "en";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);
const LANGUAGE_STORAGE_KEY = "portfolio-language";
const languageListeners = new Set<() => void>();
let currentLanguage: Language = "fr";

function getLanguageSnapshot(): Language {
  if (typeof window === "undefined") return "fr";

  try {
    const savedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (savedLanguage === "fr" || savedLanguage === "en") {
      return savedLanguage;
    }
  } catch (error) {
    console.error("Unable to read the saved language preference.", error);
  }

  return currentLanguage;
}

function subscribeToLanguage(listener: () => void) {
  languageListeners.add(listener);
  window.addEventListener("storage", listener);

  return () => {
    languageListeners.delete(listener);
    window.removeEventListener("storage", listener);
  };
}

function getServerLanguageSnapshot(): Language {
  return "fr";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const language = useSyncExternalStore(
    subscribeToLanguage,
    getLanguageSnapshot,
    getServerLanguageSnapshot
  );

  useEffect(() => {
    document.documentElement.lang = language;
    const metadataByPath: Record<string, Record<Language, { title: string; description: string }>> = {
      "/": {
        fr: {
          title: "Amadou Issiaka — Développeur Mobile & Product Designer",
          description:
            "Développeur mobile et product designer : conception UX/UI et développement d’applications mobiles, des parcours à la réalisation.",
        },
        en: {
          title: "Amadou Issiaka — Mobile Developer & Product Designer",
          description:
            "Mobile developer and product designer working across UX/UI, mobile user journeys, and application development.",
        },
      },
      "/realisations/fastgrab": {
        fr: {
          title: "FastGrab — Parcours de commande | Amadou Issiaka",
          description:
            "Parcours de commande mobile FastGrab : aperçu des écrans de concept et des décisions d’interface.",
        },
        en: {
          title: "FastGrab — Ordering Flow | Amadou Issiaka",
          description:
            "FastGrab mobile ordering flow: a look at the supplied concept screens and interface decisions.",
        },
      },
      "/realisations/learning-shop": {
        fr: {
          title: "Learning Shop — Parcours d’achat | Amadou Issiaka",
          description:
            "Parcours d’achat mobile Learning Shop : aperçu des écrans de concept, du catalogue à la confirmation.",
        },
        en: {
          title: "Learning Shop — Shopping Flow | Amadou Issiaka",
          description:
            "Learning Shop mobile shopping flow: supplied concept screens from catalog through confirmation.",
        },
      },
    };
    const pageMetadata =
      metadataByPath[pathname]?.[language] ?? metadataByPath["/"][language];
    document.title = pageMetadata.title;

    const description = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]'
    );
    if (description) {
      description.content = pageMetadata.description;
    }
  }, [language, pathname]);

  const setLanguage = useCallback((nextLanguage: Language) => {
    currentLanguage = nextLanguage;

    try {
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, nextLanguage);
    } catch (error) {
      console.error("Unable to save the language preference.", error);
    }

    languageListeners.forEach((listener) => listener());
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider.");
  }
  return context;
}
