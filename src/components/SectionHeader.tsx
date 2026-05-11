import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  overline?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  overline,
  title,
  subtitle,
  align = "left",
  className,
}: SectionHeaderProps) {
  const center = align === "center";
  return (
    <div className={cn("max-w-3xl", center && "mx-auto text-center", className)}>
      {overline && (
        <span
          className={cn(
            "inline-flex items-center gap-2 rounded-full border border-border glass px-3 py-1",
            "text-xs font-medium uppercase tracking-[0.18em] text-accent-blue-light",
          )}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent-blue" />
          {overline}
        </span>
      )}
      <h2 className="font-display mt-5 text-4xl leading-[1.05] text-text-primary sm:text-5xl md:text-6xl">
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed text-text-muted sm:text-lg",
            center && "mx-auto",
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
