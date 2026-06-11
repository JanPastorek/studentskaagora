import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type ContentFile<T> = {
  data: T;
  body: string;
};

const CONTENT_DIR = path.join(process.cwd(), "content");

export function loadContent<T = Record<string, unknown>>(slug: string): ContentFile<T> {
  const file = path.join(CONTENT_DIR, `${slug}.md`);
  const raw = fs.readFileSync(file, "utf8");
  const parsed = matter(raw);
  return { data: parsed.data as T, body: parsed.content.trim() };
}

export type NavLink = { label: string; href: string };
export type NavData = {
  logo: { src: string; alt: string };
  links: NavLink[];
  cta: { label: string; href: string };
};

export type HeroData = {
  tagline: string;
  titleLine1: string;
  titleLine2: string;
  titleLine3: string;
  titleOrangeWords: string[];
  subtitle: string;
  details: string;
  button: { label: string; href: string };
  heroImage: string;
  heroImageAlt: string;
  quote: string;
  quoteOrangeWords: string[];
};

export type Stat = {
  heading: string;
  text?: string;
  price?: string;
  iconColor: string;
};
export type StatsData = { stats: Stat[] };

export type AboutData = {
  headingBlue: string;
  headingOrange: string;
  image: string;
  imageAlt: string;
};

export type FlipTopic = {
  name: string;
  question: string;
  bgFront: string;
  textFront: string;
  bgBack: string;
  textBack: string;
};
export type TopicsData = {
  headingBlue: string;
  headingOrange: string;
  topics: FlipTopic[];
};

export type TeamMember = {
  name: string;
  role: string;
  image: string;
  accentColor: string;
};
export type TeamData = {
  headingBlue: string;
  headingOrange: string;
  people: TeamMember[];
};

export type WhyApplyData = {
  headingBlue: string;
  headingOrange: string;
  image: string;
  imageAlt: string;
  points: string[];
};

export type ApplyData = {
  headingMain: string;
  headingYellow: string;
  description: string;
  deadline: string;
  fee: string;
  applicationEmail: string;
  applicationEmailSubject: string;
  applicationLabel: string;
  contactLabel: string;
};

export type FooterData = {
  logo: { src: string; alt: string };
  copyright: string;
  links: NavLink[];
};
