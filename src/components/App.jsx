import React from "react";
import "../styles/global.scss";

import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "./Navigation";

// Initial hero image with links on top to either view projects, view skills or view cv
// On scroll reveal navbar, scrolls down to projects

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
