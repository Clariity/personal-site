import { ReactNode } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

import { HeadingThree } from "../utils/HeadingThree";
import { HeadingFour } from "../utils/HeadingFour";
import { Tag } from "../utils/Tag";
import { Text } from "../utils/Text";

type JobCardProps = {
  company: string;
  dates: string;
  description: string | ReactNode;
  imagePath: string;
  index: number;
  jobTitle: string;
  location: string;
  tags: string[];
};

export function JobCard({
  company,
  dates,
  description,
  imagePath,
  index,
  jobTitle,
  location,
  tags,
}: JobCardProps) {
  const { ref, inView } = useInView();

  return (
    <div className="relative">
      <div className="flex absolute lg:left-[calc(50%-32px)] top-4 rounded-full border-secondary border-4 shadow-lg w-14 lg:w-auto">
        <Image
          className="rounded-full"
          src={`/images/about/${imagePath}`}
          alt={`${company} logo`}
          width={60}
          height={60}
        />
      </div>

      <div
        className={`flex ${index % 2 ? "lg:flex-row-reverse" : ""}`}
        ref={ref}
      >
        <div className="w:10/12 lg:w-1/2">
          <div
            className={`relative bg-secondary border-primary border-4 rounded-lg shadow-lg ml-20 lg:mx-16 my-4 p-6 ${
              inView ? "motion-safe:animate-slideInRight" : ""
            } ${
              index % 2
                ? ""
                : `${inView && "lg:motion-safe:animate-slideInLeft"}`
            }`}
          >
            <div
              className={`bg-secondary w-3 h-3 absolute rotate-45 top-[20px] lg:top-[30px] right-[calc(100%-3px)] border-l-primary border-l-4 border-b-primary border-b-4 ${
                index % 2
                  ? ""
                  : "lg:left-[calc(100%-3px)] lg:border-t-primary lg:border-t-4 lg:border-r-primary lg:border-r-4 lg:border-l-0 lg:border-b-0"
              }`}
            />

            <HeadingThree>{jobTitle}</HeadingThree>
            <HeadingFour>
              {company} - {location}
            </HeadingFour>
            <div className="my-2">
              <Text>{description}</Text>
            </div>

            <div className="flex flex-wrap gap-2">
              {tags.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>

            <div className="block lg:hidden mt-4">
              <HeadingFour>{dates}</HeadingFour>
            </div>
          </div>
        </div>

        <div className="hidden lg:block w-1/2">
          <div className={`mx-16 mt-10 ${index % 2 ? "text-right" : ""}`}>
            <HeadingFour>{dates}</HeadingFour>
          </div>
        </div>
      </div>
    </div>
  );
}
