import React, { Component } from "react";
import "./About.css";

class Contact extends Component {
  render() {
    return (
      <div className="contactContainer">
        <div className="contactHeader">
          <div className="contactBox">
            <div className="phone">
              <img
                className="phone-img"
                src="./images/Phone.svg"
                alt="Phone"
              ></img>
            </div>
            <div className="contactMe">
              <div
                className="card"
                style={{
                  background: "#f5f5f5",
                  borderRadius: "1em",
                  display: "grid",
                  gridAutoRows: "rows",
                  gap: "10px",
                }}
              >
                <h3>Maxfield Smith</h3>
                <p>Phone: (480)993-7914</p>
                <p>Email: maxfielddsmith@gmail.com</p>
                <p>
                  Github:{" "}
                  <a
                    href="http://github.com/maxfieldsmith"
                    rel="noreferrer"
                    target="_blank"
                  >
                    github.com/maxfieldsmith
                  </a>
                </p>
                <p>
                  LinkedIn:{" "}
                  <a
                    href="http://www.linkedin.com/in/max-smith-b228b368"
                    rel="noreferrer"
                    target="_blank"
                  >
                    linkedin/maxfieldsmith
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
