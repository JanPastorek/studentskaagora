import { loadContent, type FaqData } from "@/lib/content";
import { Faq } from "./Faq";

export function FaqSection() {
  const { data } = loadContent<FaqData>("faq");
  return <Faq data={data} />;
}
