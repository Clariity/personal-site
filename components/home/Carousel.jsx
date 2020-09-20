import React from "react";

import { Carousel } from "react-responsive-carousel";
import Link from "next/link";

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
        stopOnHover={false}
        useKeyboardArrows
        showStatus={false}
        showLegends={false}
      >
        <Link href="/about">
          <a className="pad-3">
            <h1>About Ryan</h1>
            <img src="images/unDraw/about-me.svg" alt="about me" />
          </a>
        </Link>
        <Link href="/blog">
          <a className="pad-3">
            <h1>Blog</h1>
            <img src="images/unDraw/blog.svg" alt="blog" />
          </a>
        </Link>
        <Link href="/projects">
          <a className="pad-3">
            <h1>Projects</h1>
            <img src="images/unDraw/projects.svg" alt="projects" />
          </a>
        </Link>
        <Link href="/code">
          <a className="pad-3">
            <h1>Code Snippets</h1>
            <img src="images/unDraw/code.svg" alt="code snippets" />
          </a>
        </Link>
        <Link href="/stats">
          <a className="pad-3">
            <h1>Stats</h1>
            <img src="images/unDraw/stats.svg" alt="stats" />
          </a>
        </Link>
        <Link href="/plans">
          <a className="pad-3">
            <h1>Site Plans</h1>
            <img src="images/unDraw/kanban.svg" alt="kanban" />
          </a>
        </Link>
        <Link href="/credits">
          <a className="pad-3">
            <h1>Credits</h1>
            <img src="images/unDraw/credits.svg" alt="credits" />
          </a>
        </Link>
      </Carousel>
    </div>
  );
}

export default CarouselLinks;
