import React from "react";
import { Carousel } from "react-responsive-carousel";
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
        <div className="pad-3">
          <h1>About Ryan</h1>
          <img src="images/about-me.svg" alt="about me" />
        </div>
        <div className="pad-3">
          <h1>Blog</h1>
          <img src="images/blog.svg" alt="blog" />
        </div>
        <div className="pad-3">
          <h1>Projects</h1>
          <img src="images/projects.svg" alt="projects" />
        </div>
        <div className="pad-3">
          <h1>Code Snippets</h1>
          <img src="images/code.svg" alt="code snippets" />
        </div>
        <div className="pad-3">
          <h1>Stats</h1>
          <img src="images/stats.svg" alt="stats" />
        </div>
        <div className="pad-3">
          <h1>Site Plans</h1>
          <img src="images/kanban.svg" alt="kanban" />
        </div>
        <div className="pad-3">
          <h1>Credits</h1>
          <img src="images/credits.svg" alt="credits" />
        </div>
      </Carousel>
    </div>
  );
}

export default CarouselLinks;
