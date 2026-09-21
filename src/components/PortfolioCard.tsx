import Image from "next/image";
import { categoryLabels, type PortfolioItem } from "@/lib/content";
import ArrowIcon from "./ArrowIcon";

/**
 * Echte foto's van het publieke Instagram-profiel @spontane_fotografie
 * (zie CONTENT-MAP.md + content.ts). Geen stockfoto's, geen placeholders.
 */
export default function PortfolioCard({ item }: { item: PortfolioItem }) {
  return (
    <a
      href={item.igUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block overflow-hidden bg-ink"
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden">
        <Image
          src={item.image}
          alt={item.description}
          width={item.imageWidth}
          height={item.imageHeight}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
      </div>
      <div className="absolute inset-x-0 bottom-0 flex translate-y-2 flex-col gap-1 p-5 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <span className="sf-eyebrow text-gold-soft">{categoryLabels[item.category]}</span>
        <p className="font-heading text-lg leading-snug text-ivory">
          {item.description}
        </p>
        <p className="mt-1 flex items-center gap-1.5 text-xs uppercase tracking-widest text-gold-soft">
          Bekijk op Instagram <ArrowIcon />
        </p>
      </div>
    </a>
  );
}
