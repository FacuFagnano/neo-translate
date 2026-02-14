import { useLanguage } from "../../context/LanguageContext";
import { content } from "../../data/content";

function ServiceBlock({ title, items }) {
  return (
    <div className="rounded-3xl border border-ink/10 bg-beige/55 p-8 hover:bg-beige/70 transition">
      <h3 className="text-lg font-semibold text-ink">{title}</h3>

      <div className="mt-5 space-y-3">
        {items.map((item, i) => (
          <p
            key={i}
            className="text-slate leading-relaxed border-l-2 border-ink/15 pl-4"
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}

export default function Services() {
  const { lang } = useLanguage();
  const t = content[lang].services;

  // agrupamos servicios en 3 bloques grandes
  const blocks = [
    {
      title:
        lang === "es"
          ? "Traducciones certificadas"
          : "Certified Translations",
      items: [
        t.list[1],
        "Certified translations for official and migration purposes.",
        "Handled with precision and NAATI compliance.",
      ],
    },
    {
      title:
        lang === "es"
          ? "Documentos estándar"
          : "Standard Documents",
      items: [
        t.list[3],
        "Birth, marriage, police checks, diplomas and transcripts.",
        "Fast and reliable delivery.",
      ],
    },
    {
      title:
        lang === "es"
          ? "Servicios profesionales"
          : "Professional & Business",
      items: [
        t.list[4],
        t.list[5],
        "Legal, business and specialised translations on request.",
      ],
    },
  ];

  return (
    <section id="services" className="bg-cream py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header aligned RIGHT */}
        <div className="flex justify-end">
          <div className="max-w-3xl text-right">
            <h2 className="text-3xl sm:text-4xl [font-family:var(--font-title)]">
              {t.title}
            </h2>

            <p className="mt-6 text-slate leading-relaxed">
              {t.intro}
            </p>
          </div>
        </div>

        {/* Blocks */}
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {blocks.map((block, i) => (
            <ServiceBlock key={i} title={block.title} items={block.items} />
          ))}
        </div>

        {/* Closing text aligned RIGHT */}
        <div className="flex justify-end">
          <p className="mt-10 text-slate leading-relaxed max-w-3xl text-right">
            {t.closing}
          </p>
        </div>
      </div>
    </section>
  );
}
