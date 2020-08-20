import React, { useState, useEffect, useRef } from "react";
import Lottie from "react-lottie";
import LottieData from "../media/7393-fireworks.json";
import ProjectCard from "./ProjectCard";
import SEO from "./Seo";
import { Carousel } from "react-responsive-carousel";
import { metadata } from "../content/metadata";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function Home() {
  // const t1 = new Date(1997, 11, 2, 8, 10, 0, 0); // Month is 0 indexed
  const t1 = new Date(1997, 7, 14, 14, 26, 0, 0); // Month is 0 indexed

  const t2 = new Date();
  const dif = t2.getTime() - t1.getTime();
  const ageDate = Math.abs(new Date(dif).getUTCFullYear() - 1970);

  const [secondsAlive, setSecondsAlive] = useState(Math.round(dif / 1000));
  const [yearsAlive, setYearsAlive] = useState(ageDate);
  const [previousAge, setPreviousAge] = useState(yearsAlive);
  const [showFireworks, setShowFireworks] = useState(false);

  const welcomeRef = useRef();
  const projectsRef = useRef();

  // Seconds alive and years alive intervals
  useEffect(() => {
    const getDifference = () => {
      const newT2 = new Date();
      const newDif = Math.round((newT2.getTime() - t1.getTime()) / 1000);
      setSecondsAlive(newDif);
    };

    const calculateAge = () => {
      const newT2 = new Date();
      const newDif = newT2.getTime() - t1.getTime();
      const newAgeDate = new Date(newDif); // miliseconds from epoch
      setYearsAlive(Math.abs(newAgeDate.getUTCFullYear() - 1970));
    };

    const differenceInterval = setInterval(getDifference, 1000);
    const ageInterval = setInterval(calculateAge, 1000);

    return () => {
      clearInterval(differenceInterval);
      clearInterval(ageInterval);
    };
  }, [t1]);

  // Detecting change in years alive and setting off fireworks
  useEffect(() => {
    if (yearsAlive !== previousAge) {
      setPreviousAge(yearsAlive);
      setShowFireworks(true);
    }
  }, [yearsAlive, previousAge]);

  const addCommas = (value) => {
    // Add to code snippets
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  // Add to code snippets
  const scrollTo = (ref) => window.scrollTo(0, ref.current.offsetTop);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: LottieData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="row">
      <SEO title="Home" />
      {showFireworks && (
        <>
          <div className="lottie-animation">
            <Lottie options={defaultOptions} height={400} width={500} />
          </div>
          <div className="lottie-animation-2">
            <Lottie options={defaultOptions} height={400} width={400} />
          </div>{" "}
        </>
      )}
      <div className="col-xs-12 pad-4">
        <p className="welcome-message">
          Hi there, I'm Ryan, this is my little corner of the internet where I can show off some of
          the things I have done in my {yearsAlive} years or {addCommas(secondsAlive)} seconds on
          this rock.
        </p>
      </div>
      <div className="col-xs-12">
        <img
          className="home-image grow hover"
          src="/images/feelingproud.svg"
          alt="hero"
          onClick={() => console.log("Do something")}
        />
      </div>
      <div className="col-xs-12 margin-5-t bounce">
        <i className="material-icons arrow-icon" onClick={() => scrollTo(welcomeRef)}>
          keyboard_arrow_down
        </i>
      </div>
      <div className="row margin-5-t welcome-container" ref={welcomeRef}>
        <div className="col-xs-12 row welcome">
          <div className="col-xs-12 col-md-4 pad-4">
            <h1>Welcome</h1>
            <Link className="is-black-always" to="/about">
              <p className="slide-button">
                For skills and experience, click here to head straight to the good stuff
              </p>
            </Link>
            <p>
              The site is a fun project for me to consistently work on and expand as I continue to
              learn.
            </p>
            <p>
              Parts of this site are dedicated to selling myself and showing off what I've made and
              accomplished.
            </p>
            <p>Other parts are just for fun and trying out new things.</p>
            <p>
              Have a good look around. If you find any issues or have any suggestions then please{" "}
              <a
                href="https://twitter.com/messages/compose?recipient_id=1283026029452365826&text=Topic%3A%20ryangregory.dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                let me know
              </a>
              .
            </p>
          </div>
          <div className="col-xs-12 col-md-8 pad-4">
            <Carousel
              autoPlay
              infiniteLoop
              showThumbs={false}
              showArrows={false}
              emulateTouch
              swipeable
              stopOnHover
              useKeyboardArrows
              showStatus={false}
              showLegends={false}
            >
              <div className="pad-3">
                <h1>About Ryan</h1>
                <img src="images/about-me.svg" alt="about me" />
              </div>
              <div className="pad-3">
                <h1>Blog</h1>
                <img src="images/blog.svg" alt="blog" />
              </div>
              <div className="pad-3">
                <h1>Projects</h1>
                <img src="images/projects.svg" alt="projects" />
              </div>
              <div className="pad-3">
                <h1>Code Snippets</h1>
                <img src="images/code.svg" alt="code snippets" />
              </div>
              <div className="pad-3">
                <h1>Stats</h1>
                <img src="images/stats.svg" alt="stats" />
              </div>
              <div className="pad-3">
                <h1>Site Plans</h1>
                <img src="images/kanban.svg" alt="kanban" />
              </div>
              <div className="pad-3">
                <h1>Credits</h1>
                <img src="images/credits.svg" alt="credits" />
              </div>
            </Carousel>
          </div>
          <div className="col-xs-12 margin-5-t bounce">
            <i className="material-icons arrow-icon" onClick={() => scrollTo(projectsRef)}>
              keyboard_arrow_down
            </i>
          </div>
        </div>
      </div>
      <div className="col-xs-12 row projects-container" ref={projectsRef}>
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
    </div>
  );
}

export default Home;
