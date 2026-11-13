import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Scroll-reveal animation: adds the "show" class on every ".reveal" element
 * as it enters the viewport. The class is never removed on scroll-out, so
 * elements stay visible once revealed — no flicker, no re-hiding jumps.
 *
 * Fixes vs. the old version:
 * - useLayoutEffect runs before paint, eliminating the flash of hidden content.
 * - threshold 0.1 + rootMargin so elements trigger slightly before the fold.
 * - Only adds "show", never toggles it off — prevents layout shifts when
 *   scrolling back up.
 */
export default function useReveal() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    const elements = document.querySelectorAll(".reveal, .reveal-card, .img-reveal");

    if (!("IntersectionObserver" in window)) {
      elements.forEach((el) => el.classList.add("show"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);
}
