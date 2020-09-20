import React, { useRef } from "react";

import ScrollAnimation from "react-animate-on-scroll";

import Bio from "../components/about/Bio";
import Hobbies from "../components/about/Hobbies";
import ExperienceTimeline from "../components/about/ExperienceTimeline";
import Logos from "../components/about/Logos";

import Education from "../components/about/Education";
import SEO from "../components/other/SEO";

function About() {
  const scrollTo = (ref) =>
    window.scrollTo({
      top: ref.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });

  const experienceRef = useRef();

  return (
    <div className="row">
      <SEO title="about" />
      <div className="col-xs-12 pad-4-lr pad-5-b max-1400">
        <h1>It's All About Ryan</h1>
      </div>
      <div className="col-xs-12 pad-4 is-blue-bg is-black-always fill-screen">
        <ScrollAnimation animateIn="fadeIn" delay={200} duration={1}>
          <img
            className="about-avatar grow hover pad-5-t"
            src="/images/avatars/avatar2.jpg"
            alt="hero"
            onClick={() => console.log("Do something")}
          />
          <h2>Hi there, I'm Ryan</h2>
          <button
            className="slide-button max-800 border-thin"
            onClick={() => scrollTo(experienceRef)}
          >
            Click here to go straight to work experience and technical skills
          </button>
        </ScrollAnimation>
      </div>
      <div className="row max-1400">
        <div className="col-xs-12 pad-4-lr pad-5-b">
          <ScrollAnimation animateIn="fadeIn">
            <h2>A Little Bit About Me</h2>
            <Bio />
          </ScrollAnimation>
        </div>
        <div className="col-xs-12 pad-4-lr pad-5-b">
          <ScrollAnimation animateIn="fadeIn">
            <h2>Hobbies and Interests</h2>
          </ScrollAnimation>
          <Hobbies />
        </div>
        <div className="col-xs-12 pad-4-lr pad-5-b" ref={experienceRef} id="experience">
          <ScrollAnimation animateIn="fadeIn">
            <h2 className="text-align-center">My Experience Timeline</h2>
            <ExperienceTimeline />
          </ScrollAnimation>
        </div>
        <div className="col-xs-12 pad-4-lr pad-5-b">
          <ScrollAnimation animateIn="fadeIn">
            <h2 className="text-align-center">Logos of Competency</h2>
            <Logos />
          </ScrollAnimation>
        </div>
        <div className="col-xs-12 pad-4-lr pad-5-b">
          <ScrollAnimation animateIn="fadeIn">
            <h2 className="text-align-center">Education</h2>
            <Education />
          </ScrollAnimation>
        </div>
        <div className="col-xs-12 pad-4-lr pad-5-b">
          <ScrollAnimation animateIn="fadeIn">
            <h2 className="text-align-center">Repositories and Contributions</h2>
            {/* also link to projects here */}
            Setting up API server first so that this section can be responsibly populated
            <img
              className=" pad-5 width-75"
              src="images/unDraw/sourceCode.svg"
              alt="University of Southampton"
            />
          </ScrollAnimation>
        </div>
        <div className="col-xs-12 pad-4-lr pad-5-b">
          <ScrollAnimation animateIn="fadeIn">
            <h2 className="text-align-center">Even More About Ryan</h2>
            <div className="row font-10">
              <div className="col-xs-6 col-sm-4">
                <a
                  href="https://twitter.com/ryangregorydev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
}

export default About;
