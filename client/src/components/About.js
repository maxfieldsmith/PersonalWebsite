import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./About.css";

let slideIndex = 1;

class About extends Component {
  componentDidMount() {
    this.showSlides(slideIndex);
  }

  showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "flex";
  }

  plusSlides(n) {
    this.showSlides((slideIndex += n));
  }

  currentSlide(n) {
    this.showSlides((slideIndex = n));
  }

  render() {
    return (
      <div className="aboutMeContainer">
        <header className="headerIndex" style={{ background: "#f0eee5" }}>
          <div className="backgroundPic">
            <div
              className="img h-100 w-100"
              style={{ background: 'url("./images/backgroundHeader.png")' }}
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
              src="./images/downarrow.png"
              alt="Down Arrow"
              height="50px"
              width="50px"
            ></img>
          </div>
        </header>
        <div className="aboutSection">
          <div className="container">
            <div className="row">
              <div className="skillsTitle">
                <h2 className="skillsTitle head2">
                  Find out more about me
                  <small>Get to know me</small>
                </h2>
              </div>
            </div>
          </div>
          <div
            className="container-fluid"
            id="aboutIndex"
            style={{ background: 'url("./images/IMG_1227.JPG")' }}
          >
            <div className="row">
              <div className="col">
                <div className="slideshow-container">
                  <div className="mySlides aboutMe row fade">
                    <div className="aboutInfo">
                      <h2 className="skillsTitle" style={{ color: "#f7f7f7" }}>
                        About Me
                      </h2>
                      <p className="darker">
                        Maxfield Smith was born in Scottsdale, AZ where he now
                        lives full time. He attended ASU in Tempe, AZ where he
                        graduated with a B.S. in Computer Science. Maxfield
                        plans on getting an entry level job within the tech
                        industry.
                      </p>
                    </div>
                    <div className="myHead">
                      <img
                        className="head"
                        src="./images/IMG_1528.JPG"
                        alt="My Face"
                      ></img>
                    </div>
                  </div>
                  <div className="mySlides education row fade">
                    <div className="educationInfo">
                      <h2 className="skillsTitle" style={{ color: "#f7f7f7" }}>
                        Education
                      </h2>
                      <p className="darker">
                        Maxfield Smith graduated from ASU in May 2020. He
                        received a B.S. in Computer Science from Ira A. Fulton
                        School of Engineering. Some of the courses he took were:
                        Intro to Artificial Intelligence, Computational Biology,
                        and Into to Robotics.
                      </p>
                    </div>
                    <div className="educationPic">
                      <img
                        className="asu"
                        src="./images/asu_logo_1.png"
                        alt="ASU logo"
                      ></img>
                    </div>
                  </div>
                  <a
                    className="prev control"
                    href="#/"
                    onClick={() => this.plusSlides(-1)}
                  >
                    &#10094;
                  </a>
                  <a
                    className="next control"
                    href="#/"
                    onClick={() => this.plusSlides(1)}
                  >
                    &#10095;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="skillsSection">
          <div className="container">
            <div className="row">
              <div className="skillsTitle">
                <h2 className="skillsTitle head2">
                  <small>MY SKILLS</small>
                  Programming Languages
                </h2>
              </div>
            </div>
            <div className="languages row">
              <div className="python quad">
                <img
                  src="./images/python_128x128.png"
                  width="128px"
                  height="128px"
                  alt="Python Logo"
                ></img>
                <h3>Python</h3>
                <hr></hr>
                <p>
                  I use python for data processing and big projects. This is the
                  language I choose if I am able to choose any language.
                </p>
              </div>
              <div className="java quad">
                <img
                  src="./images/java_128x128.png"
                  width="128px"
                  height="128px"
                  alt="Java Logo"
                ></img>
                <h3>Java</h3>
                <hr></hr>
                <p>
                  I am most comfortable with Java since it is the first language
                  I learned. Taught me all I know about OOP architecture.
                </p>
              </div>
              <div className="cplus quad">
                <img
                  src="./images/c_128x128.png"
                  width="128px"
                  height="128px"
                  alt="C Logo"
                ></img>
                <h3>C/C++</h3>
                <hr></hr>
                <p>
                  Made me the programmer I am today. Was kernal Programming on
                  Ubuntu with C. Have used C/C++ the most of all.
                </p>
              </div>
              <div className="sql quad">
                <img
                  src="./images/post_128x128.png"
                  width="128px"
                  height="128px"
                  alt="PostgreSQL Logo"
                ></img>
                <h3>SQL</h3>
                <hr></hr>
                <p>
                  I know PostgreSQL but have not gotten to use it yet in a
                  professional setting. I understand the logic behind SQL
                  through course work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
