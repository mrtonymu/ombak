"use client";

import { useState, useRef, useEffect } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { SITE, whatsappUrl } from "@/content/site";

function useCountUp(
  target: number,
  enabled: boolean,
  duration = 1400,
  startDelay = 0
) {
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
      const elapsed = Math.max(0, ts - startTime - startDelay);
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [target, enabled, duration, startDelay]);

  return value;
}

function parseStatValue(val: string): { num: number; suffix: string } {
  const cleaned = val.replace(/,/g, "");
  const m = cleaned.match(/^(\d+)(.*)$/);
  if (!m) return { num: 0, suffix: val };
  return { num: parseInt(m[1], 10), suffix: m[2] };
}

function parseGainPercent(gain: string): number {
  return parseFloat(gain.replace(/[^0-9.]/g, "")) || 0;
}

function GainBar({
  percent,
  enabled,
}: {
  percent: number;
  enabled: boolean;
}) {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = barRef.current;
    if (!el) return;
    if (enabled) {
      requestAnimationFrame(() => {
        el.style.width = `${percent}%`;
      });
    } else {
      el.style.width = "0%";
    }
  }, [enabled, percent]);

  return (
    <div className="h-1.5 w-full overflow-hidden rounded-full bg-sand-200/80">
      <div
        ref={barRef}
        className="h-full w-0 rounded-full bg-linear-to-r from-sun-500 to-sun-300 [transition:width_1.1s_cubic-bezier(0.22,1,0.36,1)]"
      />
    </div>
  );
}

// Derive the cash gain from SPA and subsale strings like "RM 320K", "RM 1.05M"
function parsePriceMYR(price: string): number {
  const cleaned = price.replace(/^RM\s*/i, "").trim();
  const m = cleaned.match(/^([\d.]+)([KMkm]?)$/);
  if (!m) return NaN;
  const num = parseFloat(m[1]);
  const suffix = m[2].toUpperCase();
  if (suffix === "M") return Math.round(num * 1_000_000);
  if (suffix === "K") return Math.round(num * 1_000);
  return num;
}

function formatCashGain(spa: string, subsale: string): string {
  const gain = parsePriceMYR(subsale) - parsePriceMYR(spa);
  if (gain >= 1_000_000) return `+RM ${(gain / 1_000_000).toFixed(2)}M`;
  if (gain >= 1_000) return `+RM ${Math.round(gain / 1_000)}K`;
  return `+RM ${gain}`;
}

function StatCard({
  stat,
  enabled,
  startDelay,
}: {
  stat: { value: string; label: string };
  enabled: boolean;
  startDelay: number;
}) {
  const { num, suffix } = parseStatValue(stat.value);
  const animated = useCountUp(num, enabled, 1400, startDelay);

  return (
    <div className="border-t-2 border-sun-500/50 pt-6 text-center md:text-left">
      <p
        className="font-display text-5xl font-semibold leading-none tracking-tight text-sea-700 sm:text-6xl lg:text-7xl"
        aria-live="polite"
      >
        {animated.toLocaleString()}
        {suffix}
      </p>
      <p className="mt-3 font-sans text-[0.7rem] font-medium uppercase tracking-[0.22em] text-ink-600/80">
        {stat.label}
      </p>
    </div>
  );
}

const BADGES = [
  "Bursa-listed Developer",
  "HDA-protected Buyers",
  "GreenRE Silver Certified",
  "Freehold Land Title",
] as const;

