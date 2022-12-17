import { JobCard } from "./JobCard";
import { jobs } from "../../content/consts";
import { HeadingTwo } from "../utils/HeadingTwo";

export function AboutCareer() {
  return (
    <>
      <div className="flex justify-center mb-4">
        <HeadingTwo>My Career</HeadingTwo>
      </div>

      <div className="flex flex-col relative mb-12 md:mb-16 lg:mb-24 overflow-x-hidden">
        <div className="w-1 bg-primary absolute h-full left-[26px] lg:left-[calc(50%-2px)] rounded-lg" />
        {jobs.map((j, i) => (
          <JobCard index={i} key={i} {...j} />
        ))}
      </div>
    </>
  );
}
