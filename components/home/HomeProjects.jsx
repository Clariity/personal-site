import React from "react";

import ProjectCard from "../other/ProjectCard";

import Link from "next/link";
import { metadata } from "../../content/projects/metadata";

function HomeProjects({ scrollRef }) {
  return (
    <div className="col-xs-12 row projects-container" ref={scrollRef}>
      <div className="col-xs-6 text-align-left pad-3-l">
        <h2>Latest Projects</h2>
      </div>
      <div className="col-xs-6 see-all-projects pad-3-r">
        <Link href="/projects">
          <a className="underline">
            See all projects
            <i className="material-icons see-all-icon">read_more</i>
          </a>
        </Link>
      </div>
      {metadata.map((project, index) => {
        if (index > 1) return null;
        return <ProjectCard key={index} project={project} />;
      })}
    </div>
  );
}

export default HomeProjects;
