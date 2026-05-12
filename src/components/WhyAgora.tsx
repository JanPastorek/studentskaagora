import { loadContent, type SimpleHeadingData } from "@/lib/content";
import { Markdown } from "./Markdown";

export function WhyAgora() {
  const { data, body } = loadContent<SimpleHeadingData>("why-agora");
  return (
    <section className="bg-white py-24 px-6 md:px-20">
      <div className="max-w-[1000px] mx-auto">
        <h2 className="font-heading font-bold text-[clamp(26px,3vw,32px)] text-center mb-10">
          {data.heading}
        </h2>
        <Markdown className="space-y-6 text-[16px] leading-relaxed">{body}</Markdown>
      </div>
    </section>
  );
}
