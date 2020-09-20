import React, { useState, useEffect, useRef } from "react";

import BounceArrow from "../BounceArrow";
import Carousel from "./Carousel";
import HomeProjects from "./HomeProjects";
import Lottie from "react-lottie";
import LottieData from "../../media/7393-fireworks.json";
import SEO from "../Seo";
import Welcome from "./Welcome";

function Home() {
  const t1 = new Date(1997, 11, 2, 8, 10, 0, 0); // Month is 0 indexed
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

  // Lottie Config
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
      <BounceArrow scrollRef={welcomeRef} />
      <div className="row margin-5-t welcome-container" ref={welcomeRef}>
        <div className="col-xs-12 row welcome">
          <Welcome />
          <Carousel />
          <BounceArrow scrollRef={projectsRef} />
        </div>
      </div>
      <HomeProjects scrollRef={projectsRef} />
    </div>
  );
}

export default Home;
