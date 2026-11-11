import type { Metadata } from "next";
import { Sora, Manrope, JetBrains_Mono } from "next/font/google";
import { LanguageProvider } from "@/components/LanguageProvider";
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

const title = "Amadou Issiaka — Développeur Mobile & Product Designer";
const description =
  "Je conçois et développe des produits numériques utiles, élégants et efficaces pour les entrepreneurs et PME — de l'idée au produit prêt à être utilisé.";
const url = "https://amadou-issiaka.dev";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "développeur mobile",
    "Flutter",
    "React Native",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      className={`${sora.variable} ${manrope.variable} ${jetbrainsMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-gray-950">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
