"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";

const links = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/diensten", label: "Diensten" },
  { href: "/over-ons", label: "Over ons" },
  { href: "/contact", label: "Contact" },
];

const STANDARD_EASE = [0.2, 0, 0, 1] as const;

export default function NavBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);

  // Sluit het menu automatisch bij routewissel (bv. via browser-navigatie).
  // Tijdens render vergeleken i.p.v. in een effect, om cascading re-renders
  // te vermijden (react-hooks/set-state-in-effect).
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    if (open) setOpen(false);
  }

  // Body-scroll locken zolang het mobiele menu open is
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  // Esc sluit het menu
  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  function handleMobileLinkClick(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
    // korte delay zodat de klik-feedback zichtbaar is vóór navigatie (MOTION-PLAN §4b)
    e.preventDefault();
    setOpen(false);
    window.setTimeout(() => {
      window.location.href = href;
    }, 150);
  }

  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-ivory/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.svg"
            alt="Spontane Fotografie monogram"
            width={32}
            height={32}
            className="h-8 w-8"
            priority
          />
          <span className="font-heading text-lg tracking-wide text-ink">
            Spontane Fotografie
          </span>
        </Link>
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                aria-current={isActive(l.href) ? "page" : undefined}
                className={`relative text-sm transition hover:text-gold ${
                  isActive(l.href) ? "text-gold" : "text-ink/80"
                }`}
              >
                {l.label}
                <span
                  aria-hidden="true"
                  className={`absolute -bottom-1 left-0 h-px bg-gold transition-all duration-200 ease-out ${
                    isActive(l.href) ? "w-full" : "w-0"
                  }`}
                />
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

        {/* Mobiel: hamburger-icoon met morph-naar-X animatie (MOTION-PLAN §4b) */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Sluit menu" : "Open menu"}
          className="relative z-50 flex h-11 w-11 flex-col items-center justify-center gap-[5px] md:hidden"
        >
          <span
            className="block h-px w-6 bg-ink transition-transform duration-150 ease-[cubic-bezier(0.2,0,0,1)]"
            style={{
              transform: open ? "translateY(6px) rotate(45deg)" : "none",
            }}
          />
          <span
            className="block h-px w-6 bg-ink transition-opacity duration-150 ease-[cubic-bezier(0.2,0,0,1)]"
            style={{ opacity: open ? 0 : 1 }}
          />
          <span
            className="block h-px w-6 bg-ink transition-transform duration-150 ease-[cubic-bezier(0.2,0,0,1)]"
            style={{
              transform: open ? "translateY(-6px) rotate(-45deg)" : "none",
            }}
          />
        </button>
      </nav>

      {/* Full-screen menu-overlay (mobiel) */}
      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            aria-modal="true"
            role="dialog"
            aria-label="Hoofdnavigatie"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: STANDARD_EASE }}
            className="fixed inset-0 z-40 flex flex-col justify-center bg-ink px-8 text-ivory md:hidden"
          >
            <ul className="flex flex-col gap-1">
              {links.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{
                    delay: 0.05 + i * 0.06,
                    duration: 0.3,
                    ease: STANDARD_EASE,
                  }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => handleMobileLinkClick(e, link.href)}
                    aria-current={isActive(link.href) ? "page" : undefined}
                    className={`block py-3 font-heading text-4xl transition-colors ${
                      isActive(link.href) ? "text-gold" : "text-ivory"
                    }`}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{
                  delay: 0.05 + links.length * 0.06,
                  duration: 0.3,
                  ease: STANDARD_EASE,
                }}
                className="pt-6"
              >
                <a
                  href="/boeken"
                  onClick={(e) => handleMobileLinkClick(e, "/boeken")}
                  className="inline-block border border-gold px-6 py-3 text-sm uppercase tracking-widest text-gold"
                >
                  Check beschikbaarheid
                </a>
              </motion.li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
