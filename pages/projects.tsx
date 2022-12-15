import { useRef, MouseEvent, RefObject } from "react";
import fs from "fs";
import path from "path";
import Image from "next/image";

import { SEO } from "../components/utils/SEO";
import { HeadingOne } from "../components/utils/HeadingOne";
import { ProjectCard } from "../components/utils/ProjectCard";
import { TitleCard } from "../components/utils/TitleCard";

type ProjectsProps = {
  projects: Project[];
};

export default function Projects({ projects }: ProjectsProps) {
  const cardOne = useRef<HTMLDivElement>(null);
  const cardTwo = useRef<HTMLDivElement>(null);

  function handleCardTilt(
    e: MouseEvent,
    ref: RefObject<HTMLDivElement>,
    i: number
  ) {
    if (ref.current) {
      // Get position of mouse cursor with respect to the element on mouseover
      var rect = ref.current.getBoundingClientRect();
      var xVal = e.clientX - rect.left;
      var yVal = e.clientY - rect.top;

      // Calculate rotation values along the X and Y-axis. Multiplier set to 20
      const yRotation =
        4 * ((xVal - ref.current.clientWidth / 2) / ref.current.clientWidth);
      const xRotation =
        -4 * ((yVal - ref.current.clientHeight / 2) / ref.current.clientHeight);

      /* Generate string for CSS transform property */
      const string = `perspective(200px) rotate(${
        i ? "-" : ""
      }3deg) rotateX(${xRotation}deg) rotateY(${yRotation}deg) scale(1.04)`;

      /* Apply the calculated transformation */
      ref.current.style.transform = string;
    }
  }

  function handleMouseOut(ref: RefObject<HTMLDivElement>, i: number) {
    if (ref.current) {
      ref.current.style.transform = `perspective(200px) rotateX(0) rotateY(0) rotate(${
        i ? "-" : ""
      }3deg)`;
    }
  }

  return (
    <>
      <SEO title="projects" />

      <TitleCard>
        <div className="w-1/2 flex flex-col justify-center items-center">
          <HeadingOne noMargin>Projects</HeadingOne>
        </div>

        <div className="w-1/2 max-h-[350px] min-h-[98px] sm:min-h-[186px] md:min-h-[230px] lg:min-h-[314px] xl:min-h-[350px] relative">
          {projects.slice(0, 2).map((p, i) => (
            <div
              key={p.id}
              className={`w-2/3 absolute shadow-lg max-w-[400px] transition-all duration-100 ease-linear ${
                i
                  ? "sm:top-4 -rotate-3"
                  : "bottom-0 sm:bottom-4 right-0 xl:right-4 rotate-3"
              }`}
              ref={i ? cardTwo : cardOne}
              onMouseMove={(e) => handleCardTilt(e, i ? cardTwo : cardOne, i)}
              onMouseOut={() => handleMouseOut(i ? cardTwo : cardOne, i)}
            >
              <Image
                className="rounded-lg object-cover"
                src={`/images/projects/${p.id}.png`}
                alt={`${p.id} hero`}
                layout="responsive"
                width={100}
                height={50}
              />
            </div>
          ))}
        </div>
      </TitleCard>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 mb-12">
        {projects.map((p) => {
          return <ProjectCard key={p.id} project={p} />;
        })}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), "pages/projects");
  const fileNames = fs.readdirSync(postsDirectory);
  const postModules = await Promise.all(
    fileNames.map(async (fileName) => import(`/pages/projects/${fileName}`))
  );
  const postMetadata = postModules.map((m, i) => {
    return {
      id: fileNames[i].replace(/\.mdx$/, ""),
      ...m.meta,
    } as Project;
  });

  return {
    props: {
      projects: postMetadata.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      ),
    },
  };
}
