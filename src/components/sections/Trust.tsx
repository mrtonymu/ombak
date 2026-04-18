"use client";

import { Reveal } from "@/components/motion/Reveal";
import { Prose } from "@/components/text/Prose";
import { SITE, whatsappUrl } from "@/content/site";

export function Trust() {
  return (
    <section
      id="trust"
      aria-label="Track record"
      className="relative w-full bg-sand-50 py-24 sm:py-32 md:py-40"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
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
              <em className="italic text-sun-500">the market has priced</em>.
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <Prose
              className="mx-auto mt-6 max-w-2xl text-pretty font-sans text-base leading-relaxed text-ink-600 sm:text-lg"
              sentenceClassName="block mt-1 first:mt-0"
            >
              {SITE.trust.lead}
            </Prose>
          </Reveal>
        </div>

        {/* Top stats row */}
        <dl className="mt-14 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-3 md:gap-10">
          {SITE.trust.stats.map((s, i) => (
            <Reveal key={s.label} delay={0.08 + i * 0.08}>
              <div className="border-t-2 border-sun-500/40 pt-6 text-center md:text-left">
                <dd className="font-display text-5xl font-semibold leading-none tracking-tight text-sea-700 sm:text-6xl md:text-7xl">
                  {s.value}
                </dd>
                <dt className="mt-3 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-ink-600">
                  {s.label}
                </dt>
              </div>
            </Reveal>
          ))}
        </dl>

        {/* Subsale story */}
        <Reveal delay={0.15}>
          <div className="mt-16 rounded-sm border border-sand-300/50 bg-white/60 p-6 md:mt-20 md:p-10">
            <p className="font-sans text-[0.65rem] uppercase tracking-[0.3em] text-sea-700/70">
              Earlier-phase subsale performance
            </p>
            <h3 className="mt-2 max-w-2xl font-display text-2xl font-semibold tracking-tight text-ink-900 md:text-3xl">
              Buyers of prior phases are already holding{" "}
              <em className="italic text-sun-500">paper gains</em>.
            </h3>

            {/* Desktop table */}
            <div className="mt-8 hidden overflow-hidden rounded-sm border border-sand-200/70 md:block">
              <table className="w-full border-collapse font-sans text-sm">
                <thead>
                  <tr className="bg-sand-100 text-left text-[0.6rem] font-medium uppercase tracking-[0.25em] text-ink-600">
                    <th className="px-5 py-4">Unit size</th>
                    <th className="px-5 py-4">Developer SPA</th>
                    <th className="px-5 py-4">Recent subsale</th>
                    <th className="px-5 py-4">Gain</th>
                  </tr>
                </thead>
                <tbody>
                  {SITE.trust.subsale.map((row) => (
                    <tr
                      key={row.size}
                      className="border-t border-sand-200/70 transition-colors hover:bg-sand-50"
                    >
                      <td className="px-5 py-4 text-ink-900">{row.size}</td>
                      <td className="px-5 py-4 font-display font-semibold text-ink-900">
                        {row.spa}
                      </td>
                      <td className="px-5 py-4 font-display font-semibold text-sea-700">
                        {row.subsale}
                      </td>
                      <td className="px-5 py-4 font-display text-base font-semibold text-sun-700">
                        {row.gain}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile list */}
            <div className="mt-8 grid grid-cols-1 gap-3 md:hidden">
              {SITE.trust.subsale.map((row) => (
                <div
                  key={row.size}
                  className="rounded-sm border border-sand-200/70 bg-sand-50 p-4"
                >
                  <div className="mb-2 font-sans text-[0.65rem] uppercase tracking-[0.2em] text-ink-600">
                    {row.size}
                  </div>
                  <div className="flex items-baseline justify-between">
                    <div>
                      <div className="font-display text-base font-semibold text-ink-900">
                        {row.spa}
                      </div>
                      <div className="font-sans text-[0.6rem] uppercase tracking-[0.2em] text-ink-600/70">
                        SPA price
                      </div>
                    </div>
                    <span aria-hidden className="text-ink-600">
                      →
                    </span>
                    <div className="text-right">
                      <div className="font-display text-base font-semibold text-sea-700">
                        {row.subsale}
                      </div>
                      <div className="font-sans text-[0.6rem] uppercase tracking-[0.2em] text-ink-600/70">
                        Subsale
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-display text-lg font-semibold text-sun-700">
                        {row.gain}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-6 font-sans text-[0.65rem] leading-relaxed text-ink-600/60 md:text-xs">
              {SITE.trust.footnote}
            </p>

            <div className="mt-8">
              <a
                href={whatsappUrl(
                  "Hi, I'd like the track record brief and subsale comparables.",
                  "trust-section"
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-sea-700 px-6 py-3 font-sans text-xs font-medium uppercase tracking-[0.2em] text-sand-50 transition-all duration-300 hover:bg-sea-900"
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
