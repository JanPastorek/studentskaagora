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
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] font-semibold leading-[1.12] mb-5 md:mb-6">
            {lines.map((line, i) => (
              <span key={i}>
                {renderWithOrange(line, data.titleOrangeWords ?? [])}
                {i < lines.length - 1 && <br />}
              </span>
            ))}
          </h2>
          <p className="font-serif text-sm sm:text-base md:text-lg italic text-gray-300 mb-5 max-w-md leading-relaxed">
            {data.subtitle}
          </p>
          <p className="text-xs sm:text-sm tracking-[0.12em] text-gray-400 uppercase mb-7 md:mb-9">{data.details}</p>
          <a
            href={data.button.href}
            className="inline-flex items-center justify-center gap-3 bg-agora-orange text-white font-semibold px-8 py-3.5 rounded hover:bg-orange-700 hover:gap-4 transition-all mb-10 md:mb-12 w-full sm:w-auto sm:self-start tracking-wide"
          >
            {data.button.label} <ArrowRight size={15} />
          </a>
          <blockquote className="border-l-2 border-agora-orange/50 pl-5">
            <p className="font-serif text-base md:text-lg italic text-gray-300 leading-relaxed">
              {renderWithOrange(data.quote, data.quoteOrangeWords ?? [])}
            </p>
          </blockquote>
        </Reveal>

        <Reveal
          delay={150}
          className="w-full lg:w-[55%] relative mt-6 lg:mt-0 flex justify-center lg:justify-end items-end"
        >
          <img
            src={asset(data.heroImage)}
            alt={data.heroImageAlt}
            className="relative z-10 w-4/5 sm:w-2/3 max-h-[300px] sm:max-h-[380px] lg:w-auto lg:max-w-[520px] lg:max-h-none object-contain object-bottom"
          />
        </Reveal>
      </div>
    </main>
  );
}
