"use client";

import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import type { WeeklyDownloads } from "@/lib/stats/types";
import {
  formatAxisValue,
  formatWeekLabel,
  formatWeekRange,
  withTrend,
} from "@/utils/chart";

const chartConfig = {
  downloads: {
    label: "Downloads",
    color: "var(--chart-1)",
  },
  trend: {
    label: "Trend",
    color: "var(--muted-foreground)",
  },
} satisfies ChartConfig;

/** Weekly downloads line chart with a presentational trend overlay. */
export function DownloadsChart({ data }: { data: WeeklyDownloads[] }) {
  const chartData = withTrend(data);

  return (
    <ChartContainer
      config={chartConfig}
      className="aspect-auto h-60 w-full min-h-50"
    >
      <LineChart
        accessibilityLayer
        data={chartData}
        margin={{ left: 8, right: 12, top: 8 }}
      >
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="week"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          minTickGap={28}
          tickFormatter={formatWeekLabel}
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          width={40}
          tickFormatter={formatAxisValue}
        />
        <ChartTooltip
          cursor={false}
          content={
            <ChartTooltipContent
              indicator="line"
              labelFormatter={(_, payload) => {
                const week = payload[0]?.payload?.week;
                return typeof week === "string" ? formatWeekRange(week) : "";
              }}
            />
          }
        />
        {/* Trend is visual-only: hidden from tooltip and legend. */}
        <Line
          dataKey="trend"
          type="linear"
          stroke="var(--color-trend)"
          strokeWidth={1.5}
          strokeDasharray="5 5"
          dot={false}
          activeDot={false}
          legendType="none"
          tooltipType="none"
          isAnimationActive={false}
        />
        <Line
          dataKey="downloads"
          type="linear"
          stroke="var(--color-downloads)"
          strokeWidth={2}
          dot={false}
          isAnimationActive={false}
        />
      </LineChart>
    </ChartContainer>
  );
}
