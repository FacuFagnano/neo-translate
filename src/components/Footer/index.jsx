import { useLanguage } from "../../context/LanguageContext";
import { content } from "../../data/content";

export default function Footer() {
  const { lang } = useLanguage();
  const t = content[lang].footer;

  return (
    <footer className="border-t border-ink/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <p className="[font-family:var(--font-title)] text-lg">
            Neo Translations
          </p>
          <p className="mt-1 text-sm text-slate">
            {t.text1}
          </p>
        </div>

        <p className="text-sm text-slate">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
}
