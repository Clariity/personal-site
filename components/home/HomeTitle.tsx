import Image from "next/image";
import { ButtonLink } from "../utils/ButtonLink";
import { HeadingOne } from "../utils/HeadingOne";
import { Text } from "../utils/Text";
import { TitleCard } from "../utils/TitleCard";

export function HomeTitle() {
  return (
    <TitleCard>
      <div className="w-2/3 flex flex-col justify-center items-center">
        <HeadingOne>Hi there, I&apos;m Ryan!</HeadingOne>
        <Text>Software Engineer • Hooked on React • Learning Spanish</Text>
        <div className="flex mt-6">
          <div className="mr-2">
            <ButtonLink link="/about" secondary>
              About Me
            </ButtonLink>
          </div>
          <div className="ml-2">
            <ButtonLink link="/projects" secondary>
              Projects
            </ButtonLink>
          </div>
        </div>
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
