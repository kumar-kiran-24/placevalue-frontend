import { useEffect, useRef, useState, type ReactNode } from "react";
export function Reveal({
  children,
  delay = 0,
  className = "",
  // as: As = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  // as?: ElementType;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setTimeout(() => setOn(true), delay);
            io.disconnect();
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

return (
  <div
    ref={ref as React.RefObject<HTMLDivElement>}
    className={`reveal ${on ? "on" : ""} ${className}`}
  >
    {children}
  </div>
);

}
