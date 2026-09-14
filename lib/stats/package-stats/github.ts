import { reactChessboard } from "@/constants";

import { fetchJson } from "../http";

type GitHubRepoResponse = {
  stargazers_count: number;
};

/** Fetch GitHub star count for react-chessboard. */
export async function fetchRepoStars() {
  return fetchJson<GitHubRepoResponse>(
    `https://api.github.com/repos/${reactChessboard.githubRepo}`,
    {
      headers: {
        Accept: "application/vnd.github+json",
        "User-Agent": "personal-site",
        ...(process.env.GITHUB_ACCESS_TOKEN ?? process.env.GITHUB_TOKEN
          ? {
              Authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN ?? process.env.GITHUB_TOKEN}`,
            }
          : {}),
      },
    },
  );
}
