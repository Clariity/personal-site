import type { Company } from "./types";

export function CompanyDetails({
  company,
  isOpen,
}: {
  company: Company;
  isOpen: boolean;
}) {
  return (
    <div
      className={`grid transition-[grid-template-rows] duration-200 ease-in ${
        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
      }`}
    >
      <div className="min-h-0 overflow-hidden">
        <div
          id={`company-details-${company.name}`}
          aria-hidden={!isOpen}
          inert={!isOpen}
          className={`mt-4 border rounded-sm p-4 max-w-xl transition-opacity duration-200 ease-in ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="text-xl font-bold mb-1">{company.name}</p>
          <p className="text-sm font-semibold mb-1">{company.title}</p>
          <p className="text-sm mb-3">
            {company.range} · {company.tenure}
          </p>
          <p className="text-sm lg:text-base">{company.description}</p>
        </div>
      </div>
    </div>
  );
}
