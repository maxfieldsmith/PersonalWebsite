import React, { Component } from "react";
import "./About.css";

class Contact extends Component {
  render() {
    return (
      <div className="contactContainer">
        <div className="contactHeader">
          <div className="container">
            <div className="contactTitle">
              <h2 className="contactH2">Contact Me</h2>
            </div>
          </div>
          <div className="fluid-container">
            <div className="contactBox">
              <div className="contactMe">
                <h3>Maxfield Smith</h3>
                <hr></hr>
                <p>
                  (480)993-7914
                  <br />
                  maxfielddsmith@gmail.com
                  <br />
                  <a href="http://github.com/maxfieldsmith">
                    github.com/maxfieldsmith
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
