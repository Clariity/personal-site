/** Age in whole years from `born` to now. */
export function getAge(born: Date) {
  const now = new Date();
  let age = now.getFullYear() - born.getFullYear();
  const anniversaryThisYear = new Date(
    now.getFullYear(),
    born.getMonth(),
    born.getDate(),
    born.getHours(),
    born.getMinutes(),
  );
  if (now < anniversaryThisYear) age -= 1;
  return age;
}

/** Human tenure between two dates, e.g. "1 year 8 months". */
export function formatTenure(start: Date, end: Date | null) {
  const to = end ?? new Date();
  let months =
    (to.getFullYear() - start.getFullYear()) * 12 + (to.getMonth() - start.getMonth());
  if (to.getDate() < start.getDate()) months -= 1;

  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;
  const parts = [
    years ? `${years} year${years === 1 ? "" : "s"}` : "",
    remainingMonths ? `${remainingMonths} month${remainingMonths === 1 ? "" : "s"}` : "",
  ].filter(Boolean);

  return parts.join(" ") || "1 month";
}

/** Month-year range, e.g. "Mar 2024 – Present". */
export function formatRange(start: Date, end: Date | null) {
  const monthYear = (date: Date) =>
    date.toLocaleDateString("en-GB", { month: "short", year: "numeric" });
  return `${monthYear(start)} – ${end ? monthYear(end) : "Present"}`;
}

/** Format a Date as YYYY-MM-DD in UTC. */
export function formatDate(date: Date) {
  return date.toISOString().slice(0, 10);
}

/** Return a new Date offset by a number of UTC days. */
export function addUtcDays(date: Date, days: number) {
  const next = new Date(date);
  next.setUTCDate(next.getUTCDate() + days);
  return next;
}
