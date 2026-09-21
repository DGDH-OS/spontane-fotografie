"use client";

import { useReveal } from "@/lib/useReveal";

/**
 * Wrapper voor scroll-reveal. Client component omdat useReveal een hook is;
 * kinderen mogen server-rendered content blijven (children als prop).
 */
export default function Reveal({
  children,
  className = "",
  delayMs = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`sf-reveal ${visible ? "sf-reveal-visible" : ""} ${className}`}
      style={{ transitionDelay: visible ? `${delayMs}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}
