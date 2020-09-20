import React from "react";

import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";

import "react-responsive-carousel/lib/styles/carousel.min.css";

function CarouselLinks() {
  return (
    <div className="col-xs-12 col-md-8 pad-4">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showArrows={false}
        emulateTouch
        swipeable
        stopOnHover
        useKeyboardArrows
        showStatus={false}
        showLegends={false}
      >
        <Link className="pad-3" to="/about">
          <h1>About Ryan</h1>
          <img src="images/about-me.svg" alt="about me" />
        </Link>
        <Link className="pad-3" to="/blog">
          <h1>Blog</h1>
          <img src="images/blog.svg" alt="blog" />
        </Link>
        <Link className="pad-3" to="/projects">
          <h1>Projects</h1>
          <img src="images/projects.svg" alt="projects" />
        </Link>
        <Link className="pad-3" to="/code">
          <h1>Code Snippets</h1>
          <img src="images/code.svg" alt="code snippets" />
        </Link>
        <Link className="pad-3" to="/stats">
          <h1>Stats</h1>
          <img src="images/stats.svg" alt="stats" />
        </Link>
        <Link className="pad-3" to="/plans">
          <h1>Site Plans</h1>
          <img src="images/kanban.svg" alt="kanban" />
        </Link>
        <Link className="pad-3" to="/credits">
          <h1>Credits</h1>
          <img src="images/credits.svg" alt="credits" />
        </Link>
      </Carousel>
    </div>
  );
}

export default CarouselLinks;
