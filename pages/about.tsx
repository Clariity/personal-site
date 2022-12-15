import { AboutCareer } from "../components/about/AboutCareer";
import { AboutEducation } from "../components/about/AboutEducation";
import { AboutStats } from "../components/about/AboutStats";
import { AboutSummary } from "../components/about/AboutSummary";
import { AboutTitle } from "../components/about/AboutTitle";
import { SEO } from "../components/utils/SEO";

const query = `
  query {
    viewer {
      login
      url 
      repositories(first:100, orderBy: { field: STARGAZERS, direction:DESC }) {
        totalCount 
        nodes {
          name 
          stargazerCount 
          url 
          forkCount  
        } 
      }
      repositoriesContributedTo (first: 100, contributionTypes: [PULL_REQUEST]) {
        totalCount 
        nodes { 
          name
          url
        }
      }
    }
  }
`;

type AboutProps = {
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

export default function About({ githubStats }: AboutProps) {
  return (
    <>
      <SEO title="about" />
      <main>
        <AboutTitle />
        <AboutSummary />
        <AboutCareer />
        <AboutEducation />
        <AboutStats githubStats={githubStats} />
      </main>
    </>
  );
}

export async function getStaticProps() {
  try {
    const response = await fetch("https://api.github.com/graphql", {
      method: "post",
      body: JSON.stringify({ query }),
      headers: {
        "User-Agent": "Clariity",
        Authorization: `bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
      },
    });
    const responseJSON = await response.json();

    if (responseJSON.message) {
      console.error(JSON.stringify(responseJSON));
      throw new Error();
    }

    const data = await responseJSON.data.viewer;

    return {
      props: {
        githubStats: data,
      },
      revalidate: 86400,
    };
  } catch (err) {
    return {
      props: {
        githubStats: null,
      },
      revalidate: 86400,
    };
  }
}
