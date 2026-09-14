import { Star } from "lucide-react";
import type { ReactNode } from "react";

import { ChangeBadge } from "./ChangeBadge";
import { CountUp } from "./CountUp";

/** A single metric tile. Featured and stars variants drop the period-change badge. */
export function Stat({
  label,
  value,
  change,
  variant = "default",
  className = "",
}: {
  label: ReactNode;
  value: number | null;
  change?: number | null;
  variant?: "default" | "featured" | "stars";
  className?: string;
}) {
  const number = value == null ? "—" : <CountUp value={value} />;

  if (variant === "featured") {
    return (
      <div className={`border rounded-sm px-5 py-6 ${className}`}>
        <p className="text-4xl lg:text-5xl font-extrabold mb-1">{number}</p>
        <p className="text-sm text-muted-foreground">{label}</p>
      </div>
    );
  }

  if (variant === "stars") {
    return (
      <div
        className={`border-2 border-amber-400 rounded-sm p-4 flex flex-col justify-center ${className}`}
      >
        <p className="text-2xl lg:text-3xl font-extrabold mb-1 flex items-center gap-2">
          <Star
            aria-hidden
            className="size-6 lg:size-7 fill-amber-400 text-amber-400 shrink-0"
          />
          {number}
        </p>
        <p className="text-sm text-amber-200/80">{label}</p>
      </div>
    );
  }

  return (
    <div className={`border rounded-sm p-4 ${className}`}>
      <p className="text-2xl lg:text-3xl font-extrabold mb-1 flex items-baseline gap-2 flex-wrap">
        {number}
        <ChangeBadge change={change} />
      </p>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
}
