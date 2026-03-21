import { Hero } from "@/components/home/Hero";
import { HorizontalScroll } from "@/components/home/HorizontalScroll";
import { ServiceRows } from "@/components/home/ServiceRows";
import { SplitSection } from "@/components/home/SplitSection";
import { BlogPreview } from "@/components/home/BlogPreview";
import { PartnersMarquee } from "@/components/home/PartnersMarquee";
import { CTASection } from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <HorizontalScroll />
      <ServiceRows />
      <SplitSection />
      <BlogPreview />
      <PartnersMarquee />
      <CTASection />
    </>
  );
}
