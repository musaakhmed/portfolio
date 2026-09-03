import * as React from "react"
import { cn } from "@/lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "outline" | "sun"
}

function Badge({
  className,
  variant = "default",
  ...props
}: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider transition-colors",
        {
          "border border-sun/30 bg-sun/10 text-sun": variant === "default",
          "border border-oxford-border bg-oxford text-slate-300": variant === "secondary",
          "border border-slate-700 text-slate-400": variant === "outline",
          "bg-sun text-oxford font-bold": variant === "sun",
        },
        className
      )}
      {...props}
    />
  )
}

export { Badge }
