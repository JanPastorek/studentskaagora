import { loadContent, type TopicsData } from "@/lib/content";
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
                  <div className={`absolute inset-0 [backface-visibility:hidden] ${frontBg} ${frontText} p-4 sm:p-5 flex flex-col border-t-[3px] border-black/10`}>
                    <span className="font-serif text-[0.65rem] italic opacity-40 self-end">{ROMAN[i] ?? i + 1}.</span>
                    <div className="mt-auto">
                      <h3 className="font-serif text-base sm:text-xl font-semibold leading-tight mb-2">{topic.name}</h3>
                      <p className="font-serif text-[0.65rem] sm:text-xs italic leading-snug opacity-55 hidden sm:block">{topic.question}</p>
                    </div>
                  </div>
                  <div className={`flip-back absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] ${backBg} ${backText} p-4 sm:p-6 flex flex-col justify-between`}>
                    <span className="font-serif text-xs italic opacity-50 self-end">{ROMAN[i] ?? i + 1}.</span>
                    <p className="font-serif text-sm sm:text-base italic leading-relaxed text-center">{topic.question}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
