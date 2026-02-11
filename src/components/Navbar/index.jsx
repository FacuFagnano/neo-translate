import { useEffect, useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { content } from "../../data/content";
import gbFlag from "../../assets/flags/gb.png";
import esFlag from "../../assets/flags/es.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const { lang, toggleLanguage } = useLanguage();
  const t = content[lang];

  // Detectar scroll para blur + borde
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Cerrar menú mobile al agrandar pantalla
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header
      className={[
        "fixed top-0 left-0 right-0 z-50 transition-all",
        scrolled
          ? "bg-cream/80 backdrop-blur border-b border-ink/10"
          : "bg-transparent",
      ].join(" ")}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="no-underline [font-family:var(--font-title)] text-lg tracking-tight text-ink"
            onClick={() => setOpen(false)}
          >
            Yuli Translations
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a
              href="#home"
              className="no-underline text-slate hover:text-ink transition"
            >
              {t.navbar.home}
            </a>

            <a
              href="#about"
              className="no-underline text-slate hover:text-ink transition"
            >
              {t.navbar.about}
            </a>

            <a
              href="#contact"
              className="no-underline text-slate hover:text-ink transition"
            >
              {t.navbar.contact}
            </a>

            {/* Primary button */}
            <a
              href="#contact"
              className="no-underline rounded-2xl bg-ink text-cream px-4 py-2 hover:opacity-90 transition"
            >
              {t.navbar.quote}
            </a>

            {/* Select lenguage */}
            <div className="flex items-center gap-2 ml-2">
              <button
                onClick={() => toggleLanguage("en")}
                className={`flex items-center gap-2 px-2 py-1 rounded-xl border text-xs font-medium transition ${
                  lang === "en"
                    ? "bg-ink text-cream border-ink"
                    : "border-ink/20 text-slate hover:bg-ink/5"
                }`}
              >
                <img
                  src={gbFlag}
                  alt="English"
                  className="w-5 h-5 rounded-full object-cover"
                />
                ENG
              </button>

              <button
                onClick={() => toggleLanguage("es")}
                className={`flex items-center gap-2 px-2 py-1 rounded-xl border text-xs font-medium transition ${
                  lang === "es"
                    ? "bg-ink text-cream border-ink"
                    : "border-ink/20 text-slate hover:bg-ink/5"
                }`}
              >
                <img
                  src={esFlag}
                  alt="Español"
                  className="w-5 h-5 rounded-full object-cover"
                />
                ESP
              </button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden rounded-2xl border border-ink/15 bg-cream/70 px-3 py-2 text-sm"
            onClick={() => setOpen((v) => !v)}
            aria-label="Open menu"
            aria-expanded={open}
          >
            Menu
          </button>
        </div>

        {/* Mobile Dropdown */}
        {open && (
          <div className="md:hidden pb-4">
            <div className="rounded-2xl border border-ink/10 bg-cream/95 backdrop-blur p-3">
              <div className="flex flex-col gap-2 text-sm font-medium">
                <a
                  href="#home"
                  className="no-underline rounded-xl px-3 py-2 text-slate hover:bg-ink/5"
                  onClick={() => setOpen(false)}
                >
                  {t.navbar.home}
                </a>

                <a
                  href="#about"
                  className="no-underline rounded-xl px-3 py-2 text-slate hover:bg-ink/5"
                  onClick={() => setOpen(false)}
                >
                  {t.navbar.about}
                </a>

                <a
                  href="#contact"
                  className="no-underline rounded-xl px-3 py-2 text-slate hover:bg-ink/5"
                  onClick={() => setOpen(false)}
                >
                  {t.navbar.contact}
                </a>

                {/* lenguage mobile */}
                <button
                  onClick={() => toggleLanguage("en")}
                  className={`flex-1 flex items-center justify-center gap-2 rounded-xl border py-2 transition ${
                    lang === "en"
                      ? "bg-ink text-cream border-ink"
                      : "border-ink/20 text-slate hover:bg-ink/5"
                  }`}
                >
                  <img
                    src={gbFlag}
                    alt="English"
                    className="w-5 h-5 rounded-full object-cover"
                  />
                  ENG
                </button>

                <button
                  onClick={() => toggleLanguage("es")}
                  className={`flex-1 flex items-center justify-center gap-2 rounded-xl border py-2 transition ${
                    lang === "es"
                      ? "bg-ink text-cream border-ink"
                      : "border-ink/20 text-slate hover:bg-ink/5"
                  }`}
                >
                  <img
                    src={esFlag}
                    alt="Español"
                    className="w-5 h-5 rounded-full object-cover"
                  />
                  ESP
                </button>

                {/* CTA mobile */}
                <a
                  href="#contact"
                  className="no-underline mt-2 rounded-xl bg-ink text-cream px-3 py-2 text-center"
                  onClick={() => setOpen(false)}
                >
                  {t.navbar.quote}
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
