"use client";

import Image from "next/image";
import { useState } from "react";

export type Company = {
  name: string;
  logo: string;
  logoWidth: number;
  logoHeight: number;
  title: string;
  range: string;
  tenure: string;
  description: string;
};

export function CompanyList({ companies }: { companies: Company[] }) {
  const [open, setOpen] = useState<string | null>(null);
  const selected = companies.find((company) => company.name === open);

  return (
    <div>
      <div className="flex flex-wrap gap-3">
        {companies.map((company) => {
          const isOpen = open === company.name;

          return (
            <button
              key={company.name}
              type="button"
              aria-expanded={isOpen}
              aria-controls="company-details"
              onClick={() => setOpen(isOpen ? null : company.name)}
              className={`size-14 shrink-0 border rounded-sm flex items-center justify-center hover:shadow hover:shadow-white ${
                isOpen ? "shadow shadow-white" : ""
              }`}
            >
              <Image
                src={company.logo}
                alt={company.name}
                width={company.logoWidth}
                height={company.logoHeight}
                className="h-8 w-8 object-contain"
                unoptimized
              />
            </button>
          );
        })}
      </div>

      {selected ? (
        <div
          id="company-details"
          className="mt-4 border rounded-sm p-4 max-w-xl"
        >
          <p className="text-xl font-bold mb-1">{selected.name}</p>
          <p className="text-sm font-semibold mb-1">{selected.title}</p>
          <p className="text-sm mb-3">
            {selected.range} · {selected.tenure}
          </p>
          <p className="text-sm lg:text-base">{selected.description}</p>
        </div>
      ) : null}
    </div>
  );
}
