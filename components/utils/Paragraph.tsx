import { Text } from "./Text";

export function Paragraph({ children }: WrapperProps) {
  return (
    <div className="mb-4">
      <Text>{children}</Text>
    </div>
  );
}
