interface HeadingOneProps extends WrapperProps {
  noMargin?: boolean;
}

export function HeadingOne({ children, noMargin = false }: HeadingOneProps) {
  return (
    <h1
      className={`text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl scroll-mt-8 ${
        noMargin ? "" : "mb-6 "
      }`}
      id={children
        ?.toString()
        .toLowerCase()
        .replace(/\s/g, "-")
        .replace(/\?/g, "")}
    >
      {children}
    </h1>
  );
}
