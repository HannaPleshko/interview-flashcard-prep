
import * as React from "react"
import { cn } from "@/lib/utils"

const UnifiedInput = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-xl border border-purple-200 bg-white/70 px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:border-purple-400 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm backdrop-blur-sm transition-all duration-200",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
UnifiedInput.displayName = "UnifiedInput"

export { UnifiedInput }
