import { useLanguage } from "../../context/LanguageContext";
import { content } from "../../data/content";
import useRevealOnScroll from "../../hooks/useRevealOnScroll";
import logo from "../../assets/logo/neo-logo.jpg";

export default function Home() {
  const { lang } = useLanguage();
  const t = content[lang];

  const { ref, isVisible } = useRevealOnScroll();

  return (
    <section
      id="home"
      ref={ref}
      className={`pt-24 bg-cream reveal ${isVisible ? "reveal--visible" : ""}`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* 
          Mobile: imagen primero
          Desktop: texto primero
        */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Logo premium card */}
          <div className="flex justify-center lg:justify-end">
            <img
              src={logo}
              alt="Neo Translations"
              className="w-[200px] sm:w-[260px] lg:w-[420px] shadow-sm rounded-3xl h-auto object-contain opacity-95"
            />
          </div>

          {/* Text Side */}
          <div className="order-2 lg:order-1">
            <p className="text-sm font-medium text-slate">
              NAATI Certified Translator
            </p>

            <h1 className="mt-3 text-4xl sm:text-5xl leading-tight [font-family:var(--font-title)]">
              {t.home.title}
            </h1>

            <p className="mt-5 text-base sm:text-lg text-slate leading-relaxed max-w-xl">
              {t.home.subtitle}
            </p>

            <p className="mt-4 text-slate max-w-xl">{t.home.description}</p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#contact"
                className="no-underline inline-flex items-center justify-center rounded-2xl bg-ink text-cream px-6 py-3 font-medium hover:opacity-90 transition"
              >
                {t.home.button1}
              </a>

              <a
                href="#services"
                className="no-underline inline-flex items-center justify-center rounded-2xl border border-ink/15 bg-cream px-6 py-3 font-medium text-ink hover:bg-beige/40 transition"
              >
                {t.home.button2}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
