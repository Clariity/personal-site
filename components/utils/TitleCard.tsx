import { ReactNode } from "react";

import { HeadingOne } from "./HeadingOne";

interface TitleCardProps extends WrapperProps {
  coverHalf?: boolean;
  subTitle?: ReactNode;
  title: string;
}

export function TitleCard({
  children,
  coverHalf = false,
  subTitle,
  title,
}: TitleCardProps) {
  return (
    <div className="bg-primary rounded-lg flex p-4 mb-4 md:mb-8 lg:mb-12 shadow-lg">
      <div className="flex flex-col-reverse md:flex-row w-full">
        <div
          className={`w-full flex flex-col justify-center items-center ${
            coverHalf ? "md:w-1/2" : "md:w-2/3"
          }`}
        >
          <HeadingOne noMargin>{title}</HeadingOne>
          {subTitle}
        </div>

        <div
          className={`w-full mb-4 md:mb-0 ${
            coverHalf ? "md:w-1/2" : "md:w-1/3"
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
