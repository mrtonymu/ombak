// Central content source.
// NOTE on constraints: no developer name, no project name, no logos.
// All Kuantan / Pahang / ECRL references are allowed.
// Specific figures below are placeholders aligned to the balokbeach.com
// competitive template — replace with the developer-supplied SPA sheet once
// confirmed.

export const SITE = {
  whatsappNumber: "601123831228",
  whatsappPrefill:
    "Hi, I'd like to know more about the beachfront residences in Kuantan.",
  hero: {
    eyebrow: "Launching soon · Kuantan, Pahang",
    title: "Wake where the ocean speaks first.",
    subtitle: "Freehold. Beachfront. The east coast's last quiet stretch.",
    subtitlePrice: "Studios from RM\u00A0380K.",
    ctaPrimaryLabel: "Request Price List",
    ctaSecondaryLabel: "See ROI Breakdown",
  },
  heroStats: [
    { value: "RM 380K", label: "Entry price" },
    { value: "10–13%", label: "Projected ROI" },
    { value: "Dual-Key", label: "Two income streams" },
    { value: "Freehold", label: "Title tenure" },
  ],
  amenities: {
    eyebrow: "02 · Resort living",
    title: "Beachfront, not as a view.",
    titleAccent: "As a floor plan",
    lead: "The main pool doesn't face the South China Sea — it borrows from it. A cascading lagoon at cloud level. Sky gyms above the horizon. A beach thirty seconds from your lift. Every morning begins with salt.",
    trinity: [
      { number: "30+", label: "Amenities" },
      { number: "2", label: "Facility decks" },
      { number: "1", label: "Private beach" },
    ],
    videoSrc: "/video/amenities.mp4",
    cards: [
      {
        title: "30+ Resort Amenities",
        body: "Forty-nine thousand square feet devoted entirely to living well — sky gym, yoga deck, jogging track, BBQ pits, lagoon pool. Two full levels. Nothing else.",
        img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1600&q=80",
        alt: "Resort amenities — Sky Gym, Yoga Deck, BBQ area and Eco Trail across two facility levels",
      },
      {
        title: "Fully Furnished",
        body: "Turn the key — it's ready. Aircon, bed, sofa, dining set, refrigerator. Check in the day you collect vacant possession. Select units add a private jacuzzi.",
        img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1600&q=80",
        alt: "Fully furnished beachfront apartment — aircon, fridge, sofa, dining set and bed included",
      },
      {
        title: "Dual-Key Configuration",
        body: "Two private spaces behind one front door. You keep the sea view. Your tenant covers the mortgage.",
        img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80",
        alt: "Dual-key layout — two lockable halves, stay in one and rent the other",
        featured: true,
        featuredLabel: "Investor favourite",
      },
      {
        title: "5-Tier Security",
        body: "Boom gate, CCTV at every lobby and lift, roving guards, floor access by card only. Five independent layers — strangers don't make it past the first.",
        img: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1600&q=80",
        alt: "5-tier security — boom gate, CCTV at every lobby and lift, roving guards, card-controlled floor access",
      },
      {
        title: "GreenRE Silver Certified",
        body: "Solar panels on the roof cut common-area power bills. EV chargers are already wired in. Grade 35 coastal concrete in the facade. GreenRE Silver — engineered to outlast the salt air.",
        img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1600&q=80",
        alt: "GreenRE Silver certified development — EV charging, rainwater harvesting, energy-efficient design",
        wide: true,
      },
    ] as Array<{
      title: string;
      body: string;
      img: string;
      alt: string;
      featured?: boolean;
      featuredLabel?: string;
      wide?: boolean;
    }>,
  },
  features: {
    eyebrow: "06 · Why here",
    title: "Built for a coastline that doesn't repeat itself.",
    items: [
      "Freehold beachfront title",
      "Direct private beach access",
      "180° unobstructed sea views",
      "Resort-grade facilities",
      "Dual-key configurations",
      "GreenRE-certified build",
      "Fully furnished handover",
      "Projected 10–13% ROI",
      "Retail podium at doorstep",
    ],
  },
  trust: {
    eyebrow: "05 · Track record",
    title: "A developer the market has already validated.",
    lead: "Bursa-listed. Thirty years building, ten thousand homes — every one handed over on schedule. The buyers from earlier phases on this same beach are already sitting on gains.",
    stats: [
      { value: "30+", label: "Years in market" },
      { value: "10,000+", label: "Homes delivered on-time" },
      { value: "100%", label: "Phase 1 & 2 on-time handover" },
    ],
    subsale: [
      { size: "Sea-view residence (917 sf)", spa: "RM 609K", subsale: "RM 638K", gain: "+4.8%" },
      { size: "Studio suite (541 sf)", spa: "RM 354K", subsale: "RM 403K", gain: "+13.7%" },
      { size: "Dual-key suite (680 sf)", spa: "RM 468K", subsale: "RM 543K", gain: "+16.1%" },
    ],
    footnote:
      "Transacted subsale prices from the adjacent earlier-phase beachfront development by the same developer. Past performance is not indicative of future returns.",
  },
  urgency: {
    earlyBirdCopy:
      "Pre-launch pricing ends when the building goes vertical. A quiet window, by invitation.",
    soldPercent: 42,
  },
  location: {
    eyebrow: "07 · Strategic location",
    title: "Your gateway to Balok Beach — and everything growing around it.",
    lead: "Sitting directly on Balok Beach in Beserah — minutes from Kuantan town, the region's industrial port, and an ECRL station now 89% complete. Kuantan is the second most visited destination in Pahang, drawing 2.21 million visitors a year.",
    anchors: [
      { value: "1 km", label: "Swiss-Garden Beach Resort" },
      { value: "11 km", label: "Kuantan town centre" },
      { value: "16 km", label: "Kuantan Port · MCKIP · Gebeng" },
      { value: "17 km", label: "ECRL KotaSAS · 89% complete" },
      { value: "2.21 M", label: "Annual visitors to Kuantan" },
      { value: "30 km", label: "Cherating Beach" },
    ],
  },
  faq: {
    eyebrow: "08 · Questions, answered",
    title: "Everything you want to know.",
    lead: "Still have questions? Consultants reply on WhatsApp in real time.",
    items: [
      {
        q: "How is the building protected from the sea?",
        a: "Several layers. The entrance road sits 5.2m above sea level, the ground floor at 5.3m — well above the 1.8m high-tide mark. A minimum 30m setback keeps the structure clear of the high-tide line, and existing seawalls run along the boundary as an added monsoon buffer. The façade uses Grade 35 concrete engineered for coastal conditions; steel railings carry anti-corrosive coatings throughout.",
      },
      {
        q: "Residential or commercial title?",
        a: "Buyers get the same legal protections as a residential purchase — the transaction is governed by the Housing Development Act (HDA). The land is freehold. The commercial classification is what unlocks short-stay rental flexibility that purely residential titles cannot offer.",
      },
      {
        q: "What's the loan margin, and can foreigners buy?",
        a: "Malaysians can secure up to 90% financing through our panel banks — entry from as low as RM 38K upfront on a studio. Foreign buyers are welcome; purchases are subject to the Pahang state minimum price threshold and standard foreign ownership approvals.",
      },
      {
        q: "What are the monthly maintenance fees?",
        a: "RM 0.484 per sq ft per month, inclusive of sinking fund — roughly RM 218 a month on a 450 sq ft studio. Solar panels offset common area electricity costs, keeping that figure lean. Well below the going rate for resort-managed seafront developments.",
      },
      {
        q: "Why can't I just wait and buy later?",
        a: "Because there is no later. BeachFront Balok is the third and final development phase on this stretch of Sg Karang — once complete, no further land here will be built on. Pre-launch pricing also closes the moment the building goes vertical. The window is now.",
      },
    ],
  },
} as const;

