export function HeadingThree({ children }: WrapperProps) {
  return (
    <h3
      className="text-md sm:text-xl md:text-2xl mb-2 scroll-mt-4"
      id={children
        ?.toString()
        .toLowerCase()
        .replace(/\s/g, "-")
        .replace(/\?/g, "")}
    >
      {children}
    </h3>
  );
}
