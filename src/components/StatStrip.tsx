import { MapPin, Users, BookOpen, Euro } from "lucide-react";
import { loadContent, type StatsData } from "@/lib/content";
import { Reveal } from "./Reveal";

const ICONS = [MapPin, Users, BookOpen, Euro];

const RING_STYLE: Record<string, string> = {
  blue:   "border-agora-blue   text-agora-blue",
  orange: "border-agora-orange text-agora-orange",
  yellow: "border-agora-yellow text-amber-700",
};

export function StatStrip() {
  const { data } = loadContent<StatsData>("stats");

  return (
    <section className="bg-agora-cream border-y border-[#d6c9b8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-12">
        <dl className="flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-[#d6c9b8]">
          {data.stats.map((stat, i) => {
            const Icon = ICONS[i] ?? MapPin;
            const ringStyle = RING_STYLE[stat.iconColor] ?? RING_STYLE.blue;
            return (
              <Reveal key={stat.heading} delay={i * 80} className="flex-1 px-0 sm:px-8 first:pl-0 last:pr-0 py-7 sm:py-0 flex items-start gap-4">
                <div className={`flex-shrink-0 w-11 h-11 rounded-full border-2 ${ringStyle} flex items-center justify-center`}>
                  <Icon size={17} strokeWidth={1.5} />
                </div>
                <div>
                  <dt className="text-sm font-bold tracking-[0.15em] uppercase text-agora-orange mb-2">
                    {stat.heading}
                  </dt>
                  {stat.price ? (
                    <dd className="font-serif text-4xl font-semibold text-agora-blue leading-none">{stat.price}</dd>
                  ) : (
                    <dd className="font-serif text-base text-gray-700 leading-relaxed whitespace-pre-line">{stat.text}</dd>
                  )}
                </div>
              </Reveal>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
