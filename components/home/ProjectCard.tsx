import Image from "next/image";

import { NewTabIcon } from "@/components/icons/NewTabIcon";

export function ProjectCard({
  title,
  description,
  imgPath,
  link,
}: {
  title: string;
  description: string;
  imgPath: string;
  link: string;
}) {
  return (
    <a
      href={link}
      target="_blank"
      className="group flex flex-col transition-transform duration-200 ease-out hover:scale-[1.02]"
    >
      <Image
        src={imgPath}
        alt={title}
        width={696}
        height={296.967}
        className="rounded-sm aspect-1200/512 object-cover mb-2"
        loading="eager"
      />

      <h2 className="text-xl lg:text-2xl font-bold mb-1">{title}</h2>
      <p className="text-sm lg:text-base mb-2">{description}</p>

      <span className="mt-auto border rounded-sm px-2 py-1 w-fit flex gap-2 items-center group-hover:shadow group-hover:shadow-white">
        View
        <NewTabIcon />
      </span>
    </a>
  );
}
