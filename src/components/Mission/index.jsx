import { useLanguage } from "../../context/LanguageContext";
import { content } from "../../data/content";

export default function Mission() {
  const { lang } = useLanguage();
  const t = content[lang].mission;

  return (
    <section id="mission" className="bg-beige/40 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl [font-family:var(--font-title)]">
          {t.title}
        </h2>

        <div className="mt-6 space-y-4 text-slate leading-relaxed max-w-3xl">
          <p>{t.text1}</p>
          <p>{t.text2}</p>
          <p>{t.text3}</p>
          <p>{t.text4}</p>
        </div>
      </div>
    </section>
  );
}
