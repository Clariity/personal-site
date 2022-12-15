import { useEffect, useState } from "react";

type CountUpProps = {
  duration?: number;
  startNumber?: number;
  target: number;
};

export function CountUp({
  duration = 2000,
  startNumber = 0,
  target,
}: CountUpProps) {
  const [count, setCount] = useState(startNumber);
  const [initTime] = useState(Date.now());
  const [time, setTime] = useState(1);

  function easeOutCirc(x: number): number {
    return Math.sqrt(1 - Math.pow(x - 1, 2));
  }

  useEffect(() => {
    if (count < target) {
      const timeout = setTimeout(() => {
        setCount(
          Math.floor(easeOutCirc(Math.min(time / duration, 1)) * target)
        );
        setTime(Date.now() - initTime);
      }, 16);

      return () => clearTimeout(timeout);
    }
  }, [count, duration, initTime, target, time]);

  return <>{count}</>;
}
