export function HeadingTwo({ children }: WrapperProps) {
  return (
    <h2
      className="text-lg sm:text-2xl md:text-3xl mb-4 scroll-mt-6"
      id={children
        ?.toString()
        .toLowerCase()
        .replace(/\s/g, "-")
        .replace(/\?/g, "")}
    >
      {children}
    </h2>
  );
}
