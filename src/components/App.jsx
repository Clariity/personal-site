import React from "react";
import "../styles/global.scss";

import Routes from "./navigation/Routes";
import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "./navigation/Navigation";

// Need to lazy load images or have a placeholder as they are causing page to jump while loading
// Add a did you know section in code snippets for stuff like "did you know you only had to do npm i package-name as --save was no longer needed after 1.??"
// Blog Post Sections/Categories (visually show them split) for Web Dev, PC Building
// Blog Post: Did you knows about PC building in PC building section (AIO positioning, XMP Profiling for RAM, Case Pressures)
// Blog Post: Useful VSCode extensions (Join Lines, Ipsum Lorem, Prettier, Live Share, Formatting Toggle) and shortcuts div.thisisaclassname + tab (play a gif to show this)
// PC Blog: Airflow/pressure, 3-pin cpu fan vs 4pin, aio mounting orientation, thermal paste application, fan sizes (120,140,240,360 ect)
// migrate to Next.js (Do on separate branch)
// Change links to blue colour
// SSR
// Cookie Notice if required
// Quotes in random order on 40 page so its not the same every time
// Footer
// Sort out text alignments and keep constant justificication
// Sort out paddings so they are all the same (About page has a mix and match currently) --> (wrap higher components in max-1400)
// Add relevant description/link to ECS page and public facing projects to each module in education

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
