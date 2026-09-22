"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/diensten", label: "Diensten" },
  { href: "/over-ons", label: "Over ons" },
  { href: "/contact", label: "Contact" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);

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
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Sluit menu" : "Open menu"}
          className="flex h-10 w-10 items-center justify-center text-ink md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            className="h-6 w-6"
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>
      {open && (
        <div className="border-t border-line/70 bg-ivory md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-sm text-ink/80 transition hover:text-gold"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="/boeken"
                onClick={() => setOpen(false)}
                className="block rounded-none border border-gold px-5 py-2 text-center text-sm uppercase tracking-widest text-ink transition hover:bg-gold hover:text-ivory"
              >
                Check beschikbaarheid
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
