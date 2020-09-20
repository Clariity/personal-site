import React from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

import Loading from "../../components/other/Loading";
import SEO from "../../components/other/SEO";

function Project() {
  const router = useRouter();
  const projectName = router.query["project"];

  const MDXContent = dynamic(() => import(`../../content/projects/${projectName}.mdx`), {
    loading: () => <Loading />,
  });

  // const MDXMetadata = dynamic(() =>
  //   import(`../../content/projects/${filename}.mdx`).then((mod) => mod.metadata)
  // );

  // useEffect(() => {
  //   async function fetchFile() {
  //     const file = await import(`../../content/projects/${projectName}.mdx`);
  //     const response = await fetch(file.default);
  //     const text = await response.text();
  //     setMarkdownContent(text);
  //     setLoading(false);
  //   }
  //   fetchFile();
  // }, [projectName]);

  return (
    <div className="row">
      <SEO title={projectName} />
      <div className="markdown">
        <div className="col-xs-12">
          <img
            src={`/images/projects/${projectName}.png`}
            alt="project hero"
            className="project-hero-image"
          />
        </div>
        <MDXContent />
        {/* ADD BACK TO PROJECTS BUTTON HERE, ADD NEXT PROJECT, ADD RANDOM PROJECT/BLOG POST */}
      </div>
    </div>
  );
}

export default Project;
