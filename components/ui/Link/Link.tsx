import clsx from "clsx";
import NextLink, { LinkProps as NextLinkProps } from "next/link";

interface LinkProps extends NextLinkProps {
  children: React.ReactNode;
  customClassName?: string;
  variant?: "default" | "button";
}

export const Link: React.FC<LinkProps> = ({
  variant = "default",
  customClassName = "",
  children,
  ...restProps
}) => {
  const buttonClassNames = clsx(
    "bg-base text-white shadow-dark p-5 text-md transition hover:opacity-90 rounded-2xl disabled:opacity-50",
    customClassName
  );

  const variants = {
    button: buttonClassNames,
    default: "bg-transparent p-0 shadow-none border-none",
  };

  return (
    <NextLink className={variants[variant]} {...restProps}>
      {children}
    </NextLink>
  );
};
