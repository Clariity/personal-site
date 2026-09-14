import { ArrowDownRight, ArrowUpRight } from "lucide-react";

/** Green/red period change with an angled arrow. Hidden when there is no comparison. */
export function ChangeBadge({ change }: { change: number | null | undefined }) {
  if (change == null) return null;

  const up = change > 0;
  const down = change < 0;
  const Icon = up ? ArrowUpRight : down ? ArrowDownRight : null;

  return (
    <span
      className={`inline-flex items-center text-sm font-semibold tabular-nums ${
        up ? "text-emerald-400" : down ? "text-red-400" : "text-muted-foreground"
      }`}
    >
      {Icon ? <Icon aria-hidden className="size-4" /> : null}
      {formatDelta(change)}
    </span>
  );
}

/** Format a signed delta with grouping, e.g. +1,234 or -56. */
function formatDelta(change: number) {
  const formatted = Math.abs(change).toLocaleString("en-GB");
  if (change > 0) return `+${formatted}`;
  if (change < 0) return `-${formatted}`;
  return "0";
}
