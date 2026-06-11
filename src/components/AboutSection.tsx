import { loadContent, type AboutData } from "@/lib/content";
import { asset } from "@/lib/asset";
import { Reveal } from "./Reveal";
import { Markdown } from "./Markdown";

export function AboutSection() {
  const { data, body } = loadContent<AboutData>("about");

  return (
    <section id="o-programe" className="bg-agora-cream py-12 lg:py-20 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-10 lg:gap-16 relative z-10">
        <Reveal className="w-full lg:w-1/2">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-agora-orange/50" />
            <div className="w-1 h-1 rounded-full bg-agora-orange/50" />
            <div className="h-px w-8 bg-agora-orange/50" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 md:mb-8">
            <span className="text-agora-blue">{data.headingBlue} </span>
            <span className="text-agora-orange italic">{data.headingOrange}</span>
          </h2>
          <Markdown className="text-gray-800 space-y-5 leading-relaxed">{body}</Markdown>
        </Reveal>
        <Reveal delay={150} className="w-full lg:w-1/2 flex justify-center items-center">
          <img
            src={asset(data.image)}
            alt={data.imageAlt}
            className="w-full max-w-[420px] lg:max-w-[480px] h-auto"
          />
        </Reveal>
      </div>
    </section>
  );
}
