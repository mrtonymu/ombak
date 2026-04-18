"use client";

import Image from "next/image";
import { useState } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { Prose } from "@/components/text/Prose";
import { Lightbox } from "@/components/ui/Lightbox";
import { CompareModal } from "@/components/sections/CompareModal";
import { UNITS, whatsappUrl, type Unit } from "@/content/site";
import { cn } from "@/lib/cn";

// Asymmetric grid: A, A1, B share row 1 (2 cols each of 6), C & D share row 2 (3 cols each)
function spanFor(id: string): string {
  if (id === "type-c" || id === "type-d") return "lg:col-span-3";
  return "lg:col-span-2";
}

export function Product() {
  const [lightboxUnit, setLightboxUnit] = useState<Unit | null>(null);
  const [compareOpen, setCompareOpen] = useState(false);

  return (
    <section
      id="residences"
      aria-label="Residences — five unit types and floor plans"
      className="relative w-full bg-sand-100 py-24 sm:py-32 md:py-40"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <Reveal
            as="p"
            className="mb-6 font-sans text-[0.7rem] font-medium uppercase tracking-[0.35em] text-sea-700/70"
          >
            03 · Choose your investment
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="font-display text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.01em] text-ink-900 sm:text-5xl md:text-6xl">
              Five ways to own{" "}
              <em className="italic text-sun-500">the same sunrise</em>.
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <Prose
              className="mx-auto mt-6 max-w-xl text-pretty font-sans text-base leading-relaxed text-ink-600 sm:text-lg"
              sentenceClassName="block mt-1 first:mt-0"
            >
              {
                "All units handed over fully furnished, short-stay ready. Dual-key layouts let you occupy one half and rent the other — a home and an asset in a single deed."
              }
            </Prose>
          </Reveal>
        </div>

        {/* Unit cards — asymmetric 6-col grid on lg: row 1 three cards, row 2 two wider cards */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:mt-20 md:grid-cols-2 md:gap-8 lg:grid-cols-6">
          {UNITS.map((u, i) => (
            <Reveal
              key={u.id}
              delay={0.06 + i * 0.08}
              className={spanFor(u.id)}
            >
              <UnitCard unit={u} onViewPlan={() => setLightboxUnit(u)} />
            </Reveal>
          ))}
        </div>

        {/* Section-level CTA */}
        <Reveal delay={0.2}>
          <div className="mt-14 flex flex-col items-center gap-4 text-center md:mt-16">
            <p className="mx-auto max-w-xl font-sans text-sm uppercase tracking-[0.25em] text-ink-600/70">
              All SPA prices stated · Fully furnished handover · Launch package
              shared privately
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <button
                type="button"
                onClick={() => setCompareOpen(true)}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-ink-900/20 bg-white px-7 py-3.5 font-sans text-xs font-medium uppercase tracking-[0.22em] text-ink-900 transition-all duration-300 hover:border-ink-900 hover:bg-ink-900 hover:text-sand-50"
              >
                <CompareIcon />
                Compare all 5 units
              </button>
              <a
                href={whatsappUrl(
                  "Hi, could you send me the full unit comparison chart with pricing and availability?",
                  "product-bottom-cta"
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-sea-700 px-7 py-3.5 font-sans text-xs font-medium uppercase tracking-[0.22em] text-sand-50 transition-all duration-300 hover:bg-sea-900"
              >
                Get full comparison chart
                <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>

      <Lightbox
        open={lightboxUnit !== null}
        onClose={() => setLightboxUnit(null)}
        src={lightboxUnit?.floorPlan ?? ""}
        alt={lightboxUnit?.floorPlanAlt ?? ""}
        caption={
          lightboxUnit
            ? `${lightboxUnit.code} · ${lightboxUnit.name} · ${lightboxUnit.sqft} · ${lightboxUnit.beds}`
            : undefined
        }
      />

      <CompareModal
        open={compareOpen}
        onClose={() => setCompareOpen(false)}
      />
    </section>
  );
}

function UnitCard({
  unit: u,
  onViewPlan,
}: {
  unit: Unit;
  onViewPlan: () => void;
}) {
  const [blurbOpen, setBlurbOpen] = useState(false);

  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-sm border bg-white shadow-[0_1px_0_rgba(194,169,122,0.2)] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-[0_24px_60px_-20px_rgba(14,74,92,0.25)]",
        u.badge === "Most Popular"
          ? "border-sun-500/60"
          : u.badge === "Limited"
            ? "border-sea-700/40"
            : "border-sand-200/70"
      )}
    >
      {/* Full-width top banner for featured units */}
      {u.badge && (
        <div
          className={cn(
            "flex items-center justify-center gap-2 py-2 font-sans text-[0.6rem] font-medium uppercase tracking-[0.3em] text-white",
            u.badge === "Most Popular" ? "bg-sun-500" : "bg-sea-700"
          )}
        >
          {u.badge === "Most Popular" ? (
            <>
              <StarIcon />
              Dual-Key · Most Popular
            </>
          ) : (
            <>
              <LimitedIcon />
              {u.badge}
            </>
          )}
        </div>
      )}

      {/* Meta + price */}
      <header className="flex items-start justify-between gap-3 px-6 pb-2 pt-6">
        <div className="min-w-0 flex-1">
          <p className="font-sans text-[0.6rem] uppercase tracking-[0.3em] text-ink-600/70">
            {u.code}
          </p>
          <h3 className="mt-1 font-display text-2xl font-semibold leading-tight tracking-tight text-ink-900">
            {u.name}
          </h3>
          <p className="mt-1 font-sans text-xs uppercase tracking-[0.22em] text-ink-600">
            {u.sqft} · {u.beds}
          </p>
        </div>

        <BlurbTooltip
          blurb={u.blurb}
          open={blurbOpen}
          setOpen={setBlurbOpen}
        />
      </header>

      {/* Price block — with sun-500 underline accent */}
      <div className="px-6 pt-4">
        <div className="inline-flex flex-col">
          <div className="font-display text-4xl font-semibold leading-none tracking-tight text-sea-700">
            {u.price}
          </div>
          <div className="mt-2 h-[2px] w-12 rounded-full bg-gradient-to-r from-sun-500/80 to-sun-500/0" />
        </div>
        <div className="mt-2 font-sans text-[0.65rem] uppercase tracking-[0.22em] text-ink-600/70">
          {u.priceNote}
        </div>
      </div>

      {/* Feature bullets — 4 items, 2-col grid */}
      <ul className="mt-5 grid grid-cols-2 gap-x-3 gap-y-2 border-t border-sand-200/70 px-6 pt-4">
        {u.features.map((f) => (
          <li
            key={f}
            className="flex items-start gap-2 font-sans text-xs leading-snug text-ink-900"
          >
            <CheckIcon />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      {/* Floor plan thumbnail — click to open lightbox · always-visible enlarge badge */}
      <button
        type="button"
        onClick={onViewPlan}
        aria-label={`View full ${u.name} floor plan`}
        className="group/plan relative mt-5 block w-full overflow-hidden bg-sand-50"
      >
        <div className="relative aspect-square w-full">
          <Image
            src={u.floorPlan}
            alt={u.floorPlanAlt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-contain p-4 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/plan:scale-[1.03]"
          />
          {/* Always-visible corner badge (not just hover) */}
          <span
            aria-hidden
            className="pointer-events-none absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-ink-900/85 text-sand-50 backdrop-blur transition-transform duration-300 group-hover/plan:scale-110"
          >
            <ExpandIcon />
          </span>
        </div>
      </button>

      {/* Best for + ROI — merged single row */}
      <div className="flex items-baseline justify-between gap-3 border-t border-sand-200/70 px-6 py-4">
        <p className="font-sans text-xs text-ink-900">
          <span className="mr-2 text-sun-500" aria-hidden>◆</span>
          <span className="font-medium">{u.bestFor}</span>
        </p>
        <a
          href={`#roi-${u.id}`}
          className="group/roi inline-flex items-baseline gap-1.5 whitespace-nowrap"
          aria-label={`See ROI breakdown for ${u.name}`}
        >
          <span className="font-display text-lg font-semibold text-sun-700 transition-colors group-hover/roi:text-sun-500">
            {u.roi}
          </span>
          <span className="font-sans text-[0.6rem] uppercase tracking-[0.22em] text-ink-600/70 transition-colors group-hover/roi:text-sun-500">
            ROI ↓
          </span>
        </a>
      </div>

      {/* CTA */}
      <a
        href={whatsappUrl(
          `Hi, I'd like more details and the price list for ${u.name} (${u.code}, ${u.sqft}).`,
          `unit-${u.id}`
        )}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "m-6 mt-0 inline-flex items-center justify-between rounded-full px-5 py-3 font-sans text-[0.65rem] font-medium uppercase tracking-[0.22em] transition-all duration-300",
          u.badge === "Most Popular"
            ? "bg-sun-500 text-white hover:bg-sun-700"
            : "border border-ink-900/20 bg-sand-50 text-ink-900 hover:border-sun-500 hover:bg-sun-500 hover:text-white"
        )}
      >
        <span>Get price list</span>
        <span aria-hidden>→</span>
      </a>
    </article>
  );
}

function BlurbTooltip({
  blurb,
  open,
  setOpen,
}: {
  blurb: string;
  open: boolean;
  setOpen: (v: boolean) => void;
}) {
  return (
    <div className="relative shrink-0">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        aria-label="Show unit description"
        className="flex h-6 w-6 items-center justify-center rounded-full border border-sand-300/70 text-ink-600 transition hover:border-sun-500 hover:text-sun-500"
      >
        <svg
          width="11"
          height="11"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 16v-4M12 8h.01" />
        </svg>
      </button>
      {open && (
        <div
          role="tooltip"
          className="absolute right-0 top-8 z-20 w-52 rounded-sm border border-sand-300/70 bg-white p-3 font-display text-sm italic leading-relaxed text-ink-900 shadow-[0_12px_30px_-10px_rgba(14,74,92,0.25)]"
        >
          {blurb}
        </div>
      )}
    </div>
  );
}

function CheckIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mt-[2px] shrink-0 text-sun-500"
      aria-hidden="true"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2l2.39 7.36H22l-6.2 4.5L18.18 22 12 17.5 5.82 22l2.38-8.14L2 9.36h7.61z" />
    </svg>
  );
}

function LimitedIcon() {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

function ExpandIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M3 9V3h6M21 9V3h-6M3 15v6h6M21 15v6h-6" />
    </svg>
  );
}

function CompareIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="5" width="7" height="14" rx="1" />
      <rect x="14" y="5" width="7" height="14" rx="1" />
      <path d="M10 10h4M10 14h4" />
    </svg>
  );
}
