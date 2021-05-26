import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./About.css";

class Projects extends Component {
  render() {
    return (
      <div className="projectsContainer">
        <header
          className="regularHeader"
          style={{
            background: "#9da5ab",
          }}
        >
          <div className="headerContent">
            <div className="container">
              <div className="row rowNav">
                <div className="home-button">
                  <Link to="/">
                    <img
                      width="172px"
                      height="72px"
                      src="./images/maxlogo.png"
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
              <div className="rowHeader" style={{ minHeight: "100px" }}>
                <div className="colInfo">
                  <p className="darker">
                    <big>My Projects</big> <br />
                    This is the section where I show off my github. There are
                    several passion projects on display and a few school
                    projects I could share. Take some time and look around.
                  </p>
                </div>
                <div className="vl" />
                <div className="githubCredentials">
                  <p className="darker">
                    <big style={{ marginBottom: "15px" }}>Github</big>
                    <br />
                    <br />
                    <a
                      href="https://github.com/maxfieldsmith"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        width="72px"
                        height="72px"
                        src="./images/github_64x64.png"
                        alt="Github logo"
                      />
                    </a>
                    <br />

                    <a
                      href="https://github.com/maxfieldsmith"
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: "#F5F5F5" }}
                    >
                      <em style={{ fontSize: "28px" }}>
                        github.com/maxfieldsmith
                      </em>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="projectsHeader">
          <div className="container">
            <div className="row">
              <div className="headerContainer">
                <div className="projectsTitle">School Projects</div>
              </div>
            </div>

            <div className="schoolProjects row">
              <div className="capstone quad">
                <div className="card">
                  <img
                    src="./images/java_128x128.png"
                    width="128px"
                    height="128px"
                    alt="Java Logo"
                  ></img>
                  <h3>Capstone Project</h3>
                  <hr />
                  <p>
                    For my capstone project we were tasked with creating a game
                    for middle school students to teach them about the impacts
                    of climate change. We teamed up with Mary Lou Fulton
                    Teacher's College as a sponsor for this project. We had to
                    incorporate VR/AR into the game. My main task was building
                    the backend for the application.
                  </p>
                </div>
              </div>
              <div className="tss quad">
                <div className="card">
                  <img
                    src="./images/java_128x128.png"
                    width="128px"
                    height="128px"
                    alt="Java Logo"
                  ></img>
                  <h3>TSS Profiling</h3>
                  <hr />
                  <p>
                    This was a Computational Biology project that consisted of
                    three undergrad students and one grad student. Inside of
                    mRNA there exists transcription start sites (TSS) that span
                    over a region of nuecliotides. Our job was to find, if any,
                    regions were alternative promoters. This means that there is
                    a promoter such that it is also a promoter in other mRNA
                    strands. We then used statistical tests to figure out if
                    there is any evidence that the alternative promoter is an
                    alternative promoter.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="container" style={{ marginTop: "50px" }}>
            <div className="row">
              <div className="headerContainer">
                <div className="projectsTitle">Passion Projects</div>
              </div>
            </div>
            <div className="passionProjects row">
              <div className="search quad">
                <div className="card">
                  <img
                    src="./images/java_128x128.png"
                    width="128px"
                    height="128px"
                    alt="Java Logo"
                  ></img>
                  <h3>Path Finding</h3>
                  <hr />
                  <p>
                    I made a path finding visualizer using python. I was always
                    curious how they looked so I built one.
                  </p>
                </div>
              </div>
              <div className="sort quad">
                <div className="card">
                  <img
                    src="./images/java_128x128.png"
                    width="128px"
                    height="128px"
                    alt="Java Logo"
                  ></img>
                  <h3>Sorting Algorithms</h3>
                  <hr />
                  <p>
                    I created a website that displays various sorting
                    algorithms. This was my first website I ever made with
                    React.
                  </p>
                </div>
              </div>
              <div className="udp quad">
                <div className="card">
                  <img
                    src="./images/java_128x128.png"
                    width="128px"
                    height="128px"
                    alt="Java Logo"
                  ></img>
                  <h3>UDP/TCP</h3>
                  <hr />
                  <p>
                    I created a UDP/TCP server and client end application in
                    Linux
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
