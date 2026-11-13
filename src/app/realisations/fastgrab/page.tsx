import type { Metadata } from "next";
import ProjectDetailPage from "@/components/ProjectDetailPage";

export const metadata: Metadata = {
  title: "FastGrab — Parcours de commande | Amadou Issiaka",
  description:
    "Parcours de commande mobile FastGrab : aperçu des écrans de concept et des décisions d’interface.",
};

export default function FastGrabPage() {
  return <ProjectDetailPage slug="fastgrab" />;
}
