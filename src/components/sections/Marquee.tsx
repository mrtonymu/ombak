"use client";

import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { MARQUEE_ITEMS } from "@/content/site";

const TARGET_DURATION_SEC = 70;

export function Marquee() {
  const reduceMotion = useReducedMotion();
  const trackRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const [halfWidth, setHalfWidth] = useState(0);
  const [paused, setPaused] = useState(false);

  // Measure half-track width (one copy of the duplicated content)
  useEffect(() => {
    if (!trackRef.current) return;
    const measure = () => {
      if (trackRef.current) {
        setHalfWidth(trackRef.current.scrollWidth / 2);
      }
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(trackRef.current);
    return () => ro.disconnect();
  }, []);

  // Animation frame loop — GPU-accelerated, respects reduced-motion + pause
  useAnimationFrame((_, delta) => {
    if (reduceMotion || paused || halfWidth === 0) return;
    const pxPerMs = halfWidth / (TARGET_DURATION_SEC * 1000);
    let next = x.get() - pxPerMs * delta;
    if (next <= -halfWidth) next += halfWidth;
    x.set(next);
  });

  // duplicate items so the loop is seamless (x animates from 0 → -halfWidth, then resets to 0)
  const loop = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <section
      aria-label="Project highlights"
      className="relative w-full overflow-hidden bg-sea-900 py-4 sm:py-5"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Edge fade mask — avoids hard cut on left/right */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(to right, rgb(6 41 58) 0%, transparent 6%, transparent 94%, rgb(6 41 58) 100%)",
        }}
      />

      <motion.div
        ref={trackRef}
        style={{ x }}
        className="flex w-max items-center gap-10 whitespace-nowrap will-change-transform sm:gap-12"
      >
        {loop.map((item, i) => (
          <div
            key={`${item}-${i}`}
            className="flex shrink-0 items-center gap-10 sm:gap-12"
          >
            <span className="font-sans text-[0.72rem] font-medium uppercase tracking-[0.3em] text-sand-50/85 sm:text-xs">
              {item}
            </span>
            <span
              aria-hidden
              className="h-1.5 w-1.5 shrink-0 rounded-full bg-sun-500"
            />
          </div>
        ))}
      </motion.div>

      {/* Screen-reader version — static, not animated */}
      <ul className="sr-only">
        {MARQUEE_ITEMS.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
