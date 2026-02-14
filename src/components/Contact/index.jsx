import { useLanguage } from "../../context/LanguageContext";
import { content } from "../../data/content";

export default function Contact() {
  const { lang } = useLanguage();
  const t = content[lang].contact;

  return (
    <section id="contact" className="bg-beige/40 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Text */}
          <div>
            <h2 className="text-3xl sm:text-4xl [font-family:var(--font-title)]">
              {t.title}
            </h2>

            <p className="mt-4 text-slate max-w-xl">{t.text1}</p>
            <p className="mt-4 text-slate max-w-xl">{t.text2}</p>
          </div>

          {/* Form */}
          <div className="rounded-3xl border border-ink/10 bg-cream/70 p-6 sm:p-8">
            <form className="grid gap-4">
              <input
                placeholder="Full Name"
                className="rounded-2xl border border-ink/15 bg-cream px-4 py-3 outline-none focus:ring-2 focus:ring-sky/60"
              />

              <input
                type="email"
                placeholder="Email"
                className="rounded-2xl border border-ink/15 bg-cream px-4 py-3 outline-none focus:ring-2 focus:ring-sky/60"
              />

              <textarea
                placeholder="Message"
                className="min-h-[140px] rounded-2xl border border-ink/15 bg-cream px-4 py-3 outline-none focus:ring-2 focus:ring-sky/60"
              />

              <button
                type="button"
                className="rounded-2xl bg-ink text-cream px-6 py-3 font-medium hover:opacity-90 transition"
              >
                {t.button}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
