import React, { useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import SmoothCollapse from "react-smooth-collapse";
import VizSensor from "react-visibility-sensor";

export default function Education() {
  const [menuOpen, setMenuOpen] = useState(false);
  const marks = {
    "COMP1206 -	Programming 2": 92,
    "COMP6234 -	Data Visualisation": 90,
    "COMP1201 -	Algorithmics": 89,
    "COMP1204 -	Data Management": 89,
    "COMP2208 -	Intelligent Systems": 86,
    "COMP2212 -	Prog Language Concepts": 86,
    "COMP1202 -	Programming I": 85,
    "COMP3208 -	Social Computing Techniques": 85,
    "COMP2209 -	Programming III": 84,
    "COMP3201 -	Cyber Security": 84,
  };

  const marksLess = {
    "COMP1203 -	Computer Systems I": 83,
    "COMP2207 -	Distributed Systems & Networks": 82,
    "COMP6236 -	Software Security": 82,
    "COMP3200 -	Part III Individual Project": 81,
    "COMP3207 -	Cloud Application Development": 81,
    "ELEC6200 -	Group Design Project": 81,
    "COMP6214 -	Open Data Innovation": 79,
    "COMP1205 -	Professional Development": 75,
    "COMP2211 -	Software Eng Group Project": 74,
    "COMP3210 -	Adv Computer Networks": 73,
    "COMP6999 -	P4 COMP CFA": 71,
    "COMP2216 -	Principles of Cyber Security": 70,
    "COMP3219 -	Engineering Management & Law": 70,
    "COMP1216 -	Software Modelling & Design": 69,
    "COMP2210 -	Theory of Computing": 66,
    "COMP2215 -	Computer Systems II": 66,
    "COMP1215 -	Foundations of Comp Sci": 58,
  };

  return (
    <div>
      <ScrollAnimation animateIn="fadeIn">
        <img className="width-75" src="images/soton.svg" alt="University of Southampton" />
        <h4>2016 - 2020</h4>
        <h3>Masters of Engineering in Computer Science - 1st Class with Honours</h3>
        <b>Module Scores</b>
      </ScrollAnimation>

      {Object.entries(marks).map((entry, index) => {
        return (
          <div className="row">
            <div className="col-xs-12 text-align-left">
              <p>{entry[0]}</p>
            </div>
            <VizSensor>
              {({ isVisible }) => (
                <div className="col-xs-11 education-bar-bg">
                  <div
                    className={`is-blue-bg ${isVisible ? "education-bar" : "education-bar-0"}`}
                    style={{
                      width: `${entry[1]}%`,
                      height: "100%",
                      borderRadius: 5,
                    }}
                  />
                </div>
              )}
            </VizSensor>
            <div className="col-xs-1">{entry[1]}</div>
          </div>
        );
      })}
      <button
        className="slide-button max-800 border-thin margin-5"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "Show Only Top 10" : "Show All Modules"}
      </button>
      <SmoothCollapse expanded={menuOpen} heightTransition=".75s ease">
        <>
          {Object.entries(marksLess).map((entry, index) => {
            return (
              <div className="row">
                <div className="col-xs-12 text-align-left">
                  <p>{entry[0]}</p>
                </div>
                <VizSensor>
                  {({ isVisible }) => (
                    <div className="col-xs-11 education-bar-bg">
                      <div
                        className={`is-blue-bg ${isVisible ? "education-bar" : "education-bar-0"}`}
                        style={{
                          width: `${entry[1]}%`,
                          height: "100%",
                          borderRadius: 5,
                        }}
                      />
                    </div>
                  )}
                </VizSensor>
                <div className="col-xs-1">{entry[1]}</div>
              </div>
            );
          })}
          <button
            className="slide-button max-800 border-thin margin-5"
            onClick={() => setMenuOpen(false)}
          >
            Show Only Top 10
          </button>
        </>
      </SmoothCollapse>
    </div>
  );
}
