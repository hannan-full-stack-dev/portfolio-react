import { useLayoutEffect } from "react";

/**
 * The original site loaded a different stylesheet per page (style.css for
 * Home/About/Projects, gallery.css for Gallery) and the two files redefine many
 * of the same selectors. In a single-page app all CSS is global, so we inject
 * the page's stylesheet while the page is mounted and remove it on leave.
 * This keeps every page looking exactly like the original.
 */
export default function usePageStyle(cssText) {
  useLayoutEffect(() => {
    const el = document.createElement("style");
    el.setAttribute("data-page-style", "");
    el.textContent = cssText;
    document.head.appendChild(el);
    return () => el.remove();
  }, [cssText]);
}
