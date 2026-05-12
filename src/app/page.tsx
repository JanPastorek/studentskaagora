import { Hero } from "@/components/Hero";
import { OverviewCards } from "@/components/OverviewCards";
import { TopicsList } from "@/components/TopicsList";
import { WhyAgora } from "@/components/WhyAgora";
import { Faces } from "@/components/Faces";
import { WhyApply } from "@/components/WhyApply";
import { Apply } from "@/components/Apply";

export default function HomePage() {
  return (
    <main className="w-full">
      <Hero />
      <OverviewCards />
      <TopicsList />
      <WhyAgora />
      <Faces />
      <WhyApply />
      <Apply />
    </main>
  );
}
