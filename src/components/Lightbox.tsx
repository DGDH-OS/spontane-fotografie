"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { categoryLabels, type PortfolioItem } from "@/lib/content";
import ArrowIcon from "./ArrowIcon";

const STANDARD_EASE = [0.2, 0, 0, 1] as const;

export default function Lightbox({
  item,
  onClose,
  onPrev,
  onNext,
}: {
  item: PortfolioItem | null;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
}) {
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  // Body-scroll locken zolang de lightbox open is
  useEffect(() => {
    if (item) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      closeBtnRef.current?.focus();
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [item]);

  // Esc sluit, pijltjestoetsen navigeren tussen foto's
  useEffect(() => {
    if (!item) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev?.();
      if (e.key === "ArrowRight") onNext?.();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [item, onClose, onPrev, onNext]);

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: STANDARD_EASE }}
          role="dialog"
          aria-modal="true"
          aria-label={item.description}
          onClick={onClose}
        >
          <button
            ref={closeBtnRef}
            type="button"
            onClick={onClose}
            aria-label="Sluit"
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center text-3xl leading-none text-ivory/90 transition hover:text-gold"
          >
            ×
          </button>

          {onPrev && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onPrev();
              }}
              aria-label="Vorige foto"
              className="absolute left-1 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center text-2xl text-ivory/80 transition hover:text-gold md:left-4"
            >
              ‹
            </button>
          )}
          {onNext && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onNext();
              }}
              aria-label="Volgende foto"
              className="absolute right-1 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center text-2xl text-ivory/80 transition hover:text-gold md:right-4"
            >
              ›
            </button>
          )}

          <motion.div
            className="flex max-h-[90vh] w-full max-w-4xl flex-col items-center gap-4 px-6"
            initial={{ scale: 0.94, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            transition={{ duration: 0.4, ease: STANDARD_EASE }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative max-h-[75vh] w-full">
              <Image
                src={item.image}
                alt={item.description}
                width={item.imageWidth}
                height={item.imageHeight}
                className="mx-auto max-h-[75vh] w-auto max-w-full object-contain"
                sizes="90vw"
                priority
              />
            </div>
            <div className="flex flex-col items-center gap-2 text-center">
              <span className="sf-eyebrow text-gold-soft">
                {categoryLabels[item.category]}
              </span>
              <p className="max-w-xl font-heading text-lg text-ivory md:text-xl">
                {item.description}
              </p>
              <a
                href={item.igUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 flex items-center gap-1.5 text-xs uppercase tracking-widest text-ivory/70 transition hover:text-gold"
              >
                Bekijk op Instagram <ArrowIcon />
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
