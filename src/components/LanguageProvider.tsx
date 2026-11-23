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
          title: "Amadou Issiaka — Développeur Mobile & Backend · Flutter, React Native, Laravel",
          description:
            "Développeur mobile et backend : applications Flutter et React Native, API Laravel et back-offices Vue 3, de la maquette Figma à la mise en ligne.",
        },
        en: {
          title: "Amadou Issiaka — Mobile & Backend Developer · Flutter, React Native, Laravel",
          description:
            "Mobile and backend developer: Flutter and React Native apps, Laravel APIs and Vue 3 admin panels, from Figma mockups to launch.",
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
    // Only override pages listed above; other pages keep their own server metadata
    const pageMetadata = metadataByPath[pathname]?.[language];
    if (!pageMetadata) return;
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
