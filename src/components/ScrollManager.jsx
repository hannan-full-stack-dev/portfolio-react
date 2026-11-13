import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * - Page change: jump to the top (React Router doesn't do this by itself).
 * - Link with a #hash (e.g. "/#contact" from the other pages): scroll to that section.
 *
 * We use useLayoutEffect so the scroll reset happens before paint — the
 * previous page's scroll position is never visible, eliminating the
 * "page opens part-way-down" flicker.
 */
export default function ScrollManager() {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.slice(1));
      if (target) {
        target.scrollIntoView({ behavior: "auto" });
        return;
      }
    }
    // Instant jump — no toggling of scroll-behavior, no flash of smooth scroll.
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}
