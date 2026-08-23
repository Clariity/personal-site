import { Metadata } from "next";
import Image from "next/image";
import { CompanyList } from "./company-list";
import { BORN_AT, companies, projects } from "@/constants";

export const metadata: Metadata = {
  title: "home · Ryan Gregory",
  description: "Personal website of Ryan Gregory",
};

function getAge(born: Date) {
  const now = new Date();
  let age = now.getFullYear() - born.getFullYear();
  const anniversaryThisYear = new Date(
    now.getFullYear(),
    born.getMonth(),
    born.getDate(),
    born.getHours(),
    born.getMinutes(),
  );
  if (now < anniversaryThisYear) age -= 1;
  return age;
}

function formatTenure(start: Date, end: Date | null) {
  const to = end ?? new Date();
  let months =
    (to.getFullYear() - start.getFullYear()) * 12 + (to.getMonth() - start.getMonth());
  if (to.getDate() < start.getDate()) months -= 1;

  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;
  const parts = [
    years ? `${years} year${years === 1 ? "" : "s"}` : "",
    remainingMonths ? `${remainingMonths} month${remainingMonths === 1 ? "" : "s"}` : "",
  ].filter(Boolean);

  return parts.join(" ") || "1 month";
}

function formatRange(start: Date, end: Date | null) {
  const monthYear = (date: Date) =>
    date.toLocaleDateString("en-GB", { month: "short", year: "numeric" });
  return `${monthYear(start)} – ${end ? monthYear(end) : "Present"}`;
}

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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}
