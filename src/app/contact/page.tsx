import type { Metadata } from "next";
import { business } from "@/lib/content";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Bel, mail of volg Spontane Fotografie op Instagram.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14 md:px-8 md:py-20">
      <div className="mb-10 flex flex-col gap-2">
        <span className="sf-eyebrow text-gold-text">Neem contact op</span>
        <h1 className="font-heading text-4xl md:text-5xl">Contact</h1>
      </div>

      <div className="grid gap-12 md:grid-cols-2">
        <div className="space-y-6">
          <div>
            <p className="sf-eyebrow mb-1 text-gold-text">Telefoon</p>
            <a href={`tel:+31${business.phone.slice(1)}`} className="text-lg hover:text-gold">
              {business.phoneDisplay}
            </a>
          </div>
          <div>
            <p className="sf-eyebrow mb-1 text-gold-text">E-mail</p>
            <a href={`mailto:${business.email}`} className="text-lg hover:text-gold">
              {business.email}
            </a>
          </div>
          <div>
            <p className="sf-eyebrow mb-1 text-gold-text">Instagram</p>
            <a
              href={business.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg hover:text-gold"
            >
              {business.handle}
            </a>
          </div>
          <div>
            <p className="sf-eyebrow mb-1 text-gold-text">Werkgebied</p>
            <p className="text-lg">{business.city} &amp; heel Nederland</p>
          </div>
          <div>
            <p className="sf-eyebrow mb-1 text-gold-text">Adres</p>
            <p className="text-ink/60">Nog te bevestigen bij klant</p>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
