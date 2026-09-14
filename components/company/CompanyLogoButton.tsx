import Image from "next/image";

import type { Company } from "./types";

export function CompanyLogoButton({
  company,
  isOpen,
  onToggle,
}: {
  company: Company;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      aria-expanded={isOpen}
      aria-controls={`company-details-${company.name}`}
      onClick={onToggle}
      className={`size-14 shrink-0 border rounded-sm flex items-center justify-center hover:shadow hover:shadow-white cursor-pointer ${
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
}
