"use client";

import { motion } from "motion/react";

/**
 * Gedeelde submit-knop met spinner (min. 400ms zichtbaar, 0ms delay) en
 * succes-crossfade, conform MOTION-PLAN §5b. Ingetogen register: geen
 * confetti, alleen een rustige kleur/tekst-wissel.
 */
export default function SubmitButton({
  isSubmitting,
  success,
  idleLabel,
  successLabel,
  className = "",
}: {
  isSubmitting: boolean;
  success: boolean;
  idleLabel: string;
  successLabel: string;
  className?: string;
}) {
  return (
    <motion.button
      type="submit"
      disabled={isSubmitting}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.12, ease: [0, 0, 0.2, 1] }}
      className={`relative flex items-center justify-center gap-2 overflow-hidden py-4 text-sm uppercase tracking-widest transition-colors duration-200 disabled:cursor-not-allowed md:px-10 ${
        success
          ? "bg-gold-soft text-ink"
          : "bg-ink text-ivory hover:bg-gold hover:text-ink"
      } ${className}`}
    >
      <span
        className={`flex items-center gap-2 transition-opacity duration-200 ${
          isSubmitting ? "opacity-0" : "opacity-100"
        }`}
      >
        {success && <CheckIcon />}
        {success ? successLabel : idleLabel}
      </span>
      {isSubmitting && (
        <span className="absolute inset-0 flex items-center justify-center">
          <Spinner />
        </span>
      )}
    </motion.button>
  );
}

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function Spinner() {
  return (
    <span
      aria-hidden="true"
      className="h-4 w-4 animate-spin rounded-full border-2 border-ivory/40 border-t-ivory"
    />
  );
}
