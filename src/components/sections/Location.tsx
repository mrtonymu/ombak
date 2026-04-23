"use client";

import { Reveal } from "@/components/motion/Reveal";
import { whatsappUrl } from "@/content/site";

type Landmark = { km: number; name: string; badge?: string };

const LEFT_LANDMARKS: Landmark[] = [
  { km: 1, name: "Swiss-Garden\nBeach Resort" },
  { km: 11, name: "Kuantan\nTown" },
  { km: 12, name: "Teluk\nCempedak" },
  { km: 16, name: "Kuantan Port, MCKIP,\nGebeng Industrial Park", badge: "3,500-Acre" },
];

const RIGHT_LANDMARKS: Landmark[] = [
  { km: 17, name: "Proposed New Kuantan\nInternational Airport", badge: "13MP Mandate" },
  { km: 17, name: "ECRL KotaSAS\nStation", badge: "89% Complete · 2026" },
  { km: 17, name: "KotaSAS" },
  { km: 30, name: "Cherating\nBeach" },
];

export function Location() {
  return (
    <section
      id="location"
      aria-label="BeachFront Balok strategic location — Balok Beach, ECRL, growth catalysts"
      className="relative w-full overflow-hidden bg-sea-900"
    >
      <div className="grid grid-cols-1 md:grid-cols-2">

        {/* ── Left: narrative + landmark grid ── */}
        <div className="relative z-10 flex flex-col justify-center bg-sea-900 px-8 py-20 md:px-12 md:py-28 lg:px-16">

          <Reveal
            as="p"
            className="mb-5 font-sans text-[0.62rem] font-medium uppercase tracking-[0.45em] text-sand-50/50"
          >
            Strategic Location
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="font-display text-4xl font-semibold leading-[1.05] tracking-[-0.01em] text-sand-50 sm:text-5xl lg:text-6xl">
              Your Gateway to<br />Balok Beach
            </h2>
          </Reveal>

          <Reveal delay={0.14}>
            <p className="mt-5 max-w-sm font-sans text-sm leading-relaxed text-sand-50/60 sm:text-base">
              Right on Balok Beach in the Beserah neighbourhood — close to town, the port, and the upcoming ECRL station. Everything you need is within easy reach.
            </p>
          </Reveal>

          {/* 2-column landmark grid */}
          <Reveal delay={0.2}>
            <div className="mt-10 grid grid-cols-2 gap-x-6">
              <LandmarkList items={LEFT_LANDMARKS} />
              <LandmarkList items={RIGHT_LANDMARKS} />
            </div>
          </Reveal>

          {/* Catalyst stats */}
          <Reveal delay={0.32}>
            <div className="mt-8 flex gap-10 border-t border-sand-50/10 pt-7">
              <div>
                <p className="font-display text-3xl font-semibold text-sun-300 sm:text-4xl">2.21M</p>
                <p className="mt-1 font-sans text-[0.58rem] uppercase tracking-[0.2em] text-sand-50/45">Annual Visitors to Kuantan</p>
              </div>
              <div>
                <p className="font-display text-3xl font-semibold text-sun-300 sm:text-4xl">#2</p>
                <p className="mt-1 font-sans text-[0.58rem] uppercase tracking-[0.2em] text-sand-50/45">Most Visited in Pahang</p>
              </div>
            </div>
          </Reveal>

          {/* CTA */}
          <Reveal delay={0.4}>
            <a
              href={whatsappUrl(
                "Hi, I'd like to book a private investment briefing for BeachFront Balok.",
                "location-section"
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-sand-50/30 px-6 py-3 font-sans text-xs font-medium uppercase tracking-[0.22em] text-sand-50 transition-all duration-300 hover:border-sun-500/60 hover:text-sun-300"
            >
              Book a Private Briefing
              <span aria-hidden>→</span>
            </a>
          </Reveal>
        </div>

        {/* ── Right: illustrated SVG map ── */}
        <div className="relative min-h-120 md:min-h-0">
          <MapSVG />
        </div>

      </div>
    </section>
  );
}

function LandmarkList({ items }: { items: Landmark[] }) {
  return (
    <ul className="flex flex-col divide-y divide-sand-50/10">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3 py-4">
          <span className="font-display text-5xl font-bold leading-none tracking-tight text-sun-500 sm:text-6xl">
            {item.km}
          </span>
          <div className="flex flex-col pt-1">
            <span className="font-sans text-[0.5rem] font-bold uppercase tracking-[0.28em] text-sun-400">KM</span>
            <span className="mt-0.5 whitespace-pre-line font-sans text-[0.72rem] leading-snug text-sand-50/80">
              {item.name}
            </span>
            {item.badge && (
              <span className="mt-1.5 inline-block w-fit rounded-sm border border-sun-500/30 bg-sun-500/15 px-2 py-0.5 font-sans text-[0.47rem] font-semibold uppercase tracking-[0.12em] text-sun-300">
                {item.badge}
              </span>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}

function MapSVG() {
  return (
    <figure className="absolute inset-0 h-full w-full">
      <svg
        viewBox="0 0 680 860"
        className="h-full w-full"
        preserveAspectRatio="xMidYMid slice"
        role="img"
        aria-label="Illustrated map of BeachFront Balok location in Kuantan, showing ECRL KotaSAS Station, Proposed New Kuantan International Airport, and key landmarks"
      >
        <defs>
          <pattern id="sea-sparkle" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
            <circle cx="14" cy="14" r="0.7" fill="rgba(210,245,245,0.28)" />
            <circle cx="4"  cy="7"  r="0.45" fill="rgba(210,245,245,0.18)" />
            <circle cx="22" cy="4"  r="0.5"  fill="rgba(210,245,245,0.22)" />
            <circle cx="7"  cy="23" r="0.4"  fill="rgba(210,245,245,0.18)" />
            <circle cx="23" cy="21" r="0.65" fill="rgba(210,245,245,0.28)" />
            <circle cx="18" cy="11" r="0.3"  fill="rgba(210,245,245,0.15)" />
          </pattern>
        </defs>

        {/* ── Layer 1: Base ── */}
        <rect width="680" height="860" fill="#0EA59E" />

        {/* South China Sea — right strip */}
        <path
          d="M 594 0 C 605 100 618 230 628 370 C 638 510 642 660 646 860 L 680 860 L 680 0 Z"
          fill="#0A7580"
        />
        <path
          d="M 594 0 C 605 100 618 230 628 370 C 638 510 642 660 646 860 L 680 860 L 680 0 Z"
          fill="url(#sea-sparkle)"
        />

        {/* ── Layer 2: Road network (cream) ── */}

        {/* East Coast Expressway — left spine */}
        <path d="M 142 0 C 140 120 137 250 133 400 C 129 550 124 700 118 860"
          fill="none" stroke="#D6C9B0" strokeWidth="5.5" strokeLinecap="round" />
        <path d="M 152 0 C 150 120 147 250 143 400 C 139 550 134 700 128 860"
          fill="none" stroke="#D6C9B0" strokeWidth="5.5" strokeLinecap="round" />

        {/* Gebeng Bypass — top horizontal */}
        <path d="M 316 82 C 390 60 468 56 545 76 C 568 83 588 94 608 112"
          fill="none" stroke="#D6C9B0" strokeWidth="4" strokeLinecap="round" />
        {/* Gebeng top-right spur */}
        <path d="M 545 76 C 562 58 580 38 600 18 C 618 4 638 0 658 0"
          fill="none" stroke="#D6C9B0" strokeWidth="3" strokeLinecap="round" />

        {/* Spur: ECE → Jalan Jabor junction */}
        <path d="M 148 0 C 164 28 190 50 228 60"
          fill="none" stroke="#D6C9B0" strokeWidth="4" strokeLinecap="round" />

        {/* Upper cross-road (junction to Gebeng area) */}
        <path d="M 228 60 C 260 50 292 44 328 46 C 360 48 395 58 432 78"
          fill="none" stroke="#D6C9B0" strokeWidth="3.5" strokeLinecap="round" />

        {/* Jalan Jabor — diagonal */}
        <path d="M 228 60 C 268 138 318 230 362 330 C 392 398 418 444 432 492"
          fill="none" stroke="#D6C9B0" strokeWidth="4" strokeLinecap="round" />

        {/* Kuantan Bypass — central vertical */}
        <path d="M 432 278 C 434 390 436 505 437 620 C 438 710 438 785 438 860"
          fill="none" stroke="#D6C9B0" strokeWidth="4" strokeLinecap="round" />

        {/* Jalan Beserah — coastal road */}
        <path d="M 558 172 C 560 290 561 415 560 530 C 559 640 558 750 556 860"
          fill="none" stroke="#D6C9B0" strokeWidth="3.5" strokeLinecap="round" />

        {/* Cross-connector (Bypass ↔ Beserah, mid) */}
        <path d="M 437 520 C 468 516 512 516 556 520"
          fill="none" stroke="#D6C9B0" strokeWidth="3" strokeLinecap="round" />

        {/* Roundabout */}
        <circle cx="437" cy="728" r="20" fill="none" stroke="#D6C9B0" strokeWidth="3.5" />
        <line x1="437" y1="708" x2="437" y2="695" stroke="#D6C9B0" strokeWidth="3.5" />
        <line x1="437" y1="748" x2="437" y2="760" stroke="#D6C9B0" strokeWidth="3.5" />
        <line x1="417" y1="728" x2="405" y2="728" stroke="#D6C9B0" strokeWidth="3.5" />
        <line x1="457" y1="728" x2="470" y2="728" stroke="#D6C9B0" strokeWidth="3.5" />

        {/* Road south from roundabout */}
        <path d="M 437 748 L 437 860" stroke="#D6C9B0" strokeWidth="3.5" />
        {/* Road east from roundabout → Teluk Cempedak */}
        <path d="M 457 728 C 492 728 524 730 556 736"
          fill="none" stroke="#D6C9B0" strokeWidth="3" strokeLinecap="round" />
        {/* Road west from roundabout */}
        <path d="M 417 728 C 378 728 330 726 288 720"
          fill="none" stroke="#D6C9B0" strokeWidth="3" strokeLinecap="round" />

        {/* Gambiang — lower-left diagonal */}
        <path d="M 58 755 C 92 778 134 796 178 806 C 216 814 255 816 290 814"
          fill="none" stroke="#D6C9B0" strokeWidth="3.5" strokeLinecap="round" />

        {/* Lower ECE spur toward town */}
        <path d="M 124 718 C 158 738 204 752 254 756 C 295 760 336 758 375 754"
          fill="none" stroke="#D6C9B0" strokeWidth="3" strokeLinecap="round" />

        {/* ── Layer 3: Tree clusters (dark teal) ── */}
        {([
          [186,162],[200,175],[192,152],
          [174,308],[188,322],[180,298],
          [198,438],[212,452],[205,430],
          [176,558],[190,572],[183,548],
          [218,636],[232,650],[225,626],
          [298,158],[312,172],[305,148],
          [348,228],[362,242],[355,218],
          [298,378],[313,392],[306,368],
          [258,528],[272,542],[266,518],
          [318,478],[332,492],[326,466],
          [152,636],[166,650],[160,626],
          [88,508],[102,522],[96,496],
          [98,388],[112,402],[106,378],
          [88,248],[102,262],[96,236],
          [368,128],[382,142],[376,116],
          [478,152],[492,166],[486,140],
          [468,328],[482,342],[476,316],
          [378,548],[392,562],[386,536],
          [348,638],[362,652],[356,626],
          [472,618],[486,632],[480,606],
          [308,678],[322,692],[316,666],
          [238,758],[252,772],[246,748],
          [152,718],[166,732],[160,706],
          [112,618],[126,632],[120,606],
          [68,678],[82,692],[76,666],
          [418,148],[432,162],[425,138],
          [502,228],[516,242],[509,218],
        ] as [number,number][]).map(([cx,cy],i) => (
          <circle key={i} cx={cx} cy={cy} r="9" fill="#0A7870" opacity="0.88" />
        ))}

        {/* ── Layer 4: Area labels ── */}
        <text x="212" y="112" fill="rgba(250,248,240,0.88)" fontFamily="ui-sans-serif,system-ui,sans-serif" fontSize="16" fontWeight="700" letterSpacing="5" textAnchor="middle">PAHANG</text>
        <text x="488" y="264" fill="rgba(250,248,240,0.88)" fontFamily="ui-sans-serif,system-ui,sans-serif" fontSize="14" fontWeight="700" letterSpacing="4" textAnchor="middle">BALOK</text>
        <text x="592" y="326" fill="rgba(250,248,240,0.72)" fontFamily="ui-sans-serif,system-ui,sans-serif" fontSize="11" fontWeight="700" letterSpacing="2" textAnchor="middle">TANJUNG GELANG</text>
        <text x="208" y="492" fill="rgba(250,248,240,0.88)" fontFamily="ui-sans-serif,system-ui,sans-serif" fontSize="16" fontWeight="700" letterSpacing="5" textAnchor="middle">KOTASAS</text>
        <text x="368" y="684" fill="rgba(250,248,240,0.88)" fontFamily="ui-sans-serif,system-ui,sans-serif" fontSize="14" fontWeight="700" letterSpacing="4" textAnchor="middle">KUANTAN</text>
        <text x="368" y="702" fill="rgba(250,248,240,0.88)" fontFamily="ui-sans-serif,system-ui,sans-serif" fontSize="14" fontWeight="700" letterSpacing="4" textAnchor="middle">TOWN</text>
        <text x="146" y="762" fill="rgba(250,248,240,0.72)" fontFamily="ui-sans-serif,system-ui,sans-serif" fontSize="10" fontWeight="700" letterSpacing="2" textAnchor="middle">BANDAR INDERA</text>
        <text x="146" y="776" fill="rgba(250,248,240,0.72)" fontFamily="ui-sans-serif,system-ui,sans-serif" fontSize="10" fontWeight="700" letterSpacing="2" textAnchor="middle">MAHKOTA</text>
        <text x="508" y="784" fill="rgba(250,248,240,0.72)" fontFamily="ui-sans-serif,system-ui,sans-serif" fontSize="10" fontWeight="700" letterSpacing="2" textAnchor="middle">TELUK CEMPEDAK</text>

        {/* SOUTH CHINA SEA */}
        <text
          transform="translate(656,560) rotate(-90)"
          fill="rgba(215,245,245,0.42)"
          fontFamily="ui-serif,Georgia,serif"
          fontSize="12" fontWeight="400" letterSpacing="6" textAnchor="middle"
        >SOUTH CHINA SEA</text>

        {/* ── Layer 5: Road labels ── */}
        <text transform="translate(126,395) rotate(-90)" fill="rgba(250,248,240,0.38)" fontFamily="ui-sans-serif,system-ui,sans-serif" fontSize="7" letterSpacing="2" textAnchor="middle">EAST COAST EXPWY (ECE)</text>
        <text transform="translate(126,598) rotate(-90)" fill="rgba(250,248,240,0.32)" fontFamily="ui-sans-serif,system-ui,sans-serif" fontSize="7" letterSpacing="2" textAnchor="middle">EAST COAST EXPWY (ECE)</text>
        <text transform="translate(318,272) rotate(-56)" fill="rgba(250,248,240,0.38)" fontFamily="ui-sans-serif,system-ui,sans-serif" fontSize="7" letterSpacing="2" textAnchor="middle">JALAN JABOR</text>
        <text transform="translate(446,435) rotate(-90)" fill="rgba(250,248,240,0.32)" fontFamily="ui-sans-serif,system-ui,sans-serif" fontSize="7" letterSpacing="2" textAnchor="middle">KUANTAN BYPASS</text>
        <text transform="translate(566,418) rotate(-90)" fill="rgba(250,248,240,0.32)" fontFamily="ui-sans-serif,system-ui,sans-serif" fontSize="7" letterSpacing="2" textAnchor="middle">JALAN BESERAH</text>
        <text x="432" y="75" fill="rgba(250,248,240,0.38)" fontFamily="ui-sans-serif,system-ui,sans-serif" fontSize="7" letterSpacing="2" textAnchor="middle">GEBENG BYPASS</text>
        <text transform="translate(116,795) rotate(-20)" fill="rgba(250,248,240,0.32)" fontFamily="ui-sans-serif,system-ui,sans-serif" fontSize="7" letterSpacing="2" textAnchor="middle">GAMBIANG</text>
        <text transform="translate(630,38) rotate(70)" fill="rgba(250,248,240,0.38)" fontFamily="ui-sans-serif,system-ui,sans-serif" fontSize="7" letterSpacing="2" textAnchor="middle">GEBENG</text>

        {/* ── Layer 6: POI markers ── */}

        {/* Gebeng Industrial Park */}
        <circle cx="476" cy="106" r="4" fill="rgba(250,248,240,0.5)" />
        <text x="484" y="104" fill="rgba(250,248,240,0.55)" fontFamily="ui-sans-serif,system-ui,sans-serif" fontSize="7.5" letterSpacing="0.3">Gebeng</text>
        <text x="484" y="114" fill="rgba(250,248,240,0.55)" fontFamily="ui-sans-serif,system-ui,sans-serif" fontSize="7.5" letterSpacing="0.3">Industrial Park</text>

        {/* MCKIP Site white label */}
        <rect x="454" y="150" width="72" height="17" rx="2" fill="white" />
        <text x="490" y="162" fill="#0A4A5C" fontFamily="ui-sans-serif,system-ui,sans-serif" fontSize="8" fontWeight="700" letterSpacing="0.5" textAnchor="middle">MCKIP Site</text>

        {/* Airport plane + orange label */}
        <text x="494" y="226" fill="rgba(250,248,240,0.9)" fontFamily="ui-sans-serif,system-ui,sans-serif" fontSize="15" textAnchor="middle">✈</text>
        <text x="478" y="244" fill="#F4B886" fontFamily="ui-sans-serif,system-ui,sans-serif" fontSize="8" fontWeight="600" letterSpacing="0.4" textAnchor="middle">Proposed New Kuantan</text>
        <text x="478" y="254" fill="#F4B886" fontFamily="ui-sans-serif,system-ui,sans-serif" fontSize="8" fontWeight="600" letterSpacing="0.4" textAnchor="middle">International Airport</text>

        {/* Kuantan Port triangle icon */}
        <path d="M 606 164 L 612 176 L 600 176 Z" fill="rgba(250,248,240,0.5)" />
        <text x="596" y="158" fill="rgba(250,248,240,0.55)" fontFamily="ui-sans-serif,system-ui,sans-serif" fontSize="7" letterSpacing="0.3" textAnchor="end">Kuantan Port</text>
        <text x="596" y="168" fill="rgba(250,248,240,0.45)" fontFamily="ui-sans-serif,system-ui,sans-serif" fontSize="6.5" letterSpacing="0.3" textAnchor="end">New Deep Water Terminal</text>

        {/* TMG Mart Gebeng — red square */}
        <rect x="432" y="368" width="10" height="10" rx="1.5" fill="#E53E3E" />
        <text x="444" y="377" fill="rgba(250,248,240,0.48)" fontFamily="ui-sans-serif,system-ui,sans-serif" fontSize="7" letterSpacing="0.3">TMG Mart Gebeng</text>

        {/* Swiss-Garden */}
        <circle cx="568" cy="412" r="4.5" fill="#F4B886" />
        <text x="560" y="408" fill="rgba(250,248,240,0.62)" fontFamily="ui-sans-serif,system-ui,sans-serif" fontSize="7.5" letterSpacing="0.3" textAnchor="end">Swiss-Garden</text>
        <text x="560" y="418" fill="rgba(250,248,240,0.62)" fontFamily="ui-sans-serif,system-ui,sans-serif" fontSize="7.5" letterSpacing="0.3" textAnchor="end">Beach Resort</text>

        {/* TIMURBAY */}
        <circle cx="568" cy="458" r="4.5" fill="#F4B886" />
        <text x="560" y="454" fill="rgba(250,248,240,0.62)" fontFamily="ui-sans-serif,system-ui,sans-serif" fontSize="7.5" letterSpacing="0.3" textAnchor="end">TIMURBAY</text>
        <text x="560" y="464" fill="rgba(250,248,240,0.62)" fontFamily="ui-sans-serif,system-ui,sans-serif" fontSize="7.5" letterSpacing="0.3" textAnchor="end">Seafront Residence</text>

        {/* ── Development Site — BeachFront Balok ── */}
        <circle cx="560" cy="492" r="7" fill="#E37A3C" />
        <circle cx="560" cy="492" r="13" fill="none" stroke="#E37A3C" strokeWidth="1.5" strokeOpacity="0.45" />
        {/* Arrow pointing to site */}
        <path d="M 555 492 C 540 492 526 492 512 492 L 520 487 M 512 492 L 520 497"
          stroke="#E37A3C" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <text x="564" y="486" fill="#E37A3C" fontFamily="ui-sans-serif,system-ui,sans-serif" fontSize="8" fontWeight="700" letterSpacing="1">BeachFront</text>
        <text x="564" y="497" fill="#E37A3C" fontFamily="ui-sans-serif,system-ui,sans-serif" fontSize="8" fontWeight="700" letterSpacing="1">Balok</text>

        {/* Hutan Simpan Beserah */}
        <text x="554" y="558" fill="rgba(250,248,240,0.38)" fontFamily="ui-sans-serif,system-ui,sans-serif" fontSize="7" letterSpacing="0.3" textAnchor="end">Hutan Simpan</text>
        <text x="554" y="568" fill="rgba(250,248,240,0.38)" fontFamily="ui-sans-serif,system-ui,sans-serif" fontSize="7" letterSpacing="0.3" textAnchor="end">Beserah</text>

        {/* ECRL STN12 KotaSAS Station — train icon */}
        <rect x="222" y="528" width="18" height="13" rx="2.5" fill="none" stroke="#E37A3C" strokeWidth="1.8" />
        <rect x="227" y="532" width="4" height="4" rx="0.5" fill="#E37A3C" opacity="0.75" />
        <rect x="234" y="532" width="4" height="4" rx="0.5" fill="#E37A3C" opacity="0.75" />
        <circle cx="226" cy="543" r="2.2" fill="#E37A3C" />
        <circle cx="236" cy="543" r="2.2" fill="#E37A3C" />
        <text x="244" y="535" fill="#E37A3C" fontFamily="ui-sans-serif,system-ui,sans-serif" fontSize="8" fontWeight="700" letterSpacing="0.8">ECRL STN12</text>
        <text x="244" y="546" fill="#E37A3C" fontFamily="ui-sans-serif,system-ui,sans-serif" fontSize="7.5" fontWeight="600" letterSpacing="0.3">KotaSAS Station</text>

        {/* Sultan Haji Ahmad Shah Agricultural Park */}
        <circle cx="336" cy="568" r="3.5" fill="rgba(250,248,240,0.35)" />
        <text x="344" y="566" fill="rgba(250,248,240,0.4)" fontFamily="ui-sans-serif,system-ui,sans-serif" fontSize="6.5" letterSpacing="0.3">Sultan Haji Ahmad Shah</text>
        <text x="344" y="575" fill="rgba(250,248,240,0.4)" fontFamily="ui-sans-serif,system-ui,sans-serif" fontSize="6.5" letterSpacing="0.3">Agricultural Park</text>

        {/* TAR UMT */}
        <circle cx="276" cy="606" r="3.5" fill="rgba(250,248,240,0.35)" />
        <text x="284" y="604" fill="rgba(250,248,240,0.38)" fontFamily="ui-sans-serif,system-ui,sans-serif" fontSize="6.5" letterSpacing="0.3">Tunku Abdul Rahman</text>
        <text x="284" y="613" fill="rgba(250,248,240,0.38)" fontFamily="ui-sans-serif,system-ui,sans-serif" fontSize="6.5" letterSpacing="0.3">University (TAR UMT)</text>

        {/* Starting Trail Bukit Tokki */}
        <text x="552" y="622" fill="rgba(250,248,240,0.35)" fontFamily="ui-sans-serif,system-ui,sans-serif" fontSize="6.5" letterSpacing="0.3" textAnchor="end">Starting Trail</text>
        <text x="552" y="631" fill="rgba(250,248,240,0.35)" fontFamily="ui-sans-serif,system-ui,sans-serif" fontSize="6.5" letterSpacing="0.3" textAnchor="end">Bukit Tokki</text>

        {/* Batu Hitam */}
        <text x="568" y="602" fill="rgba(250,248,240,0.38)" fontFamily="ui-sans-serif,system-ui,sans-serif" fontSize="6.5" letterSpacing="0.3" textAnchor="end">Batu Hitam</text>

        {/* Intl. Islamic Uni. M'sia (IIUM) */}
        <circle cx="286" cy="682" r="3" fill="rgba(250,248,240,0.35)" />
        <text x="294" y="680" fill="rgba(250,248,240,0.38)" fontFamily="ui-sans-serif,system-ui,sans-serif" fontSize="6.5" letterSpacing="0.3">Intl. Islamic</text>
        <text x="294" y="689" fill="rgba(250,248,240,0.38)" fontFamily="ui-sans-serif,system-ui,sans-serif" fontSize="6.5" letterSpacing="0.3">Uni. M'sia (IIUM)</text>

        {/* IIUM Medical Centre — cross icon */}
        <rect x="282" y="705" width="9" height="9" rx="1" fill="none" stroke="rgba(244,184,134,0.5)" strokeWidth="1.2" />
        <line x1="286.5" y1="705" x2="286.5" y2="714" stroke="rgba(244,184,134,0.5)" strokeWidth="1.2" />
        <line x1="282" y1="709.5" x2="291" y2="709.5" stroke="rgba(244,184,134,0.5)" strokeWidth="1.2" />
        <text x="295" y="713" fill="rgba(250,248,240,0.38)" fontFamily="ui-sans-serif,system-ui,sans-serif" fontSize="6.5" letterSpacing="0.3">IIUM Medical Centre</text>

        {/* Intl. Islamic School M'sia */}
        <circle cx="258" cy="744" r="3" fill="rgba(250,248,240,0.32)" />
        <text x="266" y="748" fill="rgba(250,248,240,0.38)" fontFamily="ui-sans-serif,system-ui,sans-serif" fontSize="6.5" letterSpacing="0.3">Intl. Islamic School M'sia</text>

        {/* Kuantan Medical Centre */}
        <rect x="222" y="778" width="9" height="9" rx="1" fill="none" stroke="rgba(244,184,134,0.5)" strokeWidth="1.2" />
        <line x1="226.5" y1="778" x2="226.5" y2="787" stroke="rgba(244,184,134,0.5)" strokeWidth="1.2" />
        <line x1="222" y1="782.5" x2="231" y2="782.5" stroke="rgba(244,184,134,0.5)" strokeWidth="1.2" />
        <text x="235" y="786" fill="rgba(250,248,240,0.38)" fontFamily="ui-sans-serif,system-ui,sans-serif" fontSize="6.5" letterSpacing="0.3">Kuantan Medical Centre</text>

        {/* East Coast Mall */}
        <rect x="460" y="698" width="9" height="9" rx="1.5" fill="#E53E3E" />
        <text x="471" y="706" fill="rgba(250,248,240,0.48)" fontFamily="ui-sans-serif,system-ui,sans-serif" fontSize="6.5" letterSpacing="0.3">East Coast Mall</text>

        {/* Kuantan City Mall */}
        <rect x="450" y="720" width="9" height="9" rx="1.5" fill="#E53E3E" />
        <text x="461" y="728" fill="rgba(250,248,240,0.48)" fontFamily="ui-sans-serif,system-ui,sans-serif" fontSize="6.5" letterSpacing="0.3">Kuantan City Mall</text>

        {/* Berjaya Megamall */}
        <rect x="398" y="760" width="9" height="9" rx="1.5" fill="#E53E3E" />
        <text x="409" y="768" fill="rgba(250,248,240,0.48)" fontFamily="ui-sans-serif,system-ui,sans-serif" fontSize="6.5" letterSpacing="0.3">Berjaya Megamall</text>

        {/* Regent Intl. School */}
        <circle cx="390" cy="790" r="3" fill="rgba(250,248,240,0.32)" />
        <text x="398" y="794" fill="rgba(250,248,240,0.38)" fontFamily="ui-sans-serif,system-ui,sans-serif" fontSize="6.5" letterSpacing="0.3">Regent Intl. School</text>

        {/* Kuantan Parade */}
        <rect x="384" y="808" width="9" height="9" rx="1.5" fill="#E53E3E" />
        <text x="395" y="816" fill="rgba(250,248,240,0.48)" fontFamily="ui-sans-serif,system-ui,sans-serif" fontSize="6.5" letterSpacing="0.3">Kuantan Parade</text>

        {/* Kuantan 188 */}
        <circle cx="428" cy="840" r="3" fill="rgba(244,184,134,0.58)" />
        <text x="436" y="844" fill="rgba(250,248,240,0.42)" fontFamily="ui-sans-serif,system-ui,sans-serif" fontSize="6.5" letterSpacing="0.3">Kuantan 188</text>

        {/* Zoo Teruntum */}
        <circle cx="506" cy="804" r="3" fill="rgba(250,248,240,0.32)" />
        <text x="514" y="808" fill="rgba(250,248,240,0.38)" fontFamily="ui-sans-serif,system-ui,sans-serif" fontSize="6.5" letterSpacing="0.3">Zoo Teruntum</text>

        {/* Mahkota Golf & Country Club */}
        <circle cx="82" cy="736" r="3" fill="rgba(250,248,240,0.32)" />
        <text x="90" y="734" fill="rgba(250,248,240,0.38)" fontFamily="ui-sans-serif,system-ui,sans-serif" fontSize="6.5" letterSpacing="0.3">Mahkota Golf</text>
        <text x="90" y="743" fill="rgba(250,248,240,0.38)" fontFamily="ui-sans-serif,system-ui,sans-serif" fontSize="6.5" letterSpacing="0.3">&amp; Country Club</text>

      </svg>
      <figcaption className="sr-only">
        Illustrated map showing BeachFront Balok on Jalan Beserah, Kuantan — with ECRL KotaSAS Station, Proposed New Kuantan International Airport, major highways, and surrounding landmarks.
      </figcaption>
    </figure>
  );
}
