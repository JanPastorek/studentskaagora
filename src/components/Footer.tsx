import { loadContent, type FooterData } from "@/lib/content";
import { asset } from "@/lib/asset";

export function Footer() {
  const { data } = loadContent<FooterData>("footer");

  return (
    <footer className="bg-agora-blue text-white py-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <a href="#">
          <img src={asset(data.logo.src)} alt={data.logo.alt} className="h-10 w-auto" />
        </a>

        <nav>
          <ul className="flex flex-wrap justify-center gap-6 text-sm font-light">
            {data.links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-agora-yellow transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="text-xs text-gray-300 font-light">{data.copyright}</div>
      </div>
    </footer>
  );
}
