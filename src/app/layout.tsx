import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import StickyBookCta from "@/components/StickyBookCta";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://spontanefilm-fotografie.nl"),
  title: {
    default: "Spontane Fotografie — Bruiloft & Fashion Fotograaf Lelystad",
    template: "%s — Spontane Fotografie",
  },
  description:
    "Bruiloft-, fashion-, portret- en videofotografie vanuit Lelystad. 158K volgers op Instagram. Check je datum en vraag vrijblijvend een offerte aan.",
  keywords: [
    "bruidsfotograaf Lelystad",
    "fashion fotograaf",
    "trouwfotograaf Flevoland",
    "portretfotograaf",
    "videograaf bruiloft",
  ],
  openGraph: {
    title: "Spontane Fotografie — Bruiloft & Fashion Fotograaf Lelystad",
    description:
      "Bruiloft-, fashion-, portret- en videofotografie vanuit Lelystad.",
    locale: "nl_NL",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Spontane Film en Fotografie",
  image: "https://spontanefilm-fotografie.nl/og.jpg",
  telephone: "+31626795151",
  email: "info@spontanefilm-fotografie.nl",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lelystad",
    addressCountry: "NL",
  },
  areaServed: "Flevoland, Nederland",
  sameAs: ["https://www.instagram.com/spontane_fotografie/"],
  priceRange: "Prijs op aanvraag",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="nl"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ivory text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <NavBar />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyBookCta />
      </body>
    </html>
  );
}
