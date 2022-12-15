import Image from "next/image";
import Link from "next/link";

import { getFormattedDate } from "../../functions/date";
import { HeadingThree } from "./HeadingThree";
import { Tag } from "./Tag";
import { Text } from "./Text";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`projects/${project.id}`}>
      <a className="flex flex-col hover:scale-105 hover:z-10 transition-all duration-100 ease-linear">
        <div className="shadow-lg mb-4">
          <Image
            className="rounded-lg shadow-lg object-cover"
            src={`/images/projects/${project.id}.png`}
            alt={`${project.id} hero`}
            layout="responsive"
            width={100}
            height={50}
          />
        </div>

        <div className="flex items-center">
          <HeadingThree>{project.title}</HeadingThree>
          <div className="mb-2 ml-auto">
            <Text>{getFormattedDate(project.date)}</Text>
          </div>
        </div>
        <div className="mb-4 h-full">
          <Text>{project.description}</Text>
        </div>

        <div className="flex flex-row-reverse gap-2">
          {project.tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </a>
    </Link>
  );
}
