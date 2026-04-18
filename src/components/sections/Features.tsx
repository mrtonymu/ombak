"use client";

import { Reveal } from "@/components/motion/Reveal";
import { SITE } from "@/content/site";

export function Features() {
  return (
    <section
      id="features"
      aria-label="Key features"
      className="relative w-full bg-sand-50 py-24 sm:py-32 md:py-40"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal
            as="p"
            className="mb-6 font-sans text-[0.7rem] font-medium uppercase tracking-[0.35em] text-sea-700/70"
          >
            {SITE.features.eyebrow}
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="font-display text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.01em] text-ink-900 sm:text-5xl md:text-6xl">
              Built for a coastline{" "}
              <em className="italic text-sun-500">you can&apos;t replicate</em>.
            </h2>
          </Reveal>
        </div>

        <ul className="mx-auto mt-14 grid grid-cols-1 gap-3 sm:grid-cols-2 md:mt-20 md:grid-cols-3">
          {SITE.features.items.map((item, i) => (
            <Reveal key={item} as="li" delay={0.04 + i * 0.05}>
              <div className="flex items-center gap-3 rounded-sm border border-sand-200/70 bg-white/60 px-5 py-4 transition-all duration-500 hover:-translate-y-0.5 hover:border-sun-500/40 hover:bg-white">
                <CheckIcon />
                <span className="font-sans text-sm font-medium text-ink-900">
                  {item}
                </span>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0 text-sun-500"
      aria-hidden="true"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}
