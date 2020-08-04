import React from "react";
import { Link } from "react-router-dom";

function BurgerMenuLink({ to, text, setMenuOpen }) {
  return (
    <Link
      className="col-xs-12 col-sm-6 col-md-3 pad-1-tb navigation-link"
      to={to}
      onClick={() => setMenuOpen(false)}
    >
      {text}
    </Link>
  );
}

export default BurgerMenuLink;
