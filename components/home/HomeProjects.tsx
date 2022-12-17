import { HeadingTwo } from "../utils/HeadingTwo";
import { LinkText } from "../utils/LinkText";
import { ProjectCard } from "../utils/ProjectCard";

type HomeProjectsProps = {
  projects: Project[];
};

export function HomeProjects({ projects }: HomeProjectsProps) {
  return (
    <div className="flex flex-col mb-12">
      <div className="flex items-center mb-2">
        <HeadingTwo>Latest Projects</HeadingTwo>
        <div className="ml-auto text-right text-sm sm:text-lg">
          <LinkText href="/projects">
            See all projects
            <i className="material-icons see-all-icon ml-2 text-3xl">
              read_more
            </i>
          </LinkText>
        </div>
      </div>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
        {projects.slice(0, 2).map((p) => {
          return <ProjectCard key={p.id} project={p} />;
        })}
      </div>
    </div>
  );
}
