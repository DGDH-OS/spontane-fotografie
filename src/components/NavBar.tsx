import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/diensten", label: "Diensten" },
  { href: "/over-ons", label: "Over ons" },
  { href: "/contact", label: "Contact" },
];

export default function NavBar() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-ivory/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-8">
        <Link href="/" className="font-heading text-lg tracking-wide text-ink">
          Spontane Fotografie
        </Link>
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-sm text-ink/80 transition hover:text-gold"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/boeken"
          className="hidden rounded-none border border-gold px-5 py-2 text-sm uppercase tracking-widest text-ink transition hover:bg-gold hover:text-ivory md:inline-block"
        >
          Check beschikbaarheid
        </Link>
        {/* mobile: compact link naar boeken, sticky CTA vangt de rest af */}
        <Link
          href="/portfolio"
          className="text-sm text-ink/80 md:hidden"
        >
          Portfolio
        </Link>
      </nav>
    </header>
  );
}
