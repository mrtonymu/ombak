"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { Prose } from "@/components/text/Prose";
import { SITE } from "@/content/site";
import { cn } from "@/lib/cn";

export function Amenities() {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Defer video playback until idle — keeps LCP clean for the split-text content
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) return;

    const start = () => v.play().catch(() => {});
    if ("requestIdleCallback" in window) {
      (
        window as Window & {
          requestIdleCallback: (cb: () => void) => number;
        }
      ).requestIdleCallback(start);
    } else {
      setTimeout(start, 200);
    }
  }, []);

  return (
    <section
      id="amenities"
      aria-label="Resort amenities and facilities"
      className="relative isolate w-full overflow-hidden bg-sea-900 py-24 text-sand-50 sm:py-32 md:py-40"
    >
      {/* Full-bleed video background */}
      <video
        ref={videoRef}
        className="absolute inset-0 -z-10 h-full w-full object-cover"
        src={SITE.amenities.videoSrc}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden
      />

      {/* Left-heavy gradient overlay — darker over text column, softer over tiles */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(to right, rgba(6,41,58,0.88) 0%, rgba(6,41,58,0.72) 35%, rgba(6,41,58,0.45) 70%, rgba(6,41,58,0.3) 100%)",
        }}
      />

      {/* Warm ambient glow on top layer to tie into daylight palette */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 50% 45% at 85% 20%, rgba(244,184,134,0.18) 0%, rgba(6,41,58,0) 70%)",
        }}
      />

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 gap-14 px-6 md:grid-cols-12 md:gap-16 md:px-10">
        {/* LEFT · narrative column */}
        <div className="flex flex-col md:col-span-5">
          <Reveal
            as="p"
            className="mb-6 font-sans text-[0.7rem] font-medium uppercase tracking-[0.35em] text-sand-50/70"
          >
            {SITE.amenities.eyebrow}
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="font-display text-balance text-4xl font-semibold leading-[1.08] tracking-[-0.015em] text-white sm:text-5xl lg:text-6xl [text-shadow:0_2px_20px_rgba(6,41,58,0.5)]">
              <span className="block">{SITE.amenities.title}</span>
              <em className="mt-1 inline-block font-semibold italic text-white underline decoration-sun-300/75 decoration-2 underline-offset-[8px]">
                {SITE.amenities.titleAccent}.
              </em>
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <Prose
              className="mt-6 max-w-md text-pretty font-sans text-base leading-relaxed text-sand-50/85 sm:text-lg [text-shadow:0_1px_12px_rgba(6,41,58,0.4)]"
              sentenceClassName="block mt-1 first:mt-0"
            >
              {SITE.amenities.lead}
            </Prose>
          </Reveal>

          {/* Trinity — three numbers, three beats */}
          <Reveal delay={0.3}>
            <ul className="mt-10 flex flex-col gap-3 md:mt-14 sm:gap-4">
              {SITE.amenities.trinity.map((row) => (
                <li
                  key={row.label}
                  className="flex items-baseline gap-4 sm:gap-5"
                >
                  <span className="w-[3ch] text-right font-display text-4xl font-semibold leading-none tracking-[-0.02em] text-sun-300 [text-shadow:0_2px_20px_rgba(228,122,60,0.3)] sm:text-5xl">
                    {row.number}
                  </span>
                  <span
                    aria-hidden
                    className="text-xl text-sand-50/40 sm:text-2xl"
                  >
                    ·
                  </span>
                  <span className="font-sans text-[0.72rem] font-medium uppercase tracking-[0.3em] text-sand-50/80 sm:text-xs">
                    {row.label}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* RIGHT · glass tile grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:col-span-7 md:gap-5">
          {SITE.amenities.cards.map((card, i) => (
            <Reveal
              key={card.title}
              delay={0.1 + i * 0.08}
              className={cn(card.wide && "sm:col-span-2")}
            >
              <article
                className={cn(
                  "group relative flex h-full overflow-hidden rounded-sm border backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                  card.wide ? "flex-col sm:flex-row" : "flex-col",
                  card.featured
                    ? "border-sun-300/55 bg-sun-300/10 hover:border-sun-300/80 hover:bg-sun-300/15"
                    : "border-white/20 bg-white/10 hover:border-white/35 hover:bg-white/15",
                  "hover:-translate-y-1"
                )}
              >
                {card.featured && card.featuredLabel && (
                  <span className="absolute right-3 top-3 z-10 rounded-full bg-sun-500 px-3 py-1 font-sans text-[0.55rem] font-medium uppercase tracking-[0.25em] text-white shadow-lg">
                    {card.featuredLabel}
                  </span>
                )}

                <div
                  className={cn(
                    "relative overflow-hidden bg-sea-900/40",
                    card.wide
                      ? "aspect-[5/3] w-full sm:aspect-auto sm:w-1/2 sm:self-stretch"
                      : "aspect-[5/3] w-full"
                  )}
                >
                  <Image
                    src={card.img}
                    alt={card.alt}
                    fill
                    sizes={
                      card.wide
                        ? "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        : "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    }
                    className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-sea-900/60 via-transparent to-transparent" />
                </div>

                <div
                  className={cn(
                    "flex flex-1 flex-col gap-2 p-5",
                    card.wide && "sm:justify-center sm:p-7"
                  )}
                >
                  <h3
                    className={cn(
                      "font-display font-semibold tracking-tight text-white [text-shadow:0_1px_8px_rgba(6,41,58,0.4)]",
                      card.wide ? "text-xl sm:text-2xl" : "text-lg sm:text-xl"
                    )}
                  >
                    {card.title}
                  </h3>
                  <Prose
                    className={cn(
                      "font-sans leading-relaxed text-sand-50/80",
                      card.wide ? "text-sm sm:text-base sm:max-w-sm" : "text-sm"
                    )}
                    sentenceClassName="block mt-1 first:mt-0"
                  >
                    {card.body}
                  </Prose>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
