import * as React from "react";
import { Slot } from "@radix-ui/react-slot";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "ghost" | "outline";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean; // Add the asChild prop
}

export default function Button({
  className = "",
  variant = "default",
  size = "default",
  asChild, // Destructure `asChild` here
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    default: "bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500",
    ghost:
      "bg-transparent hover:bg-gray-100 text-gray-700 hover:text-gray-900 focus:ring-gray-300",
    outline:
      "border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:ring-gray-300",
  };

  const sizes = {
    default: "h-10 py-2 px-4",
    sm: "h-9 px-3",
    lg: "h-11 px-8",
    icon: "h-10 w-10",
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const Component = asChild ? Slot : "button";

  return <Component className={classes} {...props} />;
}
