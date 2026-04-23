"use client";

import { Reveal } from "@/components/motion/Reveal";
import { SITE } from "@/content/site";
import { cn } from "@/lib/cn";

type Feat = { title: string; body: string; icon: React.ReactNode };

const LOCATION: Feat[] = [
  {
    title: "Freehold beachfront title",
    body: "Land held in perpetuity. Not a lease. Yours to pass on.",
    icon: <TitleDeedIcon />,
  },
  {
    title: "Direct private beach access",
    body: "Thirty seconds from the lift to the sand.",
    icon: <WaveIcon />,
  },
  {
    title: "180° unobstructed sea views",
    body: "Not a glimpse through another tower. A full horizon.",
    icon: <HorizonIcon />,
  },
  {
    title: "Retail podium at doorstep",
    body: "Coffee and dinner in the same building.",
    icon: <ShopIcon />,
  },
];

const LIFESTYLE: Feat[] = [
  {
    title: "Resort-grade facilities",
    body: "30+ amenities across two full decks — sky gym, yoga, BBQ, eco trail.",
    icon: <AmenitiesIcon />,
  },
  {
    title: "Fully furnished handover",
    body: "Aircon, fridge, sofa, bed. Move in or rent out from day one.",
    icon: <FurnishedIcon />,
  },
  {
    title: "GreenRE-certified build",
    body: "EV bays, rainwater harvesting, efficient by design.",
    icon: <GreenIcon />,
  },
];

const INVESTMENT: Feat[] = [
  {
    title: "Dual-key configuration",
    body: "Stay in one half. Rent the other. One deed, two income streams.",
    icon: <DualKeyIcon />,
  },
  {
    title: "10–13% projected ROI",
    body: "Among the strongest short-stay yields on the east coast.",
    icon: <ROIIcon />,
  },
];

export function Features() {
  return (
    <section
      id="features"
      aria-label="Key features"
      className="features-section relative w-full py-24 sm:py-32 md:py-40"
    >
      <div className="relative mx-auto max-w-7xl px-6 md:px-10">

        {/* Header — sits on light background */}
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
              <em className="italic text-sun-500">
                that doesn&apos;t repeat itself
              </em>
              .
            </h2>
          </Reveal>

          <Reveal delay={0.18}>
            <p className="mx-auto mt-6 max-w-xl font-sans text-base leading-relaxed text-ink-600 sm:text-lg">
              Nine things at the same address, nowhere else on this coastline.
            </p>
          </Reveal>
        </div>

        {/* ── Group 1 · Location — Feature Strip (light bg) ── */}
        <div className="mt-20 md:mt-24">
          <Reveal>
            <GroupLabel label="Location" variant="light" />
          </Reveal>
          <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4 md:gap-x-10">
            {LOCATION.map((feat, i) => (
              <Reveal key={feat.title} delay={0.04 + i * 0.07}>
                <StripItem feat={feat} />
              </Reveal>
            ))}
          </div>
        </div>

        {/* ── Group 2 · Lifestyle — Glass Cards (mid-dark bg) ── */}
        <div className="mt-20 md:mt-28">
          <Reveal>
            <GroupLabel label="Lifestyle" variant="dark" />
          </Reveal>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {LIFESTYLE.map((feat, i) => (
              <Reveal key={feat.title} delay={0.04 + i * 0.08}>
                <GlassCard feat={feat} />
              </Reveal>
            ))}
          </div>
        </div>

        {/* ── Group 3 · Investment — Sun Cards (deepest bg) ── */}
        <div className="mt-20 md:mt-28">
          <Reveal>
            <GroupLabel label="Investment" variant="dark" />
          </Reveal>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {INVESTMENT.map((feat, i) => (
              <Reveal key={feat.title} delay={0.04 + i * 0.1}>
                <InvestCard feat={feat} />
              </Reveal>
            ))}
          </div>
        </div>

        {/* Micro-CTA — page-cro: decision nudge after investment cards */}
        <Reveal delay={0.2}>
          <div className="mt-14 text-center">
            <a
              href="#residences"
              className="inline-flex items-center gap-1.5 font-sans text-sm text-sand-50/55 transition-colors duration-300 hover:text-sand-50"
            >
              See unit prices and availability
              <span aria-hidden>→</span>
            </a>
          </div>
        </Reveal>

      </div>
    </section>
  );
}

