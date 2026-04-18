"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { whatsappUrl } from "@/content/site";

const POPUP_IMAGE =
  "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1600&q=80";

const SESSION_KEY = "exit_popup_seen";
const MOBILE_IDLE_MS = 40_000;

export function ExitPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.sessionStorage.getItem(SESSION_KEY)) return;

    const isMobile =
      window.matchMedia("(max-width: 768px)").matches ||
      /Mobi|Android/i.test(navigator.userAgent);

    const show = () => {
      if (window.sessionStorage.getItem(SESSION_KEY)) return;
      window.sessionStorage.setItem(SESSION_KEY, "1");
      setOpen(true);
    };

    let idleTimer: ReturnType<typeof setTimeout> | null = null;
    let scrolledPast = false;

    const onScroll = () => {
      const doc = document.documentElement;
      const progress =
        (doc.scrollTop + window.innerHeight) / doc.scrollHeight;
      if (progress > 0.6 && !scrolledPast) {
        scrolledPast = true;
        if (isMobile) {
          idleTimer = setTimeout(show, MOBILE_IDLE_MS);
        }
      }
    };

    const onMouseLeave = (e: MouseEvent) => {
      if (isMobile) return;
      if (e.clientY <= 0) show();
    };

    const onActivity = () => {
      if (!isMobile || !scrolledPast) return;
      if (idleTimer) {
        clearTimeout(idleTimer);
        idleTimer = setTimeout(show, MOBILE_IDLE_MS);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("touchstart", onActivity, { passive: true });
    window.addEventListener("scroll", onActivity, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("touchstart", onActivity);
      window.removeEventListener("scroll", onActivity);
      if (idleTimer) clearTimeout(idleTimer);
    };
  }, []);

  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    document.documentElement.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="exit-title"
        >
          <button
            type="button"
            aria-label="Close"
            onClick={close}
            className="absolute inset-0 bg-sea-900/70 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-xl overflow-hidden rounded-sm bg-sand-50 shadow-[0_40px_120px_-20px_rgba(6,41,58,0.6)]"
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-sand-50/80 text-ink-900 backdrop-blur transition hover:bg-white"
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

            <div className="relative aspect-[5/3] w-full bg-sand-200">
              <Image
                src={POPUP_IMAGE}
                alt="Evening walk on the beach"
                fill
                sizes="(max-width: 768px) 100vw, 560px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sea-900/40 via-transparent to-transparent" />
            </div>

            <div className="p-6 text-center sm:p-8">
              <p className="mb-3 font-sans text-[0.65rem] uppercase tracking-[0.3em] text-sea-700/70">
                Before you go —
              </p>
              <h3
                id="exit-title"
                className="font-display text-2xl font-semibold leading-tight tracking-tight text-ink-900 sm:text-3xl"
              >
                Leaving?{" "}
                <em className="italic text-sun-500">Save this view</em> for
                later.
              </h3>
              <p className="mx-auto mt-4 max-w-md font-sans text-sm leading-relaxed text-ink-600">
                A price list, floor plans, and early-bird detail — delivered
                on WhatsApp. No spam. One conversation.
              </p>

              <a
                href={whatsappUrl(undefined, "exit-popup")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={close}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-sun-500 px-6 py-3 font-sans text-xs font-medium uppercase tracking-[0.2em] text-white transition hover:bg-sun-700"
              >
                Send the price list
                <span aria-hidden>→</span>
              </a>

              <button
                type="button"
                onClick={close}
                className="mt-4 block w-full font-sans text-[0.7rem] uppercase tracking-[0.25em] text-ink-600/60 transition hover:text-ink-600"
              >
                No thanks, keep browsing
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
