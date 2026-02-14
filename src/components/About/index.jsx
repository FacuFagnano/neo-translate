import { useLanguage } from "../../context/LanguageContext";
import { content } from "../../data/content";
import aboutmePhoto from "../../assets/about/aboutme.jpg";

export default function About() {
  const { lang } = useLanguage();
  const t = content[lang].about;

  return (
    <section id="about" className="bg-cream py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Photo */}
          <div className="relative">
            <img
              src={aboutmePhoto}
              alt="Yuliana Neonelli - NAATI Certified Translator"
              className="rounded-3xl border border-ink/10 shadow-sm object-cover w-full max-h-[520px]"
            />

            {/* Soft decorative blob */}
            <div className="absolute -z-10 -bottom-10 -left-10 h-44 w-44 rounded-full bg-sky/40 blur-2xl" />
          </div>

          {/* Text */}
          <div>
            <h2 className="text-3xl sm:text-4xl [font-family:var(--font-title)]">
              {t.title}
            </h2>

            <div className="mt-6 space-y-4 text-slate leading-relaxed">
              <p>{t.text1}</p>
              <p>{t.text2}</p>
              <p>{t.text3}</p>
              <p>{t.text4}</p>
              <p>{t.text5}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
