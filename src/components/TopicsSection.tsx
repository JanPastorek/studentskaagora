import { loadContent, type TopicsData, type SeminarsData } from "@/lib/content";
import { Reveal } from "./Reveal";

const BG_MAP: Record<string, string> = {
  "card-cream": "bg-agora-card-cream",
  blue: "bg-agora-blue",
  yellow: "bg-agora-yellow",
  "orange-dark": "bg-[#db5c33]",
};
const TEXT_MAP: Record<string, string> = {
  white: "text-white",
  dark: "text-gray-900",
};
const ROMAN = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];

export function TopicsSection() {
  const { data } = loadContent<TopicsData>("topics");
  const { data: seminarsData } = loadContent<SeminarsData>("seminars");

  return (
    <section id="temy" className="bg-agora-cream py-12 lg:py-16 pb-16 lg:pb-24 border-t border-[#e2d5c8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Reveal>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-8 md:mb-10">
            <span className="text-agora-blue">{data.headingBlue} </span>
            <span className="text-agora-orange italic">{data.headingOrange}</span>
          </h2>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {data.topics.map((topic, i) => {
            const frontBg = BG_MAP[topic.bgFront] ?? "bg-agora-card-cream";
            const frontText = TEXT_MAP[topic.textFront] ?? "text-gray-900";
            const backBg = BG_MAP[topic.bgBack] ?? "bg-agora-blue";
            const backText = TEXT_MAP[topic.textBack] ?? "text-white";
            return (
              <Reveal key={topic.name} delay={(i % 5) * 60} className="flip-card group aspect-square [perspective:1000px]">
                <div className="flip-inner relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  <div className={`absolute inset-0 [backface-visibility:hidden] ${frontBg} ${frontText} p-5 sm:p-6 flex flex-col border-t-[3px] border-black/10`}>
                    {/* Decorative index numeral: aria-hidden since it carries no information beyond the card's position */}
                    <span aria-hidden="true" className="font-serif text-sm sm:text-base italic self-end">{ROMAN[i] ?? i + 1}.</span>
                    <div className="mt-auto">
                      <h3 className="font-serif text-xl sm:text-2xl font-semibold leading-tight mb-3">{topic.name}</h3>
                      {/* Full opacity (not dimmed): some front/back color pairings (e.g. dark text on orange-dark)
                          only clear the 4.5:1 contrast minimum at full opacity. */}
                      <p className="font-serif text-sm sm:text-base italic leading-snug">{topic.question}</p>
                    </div>
                  </div>
                  <div className={`flip-back absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] ${backBg} ${backText} p-5 sm:p-6 flex flex-col justify-between`}>
                    <span aria-hidden="true" className="font-serif text-base italic self-end">{ROMAN[i] ?? i + 1}.</span>
                    <p className="font-serif text-base sm:text-xl italic leading-relaxed text-center">{topic.question}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Separator: visually distinguishes the 3 seminars below from the 10 tutorial cards above */}
        <Reveal className="flex items-center gap-4 mt-12 mb-8 md:mt-16 md:mb-10">
          <div className="h-px flex-1 bg-agora-blue/15" />
          <span className="font-serif italic text-sm sm:text-base text-agora-blue/70 tracking-wide whitespace-nowrap">
            {seminarsData.heading}
          </span>
          <div className="h-px flex-1 bg-agora-blue/15" />
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {seminarsData.seminars.map((seminar, i) => (
            <Reveal key={seminar.number} delay={i * 60} className="rounded-lg border border-agora-blue/15 bg-white/60 p-5 sm:p-6">
              <span className="font-serif italic text-xs sm:text-sm text-orange-700">Seminár {seminar.number}</span>
              <h3 className="font-serif text-lg sm:text-xl font-semibold leading-tight mt-1 mb-2 text-gray-900">
                {seminar.title}
              </h3>
              <p className="text-sm text-gray-600">{seminar.tutor}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
