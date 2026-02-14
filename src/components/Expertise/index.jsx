import { useLanguage } from "../../context/LanguageContext";
import { content } from "../../data/content";

export default function Expertise() {
  const { lang } = useLanguage();
  const t = content[lang].expertise;

  return (
    <section id="expertise" className="bg-beige/40 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl [font-family:var(--font-title)]">
          {t.title}
        </h2>

        <p className="mt-6 text-slate leading-relaxed max-w-3xl">
          {t.text1}
        </p>

        <p className="mt-8 font-medium text-ink">{t.text2}</p>

        <ul className="mt-4 space-y-2 list-disc pl-5 text-slate max-w-3xl">
          {t.list.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <p className="mt-8 text-slate max-w-3xl">{t.text3}</p>
      </div>
    </section>
  );
}
