import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/content";
import ArrowIcon from "@/components/ArrowIcon";

export const metadata: Metadata = {
  title: "Diensten",
  description:
    "Bruiloft, fashion & editorial, portret en video — fotografie- en videodiensten van Spontane Fotografie, prijs op aanvraag.",
};

export default function DienstenPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14 md:px-8 md:py-20">
      <div className="mb-10 flex flex-col gap-2">
        <span className="sf-eyebrow">Wat we fotograferen</span>
        <h1 className="font-heading text-4xl md:text-5xl">Diensten</h1>
      </div>

      <div className="flex flex-col divide-y divide-line border-t border-line">
        {services.map((s) => (
          <div key={s.slug} id={s.slug} className="scroll-mt-24 py-10 md:py-14">
            <div className="grid gap-6 md:grid-cols-[1fr_2fr] md:gap-12">
              <h2 className="font-heading text-2xl md:text-3xl">{s.title}</h2>
              <div>
                <p className="text-ink/80">{s.description}</p>
                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <span className="border border-line bg-ivory-dim px-4 py-2 text-sm text-ink/70">
                    Prijs op aanvraag
                  </span>
                  <Link
                    href="/boeken"
                    className="flex items-center gap-1.5 text-sm uppercase tracking-widest text-gold hover:underline"
                  >
                    Vraag {s.title.toLowerCase()}-shoot aan <ArrowIcon />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
