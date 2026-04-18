"use client";

import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useState } from "react";
import { whatsappUrl } from "@/content/site";

type Context = "default" | "roi" | "trust";

const CONTEXTS: Record<
  Context,
  {
    label: string;
    href: string;
    external?: boolean;
    note: string;
  }
> = {
  default: {
    label: "Price List",
    href: "#price-list",
    note: "Scroll to lead form",
  },
  roi: {
    label: "Get ROI chart",
    href: whatsappUrl(
      "Hi, could you send the full ROI cashflow breakdown?",
      "sticky-roi"
    ),
    external: true,
    note: "WhatsApp for ROI",
  },
  trust: {
    label: "Developer brief",
    href: whatsappUrl(
      "Hi, could you share the developer track record brief and subsale comparables?",
      "sticky-trust"
    ),
    external: true,
    note: "WhatsApp for track record",
  },
};

export function StickyBar() {
  const [visible, setVisible] = useState(false);
  const [context, setContext] = useState<Context>("default");

  // Reading progress (top hairline)
  const { scrollYProgress } = useScroll();
  const progressWidth = useTransform(scrollYProgress, (v) => `${v * 100}%`);

  // Smart appear · hide on hero (scroll < 70vh) / lead form / final CTA
  useEffect(() => {
    const onScroll = () => {
      const pastHero = window.scrollY > window.innerHeight * 0.7;
      setVisible(pastHero);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Section-aware hide + CTA context
  useEffect(() => {
    if (typeof window === "undefined") return;

    const sections = [
      { id: "price-list", role: "hide" as const },
      { id: "cta", role: "hide" as const },
      { id: "roi", role: "roi" as const },
      { id: "trust", role: "trust" as const },
    ];

    const visibleRoles = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          const s = sections.find((x) => x.id === e.target.id);
          if (!s) continue;
          if (e.isIntersecting && e.intersectionRatio > 0.35) {
            visibleRoles.add(s.role);
          } else {
            visibleRoles.delete(s.role);
          }
        }

        // Hide if on lead-form or final CTA
        const pastHero = window.scrollY > window.innerHeight * 0.7;
        const hiding =
          visibleRoles.has("hide") === true || !pastHero;
        setVisible(!hiding);

        // Pick context (last-in wins; priority: roi > trust > default)
        if (visibleRoles.has("roi")) setContext("roi");
        else if (visibleRoles.has("trust")) setContext("trust");
        else setContext("default");
      },
      { threshold: [0, 0.35, 0.7, 1] }
    );

    const attached: Element[] = [];
    for (const s of sections) {
      const el = document.getElementById(s.id);
      if (el) {
        observer.observe(el);
        attached.push(el);
      }
    }

    return () => {
      for (const el of attached) observer.unobserve(el);
      observer.disconnect();
    };
  }, []);

  const ctx = CONTEXTS[context];

  return (
    <AnimatePresence>
      {visible && (
        <motion.aside
          key="stickybar"
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 120, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 320,
            damping: 30,
            mass: 0.8,
          }}
          role="complementary"
          aria-label="Quick actions"
          className="fixed inset-x-0 bottom-0 z-30 border-t border-sand-50/10 bg-sea-900/85 backdrop-blur-xl"
        >
          {/* Reading progress hairline */}
          <motion.div
            aria-hidden
            className="absolute inset-x-0 top-0 h-[2px] origin-left bg-gradient-to-r from-sun-300 to-sun-500"
            style={{ width: progressWidth }}
          />

          <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:gap-6 sm:px-6 sm:py-4 md:px-10">
            {/* Info — desktop full / mobile condensed */}
            <div className="min-w-0 flex-1">
              {/* Desktop: eyebrow + value */}
              <div className="hidden flex-col md:flex">
                <span className="font-sans text-[0.6rem] uppercase tracking-[0.3em] text-sand-50/60">
                  Balok Beach · Kuantan
                </span>
                <span className="mt-0.5 font-sans text-sm font-medium text-sand-50">
                  Freehold · Studios from RM 380K ·{" "}
                  <span className="text-sun-300">ROI up to 13%</span>
                </span>
              </div>
              {/* Mobile: condensed one-liner */}
              <div className="flex flex-col md:hidden">
                <span className="font-sans text-[0.55rem] uppercase tracking-[0.25em] text-sand-50/55">
                  Kuantan · Freehold
                </span>
                <span className="mt-0.5 font-sans text-[0.82rem] font-medium text-sand-50">
                  RM 380K ·{" "}
                  <span className="text-sun-300">ROI 13%</span>
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex shrink-0 items-center gap-2 sm:gap-3">
              <AnimatePresence mode="wait" initial={false}>
                <motion.a
                  key={context}
                  href={ctx.href}
                  target={ctx.external ? "_blank" : undefined}
                  rel={ctx.external ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-full border border-sand-50/35 bg-sand-50/5 px-4 py-2.5 font-sans text-[0.65rem] font-medium uppercase tracking-[0.22em] text-sand-50 backdrop-blur transition-all hover:bg-sand-50 hover:text-ink-900 sm:px-5"
                  aria-label={ctx.note}
                >
                  {ctx.label}
                </motion.a>
              </AnimatePresence>

              <a
                href={whatsappUrl(undefined, "sticky-whatsapp")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-full bg-sun-500 px-4 py-2.5 font-sans text-[0.65rem] font-medium uppercase tracking-[0.22em] text-white shadow-[0_8px_24px_-8px_rgba(228,122,60,0.6)] transition-all hover:bg-sun-700 sm:px-5"
              >
                <WhatsAppIcon />
                <span className="hidden xs:inline sm:inline">WhatsApp</span>
              </a>
            </div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.861 9.861 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}
