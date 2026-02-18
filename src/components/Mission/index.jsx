import { useLanguage } from "../../context/LanguageContext";
import { content } from "../../data/content";
import useRevealOnScroll from "../../hooks/useRevealOnScroll";

import missionPhoto from "../../assets/mission/my-mission.jpg";

export default function Mission() {
  const { lang } = useLanguage();
  const t = content[lang].mission;

  const { ref, isVisible } = useRevealOnScroll();

  return (
    <section
      id="mission"
      ref={ref}
      className={`bg-cream py-16 sm:py-20 reveal ${
        isVisible ? "reveal--visible" : ""
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
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

          {/* Photo */}
          <div className="relative">
            <img
              src={missionPhoto}
              alt="My Mission - Neo Translations"
              className="rounded-3xl border border-ink/10 shadow-sm object-cover w-full max-h-[520px]"
            />

            {/* Soft decorative blob */}
            <div className="absolute -z-10 -bottom-10 -left-10 h-44 w-44 rounded-full bg-sky/40 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
