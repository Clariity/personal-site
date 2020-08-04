import React from "react";
import BurgerMenuLink from "./BurgerMenuLink";

function BurgerMenu({ setMenuOpen }) {
  return (
    <div className="row is-blue-bg is-black-always">
      <BurgerMenuLink
        setMenuOpen={setMenuOpen}
        to="/about"
        text="It's All About Ryan"
      />
      <BurgerMenuLink
        setMenuOpen={setMenuOpen}
        to="/projects"
        text="Projects"
      />
      <BurgerMenuLink
        setMenuOpen={setMenuOpen}
        to="/code"
        text="Code Snippets"
      />
      <BurgerMenuLink setMenuOpen={setMenuOpen} to="/credits" text="Credits" />
    </div>
  );
}

export default BurgerMenu;
