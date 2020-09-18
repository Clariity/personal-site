import React, { useEffect, useRef } from "react";

import ScrollAnimation from "react-animate-on-scroll";
import SEO from "../Seo";

import Bio from "./Bio";
import Hobbies from "./Hobbies";
import ExperienceTimeline from "./ExperienceTimeline";
import Logos from "./Logos";

import { useLocation } from "react-router-dom";
import Education from "./Education";

// add tools to Logos of Competancy so i can add stuff like git (and docker when i come to know it)

// GitHub Commits and Repos Section

// LinkedIn
// Twitter
// Github

// Have some form of scrolling indicator

function About() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash !== "") scrollTo(experienceRef);
  }, [hash]);

  const scrollTo = (ref) =>
    window.scrollTo({
      top: ref.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });

  const experienceRef = useRef();

  return (
    <div className="row">
      <SEO title="About Ryan" />
      <div className="col-xs-12 pad-4-lr pad-5-b max-1400">
        <h1>It's All About Ryan</h1>
      </div>
      <div className="col-xs-12 pad-4 is-blue-bg is-black-always fill-screen">
        <ScrollAnimation animateIn="fadeIn" delay={200} duration={1}>
          <img
            className="about-avatar grow hover pad-5-t"
            src="/images/avatar.jpg"
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
        <div className="col-xs-12 pad-4-lr pad-5-b" ref={experienceRef}>
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
            <img className="width-75" src="images/sourceCode.svg" alt="University of Southampton" />
          </ScrollAnimation>
        </div>
        <div className="col-xs-12 pad-4-lr pad-5-b">
          <ScrollAnimation animateIn="fadeIn">
            <h2 className="text-align-center">Even More About Ryan</h2>
          </ScrollAnimation>
        </div>
        <div className="col-xs-12 pad-4-lr pad-5-b">
          <img className="fill-width" src="images/gym.svg" alt="blog" />
        </div>
      </div>
    </div>
  );
}

export default About;
