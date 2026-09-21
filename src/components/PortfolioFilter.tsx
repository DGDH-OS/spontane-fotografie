"use client";

import { useState } from "react";
import { portfolioItems, categoryLabels, type PortfolioCategory } from "@/lib/content";
import PortfolioCard from "@/components/PortfolioCard";

const categories: (PortfolioCategory | "alle")[] = ["alle", "bruiloft", "fashion", "portret", "video"];

export default function PortfolioFilter() {
  const [active, setActive] = useState<(typeof categories)[number]>("alle");

  const items = active === "alle" ? portfolioItems : portfolioItems.filter((i) => i.category === active);

  return (
    <div>
      <div className="mb-10 flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setActive(c)}
            className={`px-4 py-2 text-xs uppercase tracking-widest transition ${
              active === c
                ? "bg-ink text-ivory"
                : "border border-line text-ink/70 hover:border-gold"
            }`}
          >
            {c === "alle" ? "Alle werk" : categoryLabels[c]}
          </button>
        ))}
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <PortfolioCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
