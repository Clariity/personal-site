"use client";

import { useEffect, useRef, useState } from "react";
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

type ChartSize = {
  width: number;
  height: number;
};

/** Weekly downloads line chart with a presentational trend overlay. */
export function DownloadsChart({ data }: { data: WeeklyDownloads[] }) {
  const chartData = withTrend(data);
  const frameRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState<ChartSize | null>(null);

  // Mount only once in view, with a real box. That keeps the stroke
  // animation on-screen and avoids shadcn's 320px placeholder / Recharts -1.
  useEffect(() => {
    const frame = frameRef.current;
    if (!frame) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        const { width, height } = frame.getBoundingClientRect();
        if (width > 0 && height > 0) {
          setSize({ width, height });
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    observer.observe(frame);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={frameRef} className="h-60 w-full min-h-50">
      {size ? (
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-full w-full"
          initialDimension={size}
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
              type="natural"
              stroke="var(--color-downloads)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      ) : null}
    </div>
  );
}
