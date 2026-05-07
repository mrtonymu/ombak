"use client";

import { Reveal } from "@/components/motion/Reveal";

type Landmark = { km: number; name: string; badge?: string };

const LEFT_LANDMARKS: Landmark[] = [
  { km: 1, name: "Swiss-Garden\nBeach Resort" },
  { km: 11, name: "Kuantan\nTown" },
  { km: 12, name: "Teluk\nCempedak" },
  { km: 16, name: "Kuantan Port, MCKIP,\nGebeng Industrial Park", badge: "3,500-Acre" },
];

const RIGHT_LANDMARKS: Landmark[] = [
  { km: 17, name: "Proposed New Kuantan\nInternational Airport", badge: "13MP Mandate" },
  { km: 17, name: "ECRL KotaSAS\nStation", badge: "89% Complete · 2026" },
  { km: 17, name: "KotaSAS" },
  { km: 30, name: "Cherating\nBeach" },
];

const WHATSAPP_URL =
  "https://wa.me/601123831228?text=Hi%2C%20I'd%20like%20to%20book%20a%20private%20investment%20briefing%20for%20BeachFront%20Balok.&utm_source=location-section";

export function Location() {
  return (
    <section
      id="location"
      aria-label="BeachFront Balok strategic location — Balok Beach, ECRL, growth catalysts"
      className="relative w-full overflow-hidden bg-sea-500"
    >
      <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr]">

        {/* ── Left: narrative + landmark grid ── */}
        <div className="relative z-10 flex flex-col justify-center bg-sea-500 px-8 py-20 md:px-12 md:py-28 lg:px-16">

          <Reveal as="p" delay={0.04} className="mb-5 font-sans text-[0.68rem] font-semibold uppercase tracking-[0.38em] text-sand-50/75">
            Strategic Location
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="font-display text-4xl font-bold leading-[1.05] tracking-[-0.02em] text-sand-50 sm:text-5xl lg:text-6xl">
              Your Gateway to<br />Balok Beach
            </h2>
          </Reveal>

          <Reveal delay={0.14}>
            <p className="mt-5 max-w-sm font-sans text-base leading-[1.65] text-sand-50/85 sm:text-[1.05rem]">
              Directly on Balok Beach — Kuantan's quieter, less-photographed shore. Town is eleven minutes away. The port and industrial belt are sixteen. The ECRL station, now 89% built, will fold the Klang Valley into a single train journey. The sea is already here.
            </p>
          </Reveal>

          {/* 2-column landmark grid */}
          <Reveal delay={0.2}>
            <div className="mt-10 grid grid-cols-2 gap-x-6">
              <LandmarkList items={LEFT_LANDMARKS} />
              <LandmarkList items={RIGHT_LANDMARKS} />
            </div>
          </Reveal>

          {/* Stats */}
          <Reveal delay={0.26}>
            <div className="mt-8 flex gap-10 border-t border-sand-50/10 pt-7">
              <div>
                <p className="font-display text-3xl font-bold text-sun-300 sm:text-4xl">2.21M</p>
                <p className="mt-1 font-sans text-[0.65rem] uppercase tracking-[0.18em] text-sand-50/70">Annual Visitors to Kuantan</p>
              </div>
              <div>
                <p className="font-display text-3xl font-bold text-sun-300 sm:text-4xl">#2</p>
                <p className="mt-1 font-sans text-[0.65rem] uppercase tracking-[0.18em] text-sand-50/70">Most Visited in Pahang</p>
              </div>
            </div>
          </Reveal>

          {/* CTA */}
          <Reveal delay={0.3}>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-sand-50/30 px-6 py-3 font-sans text-xs font-medium uppercase tracking-[0.22em] text-sand-50 transition-all duration-300 hover:border-sun-500/60 hover:text-sun-300"
            >
              Book a Private Briefing<span aria-hidden="true">→</span>
            </a>
          </Reveal>

        </div>

        {/* ── Right: map image ── */}
        <div className="relative min-h-120 md:min-h-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/map.jpg"
            alt="Map of BeachFront Balok location in Kuantan"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
        </div>

      </div>
    </section>
  );
}

function LandmarkList({ items }: { items: Landmark[] }) {
  return (
    <ul className="flex flex-col divide-y divide-sand-50/10">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3 py-4">
          <span className="font-display text-5xl font-bold leading-none tracking-tight text-sun-500 sm:text-6xl">
            {item.km}
          </span>
          <div className="flex flex-col pt-1">
            <span className="font-sans text-[0.6rem] font-bold uppercase tracking-[0.22em] text-sun-400">KM</span>
            <span className="mt-0.5 whitespace-pre-line font-sans text-[0.8rem] leading-snug text-sand-50/90">
              {item.name}
            </span>
            {item.badge && (
              <span className="mt-1.5 inline-block w-fit rounded-sm border border-sun-500/30 bg-sun-500/15 px-2 py-0.5 font-sans text-[0.55rem] font-semibold uppercase tracking-widest text-sun-300">
                {item.badge}
              </span>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}
