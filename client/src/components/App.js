import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import About from "./About";
import NavBar from "./NavBar";
import Projects from "./Projects";
import Resume from "./Resume";
import Contact from "./Contact";
import ScrollToTop from "./ScrollToTop";

export default function App() {
  return (
    <div className="page-container">
      <Router>
        <div>
          <NavBar />
          <ScrollToTop />
          <Switch>
            <Route exact path="/" component={About} />
            <Route exact path="/resume" component={Resume}></Route>
            <Route exact path="/projects" component={Projects}></Route>
            <Route exact path="/contact" component={Contact}></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}
