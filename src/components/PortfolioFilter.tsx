"use client";

import { useState } from "react";
import { portfolioItems, categoryLabels, type PortfolioCategory } from "@/lib/content";
import PortfolioCard from "@/components/PortfolioCard";
import Lightbox from "@/components/Lightbox";

const categories: (PortfolioCategory | "alle")[] = ["alle", "bruiloft", "fashion", "portret"];

export default function PortfolioFilter() {
  const [active, setActive] = useState<(typeof categories)[number]>("alle");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const items = active === "alle" ? portfolioItems : portfolioItems.filter((i) => i.category === active);
  const activeItem = activeIndex !== null ? items[activeIndex] ?? null : null;

  function openAt(index: number) {
    setActiveIndex(index);
  }

  function close() {
    setActiveIndex(null);
  }

  function prev() {
    setActiveIndex((i) => (i === null ? null : (i - 1 + items.length) % items.length));
  }

  function next() {
    setActiveIndex((i) => (i === null ? null : (i + 1) % items.length));
  }

  return (
    <div>
      <div className="mb-10 flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => {
              setActive(c);
              setActiveIndex(null);
            }}
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
        {items.map((item, i) => (
          <PortfolioCard key={item.id} item={item} onOpen={() => openAt(i)} />
        ))}
      </div>
      <Lightbox
        item={activeItem}
        onClose={close}
        onPrev={items.length > 1 ? prev : undefined}
        onNext={items.length > 1 ? next : undefined}
      />
    </div>
  );
}
