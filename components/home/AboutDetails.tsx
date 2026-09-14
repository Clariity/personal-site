import { connection } from "next/server";

import { CompanyList } from "@/components/company/CompanyList";
import { BORN_AT, companies } from "@/constants";
import { formatRange, formatTenure, getAge } from "@/utils/dates";

/** Placeholder that mirrors the streamed About block to avoid layout shift. */
export function AboutDetailsSkeleton() {
  return (
    <div className="mb-10">
      <p className="text-sm lg:text-base mb-4">
        <span className="animate-pulse rounded-sm bg-foreground/15 text-transparent select-none">
          00 · Glasgow, Scotland
        </span>
      </p>

      <div className="flex flex-wrap gap-3">
        {companies.map((company) => (
          <div
            key={company.name}
            className="size-14 shrink-0 rounded-sm animate-pulse bg-foreground/15"
          />
        ))}
      </div>
    </div>
  );
}

export async function AboutDetails() {
  await connection();

  return (
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
  );
}
