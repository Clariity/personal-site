import { reactChessboard } from "@/constants";

const fill = "rounded-sm animate-pulse bg-foreground/15";
const card = `${fill} border border-transparent`;

const COUNTRY_CHIP_PLACEHOLDERS = [
  "United Kingdom · 00",
  "United States · 00",
  "Germany · 00",
  "France · 00",
  "Canada · 00",
  "Netherlands · 00",
  "Australia · 00",
  "India · 00",
];

function StatTileSkeleton({
  variant = "default",
  change = false,
  className = "",
}: {
  variant?: "default" | "featured" | "stars";
  change?: boolean;
  className?: string;
}) {
  if (variant === "featured") {
    return (
      <div className={`${card} px-5 py-6 ${className}`}>
        <p className="text-4xl lg:text-5xl font-extrabold mb-1 invisible">0</p>
        <p className="text-sm invisible">Label</p>
      </div>
    );
  }

  if (variant === "stars") {
    return (
      <div className={`${fill} border-2 border-transparent p-4 flex flex-col justify-center ${className}`}>
        <p className="text-2xl lg:text-3xl font-extrabold mb-1 flex items-center gap-2 invisible">
          <span className="size-6 lg:size-7 shrink-0" />
          0
        </p>
        <p className="text-sm invisible">Label</p>
      </div>
    );
  }

  return (
    <div className={`${card} p-4 ${className}`}>
      <p className="text-2xl lg:text-3xl font-extrabold mb-1 flex items-baseline gap-2 flex-wrap invisible">
        0
        {change ? (
          <span className="inline-flex items-center text-sm font-semibold">+0</span>
        ) : null}
      </p>
      <p className="text-sm invisible">Label</p>
    </div>
  );
}

/** Fallback for the site-views block. */
export function SiteViewsSkeleton() {
  return (
    <section>
      <h3 className={`text-xl lg:text-2xl font-bold mb-3 w-fit ${fill}`}>
        <span className="invisible">This site</span>
      </h3>

      <div className="grid grid-cols-2 gap-3 mb-3">
        <StatTileSkeleton />
        <StatTileSkeleton />
      </div>

      <div>
        <p className={`text-sm mb-2 w-fit ${fill}`}>
          <span className="invisible">Visitors by country · last 31 days</span>
        </p>

        <div className="flex flex-wrap gap-2">
          {COUNTRY_CHIP_PLACEHOLDERS.map((label) => (
            <div key={label} className={`${card} px-2 py-1 text-sm`}>
              <span className="invisible">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Fallback for the react-chessboard stats block, including the chart. */
export function PackageStatsSkeleton() {
  return (
    <section>
      <h3 className={`text-xl lg:text-2xl font-bold mb-3 w-fit ${fill}`}>
        <span className="invisible">{reactChessboard.name}</span>
      </h3>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 mb-3">
        <StatTileSkeleton variant="featured" className="col-span-2" />
        <StatTileSkeleton variant="stars" className="col-span-2 lg:col-span-1" />
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-3">
        <StatTileSkeleton change />
        <StatTileSkeleton change />
        <StatTileSkeleton change />
        <StatTileSkeleton change />
      </div>

      <div className={`${card} p-4`}>
        <p className="text-sm mb-3 invisible">Weekly downloads · last year</p>
        <div className="h-60 w-full min-h-50" />
      </div>
    </section>
  );
}
