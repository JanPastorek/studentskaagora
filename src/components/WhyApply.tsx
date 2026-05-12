import Image from "next/image";
import { loadContent, type WhyApplyData } from "@/lib/content";
import { Markdown } from "./Markdown";

export function WhyApply() {
  const { data, body } = loadContent<WhyApplyData>("why-apply");
  return (
    <section className="bg-agora-green py-20 px-6 md:px-10">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div className="relative aspect-[4/3] w-full rounded-sm overflow-hidden">
          <Image
            src={data.image}
            alt={data.alt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="font-heading font-bold text-[clamp(26px,3vw,32px)] mb-8">
            {data.heading}
          </h2>
          <Markdown className="space-y-5 text-[16px] leading-relaxed">{body}</Markdown>
        </div>
      </div>
    </section>
  );
}
