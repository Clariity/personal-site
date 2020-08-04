import React from "react";
import SEO from "./Seo";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <SEO title="404 Page Not Found" />
      <p>Uh Oh</p>
      <Link className="App-link" to="/">
        There's no place like home
      </Link>
    </>
  );
}

export default NotFound;
