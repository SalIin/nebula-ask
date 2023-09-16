import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

export const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  className,
  ...restProps
}) => {
  const buttonClassNames = clsx(
    "bg-brand-500 text-white py-3 px-5 transition font-semibold uppercase hover:opacity-90 rounded-md disabled:opacity-50",
    className
  );

  return (
    <button className={buttonClassNames} {...restProps}>
      {children}
    </button>
  );
};
