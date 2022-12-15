export function HeadingFour({ children }: WrapperProps) {
  return (
    <h4
      className="text-md sm:text-lg md:text-xl scroll-mt-4"
      id={children
        ?.toString()
        .toLowerCase()
        .replace(/\s/g, "-")
        .replace(/\?/g, "")}
    >
      {children}
    </h4>
  );
}
