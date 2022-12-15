import Link from "next/link";
import { Button, ButtonProps } from "./Button";

interface ButtonLinkProps extends ButtonProps {
  link: string;
}

export function ButtonLink({ link, ...props }: ButtonLinkProps) {
  return (
    <Link href={link}>
      <a>
        <Button {...props} />
      </a>
    </Link>
  );
}
