import React from "react";
import BurgerMenuLink from "./BurgerMenuLink";

function BurgerMenu({ setMenuOpen }) {
  return (
    <div className="row is-blue-bg is-black-always">
      <BurgerMenuLink setMenuOpen={setMenuOpen} to="/" text="Home" />
      <BurgerMenuLink setMenuOpen={setMenuOpen} to="/about" text="It's All About Ryan" />
      <BurgerMenuLink setMenuOpen={setMenuOpen} to="/blog" text="Blog" />
      <BurgerMenuLink setMenuOpen={setMenuOpen} to="/projects" text="Projects" />
      <BurgerMenuLink setMenuOpen={setMenuOpen} to="/code" text="Code Snippets" />
      <BurgerMenuLink setMenuOpen={setMenuOpen} to="/stats" text="Site Stats" />
      <BurgerMenuLink setMenuOpen={setMenuOpen} to="/plans" text="Site Plans" />
      <BurgerMenuLink setMenuOpen={setMenuOpen} to="/credits" text="Credits" />
    </div>
  );
}

export default BurgerMenu;
