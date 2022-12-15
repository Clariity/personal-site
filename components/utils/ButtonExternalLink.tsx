import { Button, ButtonProps } from "./Button";

interface ButtonExternalLinkProps extends ButtonProps {
  link: string;
}

export function ButtonExternalLink({
  link,
  ...props
}: ButtonExternalLinkProps) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <Button {...props} />
    </a>
  );
}