export type Unit = {
  id: string;
  code: string;
  name: string;
  sqft: string;
  beds: string;
  price: string;
  priceNote: string;
  roi: string;
  features: string[];
  bestFor: string;
  blurb: string;
  floorPlan: string;
  floorPlanAlt: string;
  badge?: "Most Popular" | "Limited";
  dualKey?: boolean;
};

export const UNITS: Unit[] = [
  {
    id: "type-a",
    code: "Type A",
    name: "Garden Studio",
    sqft: "450 sq ft",
    beds: "1 Bed · 1 Bath",
    price: "RM 380K",
    priceNote: "SPA Price (from)",
    roi: "7–10%",
    features: [
      "Garden View",
      "1 Car Park",
      "Fully Furnished",
      "Move-in Ready",
    ],
    bestFor: "First-time investors",
    blurb:
      "The opening move — a compact studio for rental yield or weekend use.",
    floorPlan: "/layouts/type-a.webp",
    floorPlanAlt:
      "Type A floor plan — 450 sqft Garden Studio, 1-bed 1-bath freehold beachfront unit at Balok Beach Kuantan",
  },
  {
    id: "type-a1",
    code: "Type A1",
    name: "Sea View Studio",
    sqft: "450 sq ft",
    beds: "1 Bed · 1 Bath",
    price: "RM 420K",
    priceNote: "SPA Price (from)",
    roi: "9–13%",
    features: [
      "Full Sea View",
      "1 Car Park",
      "Fully Furnished",
      "Sunrise-Facing",
    ],
    bestFor: "Weekend owners",
    blurb:
      "Same footprint, ocean out the window — a small decision with a loud view.",
    floorPlan: "/layouts/type-a1.webp",
    floorPlanAlt:
      "Type A1 floor plan — 450 sqft Sea View Studio, 1-bed 1-bath ocean-facing freehold unit at Balok Beach Kuantan",
  },
  {
    id: "type-b",
    code: "Type B",
    name: "Dual-Key Suite",
    sqft: "678 sq ft",
    beds: "2 Bed · 2 Bath · Dual-Key",
    price: "RM 548K",
    priceNote: "SPA Price (from)",
    roi: "9–13%",
    features: [
      "Sea View",
      "2 Car Parks",
      "Lockable Halves",
      "Fully Furnished",
    ],
    bestFor: "Max yield seekers",
    blurb:
      "Live in one key, rent the other. The sharpest yield per sqft in the stack.",
    floorPlan: "/layouts/type-b.webp",
    floorPlanAlt:
      "Type B floor plan — 678 sqft Dual-Key 2-Bed Suite with two lockable halves, freehold beachfront unit at Balok Beach Kuantan",
    badge: "Most Popular",
    dualKey: true,
  },
  {
    id: "type-c",
    code: "Type C",
    name: "Dual-Key Residence",
    sqft: "1,026 sq ft",
    beds: "3 Bed · 2 Bath · Dual-Key",
    price: "RM 833K",
    priceNote: "SPA Price (from)",
    roi: "7–10%",
    features: [
      "Corner Panoramic",
      "2 Car Parks",
      "Lockable Halves",
      "Fully Furnished",
    ],
    bestFor: "Family + income",
    blurb:
      "A corner-unit, three bedrooms, the ocean on two walls. For the long weekend that stretches.",
    floorPlan: "/layouts/type-c.webp",
    floorPlanAlt:
      "Type C floor plan — 1,026 sqft Dual-Key 3-Bed Residence, freehold beachfront unit at Balok Beach Kuantan",
    dualKey: true,
  },
  {
    id: "type-d",
    code: "Type D",
    name: "Jacuzzi Suite",
    sqft: "950 sq ft",
    beds: "3 Bed · 2 Bath",
    price: "RM 910K",
    priceNote: "SPA Price (from)",
    roi: "8–12%",
    features: [
      "Private Jacuzzi",
      "2 Car Parks",
      "Top-Tier Finish",
      "Fully Furnished",
    ],
    bestFor: "Top-tier buyers",
    blurb:
      "Private jacuzzi on the deck. Limited units — once they're gone, they're gone.",
    floorPlan: "/layouts/type-d.webp",
    floorPlanAlt:
      "Type D floor plan — 950 sqft Jacuzzi Suite with private balcony jacuzzi, freehold beachfront unit at Balok Beach Kuantan",
    badge: "Limited",
  },
];

