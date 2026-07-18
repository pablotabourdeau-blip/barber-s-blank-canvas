import { useEffect } from "react";

/**
 * Global scroll-reveal: elements with the `animate-fade-up` class start hidden
 * (see styles.css) and are revealed exactly once when they enter the viewport.
 * New elements added later (e.g. from route changes) are picked up via a
 * MutationObserver.
 */
export function ScrollReveal() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!("IntersectionObserver" in window)) {
      document
        .querySelectorAll(".animate-fade-up")
        .forEach((el) => el.classList.add("in-view"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );

    const observeAll = () => {
      document
        .querySelectorAll<HTMLElement>(".animate-fade-up:not(.in-view)")
        .forEach((el) => io.observe(el));
    };
    observeAll();

    const mo = new MutationObserver(observeAll);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return null;
}
