export function trackEvent(name: string, props?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  const w = window as typeof window & {
    plausible?: (event: string, options?: { props?: Record<string, unknown> }) => void;
    gtag?: (...args: unknown[]) => void;
  };
  w.plausible?.(name, { props });
  w.gtag?.("event", name, props || {});
}
