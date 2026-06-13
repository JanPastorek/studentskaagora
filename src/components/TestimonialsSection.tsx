import { loadContent, type TestimonialsData } from "@/lib/content";
import { Testimonials } from "./Testimonials";

export function TestimonialsSection() {
  const { data } = loadContent<TestimonialsData>("testimonials");
  return <Testimonials data={data} />;
}
