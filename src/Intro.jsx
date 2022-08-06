import React from "react";
import img from "./Ornament.png";
import illustration from "./illustration.png";
import "./App.css";
import "./About.jsx";

function Intro() {
  return (
    <>
      <section className="container">
        <div style={{ marginTop: "23%" }} className="even-column">
        <div className="flow"><h1>IIT BHU Alumni Angel Network</h1>
          <div style={{ padding: "3% 20%" }}>
            <p>An initiative by IIT BHU Alumni and E-Cell IIT BHU</p>
          </div>

          <a href="#abt">
            <img
              style={{ width: "46px", height: "40px" }}
              src={img}
              alt="scroll-down-icon"
            ></img>
          </a>
        </div></div>
          
        <div className="even-column">
          <img
            src={illustration}
            className="illustration"
            alt="illustration"
          ></img>
        </div>
      </section>
    </>
  );
}
export default Intro;
