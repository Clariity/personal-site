import fs from "fs";
import path from "path";

import { SEO } from "../components/utils/SEO";
import { HomeTitle } from "../components/home/HomeTitle";
import { HomeAbout } from "../components/home/HomeAbout";
import { HomeProjects } from "../components/home/HomeProjects";

// https://janja-garnbret.com/
// https://www.youtube.com/watch?v=GSPUUN4nDGE

// Add background image / svgs, minimal but there
// project links with each heading
// x minute read based on word count

type HomeProps = {
  projects: Project[];
};

export default function Home({ projects }: HomeProps) {
  return (
    <>
      <SEO title="home" />
      <main>
        <HomeTitle />
        <HomeAbout />
        <HomeProjects projects={projects} />
      </main>
    </>
  );
}

export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), "pages/projects");
  const fileNames = fs.readdirSync(postsDirectory);
  const postModules = await Promise.all(
    fileNames.map(async (fileName) => import(`/pages/projects/${fileName}`))
  );
  const postMetadata = postModules.map((m, i) => {
    return {
      id: fileNames[i].replace(/\.mdx$/, ""),
      ...m.meta,
    } as Project;
  });

  return {
    props: {
      projects: postMetadata.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      ),
    },
    revalidate: 86400, // 1 day in seconds
  };
}
