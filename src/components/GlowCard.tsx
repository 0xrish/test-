import { forwardRef, type HTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlowCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  /** CSS color value used for the hover glow. Defaults to accent blue. */
  accentColor?: string;
}

export const GlowCard = forwardRef<HTMLDivElement, GlowCardProps>(
  ({ children, accentColor = "var(--accent-blue)", className, style, ...props }, ref) => {
    return (
      <div
        ref={ref}
        {...props}
        style={
          {
            ...style,
            // consumed by the ::before glow via CSS var
            ["--glow-color" as string]: accentColor,
          } as React.CSSProperties
        }
        className={cn(
          "group relative rounded-2xl border border-border glass p-6 transition-all duration-500",
          "hover:border-[color:var(--glow-color)]/40 hover:-translate-y-0.5",
          "before:pointer-events-none before:absolute before:inset-0 before:rounded-2xl before:opacity-0",
          "before:transition-opacity before:duration-500 hover:before:opacity-100",
          "before:[background:radial-gradient(600px_circle_at_var(--mx,50%)_var(--my,50%),color-mix(in_oklab,var(--glow-color)_18%,transparent),transparent_60%)]",
          "after:pointer-events-none after:absolute after:-inset-px after:rounded-2xl after:opacity-0",
          "after:transition-opacity after:duration-500 hover:after:opacity-100",
          "after:shadow-[0_0_60px_-10px_var(--glow-color)]",
          className,
        )}
        onMouseMove={(e) => {
          const t = e.currentTarget as HTMLDivElement;
          const r = t.getBoundingClientRect();
          t.style.setProperty("--mx", `${e.clientX - r.left}px`);
          t.style.setProperty("--my", `${e.clientY - r.top}px`);
        }}
      >
        <div className="relative z-10">{children}</div>
      </div>
    );
  },
);
GlowCard.displayName = "GlowCard";
