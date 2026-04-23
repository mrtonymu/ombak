"use client";

import { Fragment, useState, useRef, useEffect } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { UNITS, ROI_TABLE, ROI_FOOTNOTE, whatsappUrl } from "@/content/site";
import { cn } from "@/lib/cn";

const UNIT_STORIES: Record<string, string> = {
  "type-a":
    "RM 1,392 a month. Your electricity, your groceries, your weekend — covered by a studio facing the garden.",
  "type-a1":
    "RM 1,828. The sea view faces east. The returns face your bank account.",
  "type-b":
    "One key stays yours. The other pays RM 2,883 every month — car instalment, school fees, and still change.",
  "type-c":
    "Three bedrooms. Two income streams. RM 3,003 arrives before you even think about checking in.",
  "type-d":
    "The jacuzzi is yours. The RM 4,269 monthly cashflow is your family's.",
};

const MECHANISM_STEPS = [
  {
    title: "Guest books online",
    sub: "Airbnb · Booking.com · direct",
    icon: <BookingIcon />,
  },
  {
    title: "Operator manages",
    sub: "turnovers, guests, reviews",
    icon: <BuildingIcon />,
  },
  {
    title: "You receive 70%",
    sub: "of gross · credited monthly",
    icon: <TransferIcon />,
  },
] as const;

function useCountUp(target: number, enabled: boolean, duration = 1200) {
  const [value, setValue] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!enabled) {
      setValue(0);
      return;
    }
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    setValue(0);
    let startTime: number | null = null;

    const animate = (ts: number) => {
      if (!startTime) startTime = ts;
      const elapsed = ts - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [target, enabled, duration]);

  return value;
}

