import React from "react";

function EvenMoreAbout() {
  return (
    <div className="row font-10">
      <div className="col-xs-6 col-sm-4">
        <a href="https://twitter.com/ryangregorydev" target="_blank" rel="noopener noreferrer">
          <i className="devicon-twitter-plain colored more-link"></i>
        </a>
      </div>
      <div className="col-xs-6 col-sm-4">
        <a href="https://github.com/Clariity" target="_blank" rel="noopener noreferrer">
          <i className="devicon-github-plain colored more-link"></i>
        </a>{" "}
      </div>
      <div className="col-xs-12 col-sm-4">
        <a
          href="https://www.linkedin.com/in/ryan-gregory-232003189/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="devicon-linkedin-plain colored more-link"></i>
        </a>{" "}
      </div>
    </div>
  );
}

export default EvenMoreAbout;
