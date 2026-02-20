import { FaWhatsapp } from "react-icons/fa6";

export default function FloatingWhatsApp() {
  const whatsappLink = "https://wa.me/610477005437";

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-ink text-cream shadow-lg hover:opacity-90 transition"
      aria-label="WhatsApp"
    >
      <FaWhatsapp className="text-4xl" />
    </a>
  );
}
