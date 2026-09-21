"use client";

import { useState } from "react";
import { business, services } from "@/lib/content";

const shootTypes = services.map((s) => s.title);

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);
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
    // Geen backend/e-mailservice gekoppeld in deze fase: we openen een
    // vooraf ingevulde mailto zodat de aanvraag echt bij de klant terechtkomt.
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
    setSubmitted(true);
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
      <Field label="Telefoon">
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
      <Field label="Gewenste datum">
        <input
          type="date"
          value={form.datum}
          onChange={(e) => update("datum", e.target.value)}
          className="sf-input"
        />
      </Field>
      <Field label="Locatie">
        <input
          type="text"
          placeholder="Stad / venue"
          value={form.locatie}
          onChange={(e) => update("locatie", e.target.value)}
          className="sf-input"
        />
      </Field>
      <Field label="Budget-indicatie" full>
        <input
          type="text"
          placeholder="Optioneel, prijs op aanvraag"
          value={form.budget}
          onChange={(e) => update("budget", e.target.value)}
          className="sf-input"
        />
      </Field>
      <Field label="Bericht" full>
        <textarea
          rows={5}
          value={form.bericht}
          onChange={(e) => update("bericht", e.target.value)}
          className="sf-input"
          placeholder="Vertel iets over de shoot die je in gedachten hebt"
        />
      </Field>

      <div className="md:col-span-2">
        <button
          type="submit"
          className="w-full bg-ink py-4 text-sm uppercase tracking-widest text-ivory transition hover:bg-gold hover:text-ink md:w-auto md:px-10"
        >
          Verstuur aanvraag
        </button>
        {submitted && (
          <p className="mt-3 text-sm text-ink/70">
            Je mailprogramma opent met je aanvraag klaar om te versturen naar{" "}
            {business.email}.
          </p>
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
}: {
  label: string;
  children: React.ReactNode;
  required?: boolean;
  full?: boolean;
}) {
  return (
    <label className={`flex flex-col gap-1.5 text-sm ${full ? "md:col-span-2" : ""}`}>
      <span className="text-ink/80">
        {label}
        {required && <span className="text-gold"> *</span>}
      </span>
      {children}
    </label>
  );
}
