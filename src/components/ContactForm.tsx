"use client";

import { useState } from "react";
import { business } from "@/lib/content";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ naam: "", email: "", bericht: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const body = `Naam: ${form.naam}\nE-mail: ${form.email}\n\n${form.bericht}`;
    window.location.href = `mailto:${business.email}?subject=${encodeURIComponent(
      `Contactformulier — ${form.naam}`
    )}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
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
      <button
        type="submit"
        className="bg-ink py-4 text-sm uppercase tracking-widest text-ivory transition hover:bg-gold hover:text-ink md:w-auto md:px-10"
      >
        Versturen
      </button>
      {submitted && (
        <p className="text-sm text-ink/70">
          Je mailprogramma opent met je bericht klaar om te versturen.
        </p>
      )}
    </form>
  );
}
