"use client";

import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { Prose } from "@/components/text/Prose";
import { whatsappUrl } from "@/content/site";

const CTA_IMAGE =
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2800&q=80";

export function CTA() {
  return (
    <section
      id="cta"
      aria-label="Get in touch"
      className="relative isolate w-full overflow-hidden"
    >
      <div className="relative min-h-[100svh] w-full">
        <Image
          src={CTA_IMAGE}
          alt="Beach at dusk — the quiet window"
          fill
          sizes="100vw"
          className="object-cover"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-sea-900/40 via-sea-900/55 to-sea-900/80" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 65% 50% at 50% 55%, rgba(6,41,58,0.45) 0%, rgba(6,41,58,0) 75%)",
          }}
        />

        <div className="relative z-10 flex min-h-[100svh] w-full flex-col items-center justify-center px-6 py-24 text-center text-sand-50">
          <Reveal
            as="p"
            className="mb-6 font-sans text-[0.7rem] font-medium uppercase tracking-[0.35em] text-sand-50/70"
          >
            08 · Say hello
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="font-display text-balance text-5xl font-semibold leading-[1.02] tracking-[-0.02em] text-white sm:text-7xl md:text-[5.5rem] [text-shadow:0_2px_24px_rgba(6,41,58,0.55)]">
              Kuantan&apos;s <em className="italic text-sun-300">quiet</em>.
              <br />
              One WhatsApp away.
            </h2>
          </Reveal>

          <Reveal delay={0.25}>
            <Prose
              className="mx-auto mt-8 max-w-lg font-sans text-base leading-relaxed text-sand-50/85 sm:text-lg [text-shadow:0_1px_12px_rgba(6,41,58,0.5)]"
              sentenceClassName="block mt-1 first:mt-0"
            >
              {"We reply with a price list, floor plans, and an honest answer about the view. No forms, no funnel — just a message."}
            </Prose>
          </Reveal>

          <Reveal delay={0.4}>
            <a
              href={whatsappUrl(undefined, "cta-final")}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-10 inline-flex items-center gap-3 rounded-full bg-sun-500 px-8 py-4 font-sans text-sm font-medium uppercase tracking-[0.2em] text-white shadow-[0_20px_50px_-12px_rgba(228,122,60,0.6)] transition-all duration-300 hover:bg-sun-700 hover:shadow-[0_24px_60px_-12px_rgba(228,122,60,0.7)] focus:outline-none focus:ring-2 focus:ring-sun-300 focus:ring-offset-2 focus:ring-offset-sea-900"
            >
              <WhatsAppIcon />
              <span>Message us on WhatsApp</span>
              <span
                aria-hidden
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </a>
          </Reveal>

          <Reveal delay={0.55}>
            <p className="mt-6 font-sans text-[0.65rem] uppercase tracking-[0.3em] text-sand-50/55">
              Replies Mon–Sun · 9 AM – 9 PM · Malaysian time
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.861 9.861 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}
