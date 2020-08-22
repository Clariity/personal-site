import React from "react";
import "../styles/global.scss";

import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "./Navigation";

// Add a did you know section in code snippets for stuff like "did you know you only had to do npm i package-name as --save was no longer needed after 1.??"
// migrate projects and blog to MDX (Do on separate branch)

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
