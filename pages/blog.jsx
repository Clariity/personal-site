import React from "react";
import { useRouter } from "next/router";

import SEO from "../components/other/SEO";

function Blog() {
  const router = useRouter();
  const { role } = router.query;

  return (
    <div className="row max-800">
      <SEO title="blog" />
      <h1 className="col-xs-12 margin-1-t">Blog - Under Construction</h1>
      <div className="col-xs-12">
        <img
          className="home-image grow"
          src="/images/unDraw/construction.svg"
          alt="under construction"
        />
      </div>
    </div>
  );
}

export default Blog;
