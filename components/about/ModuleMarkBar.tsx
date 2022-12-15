import { useInView } from "react-intersection-observer";

import { Text } from "../utils/Text";

type ModuleMarkBarProps = {
  mark: number;
  module: string;
};

export function ModuleMarkBar({ mark, module }: ModuleMarkBarProps) {
  const { ref, inView } = useInView();

  return (
    <div className="flex flex-col mb-6" ref={ref}>
      <Text>{module}</Text>
      <div className="flex">
        <div className="w-[95%] h-8 bg-primarylight rounded-lg">
          <div
            className="h-8 bg-primary rounded-lg transition-all duration-500 ease-out"
            style={{ width: `${inView ? mark : 0}%` }}
          />
        </div>
        <div className="flex w-[5%] justify-center">
          <Text>{mark}</Text>
        </div>
      </div>
    </div>
  );
}
