import { useLanguage } from "../../context/LanguageContext";
import { content } from "../../data/content";
import logo from "../../assets/logo/neo-logo.jpg";

export default function Home() {
  const { lang } = useLanguage();
  const t = content[lang];

  return (
    <section id="home" className="pt-24 bg-cream">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <p className="text-sm font-medium text-slate">
              {t.navbar.logo}
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
                href="#mission"
                className="no-underline inline-flex items-center justify-center rounded-2xl border border-ink/15 bg-cream px-6 py-3 font-medium text-ink hover:bg-beige/40 transition"
              >
                {t.home.button2}
              </a>
            </div>
          </div>

          {/* Logo big (masked to the left) */}
          <div className="relative flex justify-center lg:justify-end">
            <img
              src={logo}
              alt="Neo Translations"
              className="w-[320px] sm:w-[420px] lg:w-[520px] h-auto object-contain select-none opacity-90"
              style={{
                WebkitMaskImage:
                  "linear-gradient(to right, transparent 0%, black 18%, black 100%)",
                maskImage:
                  "linear-gradient(to right, transparent 0%, black 18%, black 100%)",
              }}
            />

            {/* Decorative blobs (se quedan) */}
            <div className="absolute -z-10 -top-10 -right-10 h-44 w-44 rounded-full bg-sky/40 blur-2xl" />
            <div className="absolute -z-10 -bottom-12 -left-12 h-52 w-52 rounded-full bg-beige/50 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
