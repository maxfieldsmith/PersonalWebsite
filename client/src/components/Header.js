import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <header className="headerIndex" style={{ background: "#f0eee5" }}>
        <div className="headerContent">
          <div className="container">
            <div className="row rowNav">
              <div className="home-button">
                <Link to="/">
                  <img
                    width="72px"
                    height="72px"
                    src="logo192.png"
                    alt="My Logo logo"
                  />
                </Link>
              </div>
              <div className="navButtons">
                <nav>
                  <ul>
                    <li>
                      <Link to="/">About Me</Link>
                    </li>
                    <li>
                      <Link to="/resume">Education</Link>
                    </li>
                    <li>
                      <Link to="/projects">Projects</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact Me</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
