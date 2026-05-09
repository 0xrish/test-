import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TagPillProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
}

export function TagPill({ children, className, ...props }: TagPillProps) {
  return (
    <span
      {...props}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-border bg-card/60",
        "px-3 py-1 text-xs font-medium text-text-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}
