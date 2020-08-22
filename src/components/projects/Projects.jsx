import React from "react";
import SEO from "../Seo";
import { metadata } from "../../content/metadata";
import ProjectCard from "../ProjectCard";
import { useLocation, useParams, Link } from "react-router-dom";

function Projects() {
  let location = useLocation();
  let { role } = useParams();
  return (
    <div className="row fill-width">
      <SEO title="Projects" />
      <h1 className="col-xs-12 margin-1-t text-align-left projects-title">Projects</h1>
      <div className="col-xs-12 row projects-container">
        {location.pathname.includes("projects/roles/") && (
          <div className="col-xs-12 text-align-left projects-tag-return margin-2-b ">
            <Link className="underline" to="/projects">
              <i class="material-icons return-icon">keyboard_return</i>
              Viewing projects with the role tag: {role}
            </Link>
          </div>
        )}
        {metadata.map((project, index) => {
          if (location.pathname.includes("projects/roles/"))
            return project.roles.includes(role) && <ProjectCard key={index} project={project} />;
          else return <ProjectCard key={index} project={project} />;
        })}
      </div>
    </div>
  );
}

export default Projects;
