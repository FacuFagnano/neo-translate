export default function About() {
  return (
    <section id="about" className="border-t border-ink/10 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl [font-family:var(--font-title)]">
          About Me
        </h2>

        <p className="mt-4 text-slate max-w-2xl leading-relaxed">
          I’m a NAATI certified translator helping individuals and businesses
          with official translations for immigration, legal and academic
          documents.
        </p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { t: "Accuracy", d: "Careful terminology & formatting." },
            { t: "Confidential", d: "Secure handling of documents." },
            { t: "Fast", d: "Clear timelines & delivery options." },
            { t: "Friendly", d: "Simple process and guidance." },
          ].map((x) => (
            <div
              key={x.t}
              className="rounded-3xl border border-ink/10 bg-white/30 p-5"
            >
              <p className="[font-family:var(--font-title)] text-lg">{x.t}</p>
              <p className="mt-2 text-sm text-slate leading-relaxed">{x.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}