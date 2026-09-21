import Link from "next/link";
import { business } from "@/lib/content";

export default function StickyBookCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-ink pb-[env(safe-area-inset-bottom)] md:hidden">
      <div className="flex items-stretch">
        <Link
          href="/boeken"
          className="flex-1 py-4 text-center text-sm font-medium uppercase tracking-widest text-ivory"
        >
          Boek nu / Check datum
        </Link>
        <a
          href={`tel:+31${business.phone.slice(1)}`}
          aria-label="Bel Spontane Fotografie"
          className="flex w-16 items-center justify-center border-l border-ivory/20 text-ivory"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 5.5C3 4.67 3.67 4 4.5 4h2.6c.7 0 1.3.47 1.46 1.15l.8 3.3a1.5 1.5 0 0 1-.42 1.44l-1.4 1.4a12.5 12.5 0 0 0 5.67 5.67l1.4-1.4a1.5 1.5 0 0 1 1.44-.42l3.3.8c.68.16 1.15.76 1.15 1.46v2.6c0 .83-.67 1.5-1.5 1.5C10.5 21 3 13.5 3 5.5Z"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
