// Content-bron: 3. CLIENTS/spontane-fotografie/CONTENT-MAP.md + SITE-PLAN.md +
// /tmp/sf-scrape-round2/MANIFEST.md (ronde 2, 104 foto's, 30 geselecteerd op
// compositie-variatie, geen bijna-duplicaten, representatief over bruiloft/
// fashion/portret). Alle tekst hieronder is ofwel letterlijk overgenomen uit
// het publieke Instagram-profiel @spontane_fotografie, of een feitelijke
// beschrijving daarvan door DGDH. Geen verzonnen testimonials/reviews.
// Prijzen: placeholder "prijs op aanvraag" (Ruben akkoord, zie CLAUDE.md).

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
  responseTime: "je hoort binnen 48 uur van ons",
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
// (via publieke, login-vrije viewer) op 21-09-2026 (ronde 2, 104 foto's,
// zie /tmp/sf-scrape-round2/MANIFEST.md). Originele resolutie, alleen
// geresized/gecomprimeerd voor web (ImageMagick, max 2000px, quality 82,
// EXIF-strip). 30 foto's geselecteerd op compositie-variatie, geen
// bijna-duplicaten. Geen stockfoto's, geen placeholders.
export const portfolioItems: PortfolioItem[] = [
  {
    id: "bruiloft-1",
    category: "bruiloft",
    igUrl: "https://www.instagram.com/spontane_fotografie/",
    image: "/portfolio/bruiloft-1.jpg",
    imageWidth: 1088,
    imageHeight: 1440,
    description: "Bruid in witte jurk, binnenkomst tussen de gewelfde bogen van de trouwzaal.",
  },
  {
    id: "bruiloft-2",
    category: "bruiloft",
    igUrl: "https://www.instagram.com/spontane_fotografie/",
    image: "/portfolio/bruiloft-2.jpg",
    imageWidth: 1088,
    imageHeight: 1440,
    description: "Klassiek bruidsportret in de gang, licht dat van opzij invalt op de jurk.",
  },
  {
    id: "bruiloft-3",
    category: "bruiloft",
    igUrl: "https://www.instagram.com/spontane_fotografie/",
    image: "/portfolio/bruiloft-3.jpg",
    imageWidth: 1088,
    imageHeight: 1440,
    description: "Bruid met lange sluier, rustig portret vlak voor de ceremonie.",
  },
  {
    id: "bruiloft-4",
    category: "bruiloft",
    igUrl: "https://www.instagram.com/spontane_fotografie/",
    image: "/portfolio/bruiloft-4.jpg",
    imageWidth: 1088,
    imageHeight: 1440,
    description: "Sluier in beweging, close-up moment tussen de voorbereidingen door.",
  },
  {
    id: "bruiloft-5",
    category: "bruiloft",
    igUrl: "https://www.instagram.com/spontane_fotografie/",
    image: "/portfolio/bruiloft-5.jpg",
    imageWidth: 1501,
    imageHeight: 2000,
    description: "Henna-avond: het aanbrengen van de henna, handen en details in beeld.",
  },
  {
    id: "bruiloft-6",
    category: "bruiloft",
    igUrl: "https://www.instagram.com/spontane_fotografie/",
    image: "/portfolio/bruiloft-6.jpg",
    imageWidth: 1500,
    imageHeight: 2000,
    description: "Bruid op de amariya (draagstoel), gedragen door de amaria-draagsters.",
  },
  {
    id: "bruiloft-7",
    category: "bruiloft",
    igUrl: "https://www.instagram.com/spontane_fotografie/",
    image: "/portfolio/bruiloft-7.jpg",
    imageWidth: 1500,
    imageHeight: 2000,
    description: "Traditionele ceremonie met negafa, kleur en beweging tijdens de intocht.",
  },
  {
    id: "bruiloft-8",
    category: "bruiloft",
    igUrl: "https://www.instagram.com/spontane_fotografie/",
    image: "/portfolio/bruiloft-8.jpg",
    imageWidth: 1500,
    imageHeight: 2000,
    description: "Detailmoment tijdens de mounasaba, close-up op stof en sieraden.",
  },
  {
    id: "bruiloft-9",
    category: "bruiloft",
    igUrl: "https://www.instagram.com/spontane_fotografie/",
    image: "/portfolio/bruiloft-9.jpg",
    imageWidth: 1500,
    imageHeight: 2000,
    description: "Bruidspaar op de dansvloer, dabke-muziek en gasten op de achtergrond.",
  },
  {
    id: "bruiloft-10",
    category: "bruiloft",
    igUrl: "https://www.instagram.com/spontane_fotografie/",
    image: "/portfolio/bruiloft-10.jpg",
    imageWidth: 1500,
    imageHeight: 2000,
    description: "Handen van het bruidspaar, close-up van het ringmoment.",
  },
  {
    id: "fashion-1",
    category: "fashion",
    igUrl: "https://www.instagram.com/spontane_fotografie/",
    image: "/portfolio/fashion-1.jpg",
    imageWidth: 1500,
    imageHeight: 2000,
    description: "Gouden kaftan, studio-opname met scherpe belijning en warm licht.",
  },
  {
    id: "fashion-2",
    category: "fashion",
    igUrl: "https://www.instagram.com/spontane_fotografie/",
    image: "/portfolio/fashion-2.jpg",
    imageWidth: 1500,
    imageHeight: 2000,
    description: "Zilveren gala-kaftan, model in staande pose tegen een neutrale achtergrond.",
  },
  {
    id: "fashion-3",
    category: "fashion",
    igUrl: "https://www.instagram.com/spontane_fotografie/",
    image: "/portfolio/fashion-3.jpg",
    imageWidth: 1500,
    imageHeight: 2000,
    description: "Donkere avondjurk met kantwerk, licht dat de textuur laat zien.",
  },
  {
    id: "fashion-4",
    category: "fashion",
    igUrl: "https://www.instagram.com/spontane_fotografie/",
    image: "/portfolio/fashion-4.jpg",
    imageWidth: 1500,
    imageHeight: 2000,
    description: "Macro-detail van borduurwerk op een kaftan, elke draad zichtbaar.",
  },
  {
    id: "fashion-5",
    category: "fashion",
    igUrl: "https://www.instagram.com/spontane_fotografie/",
    image: "/portfolio/fashion-5.jpg",
    imageWidth: 1500,
    imageHeight: 2000,
    description: "Sieraden en randwerk van een kaftan, close-up in studiolicht.",
  },
  {
    id: "fashion-6",
    category: "fashion",
    igUrl: "https://www.instagram.com/spontane_fotografie/",
    image: "/portfolio/fashion-6.jpg",
    imageWidth: 1500,
    imageHeight: 2000,
    description: "Geborduurde stofrand, macro-opname met scherptediepte op het patroon.",
  },
  {
    id: "fashion-7",
    category: "fashion",
    igUrl: "https://www.instagram.com/spontane_fotografie/",
    image: "/portfolio/fashion-7.jpg",
    imageWidth: 1500,
    imageHeight: 2000,
    description: "Turquoise kaftan, soloportret met rustige, editoriale uitstraling.",
  },
  {
    id: "fashion-8",
    category: "fashion",
    igUrl: "https://www.instagram.com/spontane_fotografie/",
    image: "/portfolio/fashion-8.jpg",
    imageWidth: 1500,
    imageHeight: 2000,
    description: "Groepsportret in turquoise en goud, meerdere modellen naast elkaar.",
  },
  {
    id: "fashion-9",
    category: "fashion",
    igUrl: "https://www.instagram.com/spontane_fotografie/",
    image: "/portfolio/fashion-9.jpg",
    imageWidth: 1500,
    imageHeight: 2000,
    description: "Modeportret in kaftan, natuurlijke pose met blik naast de camera.",
  },
  {
    id: "fashion-10",
    category: "fashion",
    igUrl: "https://www.instagram.com/spontane_fotografie/",
    image: "/portfolio/fashion-10.jpg",
    imageWidth: 1500,
    imageHeight: 2000,
    description: "Turquoise/gouden kaftan-shoot in samenwerking met een lokaal studiolabel.",
  },
  {
    id: "fashion-11",
    category: "fashion",
    igUrl: "https://www.instagram.com/spontane_fotografie/",
    image: "/portfolio/fashion-11.jpg",
    imageWidth: 1080,
    imageHeight: 1440,
    description: "Studioportret, kaftan in beweging vastgelegd op het moment van draaien.",
  },
  {
    id: "fashion-12",
    category: "fashion",
    igUrl: "https://www.instagram.com/spontane_fotografie/",
    image: "/portfolio/fashion-12.jpg",
    imageWidth: 1080,
    imageHeight: 1439,
    description: "Close-up op sieraden en kraag, licht dat metaal en steen laat glinsteren.",
  },
  {
    id: "fashion-13",
    category: "fashion",
    igUrl: "https://www.instagram.com/spontane_fotografie/",
    image: "/portfolio/fashion-13.jpg",
    imageWidth: 1080,
    imageHeight: 1439,
    description: "Modeportret met kroon en sluier, decorstuk op de achtergrond.",
  },
  {
    id: "fashion-14",
    category: "fashion",
    igUrl: "https://www.instagram.com/spontane_fotografie/",
    image: "/portfolio/fashion-14.jpg",
    imageWidth: 1599,
    imageHeight: 2000,
    description: "Sieraden-detailshoot, gebrande studiofoto met scherpe compositie.",
  },
  {
    id: "portret-1",
    category: "portret",
    igUrl: "https://www.instagram.com/spontane_fotografie/",
    image: "/portfolio/portret-1.jpg",
    imageWidth: 1500,
    imageHeight: 2000,
    description: "Event-portret, kandidaat vastgelegd tijdens een receptiemoment.",
  },
  {
    id: "portret-2",
    category: "portret",
    igUrl: "https://www.instagram.com/spontane_fotografie/",
    image: "/portfolio/portret-2.jpg",
    imageWidth: 1500,
    imageHeight: 2000,
    description: "Detailportret van de bruidegom, rustig moment vlak voor de ceremonie.",
  },
  {
    id: "portret-3",
    category: "portret",
    igUrl: "https://www.instagram.com/spontane_fotografie/",
    image: "/portfolio/portret-3.jpg",
    imageWidth: 1500,
    imageHeight: 2000,
    description: "Traditionele folkloristische danser in kostuum, tijdens een optreden.",
  },
  {
    id: "portret-4",
    category: "portret",
    igUrl: "https://www.instagram.com/spontane_fotografie/",
    image: "/portfolio/portret-4.jpg",
    imageWidth: 1500,
    imageHeight: 2000,
    description: "Close-up van de bruid met sluier, emotioneel portret in zacht licht.",
  },
  {
    id: "portret-5",
    category: "portret",
    igUrl: "https://www.instagram.com/spontane_fotografie/",
    image: "/portfolio/portret-5.jpg",
    imageWidth: 1080,
    imageHeight: 1440,
    description: "Studioportret met kroon en decorstuk, gebrande evenementfoto.",
  },
  {
    id: "portret-6",
    category: "portret",
    igUrl: "https://www.instagram.com/spontane_fotografie/",
    image: "/portfolio/portret-6.jpg",
    imageWidth: 1500,
    imageHeight: 2000,
    description: "Studioportret, model met sluier tegen een neutrale achtergrond.",
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

// Werkwijze-copy: bewust rustig en concreet (Balance-register, zie
// NEUROMARKETING-CRO.md §1/§6). Elke stap noemt wat je krijgt en wanneer,
// als direct tegengif voor de bekende communicatie-klachten.
export const workflowSteps = [
  {
    step: "1. Kennismaking",
    text: "We bespreken datum, locatie en wensen in een rustig gesprek van ongeveer 30 minuten. Je weet na dit gesprek precies wat je van ons kunt verwachten, ook qua communicatie en planning.",
  },
  {
    step: "2. De shoot",
    text: "Op de dag zelf werken we volgens een vast tijdschema dat we vooraf met je delen, zodat er geen verrassingen zijn. Rustig tempo, duidelijke regie, altijd aanspreekbaar.",
  },
  {
    step: "3. Oplevering",
    text: "Je ontvangt een duidelijke opleverdatum bij de kennismaking, en een tussentijdse update als er onverhoopt vertraging dreigt. Geen radiostilte na de shoot.",
  },
];
