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
    subtitle: "A freehold coastline on Kuantan's quiet east side.",
    subtitlePrice: "Studios from RM\u00A0380K.",
    ctaPrimaryLabel: "Request Price List",
    ctaSecondaryLabel: "See ROI Breakdown",
  },
  heroStats: [
    { value: "RM 380K", label: "Entry price" },
    { value: "10–13%", label: "Projected ROI" },
    { value: "Dual-Key", label: "Smart layout" },
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
      { number: "1", label: "Coastline" },
    ],
    videoSrc: "/video/amenities.mp4",
    cards: [
      {
        title: "30+ Resort Amenities",
        body: "Sky Gym, Yoga Deck, BBQ area, Eco Trail — over 30 facilities across two full levels.",
        img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1600&q=80",
        alt: "Resort amenities — Sky Gym, Yoga Deck, BBQ area and Eco Trail across two facility levels",
      },
      {
        title: "Fully Furnished",
        body: "Aircon, fridge, sofa, dining set, bed frame and mattress included. Selected units come with a Jacuzzi.",
        img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1600&q=80",
        alt: "Fully furnished beachfront apartment — aircon, fridge, sofa, dining set and bed included",
      },
      {
        title: "Dual-Key Configuration",
        body: "2-bed and 3-bed units split into two lockable halves. Stay in one, rent the other.",
        img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80",
        alt: "Dual-key layout — two lockable halves, stay in one and rent the other",
        featured: true,
        featuredLabel: "Investor favourite",
      },
      {
        title: "3-Tier Security",
        body: "24-hour guards, CCTV on every floor, and resident-only access zones.",
        img: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1600&q=80",
        alt: "3-tier security — 24-hour guards, CCTV on every floor, resident-only access zones",
      },
      {
        title: "GreenRE Silver Certified",
        body: "EV charging bays, rainwater harvesting and energy-efficient design.",
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
    title: "A track record the market has already priced.",
    lead: "A Bursa-listed developer. Three decades, ten thousand homes, delivered on time. Buyers of earlier phases are already sitting on paper gains.",
    stats: [
      { value: "30+", label: "Years in market" },
      { value: "10,000+", label: "Homes delivered on-time" },
      { value: "100%", label: "Phase 1 & 2 on-time handover" },
    ],
    subsale: [
      { size: "Studio suite (541 sf)", spa: "RM 354K", subsale: "RM 403K", gain: "+13.7%" },
      { size: "Dual-key suite (680 sf)", spa: "RM 468K", subsale: "RM 543K", gain: "+16.1%" },
      { size: "Sea-view residence (917 sf)", spa: "RM 609K", subsale: "RM 638K", gain: "+4.8%" },
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
    title: "Your gateway to Balok Beach, newly within reach.",
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
    eyebrow: "09 · Questions, answered",
    title: "Everything you want to know.",
    lead: "Still have questions? Consultants reply on WhatsApp in real time.",
    items: [
      {
        q: "Residential or commercial title?",
        a: "Units are held under a commercial title regulated by the Housing Development Act (HDA) — buyers keep the same legal protections as residential titles, with the flexibility commercial tenure offers. The land itself is freehold.",
      },
      {
        q: "When is the handover?",
        a: "Launch is scheduled for May 2026. Vacant possession is delivered within 48 months of the SPA, in line with the developer's consistent on-time track record.",
      },
      {
        q: "Do I need to visit Kuantan to buy?",
        a: "No. Private virtual briefings are arranged on request, and the ECRL line will make Kuantan a single-ride journey from the Klang Valley by 2026.",
      },
      {
        q: "How does short-stay management work?",
        a: "Accredited short-stay operators handle marketing, bookings, turnovers and guest support. Owners earn passive income on a 70/30 profit split, with no hands-on involvement required.",
      },
      {
        q: "What's the loan margin, and can foreigners buy?",
        a: "Malaysian citizens can typically secure up to 90% financing via panel banks. Foreign purchases are allowed subject to the Pahang state minimum price threshold and standard approvals.",
      },
      {
        q: "What's included at handover?",
        a: "Fully furnished: air-conditioning, fridge, sofa, bed, wardrobe, smart lock and a fit-out designed for short-stay readiness. Select unit types add a private jacuzzi.",
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
      "Private jacuzzi on the deck. A small number, quietly allocated.",
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
  "Mediterranean Resort Facilities",
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
