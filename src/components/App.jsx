import React from "react";
import "../styles/global.scss";

import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "./Navigation";

// Initial hero image with links on top to either view projects, view skills or view cv
// On scroll reveal navbar, scrolls down to projects
// Add custom blue scrollbar
// Add a did you know section in code snippets for stuff like "did you know you only had to do npm i package-name as --save was no longer needed after 1.??"

function App() {
  return (
    <div className="app">
      <Router>
        <Navigation />
        <Routes />
      </Router>
    </div>
  );
}

export default App;
