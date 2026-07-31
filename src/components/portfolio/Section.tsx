import type { ReactNode } from "react";
import { useReveal } from "@/hooks/use-reveal";

export function Section({
  id,
  title,
  subtitle,
  children,
}: {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  const { ref, className } = useReveal<HTMLDivElement>();

  return (
    <section id={id} className="scroll-mt-24 py-16 sm:py-24">
      <div ref={ref} className={`mx-auto max-w-6xl px-5 ${className}`}>
        <div className="mb-10 flex items-end gap-4">
          <div>
            <h2 className="text-2xl font-bold sm:text-4xl">
              <span className="text-gradient">{title}</span>
            </h2>
            {subtitle && <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p>}
          </div>
          <div className="mb-2 h-px flex-1 bg-gradient-to-r from-border to-transparent" />
        </div>
        {children}
      </div>
    </section>
  );
}
