export function Tag({ children }: WrapperProps) {
  return (
    <div className="border-primary bg-secondary border-2 px-2 py-1 rounded-lg shadow-md text-sm md:text-base">
      {children}
    </div>
  );
}
