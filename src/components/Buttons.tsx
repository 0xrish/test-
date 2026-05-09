import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type BaseProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium " +
  "transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 " +
  "focus-visible:ring-accent-blue/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background " +
  "disabled:pointer-events-none disabled:opacity-50";

export const PrimaryButton = forwardRef<HTMLButtonElement, BaseProps>(
  ({ children, className, ...props }, ref) => (
    <button
      ref={ref}
      {...props}
      className={cn(
        base,
        "bg-accent-blue text-white shadow-[0_8px_30px_-8px_var(--accent-blue)] hover:shadow-[0_14px_40px_-10px_var(--accent-blue)]",
        "hover:-translate-y-0.5 hover:bg-accent-blue-light hover:text-background",
        className,
      )}
    >
      {children}
    </button>
  ),
);
PrimaryButton.displayName = "PrimaryButton";

export const GhostButton = forwardRef<HTMLButtonElement, BaseProps>(
  ({ children, className, ...props }, ref) => (
    <button
      ref={ref}
      {...props}
      className={cn(
        base,
        "border border-border glass text-text-primary hover:border-accent-blue/50 hover:text-accent-blue-light",
        className,
      )}
    >
      {children}
    </button>
  ),
);
GhostButton.displayName = "GhostButton";
