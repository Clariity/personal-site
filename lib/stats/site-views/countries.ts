const countryNames = new Intl.DisplayNames(["en"], { type: "region" });

/** Resolve an ISO country code to an English name. */
export function countryName(code: string) {
  if (code === "Others") return "Others";
  return countryNames.of(code) ?? code;
}
