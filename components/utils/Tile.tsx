import { Text } from "./Text";

export function Tile({ children }: WrapperProps) {
  return (
    <div className="flex justify-center items-center flex-grow text-md text-center bg-primary shadow-sm p-4 mr-2 mb-2 rounded-lg">
      <Text>{children}</Text>
    </div>
  );
}
