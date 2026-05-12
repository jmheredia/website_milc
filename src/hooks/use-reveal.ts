import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";

export function useReveal() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    let cancelled = false;
    let io: IntersectionObserver | null = null;
    const timeouts: number[] = [];

    const revealAll = () => {
      document
        .querySelectorAll<HTMLElement>(".reveal:not(.is-visible)")
        .forEach((el) => el.classList.add("is-visible"));
    };

    const observe = () => {
      if (cancelled) return;
      const els = document.querySelectorAll<HTMLElement>(".reveal:not(.is-visible)");

      if (!("IntersectionObserver" in window)) {
        els.forEach((e) => e.classList.add("is-visible"));
        return;
      }

      if (io) io.disconnect();
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("is-visible");
              io?.unobserve(e.target);
            }
          });
        },
        { threshold: 0.05, rootMargin: "0px 0px -5% 0px" }
      );
      els.forEach((el) => io!.observe(el));
    };

    timeouts.push(window.setTimeout(observe, 0));
    timeouts.push(window.setTimeout(observe, 100));
    timeouts.push(window.setTimeout(observe, 300));
    timeouts.push(
      window.setTimeout(() => {
        if (cancelled) return;
        revealAll();
      }, 600)
    );

    return () => {
      cancelled = true;
      timeouts.forEach((t) => window.clearTimeout(t));
      io?.disconnect();
    };
  }, [pathname]);
}
