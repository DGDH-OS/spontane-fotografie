import Image from "next/image";
import Link from "next/link";
import { business, portfolioItems, services, brandLines, workflowSteps } from "@/lib/content";
import PortfolioCard from "@/components/PortfolioCard";
import ArrowIcon from "@/components/ArrowIcon";

export default function Home() {
  const preview = portfolioItems.slice(0, 5);
  const hero = portfolioItems[1]; // wedding-2, staand formaat, sterk beeld

  return (
    <>
      {/* HERO — full-bleed foto, geen kale kleurvlakken */}
      <section className="relative flex min-h-[88vh] items-end overflow-hidden bg-ink text-ivory md:min-h-[92vh]">
        <Image
          src={hero.image}
          alt={hero.description}
          width={hero.imageWidth}
          height={hero.imageHeight}
          priority
          className="absolute inset-0 h-full w-full object-cover object-[50%_20%] opacity-75"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/10" />
        <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 pb-14 pt-32 md:px-8 md:pb-20">
          <span className="sf-eyebrow text-gold-soft">{business.tagline}</span>
          <h1 className="max-w-2xl font-heading text-4xl leading-tight md:text-6xl">
            {brandLines[0]}
          </h1>
          <p className="max-w-xl text-ivory/80">
            Bruiloft, fashion, portret en video, gefotografeerd vanuit Lelystad,
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

      {/* DIENSTEN — asymmetrisch, geen herhaald 4-koloms grid */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:px-8 md:py-24">
        <div className="mb-10 flex flex-col gap-2">
          <span className="sf-eyebrow">Wat we fotograferen</span>
          <h2 className="font-heading text-3xl md:text-4xl">Diensten</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-6">
          {services.map((s, i) => (
            <Link
              key={s.slug}
              href={`/diensten#${s.slug}`}
              className={`flex flex-col justify-between gap-4 border border-line bg-white p-6 transition hover:border-gold md:p-8 ${
                i === 0 ? "md:col-span-4" : i === 1 ? "md:col-span-2" : "md:col-span-3"
              }`}
            >
              <div>
                <h3 className="font-heading text-2xl">{s.title}</h3>
                <p className="mt-2 text-sm text-ink/70">{s.short}</p>
              </div>
              <span className="flex items-center gap-1.5 text-xs uppercase tracking-widest text-gold">
                Meer <ArrowIcon />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* PORTFOLIO PREVIEW — asymmetrisch bento, geen keurig 3x3-grid */}
      <section className="border-y border-line bg-ivory-dim">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-8 md:py-24">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="sf-eyebrow">Recent werk</span>
              <h2 className="font-heading text-3xl md:text-4xl">Portfolio</h2>
            </div>
            <Link href="/portfolio" className="flex items-center gap-1.5 text-sm uppercase tracking-widest text-gold hover:underline">
              Bekijk volledige portfolio <ArrowIcon />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-6 md:gap-5">
            {preview.map((item, i) => (
              <div
                key={item.id}
                className={
                  i === 0
                    ? "col-span-2 md:col-span-3 md:row-span-2"
                    : i === 1
                    ? "col-span-1 md:col-span-3"
                    : i === 2
                    ? "col-span-1 md:col-span-3"
                    : "col-span-1 md:col-span-2"
                }
              >
                <PortfolioCard item={item} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WERKWIJZE */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:px-8 md:py-24">
        <div className="mb-10 flex flex-col gap-2">
          <span className="sf-eyebrow">Hoe een boeking verloopt</span>
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
            Ons meest recente werk verschijnt eerst op Instagram, bruiloften,
            fashion-collecties en portretten uit heel Nederland.
          </p>
          <a
            href={business.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gold px-6 py-3 text-sm uppercase tracking-widest text-ivory transition hover:bg-gold hover:text-ink flex items-center gap-1.5 w-fit"
          >
            {business.handle} volgen <ArrowIcon />
          </a>
        </div>
      </section>
    </>
  );
}
