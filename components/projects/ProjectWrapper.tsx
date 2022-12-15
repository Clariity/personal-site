// table of contents
// reactions

import Image from "next/image";
import { getFormattedDate } from "../../functions/date";
import { HeadingOne } from "../utils/HeadingOne";

import { LinkText } from "../utils/LinkText";
import { SEO } from "../utils/SEO";
import { Text } from "../utils/Text";
import { ProjectContents } from "./ProjectContents";

interface ProjectWrapperProps extends WrapperProps {
  meta: {
    title: string;
    description: string;
    date: string;
    tags: string[];
    headings: string[];
  };
  projects: {
    next?: { id: string; title: string };
    previous?: { id: string; title: string };
  };
}

export function ProjectWrapper({
  children,
  meta,
  projects,
}: ProjectWrapperProps) {
  return (
    <>
      <SEO title={meta.title} />

      <div className="xl:w-3/4 mx-auto shadow-lg mb-6 lg:mb-12 rounded-lg overflow-hidden">
        <Image
          src={`/images/projects/${meta.title}.png`}
          alt="hero"
          layout="responsive"
          width={600}
          height={256}
          priority={true}
          objectFit="cover"
        />
      </div>

      <div className="flex">
        <ProjectContents meta={meta} />

        <div className="lg:w-3/4 ml-auto text-justify mb-4">
          <HeadingOne>{meta.title}</HeadingOne>

          <div className="mb-4">
            <Text>{getFormattedDate(meta.date)}</Text>
          </div>

          {children}

          <div className="flex">
            {projects.previous && (
              <div className="mr-auto text-right text-sm sm:text-lg mt-4">
                <LinkText href={`/projects/${projects.previous.id}`}>
                  <i className="material-icons see-all-icon mr-2 text-3xl">
                    arrow_left
                  </i>
                  Previous: {projects.previous.title}
                </LinkText>
              </div>
            )}

            {projects.next && (
              <div className="ml-auto text-right text-sm sm:text-lg mt-4">
                <LinkText href={`/projects/${projects.next.id}`}>
                  Next: {projects.next.title}
                  <i className="material-icons see-all-icon ml-2 text-3xl">
                    arrow_right
                  </i>
                </LinkText>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
