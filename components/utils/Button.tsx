import { ReactNode } from "react";

export type ButtonProps = {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  secondary?: boolean;
};

export function Button({
  children,
  className,
  disabled,
  onClick,
  secondary,
}: ButtonProps) {
  return (
    <button
      className={`p-2 shadow-lg text-sm md:min-w-[120px] md:text-xl rounded-lg disabled:opacity-50 disabled:cursor-not-allowed ${
        secondary
          ? "bg-secondary hover:bg-secondaryhover"
          : "bg-primary hover:bg-primaryhover"
      } ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
