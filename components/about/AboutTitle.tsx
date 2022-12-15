import Image from "next/image";

import { HeadingOne } from "../utils/HeadingOne";
import { TitleCard } from "../utils/TitleCard";

export function AboutTitle() {
  return (
    <TitleCard>
      <div className="w-2/3 flex flex-col justify-center items-center">
        <HeadingOne noMargin>It&apos;s All About Ryan!</HeadingOne>
      </div>

      <div className="w-1/3">
        <div className="max-w-[350px] mx-auto rounded-[50%] border-2 sm:border-8 border-secondary motion-safe:animate-float shadow-lg">
          <Image
            className="rounded-[50%]"
            src="/images/me.jpg"
            alt="Ryan"
            layout="responsive"
            width={100}
            height={100}
            priority={true}
          />
        </div>
      </div>
    </TitleCard>
  );
}
