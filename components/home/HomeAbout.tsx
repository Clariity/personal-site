/* eslint-disable @next/next/no-img-element */
import { HeadingTwo } from "../utils/HeadingTwo";
import { Text } from "../utils/Text";

export function HomeAbout() {
  const jobStart = new Date(2022, 6, 18); // Month is 0 indexed
  const jobDif = new Date().getMonth() - jobStart.getMonth();
  const monthsAtJob =
    jobDif + 12 * (new Date().getFullYear() - jobStart.getFullYear());

  return (
    <div className="grid gap-3 md:gap-8 grid-cols-1 md:grid-cols-2 mb-12">
      <div className="flex flex-col items-center border-4 border-primary rounded-lg p-4 shadow-lg">
        <div className="h-1/4">
          <HeadingTwo>Current Role</HeadingTwo>
        </div>
        <div className="flex justify-center items-center h-1/2 w-full">
          <img
            className="max-w-[256px] w-full py-4"
            src="/images/about/checkout.svg"
            alt="Checkout.com"
          />
        </div>
        <div className="flex items-center h-1/4 text-center">
          <Text>Front End Engineer II - {monthsAtJob} months</Text>
        </div>
      </div>

      <div className="flex flex-col items-center border-4 border-primary rounded-lg p-4 shadow-lg">
        <div className="h-1/4">
          <HeadingTwo>Education</HeadingTwo>
        </div>
        <div className="flex justify-center items-center h-1/2 w-full">
          <img
            className="max-w-[256px] w-full py-4"
            src="/images/about/soton.svg"
            alt="University of Southampton"
          />
        </div>
        <div className="flex items-center h-1/4 text-center">
          <Text>MEng Computer Science - 1st with Honours</Text>
        </div>
      </div>
    </div>
  );
}
