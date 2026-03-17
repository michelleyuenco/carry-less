export function formatNumber(n: number): string {
  return n.toLocaleString();
}

export function easeOutQuad(t: number): number {
  return t * (2 - t);
}

export function animateCount(
  from: number,
  to: number,
  duration: number,
  onUpdate: (value: number) => void,
  onComplete?: () => void
): void {
  const start = performance.now();
  function step(timestamp: number) {
    const elapsed = timestamp - start;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = easeOutQuad(progress);
    const current = Math.round(from + (to - from) * easedProgress);
    onUpdate(current);
    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      onComplete?.();
    }
  }
  requestAnimationFrame(step);
}
