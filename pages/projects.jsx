import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import SEO from "../components/other/SEO";
import { metadata } from "../content/projects/metadata";
import ProjectCard from "../components/other/ProjectCard";

function Projects() {
  const router = useRouter();
  const { role } = router.query;

  return (
    <div className="row fill-width">
      <SEO title="projects" />
      <h1 className="col-xs-12 margin-1-t projects-title">Projects</h1>
      <div className="col-xs-12 row projects-container">
        {role && (
          <div className="col-xs-12 text-align-left projects-tag-return margin-2-b ">
            <Link href="/projects">
              <a className="underline">
                <i className="material-icons return-icon">keyboard_return</i>
                Viewing projects with the role tag: {role}
              </a>
            </Link>
          </div>
        )}
        {metadata.map((project, index) => {
          if (role)
            return project.roles.includes(role) && <ProjectCard key={index} project={project} />;
          else return <ProjectCard key={index} project={project} />;
        })}
      </div>
    </div>
  );
}

export default Projects;
