import type { Metadata } from "next";
import ProjectDetailPage from "@/components/ProjectDetailPage";

export const metadata: Metadata = {
  title: "Learning Shop — Parcours d’achat | Amadou Issiaka",
  description:
    "Parcours d’achat mobile Learning Shop : aperçu des écrans de concept, du catalogue à la confirmation.",
};

export default function LearningShopPage() {
  return <ProjectDetailPage slug="learning-shop" />;
}
