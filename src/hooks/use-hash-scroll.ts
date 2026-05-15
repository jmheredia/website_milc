import { useEffect } from "react";
import { useRouter } from "@tanstack/react-router";

/** Scroll to hash after navigation; useful when hash anchors target deep sections. */
export function useHashScroll() {
  const router = useRouter();
  useEffect(() => {
    const scroll = () => {
      const hash = window.location.hash?.replace("#", "");
      if (!hash) return;
      requestAnimationFrame(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    };
    scroll();
    const unsub = router.subscribe("onResolved", scroll);
    return () => unsub();
  }, [router]);
}
