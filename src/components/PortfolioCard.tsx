"use client";

import Image from "next/image";
import { categoryLabels, type PortfolioItem } from "@/lib/content";

/**
 * Echte foto's van het publieke Instagram-profiel @spontane_fotografie
 * (zie CONTENT-MAP.md + content.ts). Geen stockfoto's, geen placeholders.
 *
 * Klik opent een lightbox (zie MOTION-PLAN §3a) i.p.v. direct doorlinken naar
 * Instagram; de Instagram-link staat als secundaire actie ín de lightbox.
 */
export default function PortfolioCard({
  item,
  onOpen,
}: {
  item: PortfolioItem;
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`${item.description} — bekijk groter`}
      className="group relative block w-full min-w-0 overflow-hidden bg-ink text-left"
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden">
        <Image
          src={item.image}
          alt={item.description}
          width={item.imageWidth}
          height={item.imageHeight}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04] group-active:scale-[1.04]"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent opacity-0 transition duration-300 group-hover:opacity-100 group-active:opacity-100" />
      </div>
      {/* Caption altijd zichtbaar onder de foto op touch (geen hover-afhankelijkheid); op
       * desktop verschijnt bovendien de hover-overlay met dezelfde info. */}
      <div className="flex flex-col gap-1 p-3 md:hidden">
        <span className="sf-eyebrow text-gold">{categoryLabels[item.category]}</span>
        <p className="line-clamp-1 text-sm leading-snug text-ink/80">{item.description}</p>
      </div>
      <div className="absolute inset-x-0 bottom-0 hidden translate-y-2 flex-col gap-1 p-4 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 md:flex md:p-5">
        <span className="sf-eyebrow text-gold-soft">{categoryLabels[item.category]}</span>
        <p className="font-heading text-base leading-snug text-ivory md:text-lg">
          {item.description}
        </p>
        <p className="mt-1 flex flex-wrap items-center gap-1.5 text-xs uppercase tracking-widest text-gold-soft">
          Bekijk foto
        </p>
      </div>
    </button>
  );
}
