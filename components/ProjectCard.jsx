import React from "react";
import { Link } from "react-router-dom";

function ProjectCard({ project }) {
  return (
    <div className="col-xs-12 col-md-6">
      <Link
        className="grow project-card margin-5-b text-align-left row"
        to={`/projects/${project.name}`}
      >
        <div className="col-xs-12">
          <img
            src={`/images/${project.imageName}`}
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
            return <Link key={index} className="project-role" to={`/projects/roles/${role}`}>
              {role}
            </Link>
          })}
        </div>
      </Link>
    </div>
  );
}

export default ProjectCard;
