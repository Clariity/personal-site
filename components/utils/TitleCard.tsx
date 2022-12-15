export function TitleCard({ children }: WrapperProps) {
  return (
    <div className="bg-primary rounded-lg flex p-4 mb-12 shadow-lg">
      {children}
    </div>
  );
}
