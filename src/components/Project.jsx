import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import ReactMarkdown from "react-markdown";
import SEO from "./Seo";
import { useParams } from "react-router-dom";

function Project() {
  let { projectName } = useParams();
  const [loading, setLoading] = useState(true);
  const [markdownContent, setMarkdownContent] = useState("");

  useEffect(() => {
    async function fetchFile() {
      const file = await import(`../content/projects/${projectName}.md`);
      const response = await fetch(file.default);
      const text = await response.text();
      setMarkdownContent(text);
      setLoading(false);
    }
    fetchFile();
  }, [projectName]);

  return (
    <div className="row">
      <SEO title="home" />
      {!loading ? (
        <div className="markdown">
          <div className="col-xs-12">
            <img
              src={`/images/${projectName}.png`}
              alt="project hero"
              className="project-hero-image"
            />
          </div>
          <ReactMarkdown
            source={markdownContent}
            escapeHtml={false}
            className="col-xs-12"
          />
        </div>
      ) : (
        <Loading />
      )}
      {/* https://github.com/rexxars/react-markdown,
      write some test to ensure all the markdown names added, match up with the names in the metadata*/}
    </div>
  );
}

export default Project;
