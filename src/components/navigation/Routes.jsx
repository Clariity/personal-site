import React from "react";
import { Route, Switch } from "react-router-dom";

import About from "../about/About";
import Home from "../home/Home";
import NotFound from "./NotFound";
import Project from "../projects/Project";
import Projects from "../projects/Projects";

import ScrollToTop from "./ScrollToTop";

export default () => {
  return (
    <ScrollToTop>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/projects" exact component={Projects} />
        <Route path="/projects/" exact component={Projects} />
        <Route path="/projects/roles/:role" component={Projects} />
        <Route path="/projects/:projectName" component={Project} />
        <Route component={NotFound} />
      </Switch>
    </ScrollToTop>
  );
};
