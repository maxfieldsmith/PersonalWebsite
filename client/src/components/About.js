import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./About.css";

class About extends Component {
  render() {
    return (
      <div className="aboutMeContainer">
        <header className="headerIndex" style={{ background: "#f0eee5" }}>
          <div className="backgroundPic">
            <div
              className="img h-100 w-100"
              style={{ background: 'url("backgroundHeader.png")' }}
            ></div>
          </div>
          <div className="headerContent">
            <div className="container">
              <div className="row rowNav">
                <div className="home-button">
                  <Link to="/">
                    <img
                      width="172px"
                      height="72px"
                      src="maxlogo.png"
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
              <div className="rowHeaderInfo" style={{ minHeight: "257px" }}>
                <div className="colHeaderInfo">
                  <div className="headerInfo">
                    <h1>
                      Design & <br></br> Solutions to complex problems <br></br>
                      <em>are my speciality.</em>
                    </h1>
                    <div className="messsage">
                      <p>
                        My name is Maxfield Smith.
                        <br></br>I want to bring my skills to your company.
                        <br></br>
                        Allow me to introduce myself.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="arrowDown">
            <img
              src="downarrow.png"
              alt="Down Arrow"
              height="50px"
              width="50px"
            ></img>
          </div>
        </header>
        <div className="aboutSection">
          <div className="container">
            <div className="aboutMe row">
              <div className="aboutInfo">
                <h2>About Me</h2>
                <p>
                  Maxfield Smith was born in Scottsdale, AZ where he has lived
                  his whole life. He attended ASU in Tempe, AZ where he
                  graduated with a B.S. in Computer Science. Maxfield plans on
                  getting an entry level job within the tech industry.
                </p>
              </div>
              <div className="myHead">
                <p>Place headshot here</p>
              </div>
            </div>
            <div className="education row">
              <div className="educationInfo">
                <h2>Education</h2>
                <p>
                  Maxfield Smith graduated from ASU in May 2020. He received a
                  B.S. in Computer Science from Ira A. Fulton School of
                  Engineering. Some of the courses he took were: Intro to
                  Artificial Intelligence, Computational Biology, and Into to
                  Robotics.
                </p>
              </div>
              <div className="educationPic">
                <p>Place ASU logo here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
