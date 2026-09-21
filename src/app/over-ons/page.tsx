import type { Metadata } from "next";
import { business, workflowSteps, brandLines } from "@/lib/content";

export const metadata: Metadata = {
  title: "Over ons",
  description:
    "Fashion and Wedding photographer vanuit Lelystad. Werkwijze, stijl en wat je van ons kunt verwachten.",
};

export default function OverOnsPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14 md:px-8 md:py-20">
      <div className="mb-10 flex flex-col gap-2">
        <span className="sf-eyebrow">{business.tagline}</span>
        <h1 className="font-heading text-4xl md:text-5xl">Over ons</h1>
      </div>

      <div className="grid gap-10 md:grid-cols-2">
        <div className="space-y-4 text-ink/80">
          <p className="font-heading text-2xl italic text-ink">
            &ldquo;{brandLines[2]}&rdquo;
          </p>
          <p>
            Vanuit Lelystad fotograferen en filmen we bruiloften, fashion- en
            editorialcollecties, portretten en video — met een stijl die
            internationaal en tijdloos aanvoelt, en oog heeft voor de
            Marokkaans-Nederlandse bruidsmarkt waar we veel in werken (caftans,
            henna, mounasaba).
          </p>
          <p>
            Op Instagram (@spontane_fotografie) volgen {business.followersExact}{" "}
            mensen ons werk. Daar delen we het grootste deel van onze recente
            shoots, edits en reels.
          </p>
        </div>

        <div>
          <h2 className="sf-eyebrow mb-4">Wat je van ons kunt verwachten</h2>
          <p className="mb-6 text-sm text-ink/70">
            We hebben van eerdere klantcommunicatie geleerd dat duidelijkheid
            vooraf het belangrijkste is. Daarom maken we onze werkwijze
            expliciet, in plaats van beloftes achteraf:
          </p>
          <ol className="space-y-5">
            {workflowSteps.map((w) => (
              <li key={w.step} className="border-l-2 border-gold pl-4">
                <p className="font-heading text-lg">{w.step}</p>
                <p className="mt-1 text-sm text-ink/70">{w.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
