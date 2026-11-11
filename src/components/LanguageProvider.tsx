"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useSyncExternalStore,
  type ReactNode,
} from "react";

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
  const language = useSyncExternalStore(
    subscribeToLanguage,
    getLanguageSnapshot,
    getServerLanguageSnapshot
  );

  useEffect(() => {
    document.documentElement.lang = language;
    document.title =
      language === "en"
        ? "Amadou Issiaka — Mobile Developer & Product Designer"
        : "Amadou Issiaka — Développeur Mobile & Product Designer";

    const description = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]'
    );
    if (description) {
      description.content =
        language === "en"
          ? "I design and build useful, polished digital products for entrepreneurs and small businesses—from idea to launch."
          : "Je conçois et développe des produits numériques utiles, élégants et efficaces pour les entrepreneurs et PME — de l'idée au produit prêt à être utilisé.";
    }
  }, [language]);

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
