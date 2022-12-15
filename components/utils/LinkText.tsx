import { ReactNode } from "react";
import Link from "next/link";

type LinkTextProps = {
  children: ReactNode;
  external?: boolean;
  highlight?: boolean;
  href: string;
};

export function LinkText({
  children,
  external = false,
  highlight,
  href,
}: LinkTextProps) {
  const additionalProps = external
    ? {
        target: "_blank",
        rel: "noopener noreferrer",
      }
    : {};

  return (
    <Link href={href}>
      <a
        className={`relative flex items-center py-1 hover:text-primary after:bg-primary after:absolute after:w-0 after:transition-all after:duration-100 after:ease-linear after:h-1 after:block after:right-0 after:bottom-0 after:rounded-lg after:hover:w-full after:hover:left-0 ${
          highlight ? "text-primary after:w-full" : ""
        }`}
        {...additionalProps}
      >
        {children}
      </a>
    </Link>
  );
}
