"use client";

import { useState } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { Prose } from "@/components/text/Prose";
import { UNITS, SITE, whatsappUrl } from "@/content/site";

function buildMessage(unitCode: string): string {
  if (!unitCode) return SITE.whatsappPrefill;
  if (unitCode === "all")
    return "Hi, I'd like to see the full price list and all unit types for BeachFront Balok.";
  const u = UNITS.find((u) => u.code === unitCode);
  if (!u) return SITE.whatsappPrefill;
  return `Hi, I'm interested in ${u.code} · ${u.name} (${u.price}). Please send me the price list, floor plan, and ROI breakdown.`;
}

export function LeadForm() {
  const [unit, setUnit] = useState("");

  const selectedUnit = UNITS.find((u) => u.code === unit);
  const href = whatsappUrl(buildMessage(unit), "price-list");

  return (
    <section
      id="price-list"
      aria-label="Private price list request"
      className="relative w-full bg-sand-50 py-24 sm:py-32 md:py-40"
    >
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <div className="text-center">
          <Reveal
            as="p"
            className="mb-6 font-sans text-[0.7rem] font-medium uppercase tracking-[0.35em] text-sea-700/70"
          >
            10 · Private price list
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="font-display text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.01em] text-ink-900 sm:text-5xl md:text-6xl">
              Pick your unit.{" "}
              <em className="italic text-sun-500">The numbers follow</em>.
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <Prose
              className="mx-auto mt-6 max-w-xl text-pretty font-sans text-base leading-relaxed text-ink-600 sm:text-lg"
              sentenceClassName="block mt-1 first:mt-0"
            >
              {
                "Select the unit that caught your eye. We'll send the SPA price, floor plan, and ROI breakdown — straight to your WhatsApp."
              }
            </Prose>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="mt-12 overflow-hidden rounded-sm border border-sand-200/70 shadow-[0_24px_60px_-30px_rgba(14,74,92,0.25)] md:mt-16">
            <div className="flex flex-col divide-y divide-sand-200/60 md:flex-row md:divide-x md:divide-y-0">

              {/* ── Left: unit selector ── */}
              <div className="flex flex-1 flex-col gap-3 bg-white p-6 md:p-8">
                <label
                  htmlFor="unit-select"
                  className="font-sans text-[0.65rem] font-medium uppercase tracking-[0.25em] text-ink-600"
                >
                  Unit of interest
                </label>
                <div className="relative">
                  <select
                    id="unit-select"
                    value={unit}
                    onChange={(e) => setUnit(e.target.value)}
                    className="w-full cursor-pointer appearance-none rounded-sm border border-sand-200/80 bg-sand-50 px-4 py-3.5 pr-10 font-sans text-[0.95rem] text-ink-900 transition-colors duration-200 focus:border-sun-500 focus:bg-white focus:outline-none"
                  >
                    <option value="" disabled>
                      Select a unit…
                    </option>
                    {UNITS.map((u) => (
                      <option key={u.id} value={u.code}>
                        {u.code} · {u.name} · {u.price}
                      </option>
                    ))}
                    <option value="all">Show me everything</option>
                  </select>
                  <span
                    className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-ink-600/50"
                    aria-hidden="true"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </span>
                </div>
                {selectedUnit && (
                  <p className="font-sans text-[0.7rem] text-ink-600/65">
                    {selectedUnit.sqft} · {selectedUnit.beds} · Projected ROI{" "}
                    {selectedUnit.roi}
                  </p>
                )}
              </div>

              {/* ── Right: WhatsApp CTA ── */}
              <div className="flex flex-col items-start justify-center gap-4 bg-sea-900 p-6 md:min-w-65 md:p-8">
                <p className="font-sans text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-sand-50/55">
                  Sent instantly
                </p>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-sun-500 px-6 py-3.5 font-sans text-xs font-medium uppercase tracking-[0.2em] text-white shadow-[0_8px_24px_-8px_rgba(228,122,60,0.55)] transition-all duration-300 hover:bg-sun-700 hover:shadow-[0_12px_28px_-8px_rgba(228,122,60,0.7)] focus:outline-none focus:ring-2 focus:ring-sun-300 focus:ring-offset-2 focus:ring-offset-sea-900"
                >
                  <WhatsAppIcon />
                  <span>Get Price List</span>
                  <span
                    aria-hidden
                    className="transition-transform duration-300 group-hover:translate-x-0.5"
                  >
                    →
                  </span>
                </a>
                <p className="font-sans text-[0.6rem] leading-relaxed text-sand-50/40">
                  Opens WhatsApp. No form. No wait.
                </p>
              </div>

            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.861 9.861 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}
