import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { Amenities } from "@/components/sections/Amenities";
import { Product } from "@/components/sections/Product";
import { ROI } from "@/components/sections/ROI";
import { Trust } from "@/components/sections/Trust";
import { Features } from "@/components/sections/Features";
import { Location } from "@/components/sections/Location";
import { FAQ } from "@/components/sections/FAQ";
import { LeadForm } from "@/components/sections/LeadForm";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <main id="top" className="flex w-full flex-1 flex-col">
      <Hero />
      <Marquee />
      <Amenities />
      <Product />
      <ROI />
      <Trust />
      <Features />
      <Location />
      <FAQ />
      <LeadForm />
      <CTA />
    </main>
  );
}
