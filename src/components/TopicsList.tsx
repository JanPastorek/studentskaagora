import { loadContent, type TopicsData } from "@/lib/content";

export function TopicsList() {
  const { data } = loadContent<TopicsData>("topics");
  const half = Math.ceil(data.topics.length / 2);
  const left = data.topics.slice(0, half);
  const right = data.topics.slice(half);

  const renderCol = (items: typeof data.topics, offset: number) => (
    <ul className="rounded-[10px] border border-agora-orange p-6 md:p-7 space-y-2 text-[15px] leading-relaxed">
      {items.map((t, i) => (
        <li key={t.name}>
          <strong>
            {i + 1 + offset}. {t.name} |
          </strong>{" "}
          {t.sub}
        </li>
      ))}
    </ul>
  );

  return (
    <section className="bg-agora-beige py-12 px-6 md:px-10">
      <div className="max-w-[1100px] mx-auto">
        <h2 className="font-heading font-bold text-[clamp(26px,3vw,32px)] text-center mb-10">
          {data.heading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {renderCol(left, 0)}
          {renderCol(right, half)}
        </div>
      </div>
    </section>
  );
}
