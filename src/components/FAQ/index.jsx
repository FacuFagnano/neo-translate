import { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { content } from "../../data/content";
import useRevealOnScroll from "../../hooks/useRevealOnScroll";

function FaqItem({ q, a, isOpen, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={[
        "w-full text-left rounded-2xl border border-ink/10 bg-cream/80 backdrop-blur px-5 py-4",
        "hover:bg-beige/40 transition shadow-sm",
        "focus:outline-none focus:ring-2 focus:ring-sky/60",
      ].join(" ")}
      aria-expanded={isOpen}
    >
      <div className="flex items-start justify-between gap-4">
        <span className="font-medium text-ink leading-snug">{q}</span>

        <span
          className={[
            "shrink-0 inline-flex h-9 w-9 items-center justify-center rounded-xl border border-ink/10 bg-cream",
            "transition-transform duration-300",
            isOpen ? "rotate-45" : "rotate-0",
          ].join(" ")}
          aria-hidden="true"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-5 w-5 text-ink"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14" />
          </svg>
        </span>
      </div>

      <div
        className={[
          "grid transition-[grid-template-rows] duration-300 ease-out",
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        ].join(" ")}
      >
        <div className="overflow-hidden">
          <p className="mt-3 text-sm leading-relaxed text-slate">{a}</p>
        </div>
      </div>
    </button>
  );
}

export default function FAQ() {
  const { lang } = useLanguage();
  const t = content[lang].faq;

  const [openIndex, setOpenIndex] = useState(-1);
  const { ref, isVisible } = useRevealOnScroll();

  return (
    <div ref={ref} className={`reveal ${isVisible ? "reveal--visible" : ""}`}>
      <h3 className="text-2xl [font-family:var(--font-title)] text-ink">
        {t.title}
      </h3>
      <p className="mt-2 text-sm text-slate">{t.subtitle}</p>

      <div className="mt-6 flex flex-col gap-3">
        {t.items.map((item, i) => (
          <FaqItem
            key={i}
            q={item.q}
            a={item.a}
            isOpen={openIndex === i}
            onToggle={() => setOpenIndex((prev) => (prev === i ? -1 : i))}
          />
        ))}
      </div>
    </div>
  );
}