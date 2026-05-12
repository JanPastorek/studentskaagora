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

export type HeroData = {
  title: string;
  subtitle: string;
  button: { label: string; href: string };
  backgroundImage: string;
  backgroundAlt: string;
};

export type Card = { title: string; image: string; alt: string; body: string };
export type CardsData = { cards: Card[] };

export type Topic = { name: string; sub: string };
export type TopicsData = { heading: string; topics: Topic[] };

export type Person = { name: string; role: string; image: string; alt: string };
export type FacesData = { heading: string; people: Person[] };

export type SimpleHeadingData = { heading: string };

export type WhyApplyData = { heading: string; image: string; alt: string };

export type ApplyData = { heading: string; deadline: string; email: string };
