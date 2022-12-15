import { HeadingTwo } from "../utils/HeadingTwo";
import { ImageWithLabel } from "../utils/ImageWithLabel";

export function AboutSummary() {
  function calculateAge() {
    const birthday = new Date(1997, 11, 2);
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  const hobbies = [
    "F1",
    "Photography",
    "Reading",
    "Writing",
    "Climbing",
    "Films",
    "Chess",
    "Cycling",
    "Spanish",
  ];
  const strengths = ["React", "Next", "Firebase", "Tailwind", "UX", "Security"];

  return (
    <div className="grid gap-3 md:gap-6 xl:gap-8 grid-cols-1 xl:grid-cols-3 mb-24">
      <div className="flex flex-col items-center border-4 border-primary rounded-lg p-4 shadow-lg col-span-2 xl:col-span-1">
        <HeadingTwo>About Me</HeadingTwo>

        <p className="text-center text-sm sm:text-md lg:text-lg sm:leading-loose lg:leading-loose">
          Hi there! <b>I&apos;m Ryan Gregory</b>. I&apos;m a{" "}
          <b>{calculateAge()} year old Front End Engineer</b> from <b>London</b>
          , UK and I&apos;m currently working as a <b>Front End Engineer</b> in
          the Developer Experience team at <b>Checkout.com</b>. I have a Masters
          Degree in <b>Computer Science</b> from the{" "}
          <b>University of Southampton</b> where I specialised in{" "}
          <b>Cyber Security</b>.
        </p>
      </div>

      <div className="grid gap-3 md:gap-6 xl:gap-8 grid-cols-1 md:grid-cols-2 col-span-2">
        <div className="flex flex-col items-center border-4 border-primary rounded-lg p-4 shadow-lg">
          <HeadingTwo>Strengths</HeadingTwo>
          <div className="grid gap-2 grid-cols-3 w-full h-full text-center">
            {strengths.map((s) => (
              <ImageWithLabel label={s} key={s} />
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center border-4 border-primary rounded-lg p-4 shadow-lg">
          <HeadingTwo>Hobbies</HeadingTwo>
          <div className="grid gap-2 grid-cols-3 w-full h-full text-center">
            {hobbies.map((s) => (
              <ImageWithLabel label={s} key={s} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
