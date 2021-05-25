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
                <small
                  style={{ fontWeight: "bold", textTransform: "uppercase" }}
                >
                  resume
                </small>
                Feel Free to Download and Save
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
              src="Resume.pdf#toolbar=0&navpanes=0&scrollbar=0&view=fit"
              width="80%"
              height="1100px"
            ></iframe>
          </div>
        </div>
      </div>
    );
  }
}

export default Resume;
