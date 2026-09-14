"use client";

import { useEffect, useRef, useState } from "react";

function formatCount(value: number) {
  return value.toLocaleString("en-GB");
}

/**
 * Animate a number from 0 to `value` once the element scrolls into view.
 * The final value is kept in a screen-reader-only node so the live count
 * does not announce every frame.
 */
export function CountUp({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      // Start once ~35% of the number is visible.
      { threshold: 0.35 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    const duration = 650;
    const start = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      // 0 → 1 over `duration` ms.
      const progress = Math.min(1, (now - start) / duration);
      // Ease-out cubic: fast at first, then slows into the final value.
      const eased = 1 - (1 - progress) ** 3;
      setDisplay(Math.round(value * eased));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [started, value]);

  return (
    <span ref={ref} className="tabular-nums">
      <span className="sr-only">{formatCount(value)}</span>
      <span aria-hidden>{formatCount(display)}</span>
    </span>
  );
}
