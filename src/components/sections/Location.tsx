"use client";

import { Reveal } from "@/components/motion/Reveal";
import { Prose } from "@/components/text/Prose";
import { SITE } from "@/content/site";

export function Location() {
  return (
    <section
      id="location"
      aria-label="Location"
      className="relative w-full overflow-hidden bg-sand-100 py-24 sm:py-32 md:py-40"
    >
      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 px-6 md:grid-cols-12 md:gap-16 md:px-10">
        <div className="md:col-span-5">
          <Reveal
            as="p"
            className="mb-6 font-sans text-[0.7rem] font-medium uppercase tracking-[0.35em] text-sea-700/70"
          >
            {SITE.location.eyebrow}
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="font-display text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.01em] text-ink-900 sm:text-5xl md:text-6xl">
              Kuantan&apos;s next chapter starts in{" "}
              <em className="italic text-sun-500">2027</em>.
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <Prose
              className="mt-6 max-w-md text-pretty font-sans text-base leading-relaxed text-ink-600 sm:text-lg"
              sentenceClassName="block mt-1 first:mt-0"
            >
              {SITE.location.lead}
            </Prose>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-8 rounded-sm border border-sand-300/50 bg-white/60 p-5">
              <p className="font-sans text-[0.65rem] uppercase tracking-[0.3em] text-sea-700/70">
                Growth catalysts
              </p>
              <p className="mt-2 font-sans text-sm leading-relaxed text-ink-600">
                ECRL KotaSAS Station · Proposed new international airport ·
                Expanding port city · 2.21M annual visitors (Pahang&apos;s #2).
              </p>
            </div>
          </Reveal>
        </div>

        <div className="md:col-span-7">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {SITE.location.anchors.map((a, i) => (
              <Reveal key={a.label} delay={0.05 + i * 0.06}>
                <div className="border-t-2 border-sun-500/40 bg-white/60 p-5 transition-all duration-500 hover:border-sun-500 hover:bg-white">
                  <div className="font-display text-2xl font-semibold tracking-tight text-sea-700 md:text-3xl">
                    {a.value}
                  </div>
                  <div className="mt-2 font-sans text-[0.65rem] uppercase tracking-[0.2em] text-ink-600">
                    {a.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.35}>
            <div className="mt-6 rounded-sm border border-sand-300/50 bg-sea-900 p-6 text-sand-50">
              <MapSVG />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function MapSVG() {
  return (
    <figure className="relative w-full">
      <svg
        viewBox="0 0 800 280"
        className="w-full"
        role="img"
        aria-label="Route from Kuala Lumpur to Kuantan via ECRL"
      >
        <defs>
          <linearGradient id="ecrl-grad" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0" stopColor="#F4B886" stopOpacity="0.9" />
            <stop offset="1" stopColor="#E37A3C" stopOpacity="0.9" />
          </linearGradient>
        </defs>

        <text
          x="520"
          y="80"
          fill="rgba(127,181,181,0.3)"
          fontFamily="serif"
          fontStyle="italic"
          fontSize="13"
          letterSpacing="3"
        >
          SOUTH CHINA SEA
        </text>

        <path
          d="M 160 160 Q 300 140 460 130 Q 600 122 680 115"
          fill="none"
          stroke="url(#ecrl-grad)"
          strokeWidth="2.5"
          strokeDasharray="8 6"
          strokeLinecap="round"
        />

        <g transform="translate(160, 160)">
          <circle r="6" fill="rgba(250,246,238,0.3)" />
          <circle r="3" fill="#FAF6EE" />
          <text
            x="-14"
            y="26"
            fill="rgba(250,246,238,0.75)"
            fontFamily="ui-sans-serif, system-ui"
            fontSize="10"
            letterSpacing="3"
            textAnchor="end"
          >
            KUALA LUMPUR
          </text>
        </g>

        <text
          x="380"
          y="150"
          fill="rgba(244,184,134,0.85)"
          fontFamily="ui-sans-serif, system-ui"
          fontSize="10"
          fontWeight="600"
          letterSpacing="3"
        >
          ECRL
        </text>

        <g transform="translate(600, 120)">
          <path
            d="M 0 -5 L 3 0 L 0 5 L -3 0 Z"
            fill="rgba(250,246,238,0.55)"
          />
          <text
            x="8"
            y="2"
            fill="rgba(250,246,238,0.55)"
            fontFamily="ui-sans-serif, system-ui"
            fontSize="9"
            letterSpacing="2"
          >
            KOTASAS · 2026
          </text>
        </g>

        <g transform="translate(680, 115)">
          <circle r="16" fill="rgba(228,122,60,0.15)">
            <animate
              attributeName="r"
              values="16;24;16"
              dur="3s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.6;0.1;0.6"
              dur="3s"
              repeatCount="indefinite"
            />
          </circle>
          <circle r="9" fill="rgba(228,122,60,0.35)" />
          <circle r="4" fill="#E37A3C" />
          <text
            x="14"
            y="0"
            fill="#F4B886"
            fontFamily="ui-sans-serif, system-ui"
            fontSize="11"
            fontWeight="600"
            letterSpacing="3"
          >
            KUANTAN
          </text>
          <text
            x="14"
            y="16"
            fill="rgba(244,184,134,0.7)"
            fontFamily="ui-serif, Georgia, serif"
            fontSize="10"
            fontStyle="italic"
            letterSpacing="1"
          >
            Balok Beach
          </text>
        </g>
      </svg>
      <figcaption className="mt-3 text-center font-sans text-[0.6rem] uppercase tracking-[0.3em] text-sand-50/50">
        Schematic · not to scale
      </figcaption>
    </figure>
  );
}
