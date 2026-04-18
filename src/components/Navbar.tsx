"use client";

import { useEffect, useState } from "react";
import { whatsappUrl } from "@/content/site";
import { cn } from "@/lib/cn";

const NAV_LINKS = [
  { label: "Residences", href: "#residences" },
  { label: "ROI", href: "#roi" },
  { label: "Location", href: "#location" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-all duration-500",
          scrolled
            ? "border-b border-sand-200/40 bg-sand-50/85 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        )}
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-4 md:px-10">
          <a
            href="#top"
            aria-label="BeachFront Balok — home"
            className={cn(
              "group flex flex-col leading-none transition-colors",
              scrolled ? "text-ink-900" : "text-sand-50"
            )}
          >
            <span
              className={cn(
                "font-sans text-[0.6rem] font-light uppercase tracking-[0.38em] transition-colors",
                scrolled ? "text-ink-600" : "text-sand-50/75"
              )}
            >
              BeachFront
            </span>
            <span className="mt-0.5 font-display text-lg font-semibold uppercase tracking-[0.22em] sm:text-xl">
              Balok<span className="text-sun-500">.</span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "font-sans text-[0.7rem] font-medium uppercase tracking-[0.25em] transition-colors",
                  scrolled
                    ? "text-ink-600 hover:text-ink-900"
                    : "text-sand-50/80 hover:text-sand-50"
                )}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={whatsappUrl(undefined, "nav")}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex items-center gap-2 rounded-full px-4 py-2 font-sans text-[0.7rem] font-medium uppercase tracking-[0.25em] transition-all",
                scrolled
                  ? "bg-sun-500 text-white hover:bg-sun-700"
                  : "border border-sand-50/40 bg-sea-900/30 text-sand-50 backdrop-blur hover:bg-sea-900/50"
              )}
            >
              <WhatsAppIcon />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              // eslint-disable-next-line jsx-a11y/aria-proptypes
              aria-expanded={menuOpen}
              className={cn(
                "md:hidden flex h-9 w-9 items-center justify-center rounded-full border transition-colors",
                scrolled
                  ? "border-sand-300/60 text-ink-900"
                  : "border-sand-50/40 text-sand-50"
              )}
            >
              {menuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-[45] flex flex-col bg-sand-50 md:hidden"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-center justify-between px-5 py-4">
            <span className="font-display text-lg font-semibold text-ink-900">
              OMBAK<span className="text-sun-500">.</span>
            </span>
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-sand-300/60 text-ink-900"
            >
              <CloseIcon />
            </button>
          </div>
          <nav className="flex flex-1 flex-col justify-center gap-2 px-6 pb-20">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-sand-300/40 py-5 font-display text-3xl font-semibold text-ink-900"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#price-list"
              onClick={() => setMenuOpen(false)}
              className="mt-8 inline-flex items-center justify-between rounded-full bg-sea-700 px-6 py-4 font-sans text-xs font-medium uppercase tracking-[0.2em] text-sand-50"
            >
              Request price list
              <span aria-hidden>→</span>
            </a>
            <a
              href={whatsappUrl(undefined, "nav-mobile")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mt-3 inline-flex items-center justify-between rounded-full bg-sun-500 px-6 py-4 font-sans text-xs font-medium uppercase tracking-[0.2em] text-white"
            >
              WhatsApp
              <span aria-hidden>→</span>
            </a>
          </nav>
        </div>
      )}
    </>
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

function MenuIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M3 6h18M3 12h18M3 18h18" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}
