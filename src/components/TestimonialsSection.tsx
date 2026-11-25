"use client";

import { type FormEvent, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

const TESTIMONIALS_LIMIT = 12;
type LoadState = "loading" | "ready" | "unconfigured" | "error";

const AVATAR_GRADIENTS = [
  "from-blue-500 to-indigo-600",
  "from-violet-500 to-purple-600",
  "from-emerald-500 to-teal-600",
  "from-orange-500 to-amber-600",
  "from-rose-500 to-pink-600",
  "from-cyan-500 to-sky-600",
];

function getAvatarGradient(name: string) {
  return AVATAR_GRADIENTS[name.charCodeAt(0) % AVATAR_GRADIENTS.length];
}

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? "6%" : "-6%", opacity: 0 }),
  center: { x: "0%", opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? "-6%" : "6%", opacity: 0 }),
};

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const gradient = getAvatarGradient(testimonial.name);
  const initials = testimonial.name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <article className="flex h-full flex-col gap-5 rounded-2xl border border-gray-800 bg-gray-900 p-6 transition-colors hover:border-gray-700 sm:p-7">
      <blockquote className="font-['Manrope'] text-sm leading-7 text-gray-300">
        &ldquo;{testimonial.message}&rdquo;
      </blockquote>
      <div className="mt-auto flex items-center gap-3 border-t border-gray-800 pt-5">
        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${gradient} font-['Sora'] text-sm font-bold text-white`}
          aria-hidden="true"
        >
          {initials}
        </div>
        <div>
          <div className="flex items-center gap-1.5">
            <p className="font-['Sora'] text-sm font-semibold text-slate-100">
              {testimonial.name}
            </p>
            {testimonial.lang && (
              <span title={testimonial.lang === "fr" ? "Écrit en français" : "Written in English"} aria-label={testimonial.lang === "fr" ? "Écrit en français" : "Written in English"}>
                {testimonial.lang === "fr" ? "🇫🇷" : "🇬🇧"}
              </span>
            )}
          </div>
          {testimonial.role && (
            <p className="mt-0.5 font-['JetBrains_Mono'] text-[11px] text-blue-400">
              {testimonial.role}
            </p>
          )}
        </div>
      </div>
    </article>
  );
}

function SkeletonCard() {
  return (
    <div
      className="flex flex-col gap-5 rounded-2xl border border-gray-800 bg-gray-900/50 p-6 sm:p-7"
      aria-hidden="true"
    >
      <div className="flex flex-col gap-2.5">
        <div className="h-3 w-full rounded-full bg-gray-800" />
        <div className="h-3 w-5/6 rounded-full bg-gray-800" />
        <div className="h-3 w-4/6 rounded-full bg-gray-800" />
        <div className="h-3 w-3/6 rounded-full bg-gray-800" />
      </div>
      <div className="mt-auto flex items-center gap-3 border-t border-gray-800 pt-5">
        <div className="h-10 w-10 shrink-0 rounded-full bg-gray-800" />
        <div className="flex flex-col gap-1.5">
          <div className="h-2.5 w-24 rounded-full bg-gray-800" />
          <div className="h-2 w-16 rounded-full bg-gray-800" />
        </div>
      </div>
    </div>
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

  // Carousel
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(1); // SSR-safe default

  // Form
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState("");
  const [submissionSucceeded, setSubmissionSucceeded] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  // Responsive items per page
  useEffect(() => {
    const update = () => {
      const isLg = window.matchMedia("(min-width: 1024px)").matches;
      const isMd = window.matchMedia("(min-width: 768px)").matches;
      const next = isLg ? 3 : isMd ? 2 : 1;
      setItemsPerPage((prev) => {
        if (prev !== next) setPage(0);
        return next;
      });
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Firebase listener
  useEffect(() => {
    if (!firebaseConfigured) return;
    let isActive = true;
    let unsubscribe: Unsubscribe | undefined;

    void Promise.resolve().then(() => {
      if (!isActive) return;
      try {
        const q = query(
          collection(getFirebaseDb(), "testimonials"),
          where("status", "==", "published"),
          orderBy("createdAt", "desc"),
          limit(TESTIMONIALS_LIMIT),
        );
        unsubscribe = onSnapshot(
          q,
          (snapshot) => {
            if (!isActive) return;
            const valid = snapshot.docs.flatMap((doc) => {
              const d = doc.data();
              if (typeof d.name !== "string" || typeof d.message !== "string") return [];
              return [{ id: doc.id, name: d.name, role: d.role || undefined, message: d.message, lang: d.lang || undefined }];
            });
            setTestimonials(valid);
            setLoadState("ready");
          },
          (error) => {
            if (!isActive) return;
            console.error("Could not load testimonials.", error);
            setLoadState("error");
          },
        );
      } catch (error) {
        if (!isActive) return;
        console.error("Could not initialize testimonials listener.", error);
        setLoadState("error");
      }
    });

    return () => {
      isActive = false;
      unsubscribe?.();
    };
  }, [firebaseConfigured]);

  // Dialog open/close
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
    const data = new FormData(form);
    if (String(data.get("website") ?? "").trim()) return;
    setIsSubmitting(true);
    setFormError("");
    try {
      await addDoc(collection(getFirebaseDb(), "testimonials"), {
        name: String(data.get("name") ?? "").trim(),
        role: String(data.get("role") ?? "").trim(),
        message: String(data.get("message") ?? "").trim(),
        consent: data.get("consent") === "on",
        // Published immediately. To hide a review, set its status to "hidden" in the Firebase console.
        status: "published",
        createdAt: serverTimestamp(),
        lang: language,
      });
      form.reset();
      setSubmissionSucceeded(true);
      closeDialog();
    } catch (error) {
      console.error("Could not publish testimonial.", error);
      setFormError(
        isEnglish
          ? "Your review could not be sent. Please try again."
          : "Votre avis n'a pas pu être envoyé. Veuillez réessayer.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  // Carousel computed
  const totalPages =
    loadState === "ready" && testimonials.length > 0
      ? Math.ceil(testimonials.length / itemsPerPage)
      : 1;
  const safePage = Math.min(page, Math.max(0, totalPages - 1));
  const visibleCards = testimonials.slice(
    safePage * itemsPerPage,
    (safePage + 1) * itemsPerPage,
  );
  const showControls = loadState === "ready" && testimonials.length > itemsPerPage;

  function goNext() {
    if (safePage >= totalPages - 1) return;
    setDirection(1);
    setPage(safePage + 1);
  }
  function goPrev() {
    if (safePage <= 0) return;
    setDirection(-1);
    setPage(safePage - 1);
  }

  const gridCols =
    itemsPerPage === 3
      ? "grid-cols-3"
      : itemsPerPage === 2
        ? "grid-cols-2"
        : "grid-cols-1";

  const skeletonCount = itemsPerPage === 1 ? 1 : 3;

  return (
    <section
      id="temoignages"
      className="relative w-full overflow-hidden bg-[#0B1220] px-5 py-16 sm:px-8 md:py-20 lg:px-20 lg:py-24"
    >
      {/* Ambient glows */}
      <div className="pointer-events-none absolute -left-32 top-1/4 h-[500px] w-[500px] rounded-full bg-blue-600/6 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-[400px] w-[400px] rounded-full bg-indigo-600/5 blur-[100px]" />

      <div className="relative mx-auto flex max-w-[1280px] flex-col gap-10 sm:gap-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-['JetBrains_Mono'] text-xs uppercase tracking-widest text-blue-400">
            {isEnglish ? "08 — Testimonials" : "08 — Témoignages"}
          </p>
          <div className="mt-5 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-2xl font-['Sora'] text-3xl font-bold leading-tight tracking-tight text-slate-100 sm:text-4xl lg:text-5xl">
              {isEnglish ? "What my clients say." : "Ce que disent mes clients."}
            </h2>
            <p className="max-w-sm font-['Manrope'] text-sm leading-6 text-gray-400 sm:text-base">
              {isEnglish
                ? "Honest feedback from people I've shipped products with."
                : "Des retours honnêtes de collaborateurs à qui j'ai livré un produit."}
            </p>
          </div>
        </motion.div>

        {/* Carousel */}
        <div className="flex flex-col gap-6">

          {/* Cards */}
          <div aria-live="polite" className="overflow-hidden">

            {loadState === "loading" && (
              <div className={`grid gap-4 ${gridCols}`}>
                {Array.from({ length: skeletonCount }).map((_, i) => (
                  <SkeletonCard key={i} />
                ))}
              </div>
            )}

            {(loadState === "unconfigured" || (loadState === "ready" && testimonials.length === 0)) && (
              <div className="flex min-h-[180px] flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-gray-800 bg-gray-900/40 px-6 py-10 text-center">
                <p className="font-['Sora'] text-base font-semibold text-slate-100">
                  {isEnglish ? "No reviews published yet." : "Aucun avis publié pour l'instant."}
                </p>
                <p className="max-w-md font-['Manrope'] text-sm leading-6 text-gray-400">
                  {isEnglish
                    ? "Have we worked together? Be the first to share your experience."
                    : "Nous avons travaillé ensemble ? Soyez le premier à partager votre expérience."}
                </p>
              </div>
            )}

            {loadState === "error" && (
              <div
                role="alert"
                className="flex min-h-[180px] items-center justify-center rounded-2xl border border-red-900/50 bg-red-950/30 font-['Manrope'] text-sm text-red-400"
              >
                {isEnglish
                  ? "Reviews could not be loaded. Please try again later."
                  : "Les avis n'ont pas pu être chargés. Veuillez réessayer plus tard."}
              </div>
            )}

            {loadState === "ready" && testimonials.length > 0 && (
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={safePage}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className={`grid gap-4 ${gridCols}`}
                >
                  {visibleCards.map((t) => (
                    <TestimonialCard key={t.id} testimonial={t} />
                  ))}
                  {/* Fill empty slots on last page to maintain grid alignment */}
                  {Array.from({ length: itemsPerPage - visibleCards.length }).map((_, i) => (
                    <div key={`empty-${i}`} className="invisible" aria-hidden="true" />
                  ))}
                </motion.div>
              </AnimatePresence>
            )}
          </div>

          {/* Prev / dots / next */}
          {showControls && (
            <div className="flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={goPrev}
                disabled={safePage === 0}
                aria-label={isEnglish ? "Previous" : "Précédent"}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-700 text-gray-400 transition-colors hover:border-gray-500 hover:text-slate-100 disabled:opacity-30"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <div
                className="flex gap-2"
                role="tablist"
                aria-label={isEnglish ? "Testimonial pages" : "Pages de témoignages"}
              >
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    role="tab"
                    aria-selected={i === safePage}
                    aria-label={`Page ${i + 1}`}
                    onClick={() => {
                      setDirection(i > safePage ? 1 : -1);
                      setPage(i);
                    }}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === safePage
                        ? "w-6 bg-blue-400"
                        : "w-1.5 bg-gray-700 hover:bg-gray-500"
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={goNext}
                disabled={safePage >= totalPages - 1}
                aria-label={isEnglish ? "Next" : "Suivant"}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-700 text-gray-400 transition-colors hover:border-gray-500 hover:text-slate-100 disabled:opacity-30"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          )}
        </div>

        {/* CTA */}
        <div>
          {submissionSucceeded ? (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              role="status"
              className="text-center font-['Manrope'] text-sm text-emerald-400"
            >
              {isEnglish
                ? "Thank you! Your review is now published."
                : "Merci ! Votre avis est maintenant publié."}
            </motion.p>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-start justify-between gap-4 rounded-2xl border border-gray-800 bg-gray-900 px-6 py-5 sm:flex-row sm:items-center sm:px-8"
            >
              <div>
                <p className="font-['Sora'] text-base font-semibold text-slate-100">
                  {isEnglish ? "Worked with me?" : "Vous avez travaillé avec moi ?"}
                </p>
                <p className="mt-0.5 font-['Manrope'] text-sm text-gray-400">
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
                className="shrink-0 inline-flex items-center gap-2.5 rounded-full bg-blue-500 px-5 py-2.5 font-['Sora'] text-sm font-semibold text-white shadow-[0_0_24px_rgba(59,130,246,0.35)] transition-all hover:bg-blue-400 hover:shadow-[0_0_32px_rgba(59,130,246,0.5)]"
              >
                {isEnglish ? "Leave a review" : "Laisser un témoignage"}
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M2 7H12M8 3L12 7L8 11" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </motion.div>
          )}
        </div>
      </div>

      {/* Modal */}
      <dialog
        id="testimonial-dialog"
        ref={dialogRef}
        aria-labelledby="testimonial-dialog-title"
        onClose={() => setIsDialogOpen(false)}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeDialog();
        }}
        className="m-auto max-h-[90vh] w-[calc(100%-2rem)] max-w-xl overflow-y-auto rounded-3xl border-0 bg-white p-0 text-gray-950 shadow-2xl backdrop:bg-gray-950/80 backdrop:backdrop-blur-sm"
      >
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-5 sm:gap-5 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3
                id="testimonial-dialog-title"
                className="font-['Sora'] text-xl font-bold sm:text-2xl"
              >
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
                placeholder={
                  isEnglish ? "e.g. Founder, mobile app" : "Ex. Fondateur, application mobile"
                }
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

          <div
            aria-hidden="true"
            className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden"
          >
            <input name="website" type="text" tabIndex={-1} autoComplete="off" />
          </div>

          <label className="flex items-start gap-2.5 font-['Manrope'] text-xs leading-5 text-gray-600">
            <input
              name="consent"
              type="checkbox"
              required
              className="mt-1 h-4 w-4 shrink-0 accent-blue-500"
            />
            <span>
              {isEnglish
                ? "I agree that this review and my name may be published on this site."
                : "J'accepte que cet avis et mon nom soient publiés sur ce site."}
            </span>
          </label>

          {formError && (
            <p role="alert" className="font-['Manrope'] text-sm text-red-700">
              {formError}
            </p>
          )}

          <button
            type="submit"
            disabled={!firebaseConfigured || isSubmitting}
            className="flex min-h-12 items-center justify-center gap-2 rounded-full bg-gray-950 px-5 font-['Sora'] text-sm font-semibold text-white transition-colors hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isSubmitting
              ? isEnglish
                ? "Publishing…"
                : "Publication…"
              : isEnglish
                ? "Publish my review"
                : "Publier mon avis"}
            {!isSubmitting && <span aria-hidden="true">→</span>}
          </button>
        </form>
      </dialog>
    </section>
  );
}