export function Trust() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const maxGain = Math.max(
    ...SITE.trust.subsale.map((r) => parseGainPercent(r.gain))
  );

  return (
    <section
      ref={sectionRef}
      id="trust"
      aria-label="Track record"
      className="relative w-full bg-sand-50 py-24 sm:py-32 md:py-40"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <Reveal
            as="p"
            className="mb-6 font-sans text-[0.7rem] font-medium uppercase tracking-[0.35em] text-sea-700/70"
          >
            {SITE.trust.eyebrow}
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="font-display text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.01em] text-ink-900 sm:text-5xl md:text-6xl">
              A track record{" "}
              <em className="italic text-sun-500">
                the market has already priced
              </em>
              .
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-pretty font-sans text-base leading-relaxed text-ink-600 sm:text-lg">
              {SITE.trust.lead}
            </p>
          </Reveal>
        </div>

        {/* Developer credential badges */}
        <Reveal delay={0.25}>
          <div className="mt-10 flex flex-wrap justify-center gap-2 md:mt-12">
            {BADGES.map((label) => (
              <span
                key={label}
                className="rounded-full border border-sea-700/20 bg-white px-4 py-2 font-sans text-[0.62rem] font-medium uppercase tracking-[0.22em] text-sea-700/80 shadow-[0_1px_6px_rgba(14,74,92,0.07)]"
              >
                {label}
              </span>
            ))}
          </div>
        </Reveal>

        {/* Animated stats row */}
        <div className="mt-14 grid grid-cols-1 gap-10 md:mt-16 md:grid-cols-3 lg:gap-16">
          {SITE.trust.stats.map((s, i) => (
            <Reveal key={s.label} delay={0.08 + i * 0.08}>
              <StatCard stat={s} enabled={isVisible} startDelay={i * 180} />
            </Reveal>
          ))}
        </div>

        {/* Subsale evidence card */}
        <Reveal delay={0.15}>
          <div className="mt-16 overflow-hidden rounded-sm border border-sand-200/60 bg-white shadow-[0_4px_40px_-12px_rgba(14,74,92,0.12)] md:mt-20">
            {/* Card header */}
            <div className="border-b border-sand-100 px-6 py-6 md:px-8">
              <p className="font-sans text-[0.65rem] font-medium uppercase tracking-[0.3em] text-sea-700/60">
                Earlier-phase subsale performance
              </p>
              <h3 className="mt-2 font-display text-xl font-semibold tracking-tight text-ink-900 md:text-2xl">
                Buyers of prior phases are already holding{" "}
                <em className="italic text-sun-500">paper gains</em>.
              </h3>
              <p className="mt-1 font-sans text-sm text-ink-600/70">
                Translate the percentages: early buyers are sitting on RM 29K
                to RM 75K in unrealised gains.
              </p>
            </div>

            {/* Desktop table */}
            <div className="hidden md:block">
              <table className="w-full border-collapse font-sans text-sm">
                <thead>
                  <tr className="bg-sand-50/60 text-left text-[0.6rem] font-medium uppercase tracking-[0.25em] text-ink-500">
                    <th className="px-8 py-4">Unit size</th>
                    <th className="px-8 py-4">Developer SPA</th>
                    <th className="px-8 py-4">Recent subsale</th>
                    <th className="px-8 py-4">Cash gain</th>
                    <th className="px-8 py-4 text-right">% gain</th>
                    <th className="w-36 px-8 py-4">
                      <span className="sr-only">Gain bar</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {SITE.trust.subsale.map((row) => {
                    const gainPct = parseGainPercent(row.gain);
                    const barW = Math.round((gainPct / maxGain) * 100);
                    const cashGain = formatCashGain(row.spa, row.subsale);
                    return (
                      <tr
                        key={row.size}
                        className="border-t border-sand-100 transition-colors hover:bg-sand-50/60"
                      >
                        <td className="px-8 py-5 text-ink-900">{row.size}</td>
                        <td className="px-8 py-5 font-display font-semibold text-ink-700">
                          {row.spa}
                        </td>
                        <td className="px-8 py-5 font-display font-semibold text-sea-700">
                          {row.subsale}
                        </td>
                        <td className="px-8 py-5 font-display text-base font-semibold text-sun-600">
                          {cashGain}
                        </td>
                        <td className="px-8 py-5 text-right font-display text-xl font-semibold text-sun-700">
                          {row.gain}
                        </td>
                        <td className="px-8 py-5">
                          <GainBar percent={barW} enabled={isVisible} />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Mobile cards */}
            <div className="divide-y divide-sand-100 md:hidden">
              {SITE.trust.subsale.map((row) => {
                const gainPct = parseGainPercent(row.gain);
                const barW = Math.round((gainPct / maxGain) * 100);
                const cashGain = formatCashGain(row.spa, row.subsale);
                return (
                  <div key={row.size} className="p-5">
                    <div className="mb-3 font-sans text-[0.65rem] font-medium uppercase tracking-[0.22em] text-ink-500">
                      {row.size}
                    </div>
                    <div className="flex items-end justify-between gap-2">
                      <div>
                        <p className="font-sans text-[0.58rem] uppercase tracking-[0.2em] text-ink-400">
                          SPA
                        </p>
                        <p className="font-display text-sm font-semibold text-ink-800">
                          {row.spa}
                        </p>
                      </div>
                      <span aria-hidden className="mb-1 text-sand-400">
                        →
                      </span>
                      <div>
                        <p className="font-sans text-[0.58rem] uppercase tracking-[0.2em] text-ink-400">
                          Subsale
                        </p>
                        <p className="font-display text-sm font-semibold text-sea-700">
                          {row.subsale}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-sans text-[0.58rem] uppercase tracking-[0.2em] text-ink-400">
                          Gain
                        </p>
                        <p className="font-display text-2xl font-semibold text-sun-700">
                          {row.gain}
                        </p>
                        <p className="font-sans text-[0.6rem] font-medium text-sun-600">
                          {cashGain}
                        </p>
                      </div>
                    </div>
                    <div className="mt-3">
                      <GainBar percent={barW} enabled={isVisible} />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Card footer */}
            <div className="flex flex-col gap-4 border-t border-sand-100 px-6 py-6 sm:flex-row sm:items-center sm:justify-between md:px-8">
              <p className="max-w-lg font-sans text-[0.65rem] leading-relaxed text-ink-500/70 md:text-xs">
                {SITE.trust.footnote}
              </p>
              <a
                href={whatsappUrl(
                  "Hi, I'd like the track record brief and subsale comparables.",
                  "trust-section"
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center gap-2 rounded-full bg-sea-700 px-6 py-3 font-sans text-xs font-medium uppercase tracking-[0.2em] text-sand-50 transition-all duration-300 hover:bg-sea-900"
              >
                Request developer brief
                <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
