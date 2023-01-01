import Image from "next/image";

export function TitleImage() {
  return (
    <div className="max-w-[200px] md:max-w-[350px] mx-auto rounded-[50%] border-4 sm:border-8 border-secondary md:motion-safe:animate-float shadow-lg">
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
  );
}
