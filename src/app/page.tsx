import { Hero } from "@/components/Hero";
import { StatStrip } from "@/components/StatStrip";
import { AboutSection } from "@/components/AboutSection";
import { TopicsSection } from "@/components/TopicsSection";
import { Team } from "@/components/Team";
import { WhyApply } from "@/components/WhyApply";
import { Apply } from "@/components/Apply";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatStrip />
      <AboutSection />
      <TopicsSection />
      <Team />
      <WhyApply />
      <Apply />
      <Footer />
    </>
  );
}
