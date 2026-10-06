import { useEffect, useRef, useState } from "react";

export const prefersReduced = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Becomes true once the element has scrolled into view (and stays true).
export function useInView(threshold = 0.4) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    if (!("IntersectionObserver" in window)) {
      setSeen(true);
      return undefined;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return [ref, seen];
}

// Counts from 0 to target once `run` turns true.
export function useCountUp(target, run, duration = 1400) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!run) return undefined;
    if (prefersReduced()) {
      setValue(target);
      return undefined;
    }
    let raf;
    const t0 = performance.now();
    const step = (t) => {
      const k = Math.min(1, (t - t0) / duration);
      setValue(Math.round(target * (1 - (1 - k) ** 3)));
      if (k < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [run, target, duration]);

  return value;
}
