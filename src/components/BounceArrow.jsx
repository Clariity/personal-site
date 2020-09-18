import React from "react";

function BounceArrow({ scrollRef }) {
  // Add to code snippets
  const scrollTo = (ref) =>
    window.scrollTo({
      top: ref.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });

  return (
    <div className="col-xs-12 margin-5-t bounce">
      <i className="material-icons arrow-icon" onClick={() => scrollTo(scrollRef)}>
        keyboard_arrow_down
      </i>
    </div>
  );
}

export default BounceArrow;
