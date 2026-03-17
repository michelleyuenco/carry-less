import { useState, useEffect, useRef } from 'react';
import { animateCount } from '../../shared/utils';

export function useCountUp(target: number, duration = 2000, startOnMount = false) {
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(startOnMount);

  const start = () => setStarted(true);

  useEffect(() => {
    if (!started) return;
    animateCount(0, target, duration, setValue);
  }, [started, target, duration]);

  return { value, start };
}

export function useCountUpOnVisible(target: number, duration = 2000) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          animateCount(0, target, duration, setValue);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return { value, ref };
}