export function ROI() {
  const [selectedId, setSelectedId] = useState("type-b");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const selectedRow = ROI_TABLE.find((r) => r.id === selectedId)!;
  const cashflowNum = parseInt(
    selectedRow.cashflow.replace(/[^0-9]/g, ""),
    10
  );
  const animatedValue = useCountUp(cashflowNum, isVisible);

  return (
    <section
      ref={sectionRef}
      id="roi"
      aria-label="Investment returns"
      className="relative w-full overflow-hidden bg-sea-900 py-24 text-sand-50 sm:py-32 md:py-40"
    >
      <div
        aria-hidden
        className="roi-glow pointer-events-none absolute inset-0 opacity-60"
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <Reveal
            as="p"
            className="mb-6 font-sans text-[0.7rem] font-medium uppercase tracking-[0.35em] text-sand-50/60"
          >
            04 · The numbers do the talking
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="font-display text-balance text-4xl font-semibold leading-[1.08] tracking-[-0.015em] text-sand-50 sm:text-5xl lg:text-6xl [text-shadow:0_2px_20px_rgba(6,41,58,0.5)]">
              <span className="block">You own the deed.</span>
              <em className="mt-1 inline-block font-semibold italic text-white underline decoration-sun-300/75 decoration-2 underline-offset-8">
                The beach sends the cheque.
              </em>
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-pretty font-sans text-base leading-relaxed text-sand-50/75 sm:text-lg">
              The operator fields the midnight texts, flips the beds, chases the
              reviews. You see one thing: a deposit notification — from a beach
              on the South China Sea.
            </p>
          </Reveal>
        </div>

        {/* Passive income mechanism strip */}
        <Reveal delay={0.25}>
          <div className="mt-10 flex flex-wrap items-start justify-center gap-y-6 md:mt-12 md:gap-y-0">
            {MECHANISM_STEPS.map((step, i) => (
              <Fragment key={step.title}>
                <div className="flex flex-col items-center gap-2.5 px-6 text-center sm:px-8 md:px-10">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-sand-50/20 bg-sand-50/10 text-sand-50/75">
                    {step.icon}
                  </div>
                  <p className="font-sans text-xs font-semibold text-sand-50/90">
                    {step.title}
                  </p>
                  <p className="font-sans text-[0.6rem] leading-snug text-sand-50/40">
                    {step.sub}
                  </p>
                </div>
                {i < MECHANISM_STEPS.length - 1 && (
                  <span
                    aria-hidden
                    className="hidden self-start pt-4 text-sand-50/20 md:inline"
                  >
                    ——
                  </span>
                )}
              </Fragment>
            ))}
          </div>
        </Reveal>

        {/* Divider */}
        <div
          aria-hidden
          className="mx-auto mt-10 h-px w-24 bg-linear-to-r from-transparent via-sand-50/20 to-transparent md:mt-12"
        />

        {/* Unit Switcher */}
        <Reveal delay={0.25}>
          <div
            className="mt-10 flex flex-wrap justify-center gap-2 md:mt-12"
            role="group"
            aria-label="Select a unit type"
          >
            {UNITS.map((u) => (
              <button
                key={u.id}
                type="button"
                onClick={() => setSelectedId(u.id)}
                aria-pressed={selectedId === u.id}
                className={cn(
                  "rounded-full px-5 py-2.5 font-sans text-[0.65rem] font-medium uppercase tracking-[0.22em] transition-all duration-300",
                  selectedId === u.id
                    ? "bg-sun-500 text-white shadow-[0_4px_20px_rgba(228,122,60,0.35)]"
                    : "border border-sand-50/25 text-sand-50/60 hover:border-sand-50/50 hover:text-sand-50/90"
                )}
              >
                {u.code}
                {u.badge === "Most Popular" && (
                  <span className="ml-1.5 opacity-80" aria-hidden>
                    ★
                  </span>
                )}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Hero Stat — count-up on scroll */}
        <div className="mt-12 flex min-h-50 flex-col items-center text-center md:mt-16">
          <div className="flex items-start gap-1" aria-live="polite">
            <span className="mt-4 font-sans text-2xl font-medium text-sun-300/70 sm:text-3xl">
              RM
            </span>
            <span className="font-display text-8xl font-semibold leading-none tracking-tight text-sun-300 [text-shadow:0_4px_40px_rgba(228,178,60,0.35)] sm:text-9xl">
              {animatedValue.toLocaleString()}
            </span>
          </div>
          <p className="mt-3 font-sans text-xs uppercase tracking-[0.28em] text-sand-50/45">
            / month · est. cashflow
          </p>
          {/* Breakdown hint — makes the math traceable */}
          <p
            key={`hint-${selectedId}`}
            className="mt-2 font-sans text-[0.62rem] uppercase tracking-[0.2em] text-sand-50/30 [animation:fadeup_0.4s_cubic-bezier(0.22,1,0.36,1)]"
          >
            {selectedRow.nightly} / night · {selectedRow.occupancy} occupancy ·
            70 / 30 split
          </p>
          <p
            key={selectedId}
            className="mx-auto mt-6 max-w-sm font-display text-lg italic leading-relaxed text-sand-50/80 sm:text-xl [animation:fadeup_0.45s_cubic-bezier(0.22,1,0.36,1)]"
          >
            {UNIT_STORIES[selectedId]}
          </p>
        </div>

        {/* Desktop table — 5 columns, selected row highlighted */}
        <Reveal delay={0.15}>
          <div className="mt-14 hidden overflow-hidden rounded-sm border border-sand-50/15 md:mt-20 md:block">
            <table className="w-full border-collapse font-sans text-sm">
              <thead>
                <tr className="bg-sea-900/40 text-left text-[0.6rem] font-medium uppercase tracking-[0.25em] text-sand-50/55">
                  <th className="px-5 py-4">Unit type</th>
                  <th className="px-5 py-4">Entry price</th>
                  <th className="px-5 py-4">Est. nightly</th>
                  <th className="px-5 py-4">Annual ROI</th>
                  <th className="px-5 py-4">Est. monthly cashflow*</th>
                </tr>
              </thead>
              <tbody>
                {ROI_TABLE.map((row) => (
                  <tr
                    key={row.unit}
                    id={`roi-${row.id}`}
                    onClick={() => setSelectedId(row.id)}
                    className={cn(
                      "cursor-pointer border-t border-sand-50/10 transition-all duration-300 scroll-mt-28",
                      selectedId === row.id
                        ? "border-l-2 border-l-sun-500 bg-sun-500/15"
                        : "hover:bg-sea-900/30"
                    )}
                  >
                    <td className="px-5 py-5 font-display text-base font-semibold text-sand-50">
                      {row.unit}
                    </td>
                    <td className="px-5 py-5 font-display text-base font-semibold text-white">
                      {row.price}
                    </td>
                    <td className="px-5 py-5 font-sans text-sm text-sand-50/70">
                      {row.nightly}
                    </td>
                    <td className="px-5 py-5 font-display text-base font-semibold text-sun-300">
                      {row.roi}
                    </td>
                    <td className="px-5 py-5 font-display text-base font-semibold text-sun-300">
                      {row.cashflow}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        {/* Mobile — single card for selected unit */}
        <div className="mt-12 md:hidden">
          {ROI_TABLE.filter((r) => r.id === selectedId).map((row) => (
            <div
              key={row.id}
              className="rounded-sm border border-sun-500/40 bg-sun-500/10 p-5 backdrop-blur-sm"
            >
              <div className="mb-3 border-b border-sand-50/10 pb-3 font-display text-lg font-semibold text-sand-50">
                {row.unit}
              </div>
              <dl className="grid grid-cols-2 gap-x-4 gap-y-3 font-sans text-sm">
                <div>
                  <dt className="text-[0.55rem] uppercase tracking-[0.25em] text-sand-50/50">
                    Entry
                  </dt>
                  <dd className="font-display text-base font-semibold text-white">
                    {row.price}
                  </dd>
                </div>
                <div>
                  <dt className="text-[0.55rem] uppercase tracking-[0.25em] text-sand-50/50">
                    Est. nightly
                  </dt>
                  <dd className="text-sand-50/85">{row.nightly}</dd>
                </div>
                <div>
                  <dt className="text-[0.55rem] uppercase tracking-[0.25em] text-sand-50/50">
                    Annual ROI
                  </dt>
                  <dd className="font-display text-base font-semibold text-sun-300">
                    {row.roi}
                  </dd>
                </div>
                <div className="col-span-2 border-t border-sand-50/10 pt-3">
                  <dt className="text-[0.55rem] uppercase tracking-[0.25em] text-sand-50/50">
                    Est. monthly cashflow*
                  </dt>
                  <dd className="font-display text-xl font-semibold text-sun-300">
                    {row.cashflow}
                  </dd>
                </div>
              </dl>
            </div>
          ))}
        </div>

        {/* Footnote */}
        <Reveal delay={0.2}>
          <p className="mt-6 text-center font-sans text-[0.65rem] leading-relaxed text-sand-50/45 md:text-xs">
            * {ROI_FOOTNOTE}
          </p>
        </Reveal>

        {/* Dual CTA */}
        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
            <a
              href={whatsappUrl(
                "Hi, I'd like the full ROI breakdown and cashflow model.",
                "roi-section"
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-sun-500 px-7 py-3.5 font-sans text-xs font-medium uppercase tracking-[0.22em] text-white transition-all duration-300 hover:bg-sun-700"
            >
              WhatsApp for full ROI breakdown
              <span aria-hidden>→</span>
            </a>
            <a
              href="#trust"
              className="inline-flex items-center gap-2 rounded-full border border-sand-50/30 bg-sand-50/5 px-7 py-3.5 font-sans text-xs font-medium uppercase tracking-[0.22em] text-sand-50 backdrop-blur-sm transition-all duration-300 hover:border-sand-50/60 hover:bg-sand-50/10"
            >
              See who&apos;s already in
              <span aria-hidden>↓</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function BookingIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 21h18M5 21V7l7-4 7 4v14" />
      <path d="M9 21v-6h6v6" />
      <path d="M9 11h.01M12 11h.01M15 11h.01M9 15h.01M15 15h.01" />
    </svg>
  );
}

function TransferIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  );
}
