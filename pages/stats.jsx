import React from "react";

import SEO from "../components/other/SEO";

function Stats() {
  return (
    <div className="row max-800">
      <SEO title="stats" />
      <h1 className="col-xs-12 margin-1-t">Site Stats - Under Construction</h1>
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

export default Stats;
