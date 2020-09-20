import React from "react";
import Link from "next/link";

function ProjectCard({ project }) {
  return (
    <div className="col-xs-12 col-md-6">
      <Link href={`/projects/${project.name}`}>
        <a className="grow project-card margin-5-b text-align-left row">
          <div className="col-xs-12">
            <img
              src={`/images/projects/${project.imageName}`}
              alt="project hero"
              className="project-hero-image"
            />
          </div>
          <div className="col-xs-12">
            <h2 className="margin-1-tb">{project.displayName}</h2>
            <p className="margin-2-tb">{project.description}</p>
          </div>
          <div className="col-xs-12 project-roles">
            {project.roles.map((role, index) => {
              return (
                <div key={index} className="project-role">
                  <Link href={`/projects?role=${role}`}>{role}</Link>
                </div>
              );
            })}
          </div>
        </a>
      </Link>
    </div>
  );
}

export default ProjectCard;
