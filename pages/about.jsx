import React, { useRef } from "react";

import ScrollAnimation from "react-animate-on-scroll";

import Bio from "../components/about/Bio";
import Hobbies from "../components/about/Hobbies";
import ExperienceTimeline from "../components/about/ExperienceTimeline";
import Logos from "../components/about/Logos";
import HomeProjects from "../components/home/HomeProjects";
import Education from "../components/about/Education";
import SEO from "../components/other/SEO";
import GitHub from "../components/about/GitHub";
import EvenMoreAbout from "../components/about/EvenMoreAbout";

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
      <div className="col-xs-12 pad-4 is-blue-bg is-black-always fill-screen pad-5-t">
        <ScrollAnimation animateIn="fadeIn" delay={200} duration={1}>
          <img
            className="about-avatar grow hover"
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
            <h2 className="text-align-center">Some of My Work</h2>
            <HomeProjects />
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
            <h2 className="text-align-center">GitHub Public Contributions</h2>
            <GitHub />
          </ScrollAnimation>
        </div>
        <div className="col-xs-12 pad-4-lr pad-5-b">
          <ScrollAnimation animateIn="fadeIn">
            <h2 className="text-align-center">Even More About Ryan</h2>
            <EvenMoreAbout />
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
}

export default About;
