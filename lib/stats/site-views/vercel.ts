type VercelVisitsCountResponse = {
  data?: {
    pageviews?: number;
    visitors?: number;
  };
};

export type VercelCountryRow = {
  country?: string;
  visitors?: number;
};

type VercelVisitsAggregateResponse = {
  data?: VercelCountryRow[];
};

/** Authorization header for the Vercel Web Analytics API. */
export function vercelAuthHeaders() {
  const token = process.env.VERCEL_ACCESS_TOKEN ?? process.env.VERCEL_TOKEN;
  if (!token) {
    throw new Error("Missing Vercel access token");
  }

  return { Authorization: `Bearer ${token}` };
}

/** Build a Vercel Web Analytics query URL for this project. */
export function vercelQueryUrl(path: string, projectId: string) {
  const url = new URL(`https://api.vercel.com/v1/query/web-analytics/${path}`);
  url.searchParams.set("projectId", projectId);
  return url;
}

export type { VercelVisitsAggregateResponse, VercelVisitsCountResponse };
