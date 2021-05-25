import React, { Component } from "react";
import "./About.css";

class Resume extends Component {
  componentDidMount() {
    let iframe = document.getElementById("myIframe");
    iframe.style.height =
      iframe.contentWindow.document.body.scrollHeihgt + "px";
  }

  render() {
    return (
      <div className="resumeContainer">
        <div className="resumeHeader">
          <div className="container">
            <div className="download">
              <h1>
                <em>Download my Resume here</em>
              </h1>
              <a href="/Resume.pdf" download="resume">
                Link here
              </a>
            </div>
          </div>
          <div className="resume">
            <iframe
              id="myIframe"
              title="My Resume"
              src="Resume.pdf#toolbar=0"
              width="100%"
              height="1100px"
            ></iframe>
          </div>
        </div>
      </div>
    );
  }
}

export default Resume;
