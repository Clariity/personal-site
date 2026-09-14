/** Placeholder shown while a stats section streams in. */
function StatsSkeleton({
  metrics,
  chart = false,
}: {
  metrics: number;
  chart?: boolean;
}) {
  return (
    <div>
      <div className="h-8 w-48 bg-muted rounded-sm mb-3" />
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
        {Array.from({ length: metrics }, (_, index) => (
          <div key={index} className="border rounded-sm p-4 h-20 bg-muted/40" />
        ))}
      </div>
      {chart ? <div className="mt-6 h-60 border rounded-sm bg-muted/40" /> : null}
    </div>
  );
}

/** Fallback for the site-views block. */
export function SiteViewsSkeleton() {
  return <StatsSkeleton metrics={2} />;
}

/** Fallback for the react-chessboard stats block, including the chart. */
export function PackageStatsSkeleton() {
  return <StatsSkeleton metrics={6} chart />;
}
