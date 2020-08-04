import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./Home";
import NotFound from "./NotFound";
import Project from "./Project";
import Projects from "./Projects";

export default () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/projects" exact component={Projects} />
      <Route path="/projects/" exact component={Projects} />
      <Route path="/projects/roles/:role" component={Projects} />
      <Route path="/projects/:projectName" component={Project} />
      <Route component={NotFound} />
    </Switch>
  );
};
