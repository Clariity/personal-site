import { addUtcDays, formatDate } from "@/utils/dates";
import type { PeriodStat, WeeklyDownloads } from "../types";

/**
 * Find the last day npm actually reported downloads for.
 * Recent days are often 0 because stats have not landed yet.
 */
export function lastNonZeroIndex(daily: { downloads: number }[]) {
  for (let index = daily.length - 1; index >= 0; index -= 1) {
    if (daily[index].downloads > 0) return index;
  }
  return -1;
}

/**
 * Sum `length` consecutive days ending at `endIndex`.
 * Returns null if that window would start before the dataset.
 */
function sumDays(
  daily: { downloads: number }[],
  endIndex: number,
  length: number,
) {
  const startIndex = endIndex - length + 1;
  if (startIndex < 0) return null;

  let total = 0;
  for (let index = startIndex; index <= endIndex; index += 1) {
    total += daily[index].downloads;
  }
  return total;
}

/**
 * Build a period total and its delta vs the previous window of the same length.
 * Example: last 7 days vs the 7 days before that.
 */
export function periodStat(
  daily: { downloads: number }[],
  endIndex: number,
  length: number,
): PeriodStat {
  const value = sumDays(daily, endIndex, length);
  const previous = sumDays(daily, endIndex - length, length);

  return {
    value: value ?? 0,
    change: value == null || previous == null ? null : value - previous,
  };
}

/**
 * Bucket daily downloads into complete 7-day windows for the chart.
 * Windows are aligned to the last non-zero day, then walked backwards
 * so the current incomplete week is never included.
 */
export function toTrailingWeeks(
  daily: { day: string; downloads: number }[],
  windowDays = 365,
): WeeklyDownloads[] {
  const byDay = new Map(daily.map((entry) => [entry.day, entry.downloads]));
  const days = [...byDay.keys()].sort();
  if (!days.length) return [];

  let endIndex = days.length - 1;
  while (endIndex >= 0 && (byDay.get(days[endIndex]) ?? 0) === 0) {
    endIndex -= 1;
  }
  if (endIndex < 0) return [];

  const lastGoodDay = new Date(`${days[endIndex]}T00:00:00.000Z`);
  const cutoff = addUtcDays(lastGoodDay, -(windowDays - 1));
  const weeks: WeeklyDownloads[] = [];
  let weekEnd = lastGoodDay;

  while (weekEnd >= cutoff) {
    // Inclusive 7-day window ending on weekEnd.
    const weekStart = addUtcDays(weekEnd, -6);
    let downloads = 0;
    for (let offset = 0; offset < 7; offset += 1) {
      downloads += byDay.get(formatDate(addUtcDays(weekStart, offset))) ?? 0;
    }
    weeks.push({ week: formatDate(weekStart), downloads });
    // Next window ends the day before this one started.
    weekEnd = addUtcDays(weekStart, -1);
  }

  return weeks.reverse();
}
