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
          {/* Logo / Image Side */}
          <div className="order-1 lg:order-2 relative flex justify-center lg:justify-end">
            {/* Mobile logo (smaller, no mask) */}
            <img
              src={logo}
              alt="Neo Translations"
              className="block lg:hidden w-[220px] sm:w-[280px] h-auto object-contain opacity-95"
            />

            {/* Desktop logo (masked left) */}
            <img
              src={logo}
              alt="Neo Translations"
              className="hidden lg:block w-[520px] h-auto object-contain opacity-90"
              style={{
                WebkitMaskImage:
                  "linear-gradient(to right, transparent 0%, black 18%, black 100%)",
                maskImage:
                  "linear-gradient(to right, transparent 0%, black 18%, black 100%)",
              }}
            />

            {/* Decorative blobs */}
            <div className="absolute -z-10 -top-10 -right-10 h-44 w-44 rounded-full bg-sky/40 blur-2xl" />
            <div className="absolute -z-10 -bottom-12 -left-12 h-52 w-52 rounded-full bg-beige/50 blur-2xl" />
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
