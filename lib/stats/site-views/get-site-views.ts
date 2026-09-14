import { cacheLife } from "next/cache";

import { addUtcDays } from "@/utils/dates";
import { fetchJson } from "../http";
import type { SiteViews } from "../types";
import { countryName } from "./countries";
import {
  type VercelCountryRow,
  type VercelVisitsAggregateResponse,
  type VercelVisitsCountResponse,
  vercelAuthHeaders,
  vercelQueryUrl,
} from "./vercel";

const COUNTRY_WINDOW_DAYS = 31;

/**
 * Load lifetime page views/visitors plus unique visitors by country.
 * Country breakdowns only cover the Hobby reporting window (31 days).
 * Cached for about an hour via Cache Components.
 */
async function loadSiteViews(projectId: string): Promise<SiteViews> {
  "use cache";
  cacheLife("hours");

  const headers = vercelAuthHeaders();
  const until = new Date();
  const since = addUtcDays(until, -(COUNTRY_WINDOW_DAYS - 1));
  const countriesUrl = vercelQueryUrl("visits/aggregate", projectId);
  countriesUrl.searchParams.set("by", "country");
  countriesUrl.searchParams.set("since", since.toISOString());
  countriesUrl.searchParams.set("until", until.toISOString());
  countriesUrl.searchParams.set("limit", "20");

  const [countPayload, countriesPayload] = await Promise.all([
    fetchJson<VercelVisitsCountResponse>(
      vercelQueryUrl("visits/count", projectId).toString(),
      { headers },
    ),
    fetchJson<VercelVisitsAggregateResponse>(countriesUrl.toString(), { headers }),
  ]);

  const pageviews = countPayload.data?.pageviews;
  const visitors = countPayload.data?.visitors;

  if (typeof pageviews !== "number" || typeof visitors !== "number") {
    throw new Error("Vercel Analytics response was missing pageviews or visitors");
  }

  const countries = (countriesPayload.data ?? [])
    .filter((row): row is VercelCountryRow & { country: string; visitors: number } => {
      return typeof row.country === "string" && typeof row.visitors === "number";
    })
    .map((row) => ({
      code: row.country,
      name: countryName(row.country),
      visitors: row.visitors,
    }))
    .sort((a, b) => b.visitors - a.visitors);

  return { pageviews, visitors, countries };
}

/**
 * Public site-views loader. Returns null when credentials are missing
 * or the Vercel API fails, so the page can still render.
 */
export async function getSiteViews(): Promise<SiteViews | null> {
  const projectId = process.env.VERCEL_PROJECT_ID;

  if (!(process.env.VERCEL_ACCESS_TOKEN ?? process.env.VERCEL_TOKEN) || !projectId) {
    return null;
  }

  try {
    return await loadSiteViews(projectId);
  } catch (error) {
    console.error("Failed to load Vercel site views", error);
    return null;
  }
}
