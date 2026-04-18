"use client";

import { AnimatePresence, motion } from "framer-motion";
import { type FormEvent, useState } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { Prose } from "@/components/text/Prose";
import { UNITS, whatsappUrl } from "@/content/site";

type FormState = {
  name: string;
  whatsapp: string;
  email: string;
  unit: string;
};

const EMPTY: FormState = {
  name: "",
  whatsapp: "",
  email: "",
  unit: "",
};

export function LeadForm() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    // Placeholder — replace with real endpoint (e.g. /api/leads or a service like Resend/Formspree)
    try {
      if (typeof window !== "undefined") {
        console.warn("[ombak-v2] lead submitted (placeholder)", form);
      }
      await new Promise((r) => setTimeout(r, 700));
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  const update =
    (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));

  return (
    <section
      id="price-list"
      aria-label="Private price list request"
      className="relative w-full bg-sand-50 py-24 sm:py-32 md:py-40"
    >
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <div className="text-center">
          <Reveal
            as="p"
            className="mb-6 font-sans text-[0.7rem] font-medium uppercase tracking-[0.35em] text-sea-700/70"
          >
            10 · Private price list
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="font-display text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.01em] text-ink-900 sm:text-5xl md:text-6xl">
              Everything, in writing.{" "}
              <em className="italic text-sun-500">Within 24 hours</em>.
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <Prose
              className="mx-auto mt-6 max-w-xl text-pretty font-sans text-base leading-relaxed text-ink-600 sm:text-lg"
              sentenceClassName="block mt-1 first:mt-0"
            >
              {
                "Leave your details and we'll send complete floor-by-floor pricing, availability and ROI calculations within 24 hours."
              }
            </Prose>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="relative mt-12 overflow-hidden rounded-sm border border-sand-200/70 bg-white p-6 shadow-[0_24px_60px_-30px_rgba(14,74,92,0.25)] md:mt-16 md:p-10">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  onSubmit={onSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.4 }}
                  className="grid grid-cols-1 gap-5 md:grid-cols-2"
                >
                  <Field
                    label="Full Name"
                    htmlFor="name"
                    className="md:col-span-2"
                  >
                    <input
                      id="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={update("name")}
                      className="input"
                      placeholder="Your full name"
                      autoComplete="name"
                    />
                  </Field>

                  <Field label="WhatsApp Number" htmlFor="whatsapp">
                    <input
                      id="whatsapp"
                      type="tel"
                      required
                      value={form.whatsapp}
                      onChange={update("whatsapp")}
                      className="input"
                      placeholder="+60 12 345 6789"
                      autoComplete="tel"
                    />
                  </Field>

                  <Field label="Email Address" htmlFor="email">
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={update("email")}
                      className="input"
                      placeholder="you@example.com"
                      autoComplete="email"
                    />
                  </Field>

                  <Field
                    label="Unit of Interest"
                    htmlFor="unit"
                    className="md:col-span-2"
                  >
                    <select
                      id="unit"
                      required
                      aria-label="Unit of Interest"
                      value={form.unit}
                      onChange={update("unit")}
                      className="input"
                    >
                      <option value="" disabled>
                        Select an option…
                      </option>
                      {UNITS.map((u) => (
                        <option key={u.id} value={u.code}>
                          {u.code} · {u.name} · {u.fromPrice}
                        </option>
                      ))}
                      <option value="all">Show me everything</option>
                    </select>
                  </Field>

                  <div className="flex flex-col items-center gap-4 pt-2 md:col-span-2 md:flex-row md:justify-between">
                    <p className="font-sans text-[0.65rem] uppercase tracking-[0.22em] text-ink-600/60">
                      We respect your inbox. No spam, ever.
                    </p>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="inline-flex items-center gap-2 rounded-full bg-sun-500 px-8 py-3.5 font-sans text-xs font-medium uppercase tracking-[0.22em] text-white transition-all duration-300 hover:bg-sun-700 focus:outline-none focus:ring-2 focus:ring-sun-300 disabled:opacity-60"
                    >
                      {submitting ? "Sending…" : "Send me the price list"}
                      <span aria-hidden>→</span>
                    </button>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="confirm"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="py-10 text-center"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-sun-500/15">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-sun-500"
                      aria-hidden="true"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                  <h3 className="mt-6 font-display text-3xl font-semibold text-ink-900">
                    Details received.
                  </h3>
                  <Prose
                    className="mx-auto mt-3 max-w-md font-sans text-base leading-relaxed text-ink-600"
                    sentenceClassName="block mt-1 first:mt-0"
                  >
                    {
                      "We'll be in touch within 24 hours with the full price list and investment breakdown. For faster, message us on WhatsApp — we're usually on."
                    }
                  </Prose>
                  <a
                    href={whatsappUrl(
                      `Hi, I just submitted the price-list form (${form.name || "new lead"}). Following up for a faster response.`,
                      "form-confirmation"
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-sea-700 px-6 py-3 font-sans text-xs font-medium uppercase tracking-[0.2em] text-sand-50 transition-colors hover:bg-sea-900"
                  >
                    WhatsApp us now
                    <span aria-hidden>→</span>
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>

      <style jsx>{`
        .input {
          width: 100%;
          background: var(--color-sand-50);
          border: 1px solid rgba(194, 169, 122, 0.5);
          border-radius: 2px;
          padding: 0.75rem 1rem;
          font-family: var(--font-sans);
          font-size: 0.95rem;
          color: var(--color-ink-900);
          transition: border-color 0.25s ease, background 0.25s ease;
        }
        .input::placeholder {
          color: rgba(92, 101, 119, 0.55);
        }
        .input:focus {
          outline: none;
          border-color: var(--color-sun-500);
          background: #fff;
        }
      `}</style>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  children,
  className,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label htmlFor={htmlFor} className={className ?? ""}>
      <span className="mb-2 block font-sans text-[0.65rem] uppercase tracking-[0.25em] text-ink-600">
        {label}
      </span>
      {children}
    </label>
  );
}
