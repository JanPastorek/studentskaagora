import Image from "next/image";
import { loadContent, type TeamData } from "@/lib/content";
import { asset } from "@/lib/asset";
import { Reveal } from "./Reveal";

const ACCENT_MAP: Record<string, string> = {
  yellow: "bg-agora-yellow",
  orange: "bg-agora-orange",
  blue: "bg-agora-blue",
};
const ACCENT_OFFSET: Record<string, string> = {
  yellow: "-left-2 top-2",
  orange: "left-3 -top-1",
  blue: "-left-3 top-0",
};

export function Team() {
  const { data } = loadContent<TeamData>("team");

  return (
    <section id="tim" className="bg-agora-cream py-16">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <h2 className="font-serif text-5xl md:text-6xl font-bold mb-12">
            <span className="text-agora-blue">{data.headingBlue} </span>
            <span className="text-agora-orange">{data.headingOrange}</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.people.map((person, i) => {
            const accentBg = ACCENT_MAP[person.accentColor] ?? "bg-agora-yellow";
            const accentOffset = ACCENT_OFFSET[person.accentColor] ?? "-left-2 top-2";
            return (
              <Reveal
                key={person.name}
                delay={i * 100}
                className="bg-agora-box-cream rounded-lg p-8 text-center relative overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-32 h-32 mx-auto relative mb-6">
                  <div className={`absolute w-full h-full ${accentBg} rounded-full ${accentOffset}`} />
                  <Image
                    src={asset(person.image)}
                    alt={person.name}
                    width={128}
                    height={128}
                    unoptimized
                    className="relative z-10 w-full h-full object-cover rounded-full"
                  />
                </div>
                <h3 className="font-serif font-bold text-[17px] mb-1 text-gray-900">{person.name}</h3>
                <p className="text-xs text-gray-600 font-light">{person.role}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
