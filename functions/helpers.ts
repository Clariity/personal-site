type Meta = {
  title: string;
  description: string;
  date: string;
  tags: string[];
};

export async function getStaticProps(meta: Meta) {
  const fs = require("fs");
  const path = require("path");
  const postsDirectory = path.join(process.cwd(), "pages/projects");
  const fileNames = fs.readdirSync(postsDirectory);
  const postModules = await Promise.all(
    fileNames.map(
      async (fileName: string) => import(`/pages/projects/${fileName}`)
    )
  );
  let thisPostIndex = 0;
  const postsByDate = postModules
    .map((m, i) => {
      return {
        id: fileNames[i].replace(/\.mdx$/, ""),
        date: m.meta.date,
        title: m.meta.title,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .map((m, i) => {
      if (m.title === meta.title) {
        thisPostIndex = i;
      }
      const { id, title } = m;
      return { id, title };
    });
  const next = postsByDate[thisPostIndex - 1] || null;
  const previous = postsByDate[thisPostIndex + 1] || null;
  return {
    props: {
      projects: { next, previous },
    },
  };
}
