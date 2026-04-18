"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import { UNITS, whatsappUrl } from "@/content/site";
import { cn } from "@/lib/cn";

type Props = {
  open: boolean;
  onClose: () => void;
};

const COLUMNS: Array<{
  label: string;
  render: (u: (typeof UNITS)[number]) => React.ReactNode;
  accent?: boolean;
}> = [
  { label: "Unit", render: (u) => u.code },
  { label: "Name", render: (u) => u.name },
  { label: "Size", render: (u) => u.sqft },
  { label: "Layout", render: (u) => u.beds },
  { label: "Price", render: (u) => u.price, accent: true },
  { label: "Est. ROI", render: (u) => u.roi, accent: true },
  { label: "Dual-Key", render: (u) => (u.dualKey ? "✓" : "—") },
  { label: "Best for", render: (u) => u.bestFor },
];

export function CompareModal({ open, onClose }: Props) {
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
          className="fixed inset-0 z-[70] flex items-center justify-center p-3 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          role="dialog"
          aria-modal="true"
          aria-label="Compare all five unit types"
        >
          <button
            type="button"
            aria-label="Close"
            onClick={onClose}
            className="absolute inset-0 bg-sea-900/80 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 flex max-h-[92vh] w-full max-w-6xl flex-col overflow-hidden rounded-sm bg-sand-50 shadow-[0_40px_120px_-20px_rgba(6,41,58,0.6)]"
          >
            <header className="flex items-center justify-between gap-4 border-b border-sand-200/70 px-5 py-4 sm:px-7 sm:py-5">
              <div>
                <p className="font-sans text-[0.6rem] uppercase tracking-[0.3em] text-sea-700/70">
                  03 · Side-by-side
                </p>
                <h3 className="mt-1 font-display text-xl font-semibold tracking-tight text-ink-900 sm:text-2xl">
                  Compare all <em className="italic text-sun-500">five units</em>.
                </h3>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close comparison"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-sand-300/70 text-ink-900 transition hover:bg-ink-900 hover:text-sand-50"
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
            </header>

            <div className="flex-1 overflow-auto">
              <table className="w-full min-w-[720px] border-collapse font-sans text-sm">
                <thead className="sticky top-0 z-10 bg-sand-100">
                  <tr>
                    <th className="sticky left-0 z-10 border-b border-r border-sand-200/70 bg-sand-100 px-5 py-4 text-left text-[0.6rem] font-medium uppercase tracking-[0.25em] text-ink-600">
                      Attribute
                    </th>
                    {UNITS.map((u) => (
                      <th
                        key={u.id}
                        className={cn(
                          "border-b border-sand-200/70 px-4 py-4 text-left text-[0.6rem] font-medium uppercase tracking-[0.25em]",
                          u.badge === "Most Popular"
                            ? "bg-sun-500/10 text-sun-700"
                            : u.badge === "Limited"
                              ? "bg-sea-700/10 text-sea-700"
                              : "text-ink-600"
                        )}
                      >
                        <div className="flex flex-col gap-2">
                          {/* Floor plan thumb */}
                          <div className="relative h-16 w-full overflow-hidden rounded-sm bg-sand-50">
                            <Image
                              src={u.floorPlan}
                              alt={`${u.code} floor plan thumbnail`}
                              fill
                              sizes="120px"
                              className="object-contain p-1.5"
                            />
                          </div>
                          <span>{u.code}</span>
                          {u.badge && (
                            <span
                              className={cn(
                                "inline-block w-fit rounded-full px-2 py-0.5 text-[0.5rem] font-medium uppercase tracking-[0.25em] text-white",
                                u.badge === "Most Popular"
                                  ? "bg-sun-500"
                                  : "bg-sea-700"
                              )}
                            >
                              {u.badge}
                            </span>
                          )}
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {COLUMNS.map((col) => (
                    <tr
                      key={col.label}
                      className="border-b border-sand-200/70 last:border-0"
                    >
                      <th
                        scope="row"
                        className="sticky left-0 z-10 border-r border-sand-200/70 bg-sand-50 px-5 py-4 text-left font-sans text-[0.6rem] uppercase tracking-[0.22em] text-ink-600"
                      >
                        {col.label}
                      </th>
                      {UNITS.map((u) => (
                        <td
                          key={u.id}
                          className={cn(
                            "px-5 py-4",
                            col.accent
                              ? "font-display text-base font-semibold text-sea-700"
                              : "text-ink-900",
                            u.badge === "Most Popular" && "bg-sun-500/5",
                            u.badge === "Limited" && "bg-sea-700/5"
                          )}
                        >
                          {col.render(u)}
                        </td>
                      ))}
                    </tr>
                  ))}
                  {/* Per-unit CTA row */}
                  <tr>
                    <th
                      scope="row"
                      className="sticky left-0 z-10 border-r border-sand-200/70 bg-sand-50 px-5 py-4 text-left font-sans text-[0.6rem] uppercase tracking-[0.22em] text-ink-600"
                    >
                      Enquire
                    </th>
                    {UNITS.map((u) => (
                      <td
                        key={u.id}
                        className={cn(
                          "px-5 py-4",
                          u.badge === "Most Popular" && "bg-sun-500/5",
                          u.badge === "Limited" && "bg-sea-700/5"
                        )}
                      >
                        <a
                          href={whatsappUrl(
                            `Hi, I'd like the full price list for ${u.name} (${u.code}).`,
                            `compare-${u.id}`
                          )}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={cn(
                            "inline-flex items-center gap-1 rounded-full px-4 py-2 font-sans text-[0.6rem] font-medium uppercase tracking-[0.2em] transition-colors",
                            u.badge === "Most Popular"
                              ? "bg-sun-500 text-white hover:bg-sun-700"
                              : "border border-ink-900/20 bg-white text-ink-900 hover:border-sun-500 hover:bg-sun-500 hover:text-white"
                          )}
                        >
                          {u.code} <span aria-hidden>→</span>
                        </a>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>

            <footer className="border-t border-sand-200/70 px-5 py-4 text-center sm:px-7">
              <p className="font-sans text-[0.65rem] uppercase tracking-[0.25em] text-ink-600/70">
                Swipe sideways on mobile to compare · Tap a unit code to
                message us
              </p>
            </footer>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
