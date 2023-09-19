import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

export const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  className,
  ...restProps
}) => {
  const buttonClassNames = clsx(
    "bg-brand-500 border border-brand-200 drop-shadow-base py-6 px-5 transition hover:opacity-90 rounded-2xl disabled:opacity-50",
    className
  );

  return (
    <button className={buttonClassNames} {...restProps}>
      {children}
    </button>
  );
};
