"use client";
import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { asset } from "@/lib/asset";
import type { TestimonialsData } from "@/lib/content";

const AUTO_ADVANCE_MS = 6000;

export function Testimonials({ data }: { data: TestimonialsData }) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = data.quotes.length;

  const next = useCallback(() => setCurrent((c) => (c + 1) % total), [total]);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + total) % total), [total]);

  useEffect(() => {
    if (paused) return;
    const id = setTimeout(next, AUTO_ADVANCE_MS);
    return () => clearTimeout(id);
  }, [current, paused, next]);

  return (
    <section
      className="relative overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background image with dark overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={asset(data.backgroundImage)}
          alt={data.backgroundAlt}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-agora-blue/80" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 md:py-28 flex flex-col items-center text-center text-white">
        {/* Ornament */}
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px w-10 bg-agora-orange/60" />
          <div className="w-1.5 h-1.5 rounded-full bg-agora-orange/60" />
          <div className="h-px w-10 bg-agora-orange/60" />
        </div>

        {/* Quote */}
        <div className="relative min-h-[160px] flex items-center justify-center w-full">
          {data.quotes.map((q, i) => (
            <blockquote
              key={i}
              className="absolute inset-0 flex items-center justify-center transition-opacity duration-700"
              style={{ opacity: i === current ? 1 : 0, pointerEvents: i === current ? "auto" : "none" }}
            >
              <p className="font-serif italic text-xl sm:text-2xl md:text-3xl leading-relaxed text-white/95 max-w-3xl">
                {q.text}
              </p>
            </blockquote>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-6 mt-10">
          <button
            type="button"
            aria-label="Predchádzajúci"
            onClick={prev}
            className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:border-agora-orange hover:text-agora-orange transition-colors"
          >
            <ChevronLeft size={18} />
          </button>

          <div className="flex gap-2">
            {data.quotes.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Citát ${i + 1}`}
                onClick={() => { setCurrent(i); setPaused(true); }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === current ? "bg-agora-orange w-6" : "bg-white/30 hover:bg-white/60"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            aria-label="Nasledujúci"
            onClick={next}
            className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:border-agora-orange hover:text-agora-orange transition-colors"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
