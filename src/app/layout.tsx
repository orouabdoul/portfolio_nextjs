import type { Metadata, Viewport } from "next";
import { Sora, Manrope, JetBrains_Mono } from "next/font/google";
import { LanguageProvider } from "@/components/LanguageProvider";
import BackToTop from "@/components/BackToTop";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const title = "Amadou Issiaka — Développeur Mobile & Backend · Flutter, React Native, Laravel";
const description =
  "Je conçois et développe des applications mobiles (Flutter, React Native), leurs API Laravel et leurs back-offices Vue 3 pour les entrepreneurs et PME — de la maquette Figma à la mise en ligne.";
const url = "https://amadouissiaka.vercel.app";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "développeur mobile",
    "développeur backend",
    "Flutter",
    "React Native",
    "Laravel",
    "API REST",
    "Vue 3",
    "PHP",
    "UX/UI designer",
    "application mobile",
    "Figma",
    "freelance",
    "Amadou Issiaka",
  ],
  authors: [{ name: "Amadou Issiaka Abdoulaye" }],
  metadataBase: new URL(url),
  openGraph: {
    title,
    description,
    type: "website",
    locale: "fr_FR",
    siteName: "Amadou Issiaka — Portfolio",
    url,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#060e18",
};

// Appliqué avant l'affichage pour éviter un flash de la mauvaise couleur.
// Sombre par défaut ; « light » seulement si le visiteur l'a choisi.
const themeScript = `(function(){try{if(localStorage.getItem("theme")==="light"){document.documentElement.classList.add("light");var m=document.querySelector('meta[name="theme-color"]');if(m)m.setAttribute("content","#f5f9fc");}}catch(e){}})();`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      className={`${sora.variable} ${manrope.variable} ${jetbrainsMono.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full flex flex-col bg-bg">
        <LanguageProvider>
          {children}
          <BackToTop />
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
