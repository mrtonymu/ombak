"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";

type LightboxProps = {
  open: boolean;
  onClose: () => void;
  src: string;
  alt: string;
  caption?: string;
};

/**
 * Minimal image lightbox.
 * - ESC closes
 * - Backdrop click closes
 * - Locks body scroll while open
 * - Framer Motion fade + scale
 */
export function Lightbox({ open, onClose, src, alt, caption }: LightboxProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.documentElement.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          role="dialog"
          aria-modal="true"
          aria-label={alt}
        >
          <button
            type="button"
            aria-label="Close"
            onClick={onClose}
            className="absolute inset-0 bg-sea-900/85 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 flex max-h-[90vh] w-full max-w-5xl flex-col"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute -top-12 right-0 flex h-9 w-9 items-center justify-center rounded-full bg-sand-50/90 text-ink-900 backdrop-blur transition hover:bg-white sm:-right-2"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>

            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm bg-sand-50">
              <Image
                src={src}
                alt={alt}
                fill
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-contain"
                priority
              />
            </div>

            {caption && (
              <p className="mt-4 text-center font-sans text-sm text-sand-50/80">
                {caption}
              </p>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
