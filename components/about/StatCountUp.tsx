import { useInView } from "react-intersection-observer";
import { CountUp } from "../utils/CountUp";
import { HeadingThree } from "../utils/HeadingThree";

type StatCountUpProps = {
  heading: string;
  stat: number;
};

export function StatCountUp({ heading, stat }: StatCountUpProps) {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      className="flex flex-col items-center border-4 border-primary rounded-lg p-4 shadow-lg"
    >
      <HeadingThree>{heading}</HeadingThree>
      {inView && (
        <div className="text-3xl md:text-5xl p-4 md:p-6">
          <CountUp target={stat} />
        </div>
      )}
    </div>
  );
}
