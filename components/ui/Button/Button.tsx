import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "button" | "text";
  colorSchema?: "default" | "brand";
  size?: "sm" | "md";
  noPaddings?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = "button",
  colorSchema = "default",
  size = "md",
  noPaddings = false,
  ...restProps
}) => {
  const colorSchemas = {
    default: "bg-brand-500 border border-brand-200 shadow-base",
    brand: "bg-base text-white shadow-dark",
  };

  const variants = {
    button: "transition hover:opacity-90 rounded-2xl disabled:opacity-50",
    text: "bg-transparent shadow-none p-0 border-none",
  };

  const sizes = {
    sm: "p-4 text-lg",
    md: "p-5 text-md",
  };

  const buttonClassNames = clsx(
    colorSchemas[colorSchema],
    !noPaddings && sizes[size],
    variants[variant],
    className
  );

  return (
    <button className={buttonClassNames} {...restProps}>
      {children}
    </button>
  );
};
