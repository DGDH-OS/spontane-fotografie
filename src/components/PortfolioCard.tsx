import { categoryLabels, type PortfolioItem } from "@/lib/content";
import ArrowIcon from "./ArrowIcon";

/**
 * Definitieve hi-res IG-assets staan nog open (zie CONTENT-MAP.md §"Wat de
 * builder nog moet doen"). Tot die er zijn tonen we géén stockfoto's of
 * placeholder-plaatjes (REGEL NUL, dgdh-site-build) — in plaats daarvan een
 * eerlijke kaart die doorlinkt naar de echte, bestaande Instagram-post.
 */
export default function PortfolioCard({ item }: { item: PortfolioItem }) {
  return (
    <a
      href={item.igUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex aspect-[4/5] flex-col justify-between border border-line bg-ivory-dim p-5 transition hover:border-gold"
    >
      <span className="sf-eyebrow">{categoryLabels[item.category]}</span>
      <div>
        <p className="font-heading text-lg leading-snug text-ink">
          {item.description}
        </p>
        {item.metric && (
          <p className="mt-2 text-xs uppercase tracking-widest text-ink/50">
            {item.metric}
          </p>
        )}
        <p className="mt-3 flex items-center gap-1.5 text-xs uppercase tracking-widest text-gold group-hover:underline">
          Bekijk op Instagram <ArrowIcon />
        </p>
      </div>
    </a>
  );
}
