"use client";

import { type FormEvent, type ReactNode, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";
import type { Testimonial } from "@/data/testimonials";
import { getFirebaseDb, isFirebaseConfigured } from "@/lib/firebase";
import {
  addDoc,
  collection,
  limit,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";
import type { Unsubscribe } from "firebase/firestore";

const EMAIL = "orouabdoulayeissiaka@gmail.com";
const TESTIMONIALS_LIMIT = 12;
const ease = [0.22, 1, 0.36, 1] as const;

type LoadState = "loading" | "ready" | "unconfigured" | "error";

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

export default function TestimonialsSection() {
  const { language } = useLanguage();
  const isEnglish = language === "en";
  const firebaseConfigured = isFirebaseConfigured();
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loadState, setLoadState] = useState<LoadState>(() =>
    firebaseConfigured ? "loading" : "unconfigured",
  );
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState("");
  const [submissionSucceeded, setSubmissionSucceeded] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (!firebaseConfigured) return;

    let isActive = true;
    let unsubscribe: Unsubscribe | undefined;

    void Promise.resolve().then(() => {
      if (!isActive) return;

      try {
        const testimonialsQuery = query(
          collection(getFirebaseDb(), "testimonials"),
          where("status", "==", "published"),
          orderBy("createdAt", "desc"),
          limit(TESTIMONIALS_LIMIT),
        );

        unsubscribe = onSnapshot(
          testimonialsQuery,
          (snapshot) => {
            if (!isActive) return;

            const validTestimonials = snapshot.docs.flatMap((doc) => {
              const data = doc.data();
              if (
                typeof data.name !== "string" ||
                typeof data.role !== "string" ||
                typeof data.message !== "string"
              ) {
                console.error(`Ignoring malformed testimonial: ${doc.id}`);
                return [];
              }
              return [{ id: doc.id, name: data.name, role: data.role || undefined, message: data.message }];
            });

            setTestimonials(validTestimonials);
            setLoadState("ready");
          },
          (error) => {
            if (!isActive) return;
            console.error("Could not load testimonials from Firestore.", error);
            setLoadState("error");
          },
        );
      } catch (error) {
        if (!isActive) return;
        console.error("Could not initialize the testimonials listener.", error);
        setLoadState("error");
      }
    });

    return () => {
      isActive = false;
      unsubscribe?.();
    };
  }, [firebaseConfigured]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (isDialogOpen && !dialog.open) dialog.showModal();
    else if (!isDialogOpen && dialog.open) dialog.close();
  }, [isDialogOpen]);

  function openDialog() {
    setFormError("");
    setSubmissionSucceeded(false);
    setIsDialogOpen(true);
  }

  function closeDialog() {
    setIsDialogOpen(false);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    if (String(formData.get("website") ?? "").trim()) return;

    const name = String(formData.get("name") ?? "").trim();
    const role = String(formData.get("role") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    setIsSubmitting(true);
    setFormError("");

    try {
      await addDoc(collection(getFirebaseDb(), "testimonials"), {
        name, role, message,
        consent: formData.get("consent") === "on",
        status: "published",
        createdAt: serverTimestamp(),
      });
      form.reset();
      setSubmissionSucceeded(true);
      closeDialog();
    } catch (error) {
      console.error("Could not publish testimonial.", error);
      setFormError(
        isEnglish
          ? "Your review could not be published. Please try again in a moment."
          : "Votre avis n'a pas pu être publié. Veuillez réessayer dans un instant.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  const showPlaceholder =
    loadState === "ready" && testimonials.length === 0;
  const showRealCards =
    loadState === "ready" && testimonials.length > 0;

  return (
    <section
      id="temoignages"
      className="relative w-full overflow-hidden bg-white px-5 py-16 sm:px-8 md:py-20 lg:px-20 lg:py-24"
    >
      <div className="pointer-events-none absolute -right-20 top-0 h-80 w-80 rounded-full bg-blue-500/8 blur-[100px]" />

      <div className="relative mx-auto flex max-w-[1280px] flex-col gap-10 sm:gap-12">

        {/* Header */}
        <FadeInView>
          <p className="font-['JetBrains_Mono'] text-xs uppercase tracking-widest text-blue-500">
            {isEnglish ? "05 — Testimonials" : "05 — Témoignages"}
          </p>
          <div className="mt-5 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-2xl font-['Sora'] text-3xl font-bold leading-tight tracking-tight text-gray-950 sm:text-4xl lg:text-5xl">
              {isEnglish ? "What my clients say." : "Ce que disent mes clients."}
            </h2>
            <p className="max-w-sm font-['Manrope'] text-sm leading-6 text-gray-500 sm:text-base">
              {isEnglish
                ? "Honest feedback from people I've shipped products with."
                : "Des retours honnêtes de collaborateurs à qui j'ai livré un produit."}
            </p>
          </div>
        </FadeInView>

        {/* Testimonials */}
        <FadeInView delay={0.1}>
          <div
            aria-live="polite"
            className="grid gap-4 md:grid-cols-2"
          >
            {loadState === "loading" && (
              <div className="col-span-full flex min-h-[180px] items-center justify-center rounded-2xl border border-gray-200 bg-white font-['Manrope'] text-sm text-gray-400">
                {isEnglish ? "Loading reviews…" : "Chargement des avis…"}
              </div>
            )}

            {loadState === "error" && (
              <div
                role="alert"
                className="col-span-full flex min-h-[180px] items-center justify-center rounded-2xl border border-red-200 bg-red-50 font-['Manrope'] text-sm text-red-700"
              >
                {isEnglish
                  ? "Reviews could not be loaded. Please try again later."
                  : "Les avis n'ont pas pu être chargés. Veuillez réessayer plus tard."}
              </div>
            )}

            {(loadState === "unconfigured" || showPlaceholder) && (
              <article className="col-span-full rounded-2xl border border-dashed border-blue-100 bg-blue-50/30 p-6 sm:p-8">
                <span aria-hidden="true" className="font-['Sora'] text-4xl leading-none text-blue-200">"</span>
                <p className="mt-3 font-['Manrope'] text-sm italic leading-7 text-gray-300">
                  {isEnglish
                    ? "Client reviews will appear here as projects are completed."
                    : "Les avis clients apparaîtront ici au fil des projets livrés."}
                </p>
                <div className="mt-5 flex items-center justify-between border-t border-blue-50 pt-4">
                  <div className="flex flex-col gap-1.5">
                    <div className="h-2.5 w-24 rounded-full bg-gray-100" />
                    <div className="h-2 w-16 rounded-full bg-gray-100" />
                  </div>
                  <span className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-widest text-blue-300">
                    {isEnglish ? "Coming soon" : "À venir"}
                  </span>
                </div>
              </article>
            )}

            {showRealCards &&
              testimonials.map((testimonial) => (
                <article
                  key={testimonial.id}
                  className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-6"
                >
                  <span aria-hidden="true" className="font-['Sora'] text-4xl leading-none text-blue-500">"</span>
                  <blockquote className="mt-2 font-['Manrope'] text-sm leading-7 text-gray-800 sm:text-base">
                    {testimonial.message}
                  </blockquote>
                  <div className="mt-5 border-t border-gray-100 pt-4">
                    <p className="font-['Sora'] text-sm font-semibold text-gray-900">{testimonial.name}</p>
                    {testimonial.role && (
                      <p className="mt-1 font-['Manrope'] text-xs text-gray-500">{testimonial.role}</p>
                    )}
                  </div>
                </article>
              ))}
          </div>

          {/* CTA banner */}
          <div className="mt-6">
            {submissionSucceeded ? (
              <p role="status" className="text-center font-['Manrope'] text-sm text-emerald-600">
                {isEnglish ? "Your review is published. Thank you!" : "Votre avis est publié. Merci pour votre retour !"}
              </p>
            ) : (
              <div className="flex flex-col items-start justify-between gap-4 rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white px-6 py-5 sm:flex-row sm:items-center sm:px-8">
                <div>
                  <p className="font-['Sora'] text-base font-semibold text-gray-950">
                    {isEnglish ? "Worked with me?" : "Vous avez travaillé avec moi ?"}
                  </p>
                  <p className="mt-0.5 font-['Manrope'] text-sm text-gray-500">
                    {isEnglish
                      ? "Your feedback helps future clients make the right choice."
                      : "Votre retour aide les futurs clients à faire le bon choix."}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={openDialog}
                  aria-haspopup="dialog"
                  aria-controls="testimonial-dialog"
                  className="shrink-0 inline-flex items-center gap-2.5 rounded-full bg-blue-500 px-5 py-2.5 font-['Sora'] text-sm font-semibold text-white shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all hover:bg-blue-400 hover:shadow-[0_0_28px_rgba(59,130,246,0.45)]"
                >
                  {isEnglish ? "Leave a review" : "Laisser un témoignage"}
                  <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M2 7H12M8 3L12 7L8 11" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </FadeInView>

      </div>

      {/* Modal */}
      <dialog
        id="testimonial-dialog"
        ref={dialogRef}
        aria-labelledby="testimonial-dialog-title"
        onClose={() => setIsDialogOpen(false)}
        onClick={(event) => { if (event.target === event.currentTarget) closeDialog(); }}
        className="m-auto max-h-[90vh] w-[calc(100%-2rem)] max-w-xl overflow-y-auto rounded-3xl border-0 bg-white p-0 text-gray-950 shadow-2xl backdrop:bg-gray-950/75 backdrop:backdrop-blur-sm"
      >
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-5 sm:gap-5 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 id="testimonial-dialog-title" className="font-['Sora'] text-xl font-bold sm:text-2xl">
                {isEnglish ? "Leave a review" : "Laisser un témoignage"}
              </h3>
              <p className="mt-2 font-['Manrope'] text-sm leading-6 text-gray-600">
                {isEnglish
                  ? "Your review will appear on the site as soon as you submit it."
                  : "Votre avis apparaîtra sur le site dès que vous l'aurez envoyé."}
              </p>
            </div>
            <button
              type="button"
              onClick={closeDialog}
              aria-label={isEnglish ? "Close form" : "Fermer le formulaire"}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-200 text-xl text-gray-600 transition-colors hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
            >
              ×
            </button>
          </div>

          {!firebaseConfigured && (
            <p className="rounded-xl bg-amber-50 p-3 font-['Manrope'] text-sm leading-6 text-amber-900">
              {isEnglish
                ? "The form will be available once Firebase is configured."
                : "Le formulaire sera disponible dès que Firebase sera configuré."}
            </p>
          )}

          <div className="grid gap-3 sm:grid-cols-2">
            <label className="flex flex-col gap-1.5 font-['Manrope'] text-xs font-medium text-gray-700">
              {isEnglish ? "Name" : "Nom"}
              <input
                name="name"
                type="text"
                required
                minLength={2}
                maxLength={80}
                autoComplete="name"
                className="h-11 rounded-xl border border-gray-200 bg-white px-3 text-sm text-gray-950 caret-gray-950 outline-none transition-colors placeholder:text-gray-400 focus:border-blue-500"
                placeholder={isEnglish ? "Your name" : "Votre nom"}
              />
            </label>
            <label className="flex flex-col gap-1.5 font-['Manrope'] text-xs font-medium text-gray-700">
              {isEnglish ? "Role or project (optional)" : "Rôle ou projet (facultatif)"}
              <input
                name="role"
                type="text"
                maxLength={100}
                className="h-11 rounded-xl border border-gray-200 bg-white px-3 text-sm text-gray-950 caret-gray-950 outline-none transition-colors placeholder:text-gray-400 focus:border-blue-500"
                placeholder={isEnglish ? "e.g. Founder, mobile app" : "Ex. Fondateur, application mobile"}
              />
            </label>
          </div>

          <label className="flex flex-col gap-1.5 font-['Manrope'] text-xs font-medium text-gray-700">
            {isEnglish ? "Your review" : "Votre avis"}
            <textarea
              name="message"
              required
              minLength={20}
              maxLength={1200}
              rows={4}
              className="resize-y rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm leading-6 text-gray-950 caret-gray-950 outline-none transition-colors placeholder:text-gray-400 focus:border-blue-500"
              placeholder={
                isEnglish
                  ? "Tell us about your experience working together"
                  : "Racontez votre expérience de notre collaboration"
              }
            />
          </label>

          <div aria-hidden="true" className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden">
            <input name="website" type="text" tabIndex={-1} autoComplete="off" />
          </div>

          <label className="flex items-start gap-2.5 font-['Manrope'] text-xs leading-5 text-gray-600">
            <input name="consent" type="checkbox" required className="mt-1 h-4 w-4 shrink-0 accent-blue-500" />
            <span>
              {isEnglish
                ? "I agree that this review and my name may be published on this site."
                : "J'accepte que cet avis et mon nom soient publiés sur ce site."}
            </span>
          </label>

          {formError && (
            <p role="alert" className="font-['Manrope'] text-sm text-red-700">{formError}</p>
          )}

          <button
            type="submit"
            disabled={!firebaseConfigured || isSubmitting}
            className="flex min-h-12 items-center justify-center gap-2 rounded-full bg-gray-950 px-5 font-['Sora'] text-sm font-semibold text-white transition-colors hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isSubmitting
              ? (isEnglish ? "Publishing…" : "Publication…")
              : (isEnglish ? "Publish my review" : "Publier mon avis")}
            {!isSubmitting && <span aria-hidden="true">→</span>}
          </button>
        </form>
      </dialog>
    </section>
  );
}
