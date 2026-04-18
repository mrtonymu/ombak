"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/cn";
import { SITE, whatsappUrl } from "@/content/site";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [muted, setMuted] = useState(true);
  const [mounted, setMounted] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.45, 0.8]);
  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  useEffect(() => {
    setMounted(true);
    const v = videoRef.current;
    if (!v) return;
    const start = () =>
      v.play().catch(() => {
        // Autoplay blocked — will play on interaction
      });
    if ("requestIdleCallback" in window) {
      (
        window as Window & {
          requestIdleCallback: (cb: () => void) => number;
        }
      ).requestIdleCallback(start);
    } else {
      setTimeout(start, 0);
    }
  }, []);

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
    if (!v.muted && v.paused) v.play().catch(() => {});
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100svh] w-full overflow-hidden bg-sea-900"
      aria-label="Hero"
    >
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        src="/video/hero-web.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />

      {/* base gradient */}
      <motion.div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-sea-900/20 via-sea-900/40 to-sea-900/80"
        style={{ opacity: overlayOpacity }}
      />

      {/* vignette behind headline */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(6,41,58,0.55) 0%, rgba(6,41,58,0.15) 55%, rgba(6,41,58,0) 80%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-7xl flex-col justify-between px-6 pb-8 pt-28 md:px-10 md:pb-10 md:pt-32">
        <motion.div
          className="flex flex-1 flex-col items-center justify-center text-center"
          style={{ y: titleY, opacity: titleOpacity }}
        >
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-sand-50/30 bg-sea-900/30 px-4 py-1.5 font-sans text-[0.65rem] uppercase tracking-[0.35em] text-sand-50/90 backdrop-blur-sm"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-sun-300" />
            {SITE.hero.eyebrow}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-4xl font-semibold leading-[1.02] tracking-[-0.02em] text-white sm:text-6xl md:text-7xl lg:text-[6.5rem] [text-shadow:0_2px_24px_rgba(6,41,58,0.55),0_1px_2px_rgba(6,41,58,0.35)]"
          >
            Wake where{" "}
            <em className="relative font-semibold italic text-white">
              the ocean
              <span
                aria-hidden
                className="pointer-events-none absolute -bottom-0.5 left-[4%] right-[4%] h-[2px] rounded-full bg-gradient-to-r from-sun-300/0 via-sun-300/75 to-sun-300/0"
              />
            </em>
            <br />
            speaks first.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 max-w-2xl text-pretty font-sans text-base leading-relaxed text-sand-50/90 sm:text-lg md:text-xl [text-shadow:0_1px_12px_rgba(6,41,58,0.55)]"
          >
            <span className="block">{SITE.hero.subtitle}</span>
            <span className="mt-1 block text-sand-50/75">
              {SITE.hero.subtitlePrice}
            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 1.05 }}
            className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:gap-4"
          >
            <a
              href={whatsappUrl(
                "Hi, I'd like the price list and ROI breakdown for the Kuantan residences.",
                "hero-primary"
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-sun-500 px-7 py-3.5 font-sans text-xs font-medium uppercase tracking-[0.22em] text-white shadow-[0_18px_40px_-12px_rgba(228,122,60,0.55)] transition-all duration-300 hover:bg-sun-700 hover:shadow-[0_22px_50px_-10px_rgba(228,122,60,0.7)] focus:outline-none focus:ring-2 focus:ring-sun-300 focus:ring-offset-2 focus:ring-offset-sea-900"
            >
              <WhatsAppIcon />
              <span>{SITE.hero.ctaPrimaryLabel}</span>
            </a>
            <a
              href="#roi"
              className="group inline-flex items-center gap-2 rounded-full border border-sand-50/40 bg-sea-900/30 px-7 py-3.5 font-sans text-xs font-medium uppercase tracking-[0.22em] text-sand-50 backdrop-blur-sm transition-all duration-300 hover:bg-sea-900/50"
            >
              <span>{SITE.hero.ctaSecondaryLabel}</span>
              <span
                aria-hidden
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </a>
          </motion.div>
        </motion.div>

        {/* Stat strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 1.3 }}
          className="relative grid grid-cols-2 gap-4 rounded-sm bg-sea-900/35 px-4 py-5 backdrop-blur-md sm:grid-cols-4 sm:gap-6 sm:px-6 sm:py-6 md:px-8 md:py-7"
        >
          {SITE.heroStats.map((s) => (
            <div
              key={s.label}
              className="text-center sm:text-left sm:border-l sm:border-sand-50/15 sm:pl-6 sm:first:border-l-0 sm:first:pl-0"
            >
              <div className="font-display text-xl font-semibold tracking-tight text-white sm:text-2xl md:text-3xl [text-shadow:0_1px_12px_rgba(6,41,58,0.55)]">
                {s.value}
              </div>
              <div className="mt-1 font-sans text-[0.6rem] uppercase tracking-[0.25em] text-sand-50/65">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Ambient sound toggle — demoted to bottom-left icon-only circle */}
      <button
        type="button"
        onClick={toggleMute}
        aria-label={muted ? "Unmute ocean sound" : "Mute ocean sound"}
        title={muted ? "Listen" : "Silence"}
        className={cn(
          "group absolute bottom-5 right-5 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-sand-50/25 bg-sea-900/40 text-sand-50 backdrop-blur-md transition",
          "hover:scale-105 hover:border-sand-50/45 hover:bg-sea-900/60",
          "focus:outline-none focus:ring-2 focus:ring-sun-300/70",
          "sm:bottom-8 sm:right-8 sm:h-11 sm:w-11"
        )}
      >
        <SoundIcon muted={muted} />
        {/* Subtle ripple when sound is ON */}
        {!muted && (
          <span
            aria-hidden
            className="animate-pulse-ring pointer-events-none absolute inset-0 rounded-full border border-sun-300/60"
          />
        )}
      </button>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.861 9.861 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

function SoundIcon({ muted }: { muted: boolean }) {
  if (muted) {
    return (
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M11 5 6 9H2v6h4l5 4zM22 9l-6 6M16 9l6 6" />
      </svg>
    );
  }
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M11 5 6 9H2v6h4l5 4zM15.54 8.46a5 5 0 0 1 0 7.07M19.07 4.93a10 10 0 0 1 0 14.14" />
    </svg>
  );
}
