import type { WeeklyDownloads } from "@/lib/stats/types";

/** Compact UTC month/year tick, e.g. "Sep 25". */
export function formatWeekLabel(week: string) {
  return new Date(`${week}T00:00:00.000Z`).toLocaleDateString("en-GB", {
    month: "short",
    year: "2-digit",
    timeZone: "UTC",
  });
}

/** Full UTC range for the hovered 7-day window. */
export function formatWeekRange(week: string) {
  const start = new Date(`${week}T00:00:00.000Z`);
  const end = new Date(start);
  end.setUTCDate(end.getUTCDate() + 6);

  const startLabel = start.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
  const endLabel = end.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });

  return `${startLabel} – ${endLabel}`;
}

/** Short Y-axis labels: 1500 → 2k, 1_200_000 → 1.2m. */
export function formatAxisValue(value: number) {
  if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(1)}m`;
  if (value >= 1_000) return `${Math.round(value / 1_000)}k`;
  return String(value);
}

/**
 * Add a linear-regression trend series for the dashed overlay line.
 * x is the week index, y is downloads; result is y = intercept + slope * x.
 */
export function withTrend(data: WeeklyDownloads[]) {
  const count = data.length;
  if (count < 2) {
    return data.map((point) => ({ ...point, trend: point.downloads }));
  }

  let sumX = 0;
  let sumY = 0;
  let sumXY = 0;
  let sumXX = 0;

  data.forEach((point, index) => {
    sumX += index;
    sumY += point.downloads;
    sumXY += index * point.downloads;
    sumXX += index * index;
  });

  // Ordinary least squares for a straight line through the weekly points.
  const slope = (count * sumXY - sumX * sumY) / (count * sumXX - sumX * sumX);
  const intercept = (sumY - slope * sumX) / count;

  return data.map((point, index) => ({
    ...point,
    trend: Math.round(intercept + slope * index),
  }));
}
