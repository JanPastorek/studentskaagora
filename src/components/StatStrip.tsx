import { MapPin, User, BookOpen, Euro } from "lucide-react";
import { loadContent, type StatsData } from "@/lib/content";
import { Reveal } from "./Reveal";

const ICONS = [MapPin, User, BookOpen, Euro];
const ICON_BG: Record<string, string> = {
  blue: "bg-agora-blue",
  orange: "bg-agora-orange",
  yellow: "bg-agora-yellow",
};

export function StatStrip() {
  const { data } = loadContent<StatsData>("stats");

  return (
    <section className="bg-agora-cream border-b border-gray-300 relative z-20">
      <div className="max-w-7xl mx-auto px-6 py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {data.stats.map((stat, i) => {
            const Icon = ICONS[i] ?? MapPin;
            const bgClass = ICON_BG[stat.iconColor] ?? "bg-agora-blue";
            return (
              <Reveal key={stat.heading} delay={i * 100} className="flex items-start gap-4 border-b sm:border-b-0 lg:border-l lg:first:border-l-0 border-gray-200 pb-6 sm:pb-0 lg:pl-8 lg:first:pl-0 last:border-b-0">
                <div className={`flex-shrink-0 w-12 h-12 ${bgClass} rounded-full flex items-center justify-center text-white`}>
                  <Icon size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-agora-blue mb-1">{stat.heading}</h4>
                  {stat.price ? (
                    <p className="font-serif text-3xl text-gray-800 mt-1">{stat.price}</p>
                  ) : (
                    <p className="text-sm text-gray-600 leading-tight whitespace-pre-line">{stat.text}</p>
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
