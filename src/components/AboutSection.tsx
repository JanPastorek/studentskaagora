import { loadContent, type AboutData } from "@/lib/content";
import { asset } from "@/lib/asset";
import { Reveal } from "./Reveal";
import { Markdown } from "./Markdown";

export function AboutSection() {
  const { data, body } = loadContent<AboutData>("about");

  return (
    <section id="o-programe" className="bg-agora-cream py-20 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16 relative z-10">
        <Reveal className="w-full lg:w-1/2">
          <h2 className="font-serif text-5xl md:text-6xl font-bold mb-8">
            <span className="text-agora-blue">{data.headingBlue} </span>
            <span className="text-agora-orange">{data.headingOrange}</span>
          </h2>
          <Markdown className="text-gray-800 space-y-6 font-light leading-relaxed">{body}</Markdown>
        </Reveal>
        <Reveal delay={150} className="w-full lg:w-1/2 flex justify-center items-center">
          <img
            src={asset(data.image)}
            alt={data.imageAlt}
            className="w-full max-w-[480px] h-auto"
          />
        </Reveal>
      </div>
    </section>
  );
}
