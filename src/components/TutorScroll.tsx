const TUTORS = [
  "Aristoteles", "Roger Scruton", "Alister McGrath", "Tomáš Akvinský", "Daniel Kahneman", "Platón", "Jordan B. Peterson", "Friedrich Nietzsche", "Augustín", "Philippa Foot", "Marcus Aurelius", "Jan Sokol", "Peter Singer", "Byung-Chul Han", "Thomas Nagel"
  
];

export function TutorScroll() {
  const doubled = [...TUTORS, ...TUTORS];

  return (
    <section
      aria-label="Naši tutori"
      className="bg-agora-blue text-white overflow-hidden py-5 border-y border-white/10 select-none"
    >
      <div className="marquee-track flex whitespace-nowrap">
        {doubled.map((name, i) => (
          <span key={i} className="shrink-0 inline-flex items-center">
            <span className="font-serif italic text-lg text-white/85 px-5">{name}</span>
            <span className="text-agora-orange/60 text-xs" aria-hidden="true">·</span>
          </span>
        ))}
      </div>
    </section>
  );
}
