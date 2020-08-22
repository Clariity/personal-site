import React from "react";

import ProjectCard from "../ProjectCard";

import { Link } from "react-router-dom";
import { metadata } from "../../content/metadata";

function HomeProjects({ scrollRef }) {
  return (
    <div className="col-xs-12 row projects-container" ref={scrollRef}>
      <div className="col-xs-6 text-align-left pad-3-l">
        <h2>Latest Projects</h2>
      </div>
      <div className="col-xs-6 see-all-projects pad-3-r">
        <Link className="underline" to="/projects">
          See all projects
          <i className="material-icons see-all-icon">read_more</i>
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
