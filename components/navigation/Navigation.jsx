import React, { useState } from "react";

import DarkModeToggle from "react-dark-mode-toggle";
import SmoothCollapse from "react-smooth-collapse";
import useDarkMode from "use-dark-mode";
import Link from "next/link";
import BurgerMenu from "./BurgerMenu";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const darkMode = useDarkMode(false);

  return (
    <div className="navigation row">
      <div className="col-xs-4 pad-4-l text-align-left flex align-horizontal">
        <Link href="/">
          <a className="flex">
            <img className="site-logo" src={"/logo.svg"} alt="Site Logo" />
          </a>
        </Link>
      </div>
      <div className={`col-xs-8 text-align-right navigation-align`}>
        {menuOpen ? (
          <i className="material-icons navigation-button" onClick={() => setMenuOpen(false)}>
            expand_less
          </i>
        ) : (
          <i className="material-icons navigation-button" onClick={() => setMenuOpen(true)}>
            menu
          </i>
        )}
        <DarkModeToggle onChange={darkMode.toggle} checked={darkMode.value} size={80} />
      </div>
      <div className="col-xs-12 pad-0-lr">
        <SmoothCollapse expanded={menuOpen}>
          <BurgerMenu setMenuOpen={setMenuOpen} />
        </SmoothCollapse>
      </div>
    </div>
  );
}
