import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "button" | "text";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = "button",
  ...restProps
}) => {
  const buttonClassNames = clsx(
    "bg-brand-500 border border-brand-200 drop-shadow-base py-6 px-5 transition hover:opacity-90 rounded-2xl disabled:opacity-50",
    className
  );

  const variants = {
    button: buttonClassNames,
    text: "",
  };

  return (
    <button className={variants[variant]} {...restProps}>
      {children}
    </button>
  );
};
