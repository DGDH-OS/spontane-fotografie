import Link from "next/link";
import { business } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ink text-ivory">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-heading text-xl">Spontane Fotografie</p>
            <p className="mt-2 text-sm text-ivory/70">
              {business.tagline} · {business.city}
            </p>
          </div>
          <div className="text-sm text-ivory/80">
            <p className="sf-eyebrow mb-2 text-gold-soft">Contact</p>
            <p>
              <a href={`tel:+31${business.phone.slice(1)}`} className="hover:text-gold-soft">
                {business.phoneDisplay}
              </a>
            </p>
            <p>
              <a href={`mailto:${business.email}`} className="hover:text-gold-soft">
                {business.email}
              </a>
            </p>
            <p className="mt-2 text-ivory/60">
              Adres: nog te bevestigen bij klant
            </p>
          </div>
          <div className="text-sm text-ivory/80">
            <p className="sf-eyebrow mb-2 text-gold-soft">Volg ons</p>
            <a
              href={business.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold-soft"
            >
              {business.handle} — {business.followersExact} volgers
            </a>
            <nav className="mt-4 flex flex-col gap-1">
              <Link href="/portfolio" className="hover:text-gold-soft">Portfolio</Link>
              <Link href="/diensten" className="hover:text-gold-soft">Diensten</Link>
              <Link href="/boeken" className="hover:text-gold-soft">Boeken</Link>
            </nav>
          </div>
        </div>
        <p className="mt-10 text-xs text-ivory/40">
          © {new Date().getFullYear()} Spontane Film en Fotografie. Alle rechten voorbehouden.
        </p>
      </div>
    </footer>
  );
}
