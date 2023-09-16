import NextLink, { LinkProps as NextLinkProps } from "next/link";
import clsx from "clsx";

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
  const linkClassNames = {
    default: clsx("", customClassName),
    button: clsx(
      "bg-brand-500 text-white py-3 px-5 transition font-semibold uppercase hover:opacity-90 rounded-md disabled:opacity-50",
      customClassName
    ),
  };

  return (
    <NextLink className={linkClassNames[variant]} {...restProps}>
      {children}
    </NextLink>
  );
};