function GroupLabel({
  label,
  variant,
}: {
  label: string;
  variant: "light" | "dark";
}) {
  return (
    <p
      className={cn(
        "font-sans text-[0.65rem] font-medium uppercase tracking-[0.4em]",
        variant === "light" ? "text-sea-700/60" : "text-sand-50/45"
      )}
    >
      {label}
    </p>
  );
}

function StripItem({ feat }: { feat: Feat }) {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sea-700 text-sand-50">
        {feat.icon}
      </div>
      <div>
        <p className="font-display text-base font-semibold leading-snug text-ink-900">
          {feat.title}
        </p>
        <p className="mt-1.5 font-sans text-xs leading-relaxed text-ink-600/80">
          {feat.body}
        </p>
      </div>
    </div>
  );
}

function GlassCard({ feat }: { feat: Feat }) {
  return (
    <article className="flex h-full flex-col gap-4 rounded-sm border border-white/20 bg-white/10 p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-white/35 hover:bg-white/15">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-sand-50/25 bg-sand-50/10 text-sand-50/80">
        {feat.icon}
      </div>
      <div>
        <h3 className="font-display text-xl font-semibold leading-snug tracking-tight text-sand-50">
          {feat.title}
        </h3>
        <p className="mt-2 font-sans text-sm leading-relaxed text-sand-50/70">
          {feat.body}
        </p>
      </div>
    </article>
  );
}

function InvestCard({ feat }: { feat: Feat }) {
  return (
    <article className="flex h-full flex-col gap-5 rounded-sm border border-sun-500/30 bg-sun-500/10 p-8 transition-all duration-500 hover:-translate-y-1 hover:border-sun-500/50 hover:bg-sun-500/15">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-sun-300/35 bg-sun-300/10 text-sun-300">
        {feat.icon}
      </div>
      <div>
        <h3 className="font-display text-2xl font-semibold leading-snug tracking-tight text-sand-50">
          {feat.title}
        </h3>
        <p className="mt-2 font-sans text-sm leading-relaxed text-sand-50/70">
          {feat.body}
        </p>
      </div>
    </article>
  );
}

function TitleDeedIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <path d="m9 15 2 2 4-4" />
    </svg>
  );
}

function WaveIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2 12c1.5-3 3-3.5 4.5-2S9 13 10.5 13s2.5-3.5 4-3.5S17 11 18.5 11 21 8 22 8" />
      <path d="M2 18c1.5-3 3-3.5 4.5-2S9 19 10.5 19s2.5-3.5 4-3.5S17 17 18.5 17 21 14 22 14" />
    </svg>
  );
}

function HorizonIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="9" r="3" />
      <path d="M3 16c2.5-3 4.5-4 6-3s3 2.5 6 0 4-3.5 6-3" />
      <path d="M2 20h20" />
    </svg>
  );
}

function ShopIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 9l1-4h16l1 4" />
      <path d="M3 9v11a1 1 0 0 0 1 1h6v-4h4v4h6a1 1 0 0 0 1-1V9" />
      <path d="M3 9h18" />
    </svg>
  );
}

function AmenitiesIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2 20c2-2 4-3 6-2s4 2 6 0 4-3 6-2" />
      <circle cx="18" cy="5" r="2" />
      <path d="M18 7v5" />
      <path d="M12 7H6l1 5h4l1-5z" />
      <path d="M9 12v4" />
    </svg>
  );
}

function FurnishedIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 9V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v2" />
      <path d="M2 11a2 2 0 1 1 4 0v2h12v-2a2 2 0 1 1 4 0v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4z" />
      <path d="M6 19v2M18 19v2" />
    </svg>
  );
}

function GreenIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  );
}

function DualKeyIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="7" cy="7" r="4" />
      <path d="m10.4 10.4 8.6 8.6" />
      <path d="m17 17 2-2" />
      <path d="m15 19 2-2" />
    </svg>
  );
}

function ROIIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  );
}
