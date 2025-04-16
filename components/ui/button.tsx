import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { Loader2 } from "lucide-react";
import cn from "@/utils/cn";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  size?: "default" | "sm" |"md" | "lg" | "icon";
  isFullWidth?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "default",
      size = "default",
      isFullWidth = false,
      asChild = false,
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      onClick,
      ...props
    }: ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>,
    ref: React.ForwardedRef<HTMLButtonElement>
  ): React.ReactElement | null => {
    const isDisabled: boolean = disabled || isLoading;

    const baseStyles =
      "inline-flex items-center justify-center whitespace-nowrap rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
      default: "bg-blue-500 text-white hover:bg-blue-600",
      destructive: "bg-red-500 text-white hover:bg-red-600",
      outline:
        "border border-gray-200 dark:border-gray-800 bg-transparent dark:bg-gray-950 text-gray-700 dark:text-gray-300 hover:bg-gray-100",
      secondary: "bg-gray-100 text-gray-700 hover:bg-gray-200",
      ghost: "bg-transparent hover:bg-gray-100 text-gray-700",
      link: "text-blue-500 underline-offset-4 hover:underline",
    };

    const sizes = {
      default: "h-10 px-4 py-2",
      sm: "h-9 px-3",
      md: "h-10 px-4",
      lg: "h-11 px-8",
      icon: "h-10 w-10",
    };

    const fullWidth: "w-full" | "" = isFullWidth ? "w-full" : "";

    const classes: string = cn(
      baseStyles,
      variants[variant],
      sizes[size],
      fullWidth,
      className
    );

    const content: React.ReactElement = (
      <>
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {!isLoading && leftIcon && <span className="mr-2">{leftIcon}</span>}
        {children}
        {!isLoading && rightIcon && <span className="ml-2">{rightIcon}</span>}
      </>
    );

    if (asChild) {
      if (
        React.isValidElement(children) &&
        typeof children.type === "string" &&
        children.type.toLowerCase() === "button"
      ) {
        console.error(
          "❌ Error: You cannot use <button> as a child of <Button asChild>. It causes nested <button>, which is invalid HTML."
        );
        return null;
      }

      return (
        <Slot className={classes} ref={ref} {...props}>
          {content}
        </Slot>
      );
    }

    return (
      <button
        className={classes}
        ref={ref}
        disabled={isDisabled}
        onClick={onClick}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
