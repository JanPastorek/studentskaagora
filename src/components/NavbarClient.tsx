"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { asset } from "@/lib/asset";
import type { NavData } from "@/lib/content";

export function NavbarClient({ data }: { data: NavData }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6 flex justify-between items-center relative z-30">
      <a href="#">
        <img src={asset(data.logo.src)} alt={data.logo.alt} className="h-9 sm:h-12 w-auto" />
      </a>

      <div className="flex items-center gap-4 md:gap-8">
        <nav className="hidden md:block">
          <ul className="flex gap-8 text-sm font-light tracking-wide">
            {data.links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-agora-yellow transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href={data.cta.href}
          className="hidden sm:inline-block bg-agora-yellow text-agora-blue font-semibold text-sm px-6 py-2.5 rounded hover:bg-yellow-400 transition-colors"
        >
          {data.cta.label}
        </a>
        <button
          type="button"
          aria-label="Otvoriť menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden w-10 h-10 flex items-center justify-center text-xl hover:text-agora-yellow transition-colors"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-agora-blue border-t border-white/10 shadow-xl z-40">
          <nav className="px-6 py-6">
            <ul className="flex flex-col gap-5 text-base font-light tracking-wide">
              {data.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block hover:text-agora-yellow transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={data.cta.href}
                  onClick={() => setOpen(false)}
                  className="inline-block bg-agora-yellow text-agora-blue font-semibold text-sm px-6 py-2.5 rounded hover:bg-yellow-400 transition-colors"
                >
                  {data.cta.label}
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
