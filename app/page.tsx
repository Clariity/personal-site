import { Metadata } from "next";
import Image from "next/image";

import { CompanyList } from "@/components/CompanyList";
import { NewTabIcon } from "@/components/NewTabIcon";
import { BORN_AT, companies, projects } from "@/constants";
import { formatRange, formatTenure, getAge } from "@/utils/date";

export const metadata: Metadata = {
  title: "home · Ryan Gregory",
  description: "Personal website of Ryan Gregory",
};

export default function Home() {
  return (
    <main className="flex flex-col w-full py-16 lg:py-32">
      <Image
        className="mb-2 rounded-sm"
        src="/ryan-square.png"
        alt="Ryan Gregory, a man wearing a light t-shirt, a cap on backwards, and sunglasses, depicted in a black and white headshot with a blank background that is actually a yellow coloured wall in Venice, Italy"
        width={100}
        height={100}
        priority
      />

      <h1 className="text-4xl lg:text-5xl font-extrabold mb-1">Ryan Gregory</h1>
      <p className="text-lg lg:text-xl font-semibold mb-10">
        Senior Frontend Engineer · Amateur Photographer
      </p>

      <h2 className="text-2xl lg:text-3xl font-bold mb-3">About</h2>
      <div className="mb-10">
        <p className="text-sm lg:text-base mb-4">{getAge(BORN_AT)} · Glasgow, Scotland</p>

        <CompanyList
          companies={companies.map((company) => ({
            name: company.name,
            logo: company.logo,
            logoWidth: company.logoWidth,
            logoHeight: company.logoHeight,
            title: company.title,
            range: formatRange(company.start, company.end),
            tenure: formatTenure(company.start, company.end),
            description: company.description,
          }))}
        />
      </div>

      <h2 className="text-2xl lg:text-3xl font-bold mb-3">Projects</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
        {projects.map((project) => (
          <div key={project.title} className="flex flex-col">
            <Image
              src={project.imgPath}
              alt={project.title}
              width={696}
              height={296.967}
              className="rounded-sm aspect-1200/512 object-cover mb-2"
              loading="eager"
            />

            <h2 className="text-xl lg:text-2xl font-bold mb-1">{project.title}</h2>
            <p className="text-sm lg:text-base mb-2">{project.description}</p>

            <a
              href={project.link}
              target="_blank"
              className="mt-auto border rounded-sm px-2 py-1 w-fit flex gap-2 items-center hover:shadow hover:shadow-white"
            >
              View
              <NewTabIcon />
            </a>
          </div>
        ))}
      </div>

      <h2 className="text-2xl lg:text-3xl font-bold mb-3">Stats</h2>
      <p>COMING SOON (Probably)</p>
    </main>
  );
}
