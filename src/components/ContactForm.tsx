"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { business } from "@/lib/content";
import SubmitButton from "@/components/SubmitButton";

const STANDARD_EASE = [0.2, 0, 0, 1] as const;

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({ naam: "", email: "", bericht: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    // Spinner blijft minimaal 400ms zichtbaar, ook al is mailto instant.
    window.setTimeout(() => {
      const body = `Naam: ${form.naam}\nE-mail: ${form.email}\n\n${form.bericht}`;
      window.location.href = `mailto:${business.email}?subject=${encodeURIComponent(
        `Contactformulier: ${form.naam}`
      )}&body=${encodeURIComponent(body)}`;
      setIsSubmitting(false);
      setSubmitted(true);
    }, 400);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <label className="flex flex-col gap-1.5 text-sm">
        <span className="text-ink/80">Naam *</span>
        <input
          required
          type="text"
          value={form.naam}
          onChange={(e) => setForm((f) => ({ ...f, naam: e.target.value }))}
          className="sf-input"
        />
      </label>
      <label className="flex flex-col gap-1.5 text-sm">
        <span className="text-ink/80">E-mail *</span>
        <input
          required
          type="email"
          value={form.email}
          onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
          className="sf-input"
        />
      </label>
      <label className="flex flex-col gap-1.5 text-sm">
        <span className="text-ink/80">Bericht *</span>
        <textarea
          required
          rows={5}
          value={form.bericht}
          onChange={(e) => setForm((f) => ({ ...f, bericht: e.target.value }))}
          className="sf-input"
        />
      </label>
      <SubmitButton
        isSubmitting={isSubmitting}
        success={submitted}
        idleLabel="Versturen"
        successLabel="Bericht verstuurd"
        className="md:w-auto"
      />
      {submitted && (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: STANDARD_EASE }}
          className="text-sm text-ink/70"
        >
          Je mailprogramma opent met je bericht klaar om te versturen.
          Daarna {business.responseTime}.
        </motion.p>
      )}
    </form>
  );
}
