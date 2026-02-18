import { useEffect, useRef, useState } from "react";

export default function useRevealOnScroll(options = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const isMobile =
      typeof window !== "undefined" && window.innerWidth < 768;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      {
        threshold: isMobile ? 0.01 : 0.08,
        rootMargin: isMobile ? "0px 0px -15% 0px" : "0px 0px -20% 0px",
        ...options,
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [options]);

  return { ref, isVisible };
}
