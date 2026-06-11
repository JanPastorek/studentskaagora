import { ArrowRight } from "lucide-react";
import { loadContent, type HeroData } from "@/lib/content";
import { asset } from "@/lib/asset";
import { Navbar } from "./Navbar";
import { Reveal } from "./Reveal";

export function Hero() {
  const { data } = loadContent<HeroData>("hero");

  function renderWithOrange(text: string, orangeWords: string[]) {
    const words = text.split(" ");
    return words.map((word, i) => {
      const isOrange = orangeWords.some((ow) => word === ow || word.startsWith(ow));
      return (
        <span key={i} className={isOrange ? "text-agora-orange" : undefined}>
          {word}
          {i < words.length - 1 ? " " : ""}
        </span>
      );
    });
  }

  const lines = [data.titleLine1, data.titleLine2, data.titleLine3];

  return (
    <main className="bg-agora-blue text-white relative overflow-hidden flex flex-col">
      <Navbar />

      <div className="flex-1 w-full max-w-7xl mx-auto px-6 pt-6 md:pt-10 lg:pt-12 flex flex-col lg:flex-row items-stretch relative z-10">
        <Reveal className="w-full lg:w-[45%] pr-0 lg:pr-8 pb-8 lg:pb-14 flex flex-col justify-center">
          <span className="text-agora-orange text-xs font-bold tracking-[0.2em] uppercase mb-4 md:mb-5 block">
            {data.tagline}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] font-bold leading-[1.15] mb-4 md:mb-5">
            {lines.map((line, i) => (
              <span key={i}>
                {renderWithOrange(line, data.titleOrangeWords ?? [])}
                {i < lines.length - 1 && <br />}
              </span>
            ))}
          </h2>
          <p className="text-sm sm:text-base md:text-lg font-light text-gray-200 mb-5 max-w-md leading-relaxed">
            {data.subtitle}
          </p>
          <p className="text-xs sm:text-sm font-light text-gray-300 mb-6 md:mb-8">{data.details}</p>
          <a
            href={data.button.href}
            className="inline-flex items-center justify-center gap-3 bg-agora-orange text-white font-medium px-8 py-3.5 rounded hover:bg-orange-700 hover:gap-4 transition-all mb-8 md:mb-10 w-full sm:w-auto sm:self-start"
          >
            {data.button.label} <ArrowRight size={16} />
          </a>
          <p className="font-serif text-base md:text-lg italic font-light text-gray-300">
            {renderWithOrange(data.quote, data.quoteOrangeWords ?? [])}
          </p>
        </Reveal>

        <Reveal
          delay={150}
          className="w-full lg:w-[55%] relative mt-6 lg:mt-0 flex justify-center lg:justify-end items-end"
        >
          <img
            src={asset(data.heroImage)}
            alt={data.heroImageAlt}
            className="relative z-10 w-4/5 sm:w-2/3 max-h-[320px] sm:max-h-[400px] lg:w-[130%] lg:max-w-none lg:max-h-none lg:shrink-0 object-contain object-bottom"
          />
        </Reveal>
      </div>
    </main>
  );
}
