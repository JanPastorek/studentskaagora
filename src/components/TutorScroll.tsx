const TUTORS = [
  "Aristotle", "Sappho", "Dante Alighieri", "W. E. B. Du Bois", "Albert Einstein",
  "Euclid", "Jane Austen", "William Wordsworth", "Wolfgang Amadeus Mozart", "Herman Melville",
  "Benjamin Franklin", "Gwendolyn Brooks", "Gustave Flaubert", "Archimedes", "Lucretius",
  "Virgil", "Flannery O'Connor", "Blaise Pascal", "Albert Camus", "Ernest Rutherford",
  "Friedrich Nietzsche", "Francis Bacon", "Johann Sebastian Bach", "Virginia Woolf", "Aeschylus",
  "Nicomachus", "Abraham Lincoln", "Geoffrey Chaucer", "Marcel Proust", "Niels Bohr",
  "George Eliot", "Booker T. Washington", "Charles Baudelaire", "Jean-Jacques Rousseau",
  "Daniel Bernoulli", "Augustine", "Apollonius of Perga", "Frederick Douglass",
  "Emily Dickinson", "Thomas Aquinas", "Werner Karl Heisenberg", "Sophocles", "Molière",
  "Ptolemy", "Anton Chekhov", "Giovanni Pierluigi da Palestrina", "Anne Bradstreet",
  "Georg W. F. Hegel", "Dmitri Mendeleev", "Amedeo Avogadro", "Baruch Spinoza",
  "Aristophanes", "Kate Chopin", "James Baldwin", "Johann Wolfgang von Goethe",
  "Sigmund Freud", "James Clerk Maxwell", "Michel de Montaigne", "David Hume",
  "Toni Morrison", "Niccolò Machiavelli", "Plato", "Alexis de Tocqueville",
  "William Shakespeare", "Charles Darwin", "John Milton", "Simone de Beauvoir",
  "Karl Marx", "Nikolai Lobachevsky", "William Faulkner", "Thucydides",
  "Jonathan Swift", "René Descartes", "T. S. Eliot", "Herodotus", "Tacitus",
  "Jean Racine", "Søren Kierkegaard", "Voltaire", "Miguel de Cervantes", "Plotinus",
  "Isaac Newton", "Joseph Louis Gay-Lussac", "Fyodor Dostoevsky", "Plutarch",
  "Leo Tolstoy", "Max Planck", "Michael Faraday", "Homer", "Galileo Galilei",
  "Nicolaus Copernicus", "John Locke", "Ludwig van Beethoven", "Immanuel Kant",
  "Gottfried Wilhelm Leibniz", "J. J. Thomson", "Erwin Schrödinger", "Euripides",
  "Thomas Hobbes", "Joseph Haydn", "Antoine Lavoisier", "James Joyce",
  "Adam Smith", "Franz Schubert", "William Butler Yeats", "Livy",
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
