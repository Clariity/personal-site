import { HeadingTwo } from "../utils/HeadingTwo";
import { HeadingThree } from "../utils/HeadingThree";
import { LinkText } from "../utils/LinkText";
import { StatCountUp } from "./StatCountUp";
import { Text } from "../utils/Text";

type AboutStatsProps = {
  githubStats: {
    login: string;
    url: string;
    repositories: {
      totalCount: number;
      nodes: {
        name: string;
        stargazerCount: number;
        url: string;
        forkCount: number;
      }[];
    };
    repositoriesContributedTo: {
      totalCount: number;
      nodes: {
        name: string;
        url: string;
      }[];
    };
  };
};

const Star = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
  >
    <path
      fillRule="evenodd"
      d="M12.672.668a.75.75 0 00-1.345 0L8.27 6.865l-6.838.994a.75.75 0 00-.416 1.279l4.948 4.823-1.168 6.811a.75.75 0 001.088.791L12 18.347l6.117 3.216a.75.75 0 001.088-.79l-1.168-6.812 4.948-4.823a.75.75 0 00-.416-1.28l-6.838-.993L12.672.668z"
    ></path>
  </svg>
);

const Fork = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
  >
    <path
      fillRule="evenodd"
      d="M12 21a1.75 1.75 0 110-3.5 1.75 1.75 0 010 3.5zm-3.25-1.75a3.25 3.25 0 106.5 0 3.25 3.25 0 00-6.5 0zm-3-12.75a1.75 1.75 0 110-3.5 1.75 1.75 0 010 3.5zM2.5 4.75a3.25 3.25 0 106.5 0 3.25 3.25 0 00-6.5 0zM18.25 6.5a1.75 1.75 0 110-3.5 1.75 1.75 0 010 3.5zM15 4.75a3.25 3.25 0 106.5 0 3.25 3.25 0 00-6.5 0z"
    ></path>
    <path
      fillRule="evenodd"
      d="M6.5 7.75v1A2.25 2.25 0 008.75 11h6.5a2.25 2.25 0 002.25-2.25v-1H19v1a3.75 3.75 0 01-3.75 3.75h-6.5A3.75 3.75 0 015 8.75v-1h1.5z"
    ></path>
    <path fillRule="evenodd" d="M11.25 16.25v-5h1.5v5h-1.5z"></path>
  </svg>
);

// Need to add website view stats

export function AboutStats({ githubStats }: AboutStatsProps) {
  const totalRepos = githubStats.repositories.totalCount;
  const totalStars = githubStats.repositories.nodes.reduce(
    (acc, cur) => acc + cur.stargazerCount,
    0
  );
  const totalForks = githubStats.repositories.nodes.reduce(
    (acc, cur) => acc + cur.forkCount,
    0
  );
  const topRepos = githubStats.repositories.nodes.slice(0, 3);
  const contributedRepos = githubStats.repositoriesContributedTo.nodes;

  return (
    <>
      <div className="flex justify-center mb-4">
        <HeadingTwo>GitHub Stats</HeadingTwo>
      </div>

      <div className="grid gap-3 md:gap-6 xl:gap-8 grid-cols-1 md:grid-cols-3 mb-3 md:mb-6 xl:mb-8">
        <StatCountUp heading="Repositories" stat={totalRepos} />
        <StatCountUp heading="Stargazers" stat={totalStars} />
        <StatCountUp heading="Times Forked" stat={totalForks} />
      </div>

      <div className="grid gap-3 md:gap-6 xl:gap-8 grid-cols-1 md:grid-cols-2 mb-24">
        <div className="flex flex-col items-center border-4 border-primary rounded-lg p-4 shadow-lg">
          <HeadingThree>Top Repositories</HeadingThree>

          {topRepos.map((r) => (
            <div key={r.url} className="flex items-center gap-3">
              <LinkText external href={r.url}>
                <Text>{r.name}</Text>
              </LinkText>
              <div className="flex gap-1 fill-yellow">
                <Star />
                {r.stargazerCount}
              </div>
              <div className="flex gap-1">
                <Fork />
                {r.forkCount}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center border-4 border-primary rounded-lg p-4 shadow-lg">
          <HeadingThree>Contributed To</HeadingThree>
          {contributedRepos.map((r) => (
            <LinkText key={r.url} external href={r.url}>
              <Text>{r.name}</Text>
            </LinkText>
          ))}
        </div>
      </div>
    </>
  );
}
