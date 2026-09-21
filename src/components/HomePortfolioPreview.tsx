"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import PortfolioCard from "@/components/PortfolioCard";
import Lightbox from "@/components/Lightbox";
import type { PortfolioItem } from "@/lib/content";

/**
 * Client-wrapper voor de homepage-portfolio-preview, zodat de lightbox
 * (klik-op-foto i.p.v. direct Instagram) ook op de homepage werkt, niet
 * alleen op /portfolio.
 */
export default function HomePortfolioPreview({ items }: { items: PortfolioItem[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeItem = activeIndex !== null ? items[activeIndex] ?? null : null;

  return (
    <>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-6 md:gap-5">
        {items.map((item, i) => (
          <Reveal
            key={item.id}
            delayMs={i * 70}
            className={`min-w-0 ${
              i === 0
                ? "col-span-2 md:col-span-3 md:row-span-2"
                : i === 1
                ? "col-span-1 md:col-span-3"
                : i === 2
                ? "col-span-1 md:col-span-3"
                : "col-span-1 md:col-span-2"
            }`}
          >
            <PortfolioCard item={item} onOpen={() => setActiveIndex(i)} />
          </Reveal>
        ))}
      </div>
      <Lightbox
        item={activeItem}
        onClose={() => setActiveIndex(null)}
        onPrev={items.length > 1 ? () => setActiveIndex((i) => (i === null ? null : (i - 1 + items.length) % items.length)) : undefined}
        onNext={items.length > 1 ? () => setActiveIndex((i) => (i === null ? null : (i + 1) % items.length)) : undefined}
      />
    </>
  );
}
