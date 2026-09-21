"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { business, services } from "@/lib/content";
import SubmitButton from "@/components/SubmitButton";

const shootTypes = services.map((s) => s.title);
const STANDARD_EASE = [0.2, 0, 0, 1] as const;

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    naam: "",
    email: "",
    telefoon: "",
    type: shootTypes[0],
    datum: "",
    locatie: "",
    budget: "",
    bericht: "",
  });

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    // Geen backend/e-mailservice gekoppeld in deze fase: we openen een
    // vooraf ingevulde mailto zodat de aanvraag echt bij de klant terechtkomt.
    // Spinner blijft minimaal 400ms zichtbaar (motion-systeem loading-states-regel),
    // ook al is de mailto-actie zelf synchroon/instant.
    window.setTimeout(() => {
      const body = [
        `Naam: ${form.naam}`,
        `E-mail: ${form.email}`,
        `Telefoon: ${form.telefoon}`,
        `Type shoot: ${form.type}`,
        `Datum: ${form.datum}`,
        `Locatie: ${form.locatie}`,
        `Budget-indicatie: ${form.budget || "niet opgegeven"}`,
        "",
        form.bericht,
      ].join("\n");
      const mailto = `mailto:${business.email}?subject=${encodeURIComponent(
        `Boekingsaanvraag: ${form.type}, ${form.naam}`
      )}&body=${encodeURIComponent(body)}`;
      window.location.href = mailto;
      setIsSubmitting(false);
      setSubmitted(true);
    }, 400);
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 md:grid-cols-2">
      <Field label="Naam" required>
        <input
          required
          type="text"
          value={form.naam}
          onChange={(e) => update("naam", e.target.value)}
          className="sf-input"
        />
      </Field>
      <Field label="E-mail" required>
        <input
          required
          type="email"
          value={form.email}
          onChange={(e) => update("email", e.target.value)}
          className="sf-input"
        />
      </Field>
      <Field label="Telefoon" optional>
        <input
          type="tel"
          value={form.telefoon}
          onChange={(e) => update("telefoon", e.target.value)}
          className="sf-input"
        />
      </Field>
      <Field label="Type shoot" required>
        <select
          required
          value={form.type}
          onChange={(e) => update("type", e.target.value)}
          className="sf-input"
        >
          {shootTypes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </Field>
      <Field label="Gewenste datum" optional>
        <input
          type="date"
          value={form.datum}
          onChange={(e) => update("datum", e.target.value)}
          className="sf-input"
        />
        <span className="text-xs text-ink/50">
          Nog geen definitieve datum? Vul een indicatie in, we denken graag mee.
        </span>
      </Field>
      <Field label="Locatie" optional>
        <input
          type="text"
          placeholder="Stad / venue"
          value={form.locatie}
          onChange={(e) => update("locatie", e.target.value)}
          className="sf-input"
        />
      </Field>
      <Field label="Budget-indicatie" full optional>
        <input
          type="text"
          placeholder="Optioneel, prijs op aanvraag"
          value={form.budget}
          onChange={(e) => update("budget", e.target.value)}
          className="sf-input"
        />
      </Field>
      <Field label="Bericht" full optional>
        <textarea
          rows={5}
          value={form.bericht}
          onChange={(e) => update("bericht", e.target.value)}
          className="sf-input"
          placeholder="Vertel iets over de shoot die je in gedachten hebt"
        />
      </Field>

      <div className="md:col-span-2">
        <SubmitButton
          isSubmitting={isSubmitting}
          success={submitted}
          idleLabel="Verstuur aanvraag"
          successLabel="Aanvraag verstuurd"
          className="w-full md:w-auto"
        />
        <p className="mt-3 text-xs text-ink/60">
          Na verzenden hoor je snel van ons: {business.responseTime}.
        </p>
        {submitted && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: STANDARD_EASE }}
          >
            <p className="mt-3 text-sm text-ink/70">
              Je mailprogramma opent met je aanvraag klaar om te versturen naar{" "}
              {business.email}. Daarna {business.responseTime}.
            </p>
          </motion.div>
        )}
        <p className="mt-3 text-xs text-ink/50">
          Prijs op aanvraag. Na je aanvraag nemen we contact op met een
          voorstel op maat.
        </p>
      </div>
    </form>
  );
}

function Field({
  label,
  children,
  required,
  full,
  optional,
}: {
  label: string;
  children: React.ReactNode;
  required?: boolean;
  full?: boolean;
  optional?: boolean;
}) {
  return (
    <label className={`flex flex-col gap-1.5 text-sm ${full ? "md:col-span-2" : ""}`}>
      <span className="text-ink/80">
        {label}
        {required && <span className="text-gold"> *</span>}
        {optional && <span className="text-ink/40"> (optioneel)</span>}
      </span>
      {children}
    </label>
  );
}
