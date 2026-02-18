import { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { content } from "../../data/content";
import useRevealOnScroll from "../../hooks/useRevealOnScroll";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const { lang } = useLanguage();
  const t = content[lang].contact;

  const { ref, isVisible } = useRevealOnScroll();

  const [status, setStatus] = useState({ type: "idle", msg: "" });
  const [loading, setLoading] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "idle", msg: "" });

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data?.error || "Could not send message.");
      }

      form.reset();
      setStatus({
        type: "success",
        msg:
          lang === "es"
            ? "Mensaje enviado. ¡Gracias!"
            : "Message sent. Thank you!",
      });
    } catch (err) {
      setStatus({
        type: "error",
        msg:
          lang === "es"
            ? `No se pudo enviar. ${err.message}`
            : `Could not send. ${err.message}`,
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="contact"
      ref={ref}
      className={`bg-beige/40 py-16 sm:py-20  reveal ${
        isVisible ? "reveal--visible" : ""
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Text */}
          <div>
            <h2 className="text-3xl sm:text-4xl [font-family:var(--font-title)]">
              {t.title}
            </h2>

            <p className="mt-4 text-slate max-w-xl">{t.text1}</p>
            <p className="mt-4 text-slate max-w-xl">{t.text2}</p>
            {/* Social buttons */}
            <div className="mt-6 flex flex-wrap gap-3">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/neo.translation"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border border-ink/15 bg-cream px-4 py-2 text-sm font-medium text-ink hover:bg-beige/40 transition no-underline"
              >
                <FaInstagram className="text-lg" />
                Instagram
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/yuliananeonelli/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border border-ink/15 bg-cream px-4 py-2 text-sm font-medium text-ink hover:bg-beige/40 transition no-underline"
              >
                <FaLinkedin className="text-lg" />
                LinkedIn
              </a>

              {/* WhatsApp placeholder */}
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-2xl border border-ink/15 bg-cream px-4 py-2 text-sm font-medium text-ink hover:bg-beige/40 transition"
                onClick={() => alert("WhatsApp number coming soon")}
              >
                <FaWhatsapp className="text-lg" />
                WhatsApp
              </button>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-3xl border border-ink/10 bg-beige/40 p-6 sm:p-8">
            <form className="grid gap-4" onSubmit={onSubmit}>
              <input
                name="name"
                required
                placeholder={lang === "es" ? "Nombre completo" : "Full Name"}
                className="rounded-2xl border border-ink/15 bg-cream px-4 py-3 outline-none focus:ring-2 focus:ring-sky/60"
              />

              <input
                name="email"
                type="email"
                required
                placeholder="Email"
                className="rounded-2xl border border-ink/15 bg-cream px-4 py-3 outline-none focus:ring-2 focus:ring-sky/60"
              />

              <input
                name="subject"
                placeholder={
                  lang === "es" ? "Asunto (opcional)" : "Subject (optional)"
                }
                className="rounded-2xl border border-ink/15 bg-cream px-4 py-3 outline-none focus:ring-2 focus:ring-sky/60"
              />

              <textarea
                name="message"
                required
                placeholder={lang === "es" ? "Mensaje" : "Message"}
                className="min-h-[140px] rounded-2xl border border-ink/15 bg-cream px-4 py-3 outline-none focus:ring-2 focus:ring-sky/60"
              />

              {/* Attachments */}
              <div className="grid gap-2">
                <label className="text-sm font-medium text-ink">
                  {lang === "es"
                    ? "Adjuntar archivos (PDF o imagen)"
                    : "Attach files (PDF or image)"}
                </label>
                <input
                  name="files"
                  type="file"
                  multiple
                  accept="application/pdf,image/*"
                  className="block w-full text-sm text-slate file:mr-4 file:rounded-xl file:border-0 file:bg-ink file:px-4 file:py-2 file:text-cream file:cursor-pointer hover:file:opacity-90"
                />
                <p className="text-xs text-slate">
                  {lang === "es"
                    ? "Sugerencia: máximo 3 archivos / 10MB total."
                    : "Tip: max 3 files / 10MB total."}
                </p>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="rounded-2xl bg-ink text-cream px-6 py-3 font-medium hover:opacity-90 transition disabled:opacity-60"
              >
                {loading
                  ? lang === "es"
                    ? "Enviando..."
                    : "Sending..."
                  : t.button}
              </button>

              {status.type !== "idle" && (
                <p
                  className={`text-sm ${
                    status.type === "success" ? "text-ink" : "text-cocoa"
                  }`}
                >
                  {status.msg}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
