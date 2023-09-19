import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "button" | "text";
  colorSchema?: "default" | "brand";
  size?: "sm" | "md";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = "button",
  colorSchema = "default",
  size = "md",
  ...restProps
}) => {
  const buttonClassNames = clsx(
    "transition hover:opacity-90 rounded-2xl disabled:opacity-50",
    className
  );

  const variants = {
    button: buttonClassNames,
    text: "bg-transparent p-0 shadow-none border-none",
  };

  const colorSchemas = {
    default: "bg-brand-500 border border-brand-200 shadow-base",
    brand: "bg-base text-white shadow-dark",
  };

  const sizes = {
    sm: "p-4 text-lg",
    md: "p-5 text-md",
  };

  const styles = clsx(
    variants[variant],
    colorSchemas[colorSchema],
    sizes[size]
  );

  return (
    <button className={styles} {...restProps}>
      {children}
    </button>
  );
};
