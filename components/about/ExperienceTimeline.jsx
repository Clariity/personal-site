import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

function ExperienceTimeline() {
  return (
    <VerticalTimeline className="text-align-left">
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "#60b0f4", color: "#000" }}
        contentArrowStyle={{ borderRight: "7px solid  #60b0f4" }}
        date="Sep 2020 - present"
        iconStyle={{ background: "#60b0f4", color: "#000" }}
        icon={
          <img
            className="image-icon"
            src="https://www.aexp-static.com/cdaas/one/statics/axp-static-assets/2.14.1/package/dist/img/logos/dls-logo-bluebox-alt.svg"
            alt="American Express"
          ></img>
        }
      >
        <h3 className="vertical-timeline-element-title">Graduate Engineer</h3>
        <h4 className="vertical-timeline-element-subtitle">American Express - London</h4>
        <p>Starting September 7th 2020 - Will update after a few months working the role. </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "#60b0f4", color: "#000" }}
        contentArrowStyle={{ borderRight: "7px solid  #60b0f4" }}
        date="July 2019 - September 2019"
        iconStyle={{ background: "#60b0f4", color: "#000" }}
        icon={
          //Requires tests to ensure link still works and displays image
          <img
            className="image-icon"
            src="https://www.aexp-static.com/cdaas/one/statics/axp-static-assets/2.14.1/package/dist/img/logos/dls-logo-bluebox-alt.svg"
            alt="American Express"
          ></img>
        }
      >
        <h3 className="vertical-timeline-element-title">Tech Summer Intern</h3>
        <h4 className="vertical-timeline-element-subtitle">American Express - Burgess Hill</h4>
        <p>
          Developed the front end for a flight search web application using React. Utilized agile
          methodology to work effectively as a team and produce an MVP weeks before the deadline.
        </p>
        <p>
          Regularly met with product owners to update on progress and ensure the application
          provided a strong UX. Application was fully responsive and provided internationalization
          through i18n
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "#60b0f4", color: "#000" }}
        contentArrowStyle={{ borderRight: "7px solid  #60b0f4" }}
        date="July 2018 - September 2018"
        iconStyle={{ background: "#60b0f4", color: "#000" }}
        icon={
          <img
            className="image-icon"
            src="/images/cyber-security.png"
            alt="University of Southampton"
          ></img>
        }
      >
        <h3 className="vertical-timeline-element-title">Cyber Security Summer Internship</h3>
        <h4 className="vertical-timeline-element-subtitle">University of Southampton</h4>
        <p>
          Produced labelled datasets consisting of benign and malicious traffic to enable the use of
          machine learning to detect cyber-attacks against IoT environments.
        </p>
        <p>
          Developed bash scripts to run remotely on an Open-WRT router to transfer network traffic
          via SSH using tcpdump. Also simulated IoT pattern of life using OpenHAB framework and
          simulated malicious traffic by executing network attacks on the devices.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "#60b0f4", color: "#000" }}
        contentArrowStyle={{ borderRight: "7px solid  #60b0f4" }}
        date="February 2015 - September 2016"
        iconStyle={{ background: "#60b0f4", color: "#000" }}
        icon={
          <img
            className="image-icon"
            src="/images/willingdon.jpg"
            alt="Willingdon Community School"
          ></img>
        }
      >
        <h3 className="vertical-timeline-element-title">IT Technician Assistant</h3>
        <h4 className="vertical-timeline-element-subtitle">Willingdon Community School</h4>
        <p>
          Carrying out repairs to desktop PCs, setting up and configuring new computers, configuring
          BIOS settings on IT suite machines and carrying out cabling repairs.
        </p>
        <p>
          Additionally worked a first line support role creating tickets on a help desk system and
          dealing with walk in requests. Also aided in enrolling 200 students onto a biometric
          system under time pressure.
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
}

export default ExperienceTimeline;
