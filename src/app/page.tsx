import Link from "next/link";
import { business, portfolioItems, services, brandLines, workflowSteps } from "@/lib/content";
import PortfolioCard from "@/components/PortfolioCard";

export default function Home() {
  const preview = portfolioItems.slice(0, 6);

  return (
    <>
      {/* HERO */}
      <section className="border-b border-line bg-ink text-ivory">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-16 md:px-8 md:py-28">
          <span className="sf-eyebrow text-gold-soft">{business.tagline}</span>
          <h1 className="max-w-2xl font-heading text-4xl leading-tight md:text-6xl">
            {brandLines[0]}
          </h1>
          <p className="max-w-xl text-ivory/75">
            Bruiloft, fashion, portret en video — gefotografeerd vanuit Lelystad,
            met een internationale, tijdloze beeldtaal.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/boeken"
              className="border border-gold bg-gold px-6 py-3 text-sm uppercase tracking-widest text-ink transition hover:bg-gold-soft"
            >
              Check beschikbaarheid
            </Link>
            <a
              href={business.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-ivory/30 px-6 py-3 text-sm uppercase tracking-widest text-ivory/90 transition hover:border-ivory"
            >
              {business.followersExact} volgers op Instagram
            </a>
          </div>
        </div>
      </section>

      {/* DIENSTEN */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:px-8 md:py-24">
        <div className="mb-10 flex flex-col gap-2">
          <span className="sf-eyebrow text-gold-text">Wat we fotograferen</span>
          <h2 className="font-heading text-3xl md:text-4xl">Diensten</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/diensten#${s.slug}`}
              className="flex flex-col gap-3 border border-line bg-white p-6 transition hover:border-gold"
            >
              <h3 className="font-heading text-xl">{s.title}</h3>
              <p className="text-sm text-ink/70">{s.short}</p>
              <span className="mt-auto text-xs uppercase tracking-widest text-gold-text">
                Meer →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* PORTFOLIO PREVIEW */}
      <section className="border-y border-line bg-ivory-dim">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-8 md:py-24">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="sf-eyebrow text-gold-text">Recent werk</span>
              <h2 className="font-heading text-3xl md:text-4xl">Portfolio</h2>
            </div>
            <Link href="/portfolio" className="text-sm uppercase tracking-widest text-gold-text hover:underline">
              Bekijk volledige portfolio →
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {preview.map((item) => (
              <PortfolioCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* WERKWIJZE */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:px-8 md:py-24">
        <div className="mb-10 flex flex-col gap-2">
          <span className="sf-eyebrow text-gold-text">Hoe een boeking verloopt</span>
          <h2 className="font-heading text-3xl md:text-4xl">Werkwijze</h2>
          <p className="max-w-xl text-sm text-ink/70">
            Transparantie staat voorop: je weet vooraf wat je kunt verwachten,
            zowel qua planning als communicatie.
          </p>
        </div>
        <ol className="grid gap-6 md:grid-cols-3">
          {workflowSteps.map((w) => (
            <li key={w.step} className="border-t-2 border-gold pt-4">
              <p className="font-heading text-lg">{w.step}</p>
              <p className="mt-2 text-sm text-ink/70">{w.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* SOCIAL PROOF */}
      <section className="border-t border-line bg-ink text-ivory">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-4 px-4 py-16 md:px-8 md:py-20">
          <span className="sf-eyebrow text-gold-soft">Volg ons</span>
          <h2 className="font-heading text-3xl md:text-4xl">
            {business.followersExact} volgers op Instagram
          </h2>
          <p className="max-w-xl text-ivory/75">
            Ons meest recente werk verschijnt eerst op Instagram — bruiloften,
            fashion-collecties en portretten uit heel Nederland.
          </p>
          <a
            href={business.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gold px-6 py-3 text-sm uppercase tracking-widest text-ivory transition hover:bg-gold hover:text-ink"
          >
            {business.handle} volgen →
          </a>
        </div>
      </section>
    </>
  );
}
