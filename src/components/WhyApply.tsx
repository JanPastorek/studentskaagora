import { Check } from "lucide-react";
import { loadContent, type WhyApplyData } from "@/lib/content";
import { asset } from "@/lib/asset";
import { Reveal } from "./Reveal";
import { Markdown } from "./Markdown";

export function WhyApply() {
  const { data, body } = loadContent<WhyApplyData>("why-apply");

  return (
    <section className="bg-agora-cream pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="bg-agora-box-cream rounded-lg p-10 md:p-16 flex flex-col md:flex-row relative overflow-hidden shadow-sm">
          <div className="w-full md:w-2/3 relative z-10">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8">
              <span className="text-agora-blue">{data.headingBlue} </span>
              <span className="text-agora-orange">{data.headingOrange}</span>
            </h2>

            <ul className="space-y-4 mb-8">
              {data.points.map((point) => (
                <li key={point} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-agora-yellow flex items-center justify-center shrink-0">
                    <Check size={10} className="text-agora-blue" strokeWidth={3} />
                  </div>
                  <span className="text-gray-800 font-medium">{point}</span>
                </li>
              ))}
            </ul>

            {body && (
              <Markdown className="text-sm font-light leading-relaxed text-gray-700 max-w-lg">
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
