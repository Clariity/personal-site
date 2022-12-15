import { ReactNode } from "react";
import Link from "next/link";

type InlineLinkTextProps = {
  children: ReactNode;
  href: string;
};

export function InlineLinkText({ children, href }: InlineLinkTextProps) {
  return (
    <Link href={href}>
      <a className="relative items-center py-1 text-primary after:bg-primary after:absolute after:w-0 after:transition-all after:duration-100 after:ease-linear after:h-1 after:block after:right-0 after:bottom-0 after:rounded-lg after:hover:w-full after:hover:left-0">
        {children}
      </a>
    </Link>
  );
}
