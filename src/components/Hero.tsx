import Image from "next/image";
import { loadContent, type HeroData } from "@/lib/content";
import { asset } from "@/lib/asset";

export function Hero() {
  const { data } = loadContent<HeroData>("hero");
  return (
    <header className="relative w-full h-screen min-h-[700px] text-white overflow-hidden">
      <Image
        src={asset(data.backgroundImage)}
        alt={data.backgroundAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-8 text-center">
        <h1 className="font-display font-normal leading-none text-[clamp(48px,9vw,104px)] tracking-wide">
          {data.title}
        </h1>
        <p className="mt-12 font-heading italic text-[clamp(24px,3.5vw,40px)] leading-snug whitespace-pre-line">
          {data.subtitle}
        </p>
        <a
          href={data.button.href}
          className="mt-16 inline-block font-button font-medium uppercase tracking-[1px] text-sm text-white bg-agora-orange px-6 py-3 hover:bg-agora-orange/90 transition-colors"
        >
          {data.button.label}
        </a>
      </div>
    </header>
  );
}
