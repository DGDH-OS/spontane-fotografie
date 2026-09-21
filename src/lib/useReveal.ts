"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Lichte, eigen scroll-reveal hook (geen GSAP-licentie nodig voor dit budget).
 * Respecteert prefers-reduced-motion via CSS (zie .sf-reveal in globals.css),
 * triggert eenmalig bij ~20% zichtbaarheid, nooit opnieuw bij terug-scrollen.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}
