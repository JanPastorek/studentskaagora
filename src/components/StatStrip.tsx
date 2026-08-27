import { MapPin, Users, BookOpen, Euro, GraduationCap } from "lucide-react";
import { loadContent, type StatsData } from "@/lib/content";
import { Reveal } from "./Reveal";

const ICONS = [MapPin, Users, BookOpen, GraduationCap, Euro];

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
        {/*
          Plain divs, not <dl>/<dt>/<dd>: each item mixes an icon in with the
          heading/value, which the HTML spec doesn't allow inside a <dl> (an
          automated accessibility audit flagged the old markup for this).
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-y-8 gap-x-0 sm:divide-x-0 lg:divide-x divide-[#d6c9b8]">
          {data.stats.map((stat, i) => {
            const Icon = ICONS[i] ?? MapPin;
            const ringStyle = RING_STYLE[stat.iconColor] ?? RING_STYLE.blue;
            return (
              <Reveal key={stat.heading} delay={i * 80} className="flex items-start gap-4 lg:px-6 lg:first:pl-0 lg:last:pr-0">
                <div className={`flex-shrink-0 w-11 h-11 rounded-full border-2 ${ringStyle} flex items-center justify-center`}>
                  <Icon size={17} strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-sm font-bold tracking-[0.15em] uppercase text-agora-orange mb-2">
                    {stat.heading}
                  </div>
                  {stat.price !== undefined ? (
                    <div className="font-serif text-4xl font-semibold text-agora-blue leading-none">
                      {stat.price}
                      {stat.priceUnit && (
                        <span className="text-lg font-normal ml-1">{stat.priceUnit}</span>
                      )}
                    </div>
                  ) : (
                    <div className="font-serif text-base text-gray-700 leading-relaxed whitespace-pre-line">{stat.text}</div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
