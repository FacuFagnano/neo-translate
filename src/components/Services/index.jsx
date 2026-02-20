import { useLanguage } from "../../context/LanguageContext";
import { content } from "../../data/content";
import useRevealOnScroll from "../../hooks/useRevealOnScroll";

import studentVisaImg from "../../assets/services/student-visa.jpg";
import standardDocsImg from "../../assets/services/service-license.png";
import nonNaatiImg from "../../assets/services/no-naati-translations.png";

function ServiceImageCard({ title, image, lines }) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-ink/10 bg-beige/40">
      {/* Imagen */}
      <img
        src={image}
        alt={title}
        className="h-[360px] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
      />

      {/* Título visible */}
      <div className="absolute text-center inset-x-0 bottom-0 p-5 transition duration-300 group-hover:opacity-0">
        <div className="inline-flex rounded-2xl bg-cream/85 backdrop-blur px-4 py-2 border border-ink/10">
          <h3 className="text-ink font-semibold">{title}</h3>
        </div>
      </div>

      {/* Overlay hover */}
      <div className="absolute inset-0 flex items-end p-6 opacity-0 transition duration-300 group-hover:opacity-100">
        <div className="w-full rounded-2xl bg-ink/55 backdrop-blur p-5 text-cream">
          <div className="space-y-3 text-sm leading-relaxed">
            {lines.map((txt, i) => (
              <p key={i}>{txt}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  const { lang } = useLanguage();
  const t = content[lang].services;

  const { ref, isVisible } = useRevealOnScroll();

  const cards = [
    {
      title:
        lang === "es" ? "Traducciones certificadas" : "Certified Translations",
      image: studentVisaImg,
      lines: [t.list[1], t.list[2]],
    },
    {
      title: lang === "es" ? "Documentos estándar" : "Standard Documents",
      image: standardDocsImg,
      lines: [t.list[3]],
    },
    {
      title: lang === "es" ? "Traducciones no NAATI" : "Non-NAATI Translations",
      image: nonNaatiImg,
      lines: [t.list[0], t.list[4], t.list[5]],
    },
  ];

  return (
    <section
      id="services"
      ref={ref}
      className={`bg-beige/40 py-16 sm:py-20 reveal ${
        isVisible ? "reveal--visible" : ""
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-end">
          <div className="max-w-3xl text-right">
            <h2 className="text-3xl sm:text-4xl [font-family:var(--font-title)]">
              {t.title}
            </h2>
            <p className="mt-6 text-slate leading-relaxed">{t.intro}</p>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {cards.map((c) => (
            <ServiceImageCard
              key={c.title}
              title={c.title}
              image={c.image}
              lines={c.lines}
            />
          ))}
        </div>

        {/* Closing alineado derecha */}
        <div className="flex justify-end">
          <p className="mt-10 text-slate leading-relaxed max-w-3xl text-right">
            {t.closing}
          </p>
        </div>
      </div>
    </section>
  );
}
