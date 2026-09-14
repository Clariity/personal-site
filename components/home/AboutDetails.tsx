import { connection } from "next/server";

import { CompanyList } from "@/components/company/CompanyList";
import { BORN_AT, companies } from "@/constants";
import { formatRange, formatTenure, getAge } from "@/utils/dates";

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
