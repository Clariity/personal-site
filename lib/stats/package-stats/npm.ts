import { reactChessboard } from "@/constants";

import { addUtcDays, formatDate } from "@/utils/dates";
import { fetchJson } from "../http";

const NPM_RANGE_DAYS = 500;

type NpmRangeResponse = {
  downloads: { day: string; downloads: number }[];
};

/**
 * Split a date range into chunks under npm's ~18 month range-query limit.
 */
function npmRangeChunks(from: string, to: string) {
  const chunks: { from: string; to: string }[] = [];
  let cursor = new Date(`${from}T00:00:00.000Z`);
  const end = new Date(`${to}T00:00:00.000Z`);

  while (cursor <= end) {
    const chunkEnd = addUtcDays(cursor, NPM_RANGE_DAYS);
    const toDate = chunkEnd < end ? chunkEnd : end;
    chunks.push({ from: formatDate(cursor), to: formatDate(toDate) });
    cursor = addUtcDays(toDate, 1);
  }

  return chunks;
}

/** Fetch all-time daily npm downloads for react-chessboard. */
export async function fetchDailyDownloads() {
  const today = formatDate(new Date());
  const chunks = npmRangeChunks(reactChessboard.publishedAt, today);

  const ranges = await Promise.all(
    chunks.map(({ from, to }) =>
      fetchJson<NpmRangeResponse>(
        `https://api.npmjs.org/downloads/range/${from}:${to}/${reactChessboard.name}`,
      ),
    ),
  );

  return ranges.flatMap((range) => range.downloads);
}
