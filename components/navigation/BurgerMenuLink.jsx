import React from "react";
import Link from "next/link";

function BurgerMenuLink({ to, text, setMenuOpen }) {
  return (
    <Link href={to}>
      <a
        className="col-xs-12 col-sm-6 col-md-3 pad-1-tb navigation-link"
        onClick={() => setMenuOpen(false)}
      >
        {text}
      </a>
    </Link>
  );
}

export default BurgerMenuLink;