export type RoiRow = {
  id: string;
  unit: string;
  price: string;
  nightly: string;
  occupancy: string;
  roi: string;
  cashflow: string;
};

export const ROI_TABLE: RoiRow[] = [
  {
    id: "type-a",
    unit: "Type A · Garden Studio",
    price: "RM 380K",
    nightly: "RM 250",
    occupancy: "50–70%",
    roi: "7–10%",
    cashflow: "RM 1,392",
  },
  {
    id: "type-a1",
    unit: "Type A1 · Sea View Studio",
    price: "RM 420K",
    nightly: "RM 300",
    occupancy: "50–70%",
    roi: "9–13%",
    cashflow: "RM 1,828",
  },
  {
    id: "type-b",
    unit: "Type B · Dual-Key Suite",
    price: "RM 548K",
    nightly: "RM 450",
    occupancy: "50–70%",
    roi: "9–13%",
    cashflow: "RM 2,883",
  },
  {
    id: "type-c",
    unit: "Type C · Dual-Key Residence",
    price: "RM 833K",
    nightly: "RM 550",
    occupancy: "50–70%",
    roi: "7–10%",
    cashflow: "RM 3,003",
  },
  {
    id: "type-d",
    unit: "Type D · Jacuzzi Suite",
    price: "RM 910K",
    nightly: "RM 650",
    occupancy: "50–70%",
    roi: "8–12%",
    cashflow: "RM 4,269",
  },
];

export const ROI_FOOTNOTE =
  "Monthly cashflow shown at 70% occupancy based on a 70/30 profit split with an accredited short-stay operator, net of maintenance fee and a 35-year loan at 3.7% p.a. ROI range reflects 50–70% occupancy scenarios. Actual returns vary with market conditions.";

export const MARQUEE_ITEMS = [
  "Freehold Land Title",
  "Direct Balok Beach Access",
  "Beachfront Resort Facilities",
  "Dual-Key Investment Units",
  "GreenRE Silver Certified",
  "Fully Furnished Handover",
  "Professional Short-Stay Management",
  "ECRL 2026 Growth Catalyst",
] as const;

export function whatsappUrl(message?: string, utmSource?: string) {
  const text = encodeURIComponent(message ?? SITE.whatsappPrefill);
  const base = `https://wa.me/${SITE.whatsappNumber}?text=${text}`;
  return utmSource ? `${base}&utm_source=${utmSource}` : base;
}
