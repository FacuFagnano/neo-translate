import { useEffect, useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { content } from "../../data/content";
import gbFlag from "../../assets/flags/gb.png";
import esFlag from "../../assets/flags/es.png";
import logo from "../../assets/logo/neo-logo.jpg";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const { lang, toggleLanguage } = useLanguage();
  const t = content[lang];

  // scroll for blur + border
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close mobile menu on resize
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const linkClass = "no-underline text-slate hover:text-ink transition";
  const mobileLinkClass =
    "no-underline rounded-xl px-3 py-2 text-slate hover:bg-ink/5 transition";

  return (
    <header
      className={[
        "fixed top-0 inset-x-0 w-full z-50 transition-all overflow-hidden",
        scrolled
          ? "bg-cream/80 backdrop-blur border-b border-ink/10"
          : "bg-transparent",
      ].join(" ")}
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between min-w-0">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-3 no-underline min-w-0"
            onClick={() => setOpen(false)}
          >
            {/* Logo */}
            <img
              src={logo}
              alt="Neo Translations"
              className="h-10 sm:h-12 w-auto object-contain rounded-md"
            />

            {/* Texto al lado del logo */}
            <div className="min-w-0 leading-tight hidden sm:block">
              <p className="text-ink font-semibold text-sm sm:text-base truncate">
                Neo Translations
              </p>

              <p className="text-slate text-xs sm:text-sm truncate">
                {t.navbar.logo}
              </p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#home" className={linkClass}>
              {t.navbar.home}
            </a>
            <a href="#mission" className={linkClass}>
              {t.navbar.mission}
            </a>
            <a href="#services" className={linkClass}>
              {t.navbar.services}
            </a>
            <a href="#expertise" className={linkClass}>
              {t.navbar.expertise}
            </a>
            <a href="#about" className={linkClass}>
              {t.navbar.about}
            </a>

            {/* CTA */}
            <a
              href="#contact"
              className="no-underline rounded-2xl bg-ink text-cream px-4 py-2 hover:opacity-90 transition"
            >
              {t.navbar.quote}
            </a>

            {/* Language selector */}
            <div className="flex items-center gap-2 ml-2">
              <button
                type="button"
                onClick={() => toggleLanguage("en")}
                className={`flex items-center gap-2 px-2 py-1 rounded-xl border text-xs font-medium transition ${
                  lang === "en"
                    ? "bg-ink text-cream border-ink"
                    : "border-ink/20 text-slate hover:bg-ink/5"
                }`}
                aria-label="Switch to English"
              >
                <img
                  src={gbFlag}
                  alt=""
                  className="w-5 h-5 rounded-full object-cover shrink-0"
                />
                ENG
              </button>

              <button
                type="button"
                onClick={() => toggleLanguage("es")}
                className={`flex items-center gap-2 px-2 py-1 rounded-xl border text-xs font-medium transition ${
                  lang === "es"
                    ? "bg-ink text-cream border-ink"
                    : "border-ink/20 text-slate hover:bg-ink/5"
                }`}
                aria-label="Cambiar a Español"
              >
                <img
                  src={esFlag}
                  alt=""
                  className="w-5 h-5 rounded-full object-cover shrink-0"
                />
                ESP
              </button>
            </div>
          </nav>

          {/* Mobile button (Hamburger / X) */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-2xl border border-ink/15 bg-cream/70 p-2"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? (
              // X
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-5 w-5 text-ink"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Hamburger
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-5 w-5 text-ink"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {open && (
          <div className="md:hidden pb-4">
            <div className="w-full overflow-hidden rounded-2xl border border-ink/10 bg-cream/95 backdrop-blur p-3">
              <div className="flex flex-col gap-2 text-sm font-medium min-w-0">
                <a
                  href="#home"
                  className={mobileLinkClass}
                  onClick={() => setOpen(false)}
                >
                  {t.navbar.home}
                </a>
                <a
                  href="#mission"
                  className={mobileLinkClass}
                  onClick={() => setOpen(false)}
                >
                  {t.navbar.mission}
                </a>
                <a
                  href="#services"
                  className={mobileLinkClass}
                  onClick={() => setOpen(false)}
                >
                  {t.navbar.services}
                </a>
                <a
                  href="#expertise"
                  className={mobileLinkClass}
                  onClick={() => setOpen(false)}
                >
                  {t.navbar.expertise}
                </a>
                <a
                  href="#about"
                  className={mobileLinkClass}
                  onClick={() => setOpen(false)}
                >
                  {t.navbar.about}
                </a>
                <a
                  href="#contact"
                  className={mobileLinkClass}
                  onClick={() => setOpen(false)}
                >
                  {t.navbar.contact}
                </a>

                {/* Language mobile */}
                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => toggleLanguage("en")}
                    className={`min-w-0 flex-1 flex items-center justify-center gap-2 rounded-xl border py-2 transition ${
                      lang === "en"
                        ? "bg-ink text-cream border-ink"
                        : "border-ink/20 text-slate hover:bg-ink/5"
                    }`}
                  >
                    <img
                      src={gbFlag}
                      alt=""
                      className="w-5 h-5 rounded-full object-cover shrink-0"
                    />
                    <span className="truncate">ENG</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => toggleLanguage("es")}
                    className={`min-w-0 flex-1 flex items-center justify-center gap-2 rounded-xl border py-2 transition ${
                      lang === "es"
                        ? "bg-ink text-cream border-ink"
                        : "border-ink/20 text-slate hover:bg-ink/5"
                    }`}
                  >
                    <img
                      src={esFlag}
                      alt=""
                      className="w-5 h-5 rounded-full object-cover shrink-0"
                    />
                    <span className="truncate">ESP</span>
                  </button>
                </div>

                {/* CTA mobile */}
                <a
                  href="#contact"
                  className="no-underline mt-2 rounded-xl bg-ink text-cream px-3 py-2 text-center hover:opacity-90 transition"
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
