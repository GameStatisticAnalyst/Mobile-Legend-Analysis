import type * as React from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "ghost" | "outline"
  size?: "default" | "sm" | "lg" | "icon"
  asChild?: boolean // Add the asChild prop if needed
}

export default function Button({
  className = "",
  variant = "default",
  size = "default",
  asChild, // Destructure `asChild` here to avoid passing it down
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none"

  const variants = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
  }

  const sizes = {
    default: "h-10 py-2 px-4",
    sm: "h-9 px-3",
    lg: "h-11 px-8",
    icon: "h-10 w-10",
  }

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`

  if (asChild) {
    // Render children directly without the button wrapper
    return <>{props.children}</>
  }

  return <button className={classes} {...props} />
}
