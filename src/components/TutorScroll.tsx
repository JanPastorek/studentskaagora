const TUTORS = [
 "Platón", "Roger Scruton", "Alister McGrath", "Tomáš Akvinský", "Marian Kuna", "Daniel Kahneman", "Marcus Aurelius", "Jordan B. Peterson", "Friedrich Nietzsche", "Byung-Chul Han", "Augustin", "Philippa Foot", "Jan Sokol", "Peter Singer", "Thomas Nagel"
  
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
