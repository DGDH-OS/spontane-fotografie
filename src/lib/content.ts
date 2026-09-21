// Content-bron: 3. CLIENTS/spontane-fotografie/CONTENT-MAP.md + SITE-PLAN.md
// Alle tekst hieronder is ofwel letterlijk overgenomen uit het publieke Instagram-profiel
// @spontane_fotografie, of een feitelijke beschrijving daarvan door DGDH. Geen verzonnen
// testimonials/reviews. Prijzen: placeholder "prijs op aanvraag" (Ruben akkoord, zie CLAUDE.md).

export const business = {
  name: "Spontane Film en Fotografie",
  handle: "@spontane_fotografie",
  tagline: "Fashion and Wedding photographer",
  city: "Lelystad",
  phone: "0626795151",
  phoneDisplay: "06 26 79 51 51",
  email: "info@spontanefilm-fotografie.nl",
  instagramUrl: "https://www.instagram.com/spontane_fotografie/",
  followers: "158K",
  followersExact: "157,9K",
} as const;

export type PortfolioCategory = "bruiloft" | "fashion" | "portret" | "video";

export interface PortfolioItem {
  id: string;
  category: PortfolioCategory;
  igUrl: string;
  description: string;
  // metrics zijn feitelijke IG-cijfers uit CONTENT-MAP.md, geen testimonial
  metric?: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: "wedding-1",
    category: "bruiloft",
    igUrl: "https://www.instagram.com/p/DaoKCEkgt19/",
    description: "\"WE D D I N G - P I C T U R E S\" — bruidspaar-shoot bij @hetpaleisnl.",
    metric: "731 likes",
  },
  {
    id: "wedding-2",
    category: "bruiloft",
    igUrl: "https://www.instagram.com/p/DZhWcbztPEk/",
    description: "Solo bruidsportret, close-up stijl.",
  },
  {
    id: "wedding-3",
    category: "bruiloft",
    igUrl: "https://www.instagram.com/reel/CzCrS-Ktsge/",
    description: "Reel: bruid in exclusieve bridal collectie met amaria-draagsters.",
  },
  {
    id: "wedding-4",
    category: "bruiloft",
    igUrl: "https://www.instagram.com/reel/DTa2uSlCPit/",
    description: "Reel: traditionele ceremonie, hair/visagie/negafa-credits.",
  },
  {
    id: "fashion-1",
    category: "fashion",
    igUrl: "https://www.instagram.com/p/CY7Sv8QtQh1/",
    description: "Bridalcollection editorial voor @maisonfatim.",
  },
  {
    id: "fashion-2",
    category: "fashion",
    igUrl: "https://www.instagram.com/p/DW1osHDgPAb/",
    description: "\"NEW ROMEO BRIDAL DRESS\" — studio-editorial voor Romeo Couture.",
  },
  {
    id: "fashion-3",
    category: "fashion",
    igUrl: "https://www.instagram.com/p/CZAmLVFNLS9/",
    description: "Close-up beauty/fashion shot — portret-fashion crossover.",
  },
  {
    id: "fashion-4",
    category: "fashion",
    igUrl: "https://www.instagram.com/p/DW61rQPjZMc/",
    description: "Caftan-fashion editorial met portret-insteek.",
    metric: "20K+ likes (re-post)",
  },
  {
    id: "portret-1",
    category: "portret",
    igUrl: "https://www.instagram.com/p/DZGYN-BNh47/",
    description: "Individueel portret, credit @chez_nouhma.",
  },
  {
    id: "portret-2",
    category: "portret",
    igUrl: "https://www.instagram.com/p/CZAmLVFNLS9/",
    description: "Close-up beauty-portret met sterke lichtregie.",
  },
  {
    id: "video-1",
    category: "video",
    igUrl: "https://www.instagram.com/reel/DYcxgRbttIW/",
    description: "\"The diamond of the season\" — bruiloftsreel, locatie @huizeswan.",
  },
  {
    id: "video-2",
    category: "video",
    igUrl: "https://www.instagram.com/reel/C5y0LGWNZSw/",
    description: "Reel bruidsmode-shoot, bridal + fashion crossover in bewegend beeld.",
  },
];

export const categoryLabels: Record<PortfolioCategory, string> = {
  bruiloft: "Bruiloft",
  fashion: "Fashion & Editorial",
  portret: "Portret",
  video: "Video",
};

export interface Service {
  slug: PortfolioCategory;
  title: string;
  short: string;
  description: string;
}

export const services: Service[] = [
  {
    slug: "bruiloft",
    title: "Bruiloft",
    short: "Jullie dag, vastgelegd zonder gestelde poses.",
    description:
      "Van de eerste voorbereidingen tot het laatste dansje: we volgen de dag zoals hij zich voordoet. Ceremonie, receptie en de stille momenten ertussen — met oog voor traditie en emotie. Ervaring met Marokkaans-Nederlandse bruiloften (caftans, henna, mounasaba) en internationale ceremonies.",
  },
  {
    slug: "fashion",
    title: "Fashion & Editorial",
    short: "Collectie-shoots en campagnebeeld met een internationale uitstraling.",
    description:
      "Voor designers, ateliers en modellen die beeld nodig hebben dat verder reikt dan een lookbook. Studio of locatie, altijd met een uitgewerkt lichtplan en een scherpe, tijdloze beeldtaal.",
  },
  {
    slug: "portret",
    title: "Portret",
    short: "Persoonlijk portret met aandacht voor licht en houding.",
    description:
      "Individuele shoots, beauty- en personal branding-portretten. Rustig tempo, duidelijke regie, beeld waar je jaren later nog blij van wordt.",
  },
  {
    slug: "video",
    title: "Video",
    short: "Reels, trailers en dronebeeld naast de fotografie.",
    description:
      "Naast stilstaand beeld leveren we ook bewegend beeld: sfeertrailers, drone-opnames en reel-content — vaak in samenwerking met een videograaf naast de fotograaf op locatie.",
  },
];

// Letterlijke, herbruikbare caption-taal uit de IG-tone-of-voice (CONTENT-MAP.md).
// Geen verzonnen quotes — dit zijn de eigen zinnen van het account.
export const brandLines = [
  "A moment suspended between dream and forever.",
  "A new era of Moroccan elegance.",
  "A love story, stitched into every detail.",
  "Elegance never whispers…",
];

export const workflowSteps = [
  {
    step: "1. Intake",
    text: "We bespreken datum, locatie en wensen. Je krijgt vooraf duidelijkheid over wat je van ons kunt verwachten — ook qua communicatie en planning.",
  },
  {
    step: "2. De shoot",
    text: "Op de dag zelf werken we rustig en gestructureerd, met een vast tijdschema dat we vooraf met je delen.",
  },
  {
    step: "3. Oplevering",
    text: "Je ontvangt een duidelijke termijn voor de oplevering bij de intake, en een tussentijdse update als er vertraging dreigt.",
  },
];
