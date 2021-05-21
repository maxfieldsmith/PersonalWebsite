import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

class NavBar extends Component {
  render() {
    return (
      <div className="navContainer">
        <div className="row rowNav">
          <div className="home-button">
            <Link to="/">
              <img
                width="172px"
                height="60px"
                src="maxlogo.png"
                alt="My Logo logo"
              />
            </Link>
          </div>
          <div className="navButtons">
            <nav>
              <ul>
                <li>
                  <Link to="/projects">Projects</Link>
                </li>
                <li>
                  <Link to="/resume">Resume</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Me</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
