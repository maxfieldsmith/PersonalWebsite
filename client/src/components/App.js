import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import About from "./About";
import NavBar from "./NavBar";

export default function App() {
  return (
    <div className="page-container">
      <Router>
        <div>
          <NavBar />

          <Switch>
            <Route exact path="/" component={About} />
            <Route path="/resume">
              <Resume />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

function Resume() {
  return (
    <div>
      <h2>Resume</h2>
    </div>
  );
}

function Projects() {
  return (
    <div>
      <h2>Projects</h2>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h2>Contact Me</h2>
    </div>
  );
}
