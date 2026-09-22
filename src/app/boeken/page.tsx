import type { Metadata } from "next";
import BookingForm from "@/components/BookingForm";
import { business } from "@/lib/content";

export const metadata: Metadata = {
  title: "Boeken",
  description:
    "Check je datum en vraag vrijblijvend een offerte aan voor bruiloft-, fashion-, portret- of videofotografie.",
};

export default function BoekenPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-14 md:px-8 md:py-20">
      <div className="mb-10 flex flex-col gap-2">
        <span className="sf-eyebrow text-gold-text">Check beschikbaarheid</span>
        <h1 className="font-heading text-4xl md:text-5xl">Boek je shoot</h1>
        <p className="max-w-xl text-sm text-ink/70">
          Vul het formulier in met zoveel mogelijk details — dan komen we zo
          snel mogelijk terug met beschikbaarheid en een voorstel. Liever
          direct contact? Bel of mail ons via de{" "}
          <a href="/contact" className="text-gold-text hover:underline">
            contactpagina
          </a>
          .
        </p>
      </div>
      <BookingForm />
      <p className="mt-10 border-t border-line pt-6 text-xs text-ink/50">
        Je kunt ons ook rechtstreeks bereiken: {business.phoneDisplay} of{" "}
        {business.email}.
      </p>
    </section>
  );
}
