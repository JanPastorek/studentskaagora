"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { FaqData } from "@/lib/content";
import { Reveal } from "./Reveal";
import { Markdown } from "./Markdown";

export function Faq({ data }: { data: FaqData }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-agora-cream py-12 lg:py-16 border-t border-[#e2d5c8]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <Reveal>
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-agora-orange/50" />
            <div className="w-1 h-1 rounded-full bg-agora-orange/50" />
            <div className="h-px w-8 bg-agora-orange/50" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold mb-8 md:mb-10">
            <span className="text-agora-blue">{data.headingBlue} </span>
            <span className="text-agora-orange italic">{data.headingOrange}</span>
          </h2>
        </Reveal>

        <div className="flex flex-col gap-3">
          {data.items.map((item, i) => {
            const open = openIndex === i;
            return (
              <Reveal key={item.question} delay={Math.min(i, 6) * 40} className="bg-agora-box-cream rounded-lg overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? null : i)}
                  aria-expanded={open}
                  aria-controls={`faq-answer-${i}`}
                  className="w-full flex items-center justify-between gap-4 text-left px-5 py-4 sm:px-6 sm:py-5 min-h-[44px] cursor-pointer"
                >
                  <span className="font-serif text-base sm:text-lg font-semibold text-gray-900">
                    {item.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-agora-orange transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  id={`faq-answer-${i}`}
                  className="grid transition-[grid-template-rows] duration-300 ease-in-out"
                  style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 pb-5 sm:px-6 sm:pb-6 -mt-1">
                      <Markdown className="text-sm sm:text-base text-gray-700 leading-relaxed space-y-3">
                        {item.answer}
                      </Markdown>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
