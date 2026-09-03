import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sun focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
          {
            "bg-sun text-oxford font-semibold hover:bg-sun-light shadow-md shadow-sun/20 hover:shadow-sun/40":
              variant === "default",
            "border border-sun text-sun bg-sun/10 hover:bg-sun hover:text-oxford":
              variant === "outline",
            "bg-oxford-card text-slate-200 border border-oxford-border hover:border-sun/50 hover:text-sun":
              variant === "secondary",
            "text-slate-300 hover:text-sun hover:bg-white/5":
              variant === "ghost",
            "text-sun underline-offset-4 hover:underline":
              variant === "link",
          },
          {
            "h-10 px-5 py-2": size === "default",
            "h-8 rounded-md px-3 text-xs": size === "sm",
            "h-12 rounded-lg px-8 text-base": size === "lg",
            "h-10 w-10 p-0": size === "icon",
          },
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
