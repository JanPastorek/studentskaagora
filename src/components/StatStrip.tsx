import { loadContent, type StatsData } from "@/lib/content";
import { Reveal } from "./Reveal";

export function StatStrip() {
  const { data } = loadContent<StatsData>("stats");

  return (
    <section className="bg-agora-cream border-y border-[#d6c9b8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-12">
        <dl className="flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-[#d6c9b8]">
          {data.stats.map((stat, i) => (
            <Reveal key={stat.heading} delay={i * 80} className="flex-1 px-0 sm:px-8 first:pl-0 last:pr-0 py-7 sm:py-0">
              <dt className="text-[0.65rem] font-bold tracking-[0.22em] uppercase text-agora-orange mb-3">
                {stat.heading}
              </dt>
              {stat.price ? (
                <dd className="font-serif text-5xl font-semibold text-agora-blue leading-none">{stat.price}</dd>
              ) : (
                <dd className="font-serif text-base text-gray-700 leading-relaxed whitespace-pre-line">{stat.text}</dd>
              )}
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
