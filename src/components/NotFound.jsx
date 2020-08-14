import React from "react";
import SEO from "./Seo";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <SEO title="404 Page Not Found" />
      <div className="col-xs-12">
        <img className="home-image grow" src="/images/home2.svg" alt="hero" />
      </div>
      <p>Uh Oh</p>
      <Link className="App-link slide-button is-black-always" to="/">
        There's no place like home
      </Link>
    </>
  );
}

export default NotFound;
