import { cacheLife } from "next/cache";

import type { PackageStats } from "../types";
import { fetchRepoStars } from "./github";
import { fetchDailyDownloads } from "./npm";
import { lastNonZeroIndex, periodStat, toTrailingWeeks } from "./periods";

/**
 * Public react-chessboard stats loader: all-time downloads, period totals
 * with previous-period deltas, GitHub stars, and weekly chart points.
 * Cached for about an hour via Cache Components.
 */
export async function getPackageStats(): Promise<PackageStats | null> {
  "use cache";
  cacheLife("hours");

  try {
    const [daily, repo] = await Promise.all([fetchDailyDownloads(), fetchRepoStars()]);

    const orderedDaily = [...daily].sort((a, b) => a.day.localeCompare(b.day));
    const endIndex = lastNonZeroIndex(orderedDaily);

    if (endIndex < 0) {
      return {
        total: 0,
        lastDay: { value: 0, change: null },
        lastWeek: { value: 0, change: null },
        lastMonth: { value: 0, change: null },
        lastYear: { value: 0, change: null },
        stars: repo.stargazers_count,
        weekly: [],
      };
    }

    return {
      total: orderedDaily.reduce((sum, day) => sum + day.downloads, 0),
      lastDay: periodStat(orderedDaily, endIndex, 1),
      lastWeek: periodStat(orderedDaily, endIndex, 7),
      lastMonth: periodStat(orderedDaily, endIndex, 30),
      lastYear: periodStat(orderedDaily, endIndex, 365),
      stars: repo.stargazers_count,
      weekly: toTrailingWeeks(orderedDaily),
    };
  } catch (error) {
    console.error("Failed to load react-chessboard stats", error);
    return null;
  }
}
