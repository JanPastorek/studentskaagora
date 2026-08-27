import { loadContent, type FooterData } from "@/lib/content";
import { asset } from "@/lib/asset";
import { InstagramIcon, LinkedInIcon, FacebookIcon } from "./icons";

// Maps a social link's `label` (set in content/footer.md) to an icon —
// add a new label/icon pair here if a new platform is ever added.
// (lucide-react dropped brand/logo icons, so these are small inline SVGs — see src/components/icons.tsx)
const SOCIAL_ICONS: Record<string, typeof InstagramIcon> = {
  Instagram: InstagramIcon,
  LinkedIn: LinkedInIcon,
  Facebook: FacebookIcon,
};

export function Footer() {
  const { data } = loadContent<FooterData>("footer");

  return (
    <footer className="bg-agora-blue text-white py-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6 text-center md:text-left">
        <a href="#">
          <img
            src={asset(data.logo.src)}
            alt={data.logo.alt}
            width={1546}
            height={467}
            loading="lazy"
            className="h-10 w-auto"
          />
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

        <div className="flex items-center gap-4">
          {data.social?.map((s) => {
            const Icon = SOCIAL_ICONS[s.label] ?? InstagramIcon;
            return (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-9 h-9 flex items-center justify-center rounded-full border border-white/25 hover:border-agora-yellow hover:text-agora-yellow transition-colors"
              >
                <Icon size={16} strokeWidth={1.75} />
              </a>
            );
          })}
        </div>

        <div className="text-xs text-gray-300 font-light">{data.copyright}</div>
      </div>
    </footer>
  );
}
