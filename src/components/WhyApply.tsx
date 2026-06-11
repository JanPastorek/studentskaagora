import { Check } from "lucide-react";
import { loadContent, type WhyApplyData } from "@/lib/content";
import { asset } from "@/lib/asset";
import { Reveal } from "./Reveal";
import { Markdown } from "./Markdown";

export function WhyApply() {
  const { data, body } = loadContent<WhyApplyData>("why-apply");

  return (
    <section className="bg-agora-cream pb-12 lg:pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="bg-agora-box-cream rounded-lg p-8 md:p-12 lg:p-16 flex flex-col md:flex-row relative overflow-hidden shadow-sm">
          <div className="w-full md:w-2/3 relative z-10">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-agora-orange/50" />
              <div className="w-1 h-1 rounded-full bg-agora-orange/50" />
              <div className="h-px w-8 bg-agora-orange/50" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 md:mb-8">
              <span className="text-agora-blue">{data.headingBlue} </span>
              <span className="text-agora-orange italic">{data.headingOrange}</span>
            </h2>

            <ul className="space-y-3 md:space-y-4 mb-8">
              {data.points.map((point) => (
                <li key={point} className="flex items-start gap-4">
                  <span className="font-serif text-agora-orange text-lg leading-tight mt-0.5 shrink-0">—</span>
                  <span className="text-gray-800 leading-snug">{point}</span>
                </li>
              ))}
            </ul>

            {body && (
              <Markdown className="text-sm italic leading-relaxed text-gray-600 max-w-lg">
                {body}
              </Markdown>
            )}
          </div>

          <div className="hidden md:block absolute right-16 top-1/2 -translate-y-1/2 w-[300px] opacity-90 z-0">
            <img src={asset(data.image)} alt={data.imageAlt} className="w-full h-auto" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
