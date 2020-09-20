import React from "react";

import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div className="col-xs-12 col-md-4 pad-4">
      <h1>Welcome</h1>
      <Link className="is-black-always" to="/about#experience">
        <p className="slide-button">
          For skills and experience, click here to head straight to the good stuff
        </p>
      </Link>
      <p>
        The site is a fun project for me to consistently work on and expand as I continue to learn.
      </p>
      <p>
        Parts of this site are dedicated to selling myself and showing off what I've made and
        accomplished.
      </p>
      <p>Other parts are just for fun and trying out new things.</p>
      <p>
        Have a good look around. If you find any issues or have any suggestions then please{" "}
        <a
          href="https://twitter.com/messages/compose?recipient_id=1283026029452365826&text=Topic%3A%20ryangregory.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          let me know
        </a>
        .
      </p>
    </div>
  );
}

export default Welcome;
