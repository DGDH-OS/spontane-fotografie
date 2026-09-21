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
  image: string;
  imageWidth: number;
  imageHeight: number;
  description: string;
  // metrics zijn feitelijke IG-cijfers uit CONTENT-MAP.md, geen testimonial
  metric?: string;
}

// Foto's gedownload van het publieke Instagram-profiel @spontane_fotografie
// (via publieke, login-vrije viewer) op 21-09-2026. Originele resolutie,
// alleen geresized/gecomprimeerd voor web. Geen stockfoto's, geen placeholders.
export const portfolioItems: PortfolioItem[] = [
  {
    id: "wedding-1",
    category: "bruiloft",
    igUrl: "https://www.instagram.com/p/DdjwBSRAtXl/",
    image: "/portfolio/wedding-1.jpg",
    imageWidth: 1088,
    imageHeight: 1440,
    description: "The Reverie Collection, Odélia Bridal. Gemaakt voor het moment dat je ja zegt.",
    metric: "731 likes",
  },
  {
    id: "wedding-2",
    category: "bruiloft",
    igUrl: "https://www.instagram.com/p/Ddg5nFZgvp0/",
    image: "/portfolio/wedding-2.jpg",
    imageWidth: 3072,
    imageHeight: 4096,
    description: "Wedding pictures bij Het Paleis, met amaria-draagsters en traditionele ceremonie.",
  },
  {
    id: "wedding-3",
    category: "bruiloft",
    igUrl: "https://www.instagram.com/p/DdXECclAmSx/",
    image: "/portfolio/wedding-3.jpg",
    imageWidth: 3072,
    imageHeight: 4096,
    description: "Weddingpictures met negafa en amaria-draagsters, close-up ceremonie-moment.",
    metric: "1K likes",
  },
  {
    id: "wedding-4",
    category: "bruiloft",
    igUrl: "https://www.instagram.com/p/DdRd1LhAnag/",
    image: "/portfolio/wedding-4.jpg",
    imageWidth: 3072,
    imageHeight: 4096,
    description: "Bruiloft met cateringpartner en amaria-draagsters, licht en compositie op locatie.",
  },
  {
    id: "wedding-5",
    category: "bruiloft",
    igUrl: "https://www.instagram.com/p/DdMhKR-giMK/",
    image: "/portfolio/wedding-5.jpg",
    imageWidth: 3072,
    imageHeight: 4096,
    description: "Wedding pictures, traditionele dabke-muzikant en amaria-draagsters op de dansvloer.",
    metric: "2K likes",
  },
  {
    id: "fashion-1",
    category: "fashion",
    igUrl: "https://www.instagram.com/p/Dc_anL4At4S/",
    image: "/portfolio/fashion-1.jpg",
    imageWidth: 3072,
    imageHeight: 4096,
    description: "Wedding pictures met amaria-draagsters, editorial licht- en composities.",
    metric: "1K likes",
  },
  {
    id: "fashion-2",
    category: "fashion",
    igUrl: "https://www.instagram.com/p/Dc6dWl2AifQ/",
    image: "/portfolio/fashion-2.jpg",
    imageWidth: 3274,
    imageHeight: 4096,
    description: "Nieuwe bridal collectie, Marokkaans-geïnspireerde elegantie. Model en designer op locatie.",
  },
  {
    id: "portret-1",
    category: "portret",
    igUrl: "https://www.instagram.com/p/DZGYN-BNh47/",
    image: "/portfolio/portret-1.jpg",
    imageWidth: 1440,
    imageHeight: 1634,
    description: "Individueel portret in samenwerking met Chez Nouhma styling.",
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
      "Van de eerste voorbereidingen tot het laatste dansje: we volgen de dag zoals hij zich voordoet. Ceremonie, receptie en de stille momenten ertussen, met oog voor traditie en emotie. Ervaring met Marokkaans-Nederlandse bruiloften (caftans, henna, mounasaba) en internationale ceremonies.",
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
      "Naast stilstaand beeld leveren we ook bewegend beeld: sfeertrailers, drone-opnames en reel-content, vaak in samenwerking met een videograaf naast de fotograaf op locatie.",
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
    text: "We bespreken datum, locatie en wensen. Je krijgt vooraf duidelijkheid over wat je van ons kunt verwachten, ook qua communicatie en planning.",
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
