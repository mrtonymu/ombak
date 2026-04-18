"use client";

import { Reveal } from "@/components/motion/Reveal";
import { Prose } from "@/components/text/Prose";
import { ROI_TABLE, ROI_FOOTNOTE, whatsappUrl } from "@/content/site";

export function ROI() {
  return (
    <section
      id="roi"
      aria-label="Investment returns"
      className="relative w-full overflow-hidden bg-sea-900 py-24 text-sand-50 sm:py-32 md:py-40"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 80% 20%, rgba(228,122,60,0.14) 0%, rgba(6,41,58,0) 70%), radial-gradient(ellipse 55% 45% at 15% 85%, rgba(127,181,181,0.14) 0%, rgba(6,41,58,0) 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
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
              <em className="mt-1 inline-block font-semibold italic text-white underline decoration-sun-300/75 decoration-2 underline-offset-[8px]">
                The beach sends the cheque.
              </em>
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <Prose
              className="mx-auto mt-6 max-w-2xl text-pretty font-sans text-base leading-relaxed text-sand-50/75 sm:text-lg"
              sentenceClassName="block mt-1 first:mt-0"
            >
              {"Accredited short-stay operators handle bookings, turnovers and guest support. You own the deed and take 70% of the upside."}
            </Prose>
          </Reveal>
        </div>

        {/* Desktop table */}
        <Reveal delay={0.15}>
          <div className="mt-14 hidden overflow-hidden rounded-sm border border-sand-50/15 md:mt-20 md:block">
            <table className="w-full border-collapse font-sans text-sm">
              <thead>
                <tr className="bg-sea-900/40 text-left text-[0.6rem] font-medium uppercase tracking-[0.25em] text-sand-50/55">
                  <th className="px-5 py-4">Unit type</th>
                  <th className="px-5 py-4">Entry price</th>
                  <th className="px-5 py-4">Nightly rental</th>
                  <th className="px-5 py-4">Occupancy</th>
                  <th className="px-5 py-4">Annual ROI</th>
                  <th className="px-5 py-4">Est. monthly cashflow*</th>
                </tr>
              </thead>
              <tbody>
                {ROI_TABLE.map((row) => (
                  <tr
                    key={row.unit}
                    id={`roi-${row.id}`}
                    className="border-t border-sand-50/10 transition-colors scroll-mt-28 target:bg-sun-500/20 hover:bg-sea-900/30"
                  >
                    <td className="px-5 py-5 font-display text-base font-semibold text-sand-50">
                      {row.unit}
                    </td>
                    <td className="px-5 py-5 font-display text-base font-semibold text-white">
                      {row.price}
                    </td>
                    <td className="px-5 py-5 text-sand-50/85">{row.nightly}</td>
                    <td className="px-5 py-5 text-sand-50/70">
                      {row.occupancy}
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

        {/* Mobile card list */}
        <div className="mt-12 grid grid-cols-1 gap-4 md:hidden">
          {ROI_TABLE.map((row, i) => (
            <Reveal key={row.unit} delay={0.05 + i * 0.06}>
              <div
                id={`roi-${row.id}-m`}
                className="scroll-mt-28 rounded-sm border border-sand-50/15 bg-sea-900/30 p-5 backdrop-blur-sm target:border-sun-500/60 target:bg-sun-500/15"
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
                      Nightly
                    </dt>
                    <dd className="text-sand-50/85">{row.nightly}</dd>
                  </div>
                  <div>
                    <dt className="text-[0.55rem] uppercase tracking-[0.25em] text-sand-50/50">
                      Occupancy
                    </dt>
                    <dd className="text-sand-50/70">{row.occupancy}</dd>
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
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-6 text-center font-sans text-[0.65rem] leading-relaxed text-sand-50/45 md:text-xs">
            * {ROI_FOOTNOTE}
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-10 flex justify-center">
            <a
              href={whatsappUrl(
                "Hi, I'd like the full ROI breakdown and cashflow model.",
                "roi-section"
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-sand-50/40 bg-sand-50/5 px-7 py-3.5 font-sans text-xs font-medium uppercase tracking-[0.22em] text-sand-50 backdrop-blur-sm transition-all duration-300 hover:bg-sand-50 hover:text-ink-900"
            >
              WhatsApp for full ROI breakdown
              <span aria-hidden>→</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
