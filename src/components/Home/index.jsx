import { useLanguage } from "../../context/LanguageContext";
import { content } from "../../data/content";

export default function Home() {
  const { lang } = useLanguage();
  const t = content[lang];

  return (
    <section id="home" className="pt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <div>
            <p className="text-sm font-medium text-slate">
              NAATI Certified Translator
            </p>

            <h1 className="mt-3 text-4xl sm:text-5xl leading-tight [font-family:var(--font-title)]">
              {t.home.title}
            </h1>

            <p className="mt-5 text-base sm:text-lg text-slate leading-relaxed max-w-xl">
              {t.home.subtitle}
            </p>

            {/* Botones */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#contact"
                className="no-underline inline-flex items-center justify-center rounded-2xl bg-ink text-cream px-6 py-3 font-medium hover:opacity-90 transition"
              >
                {t.home.button1}
              </a>

              <a
                href="#about"
                className="no-underline inline-flex items-center justify-center rounded-2xl border border-ink/15 bg-cream px-6 py-3 font-medium text-ink hover:bg-beige/40 transition"
              >
                {t.home.button2}
              </a>
            </div>

            {/* Mini highlights */}
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { k: "Fast", v: "Clear turnaround" },
                { k: "Certified", v: "NAATI standards" },
                { k: "Secure", v: "Confidential handling" },
              ].map((x) => (
                <div
                  key={x.k}
                  className="rounded-2xl border border-ink/10 bg-white/30 p-4"
                >
                  <p className="[font-family:var(--font-title)] text-lg">
                    {x.k}
                  </p>
                  <p className="mt-1 text-sm text-slate">{x.v}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Card derecha */}
          <div className="relative">
            <div className="rounded-3xl border border-ink/10 bg-white/30 p-6 sm:p-8">
              <div className="rounded-2xl border border-ink/10 bg-sky/25 p-5">
                <p className="text-sm font-medium text-slate">
                  Popular requests
                </p>

                <ul className="mt-3 space-y-2 text-slate">
                  {[
                    "Birth & marriage certificates",
                    "Police checks & legal documents",
                    "Transcripts & diplomas",
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 h-2 w-2 rounded-full bg-ink shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-ink/10 bg-cream/70 p-4">
                  <p className="text-sm font-medium text-slate">Languages</p>
                  <p className="mt-1 [font-family:var(--font-title)] text-xl">
                    EN ↔ ES
                  </p>
                  <p className="mt-1 text-sm text-slate">
                    Add more later if needed
                  </p>
                </div>

                <div className="rounded-2xl border border-ink/10 bg-cream/70 p-4">
                  <p className="text-sm font-medium text-slate">Delivery</p>
                  <p className="mt-1 [font-family:var(--font-title)] text-xl">
                    PDF + Print
                  </p>
                  <p className="mt-1 text-sm text-slate">
                    Australia-wide service
                  </p>
                </div>
              </div>
            </div>

            {/* Blobs decorativos */}
            <div className="pointer-events-none absolute -z-10 -top-10 -right-10 h-44 w-44 rounded-full bg-sky/40 blur-2xl" />
            <div className="pointer-events-none absolute -z-10 -bottom-12 -left-12 h-52 w-52 rounded-full bg-beige/50 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
