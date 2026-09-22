import type { Metadata } from "next";
import PortfolioFilter from "@/components/PortfolioFilter";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Bekijk bruiloft-, fashion-, portret- en videowerk van Spontane Fotografie, filterbaar op categorie.",
};

export default function PortfolioPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14 md:px-8 md:py-20">
      <div className="mb-10 flex flex-col gap-2">
        <span className="sf-eyebrow text-gold-text">Recent werk</span>
        <h1 className="font-heading text-4xl md:text-5xl">Portfolio</h1>
        <p className="max-w-xl text-sm text-ink/70">
          Een selectie uit ons werk, filterbaar op categorie. Elke kaart linkt
          door naar de originele Instagram-post — de definitieve hoge-resolutie
          beelden voor deze site worden nog aangeleverd door de klant.
        </p>
      </div>
      <PortfolioFilter />
    </section>
  );
}
