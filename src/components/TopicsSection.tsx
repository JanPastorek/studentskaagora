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

export function TopicsSection() {
  const { data } = loadContent<TopicsData>("topics");

  return (
    <section id="temy" className="bg-agora-cream py-12 lg:py-16 pb-16 lg:pb-24 border-t border-[#e2d5c8]">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 md:mb-10">
            <span className="text-agora-blue">{data.headingBlue} </span>
            <span className="text-agora-orange">{data.headingOrange}</span>
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
                  <div className={`absolute inset-0 [backface-visibility:hidden] ${frontBg} ${frontText} p-4 sm:p-6 flex flex-col justify-start`}>
                    <span className="font-serif text-xl sm:text-2xl mb-1 block">{i + 1}.</span>
                    <h3 className="font-serif text-base sm:text-2xl font-bold leading-tight">{topic.name}</h3>
                    <p className="front-question text-xs sm:text-sm font-light leading-snug mt-1 sm:mt-2 opacity-70 hidden sm:block">{topic.question}</p>
                  </div>
                  <div className={`flip-back absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] ${backBg} ${backText} p-4 sm:p-6 flex items-center justify-center text-center`}>
                    <p className="font-serif text-sm sm:text-lg italic leading-snug">{topic.question}</p>
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
