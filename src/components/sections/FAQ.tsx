"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { Prose } from "@/components/text/Prose";
import { SITE, whatsappUrl } from "@/content/site";
import { cn } from "@/lib/cn";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      aria-label="Frequently asked questions"
      className="relative w-full bg-sand-100 py-24 sm:py-32 md:py-40"
    >
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <div className="text-center">
          <Reveal
            as="p"
            className="mb-6 font-sans text-[0.7rem] font-medium uppercase tracking-[0.35em] text-sea-700/70"
          >
            {SITE.faq.eyebrow}
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="font-display text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.01em] text-ink-900 sm:text-5xl md:text-6xl">
              Everything you{" "}
              <em className="italic text-sun-500">want to know</em>.
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <Prose
              className="mx-auto mt-6 max-w-xl text-pretty font-sans text-base leading-relaxed text-ink-600 sm:text-lg"
              sentenceClassName="block mt-1 first:mt-0"
            >
              {SITE.faq.lead}
            </Prose>
          </Reveal>
        </div>

        <ul className="mt-14 divide-y divide-sand-300/60 border-y border-sand-300/60 md:mt-16">
          {SITE.faq.items.map((item, i) => {
            const isOpen: boolean = open === i;
            return (
              <li key={item.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  // eslint-disable-next-line jsx-a11y/aria-proptypes
                  aria-expanded={isOpen}
                  className="group flex w-full items-center justify-between gap-6 py-6 text-left transition-colors md:py-7"
                >
                  <span
                    className={cn(
                      "font-display text-lg font-semibold leading-snug tracking-tight transition-colors md:text-xl",
                      isOpen ? "text-sea-700" : "text-ink-900 group-hover:text-sea-700"
                    )}
                  >
                    {item.q}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{
                      duration: 0.4,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className={cn(
                      "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors",
                      isOpen
                        ? "border-sun-500 bg-sun-500 text-white"
                        : "border-sand-300/70 text-ink-600 group-hover:border-sun-500/60 group-hover:text-sun-500"
                    )}
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
                    >
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.45,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="overflow-hidden"
                    >
                      <Prose
                        className="max-w-3xl pb-6 font-sans text-base leading-relaxed text-ink-600 md:pb-7 md:text-lg"
                        sentenceClassName="block mt-1 first:mt-0"
                      >
                        {item.a}
                      </Prose>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>

        <Reveal delay={0.15}>
          <div className="mt-12 text-center">
            <a
              href={whatsappUrl(
                "Hi, I have a question that isn't covered in the FAQ.",
                "faq-ask"
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-ink-900/20 bg-sand-50 px-6 py-3 font-sans text-xs font-medium uppercase tracking-[0.2em] text-ink-900 transition-all duration-300 hover:border-sun-500 hover:bg-sun-500 hover:text-white"
            >
              Ask us directly on WhatsApp
              <span aria-hidden>→</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
