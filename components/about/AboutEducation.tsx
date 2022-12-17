import Image from "next/image";

import { HeadingTwo } from "../utils/HeadingTwo";
import { HeadingThree } from "../utils/HeadingThree";
import { ModuleMarkBar } from "./ModuleMarkBar";
import { HeadingFour } from "../utils/HeadingFour";

export function AboutEducation() {
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

  return (
    <>
      <div className="flex justify-center mb-4">
        <HeadingTwo>My Education</HeadingTwo>
      </div>

      <div className="flex flex-col mb-12 md:mb-16 lg:mb-24">
        <div className="flex flex-col items-center w-2/3 sm:w-full mx-auto mb-8 md:mb-12">
          <Image
            src="/images/about/soton.svg"
            alt="University of Southampton"
            width={720}
            height={160}
          />
          <HeadingFour>2016 - 2020</HeadingFour>
          <div className="mt-4 text-center">
            <HeadingFour>
              Masters of Engineering in Computer Science - 1st Class with
              Honours
            </HeadingFour>
          </div>
        </div>

        <HeadingThree>Top Module Scores</HeadingThree>
        {Object.entries(marks).map(([module, mark]) => {
          return <ModuleMarkBar key={module} mark={mark} module={module} />;
        })}
      </div>
    </>
  );
}
