"use client";

import { useState } from "react";

import { CompanyDetails } from "./CompanyDetails";
import { CompanyLogoButton } from "./CompanyLogoButton";
import type { Company } from "./types";

export function CompanyList({ companies }: { companies: Company[] }) {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div>
      <div className="flex flex-wrap gap-3">
        {companies.map((company) => {
          const isOpen = open === company.name;

          return (
            <CompanyLogoButton
              key={company.name}
              company={company}
              isOpen={isOpen}
              onToggle={() => setOpen(isOpen ? null : company.name)}
            />
          );
        })}
      </div>

      {companies.map((company) => (
        <CompanyDetails
          key={company.name}
          company={company}
          isOpen={open === company.name}
        />
      ))}
    </div>
  );
}
