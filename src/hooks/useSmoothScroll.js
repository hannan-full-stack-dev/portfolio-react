import { useEffect } from "react";

/**
 * Buttery mouse-wheel scrolling (no library).
 * - The wheel moves a *target*; every animation frame the page glides toward it.
 * - Easing is time-based, so it feels identical on 60 / 120 / 144 Hz screens.
 * - Touch screens, reduced-motion users, ctrl+wheel zoom, open popups and inner scroll areas
 *   (popup body, long descriptions) keep the browser's own native scrolling.
 * - "#section" links glide to their section the same way.
 */
export default function useSmoothScroll() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const touch = window.matchMedia("(pointer: coarse)").matches;
    if (reduce || touch) return;

    const root = document.documentElement;
    root.classList.add("has-smooth-scroll");
    const prevBehavior = root.style.scrollBehavior;
    root.style.scrollBehavior = "auto"; // every page stylesheet may set "smooth"; that would fight our own easing
    const jump = (y) => window.scrollTo({ top: y, left: 0, behavior: "instant" });

    const TAU = 0.07; // seconds - lower = snappier, higher = floatier
    let target = window.scrollY;
    let current = target;
    let raf = 0;
    let last = 0;

    const maxScroll = () => Math.max(0, root.scrollHeight - window.innerHeight);
    const clamp = (v) => Math.min(Math.max(v, 0), maxScroll());

    const stop = () => {
      cancelAnimationFrame(raf);
      raf = 0;
    };

    const tick = (now) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      target = clamp(target);
      const diff = target - current;
      if (Math.abs(diff) < 0.2) {
        current = target;
        jump(current);
        raf = 0;
        return;
      }
      current += diff * (1 - Math.exp(-dt / TAU));
      jump(current);
      raf = requestAnimationFrame(tick);
    };

    const start = () => {
      if (raf) return;
      last = performance.now();
      raf = requestAnimationFrame(tick);
    };

    // true when the wheel is over an inner scroll area that can still scroll that way
    const innerCanScroll = (el, dy) => {
      for (let n = el; n && n !== document.body && n !== root; n = n.parentElement) {
        const oy = getComputedStyle(n).overflowY;
        if ((oy === "auto" || oy === "scroll") && n.scrollHeight > n.clientHeight + 1) {
          if (dy < 0 ? n.scrollTop > 0 : n.scrollTop + n.clientHeight < n.scrollHeight - 1) return true;
        }
      }
      return false;
    };

    const onWheel = (e) => {
      if (e.ctrlKey || e.defaultPrevented) return;
      if (document.body.style.overflow === "hidden") return; // a popup is open
      let dy = e.deltaY;
      if (e.deltaMode === 1) dy *= 40;
      else if (e.deltaMode === 2) dy *= window.innerHeight;
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return; // sideways scroll stays native
      if (innerCanScroll(e.target, dy)) return;

      e.preventDefault();
      if (!raf) current = target = window.scrollY;
      target = clamp(target + dy);
      start();
    };

    // Scrolled by something else (scrollbar, keyboard, page change) -> follow it
    const onScroll = () => {
      if (!raf || Math.abs(window.scrollY - current) > 3) {
        stop();
        current = target = window.scrollY;
      }
    };

    // "#contact"-style links on the same page glide instead of jumping
    const onClick = (e) => {
      const a = e.target.closest?.("a[href^='#']");
      if (!a || e.defaultPrevented || e.metaKey || e.ctrlKey) return;
      const id = a.getAttribute("href").slice(1);
      const el = id && document.getElementById(id);
      if (!el) return;
      e.preventDefault();
      if (!raf) current = target = window.scrollY;
      target = clamp(el.getBoundingClientRect().top + window.scrollY);
      start();
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("click", onClick);
    return () => {
      stop();
      root.classList.remove("has-smooth-scroll");
      root.style.scrollBehavior = prevBehavior;
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("click", onClick);
    };
  }, []);
}
