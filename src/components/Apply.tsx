import { Calendar, Euro, Mail, ArrowRight } from "lucide-react";
import { loadContent, type ApplyData } from "@/lib/content";
import { asset } from "@/lib/asset";
import { Reveal } from "./Reveal";

export function Apply() {
  const { data } = loadContent<ApplyData>("apply");
  const mailto = `mailto:${data.applicationEmail}?subject=${encodeURIComponent(data.applicationEmailSubject)}`;

  return (
    <section id="prihlasenie" className="bg-agora-cream pb-16 lg:pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="bg-agora-blue rounded-2xl md:rounded-[2rem] p-8 md:p-12 lg:p-14 text-white relative overflow-hidden shadow-xl flex flex-col md:flex-row justify-between">
          <img
            src={asset("/sun2.svg")}
            alt=""
            aria-hidden="true"
            className="hidden md:block absolute top-6 right-6 w-[45%] max-w-[400px] h-auto pointer-events-none opacity-90 z-0"
          />

          <div className="w-full md:w-3/5 relative z-10">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-white/30" />
              <div className="w-1 h-1 rounded-full bg-white/30" />
              <div className="h-px w-8 bg-white/30" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-5 md:mb-6">
              {data.headingMain}
              <span className="text-agora-yellow italic">{data.headingYellow}</span>
            </h2>
            <p className="font-serif italic text-base text-gray-300 leading-relaxed mb-7 md:mb-8 max-w-lg">
              {data.description}
            </p>

            <div className="space-y-3 mb-8 font-serif">
              <div className="flex items-baseline gap-3">
                <span className="text-agora-yellow text-base leading-none">—</span>
                <span className="text-base text-gray-200">Deadline prihlásenia: <span className="text-white">{data.deadline}</span></span>
              </div>
              <div className="flex items-baseline gap-3">
                <span className="text-agora-yellow text-base leading-none">—</span>
                <span className="text-base text-gray-200">Ročné školné: <span className="text-white font-semibold">{data.fee}</span></span>
              </div>
            </div>

            <a
              href={mailto}
              className="inline-flex items-center justify-center gap-3 bg-agora-yellow text-agora-blue font-semibold px-8 py-3.5 rounded hover:bg-yellow-400 hover:gap-4 transition-all shadow-md w-full sm:w-auto"
            >
              {data.applicationLabel} <ArrowRight size={16} />
            </a>
          </div>

          <div className="w-full md:w-2/5 mt-8 md:mt-auto relative z-10 flex flex-col justify-end items-start md:items-end">
            <div className="w-full border-t border-white/20 mb-4 md:max-w-[300px]" />
            <div className="flex items-start gap-4">
              <Mail size={24} className="mt-1 shrink-0" />
              <div>
                <p className="text-base mb-1">{data.contactLabel}</p>
                <a
                  href={`mailto:${data.applicationEmail}`}
                  className="text-agora-yellow hover:underline text-base font-medium break-all"
                >
                  {data.applicationEmail}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
