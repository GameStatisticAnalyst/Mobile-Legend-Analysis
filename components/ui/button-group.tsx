import * as React from "react";
import cn from "@/utils/cn";

interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "horizontal" | "vertical";
  spacing?: "default" | "compact" | "none";
}

const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(
  (
    { className, variant = "horizontal", spacing = "default", ...props },
    ref
  ) => {
    return (
      <div
        className={cn(
          "inline-flex",
          variant === "horizontal" ? "flex-row" : "flex-col",
          spacing === "default"
            ? variant === "horizontal"
              ? "gap-3"
              : "gap-2"
            : spacing === "compact"
            ? variant === "horizontal"
              ? "gap-1"
              : "gap-1"
            : "gap-0",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
ButtonGroup.displayName = "ButtonGroup";

export { ButtonGroup };
