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

export function formatRange(start: Date, end: Date | null) {
  const monthYear = (date: Date) =>
    date.toLocaleDateString("en-GB", { month: "short", year: "numeric" });
  return `${monthYear(start)} – ${end ? monthYear(end) : "Present"}`;
}
