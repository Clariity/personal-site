import { reactChessboard } from "@/constants";
import { getPackageStats } from "@/lib/stats/package-stats/get-package-stats";

import { DownloadsChart } from "./DownloadsChart";
import { Stat } from "./Stat";

/** react-chessboard download totals, period deltas, stars, and weekly chart. */
export async function PackageStats() {
  const stats = await getPackageStats();

  return (
    <section>
      <h3 className="text-xl lg:text-2xl font-bold mb-3">
        <a
          href={reactChessboard.npmUrl}
          target="_blank"
          rel="noreferrer"
          className="hover:underline"
        >
          {reactChessboard.name}
        </a>
      </h3>

      {stats ? (
        <>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 mb-3">
            <Stat
              variant="featured"
              className="col-span-2"
              label="Total downloads"
              value={stats.total}
            />

            <Stat
              variant="stars"
              className="col-span-2 lg:col-span-1"
              label={
                <a
                  href={reactChessboard.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  GitHub stars
                </a>
              }
              value={stats.stars}
            />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-3">
            <Stat
              label="Last day"
              value={stats.lastDay.value}
              change={stats.lastDay.change}
            />
            <Stat
              label="Last week"
              value={stats.lastWeek.value}
              change={stats.lastWeek.change}
            />
            <Stat
              label="Last month"
              value={stats.lastMonth.value}
              change={stats.lastMonth.change}
            />
            <Stat
              label="Last year"
              value={stats.lastYear.value}
              change={stats.lastYear.change}
            />
          </div>

          <div className="border rounded-sm p-4">
            <p className="text-sm text-muted-foreground mb-3">
              Weekly downloads · last year
            </p>

            <DownloadsChart data={stats.weekly} />
          </div>
        </>
      ) : (
        <p className="text-sm text-muted-foreground">
          Package stats could not be loaded right now.
        </p>
      )}
    </section>
  );
}
