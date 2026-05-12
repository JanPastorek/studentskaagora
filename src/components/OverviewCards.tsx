import Image from "next/image";
import { loadContent, type CardsData } from "@/lib/content";
import { Markdown } from "./Markdown";

export function OverviewCards() {
  const { data } = loadContent<CardsData>("cards");
  return (
    <section className="bg-white py-20 px-6 md:px-10">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
        {data.cards.map((c) => (
          <article
            key={c.title}
            className="rounded-[10px] border border-agora-orange overflow-hidden bg-white flex flex-col"
          >
            <div className="relative w-full aspect-[3/2]">
              <Image
                src={c.image}
                alt={c.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="p-6 md:p-7 flex flex-col gap-4">
              <h3 className="font-heading font-bold text-[clamp(24px,2.5vw,35px)] text-center">
                {c.title}
              </h3>
              <Markdown className="text-[15px] leading-relaxed text-black space-y-3">
                {c.body}
              </Markdown>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
