import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import About from "./About";
import NavBar from "./NavBar";
import Projects from "./Projects";
import Resume from "./Resume";
import Contact from "./Contact";

export default function App() {
  return (
    <div className="page-container">
      <Router>
        <div>
          <NavBar />

          <Switch>
            <Route exact path="/" component={About} />
            <Route path="/resume" component={Resume}>
              <Resume />
            </Route>
            <Route path="/projects" component={Projects}>
              <Projects />
            </Route>
            <Route path="/contact" component={Contact}>
              <Contact />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}
