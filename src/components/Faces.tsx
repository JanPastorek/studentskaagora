import Image from "next/image";
import { loadContent, type FacesData } from "@/lib/content";

export function Faces() {
  const { data } = loadContent<FacesData>("faces");
  return (
    <section className="bg-white py-20 px-6 md:px-10">
      <div className="max-w-[1280px] mx-auto">
        <h2 className="font-heading font-bold text-[clamp(26px,3vw,32px)] text-center mb-14">
          {data.heading}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12 justify-items-center">
          {data.people.map((p) => (
            <figure key={p.name} className="flex flex-col items-center text-center max-w-[260px]">
              <div className="relative w-44 h-44 md:w-56 md:h-56 rounded-full overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.alt}
                  fill
                  sizes="(max-width: 768px) 176px, 224px"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-5">
                <div className="font-semibold text-[16px]">{p.name}</div>
                <div className="mt-1 text-[14px] leading-snug whitespace-pre-line">
                  {p.role}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
