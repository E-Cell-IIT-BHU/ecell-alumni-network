import React from "react";
import img from "./Ornament.png";
import illustration from "./illustration.png";
import "./App.css";
import "./About.jsx";

function Intro() {
  return (
    <>
      <div className="">
        <div className="container">
          <div className="even-column">
            <div className="info">
              <h1>IIT BHU Alumni Angel Network</h1>
              <p>An initiative by IIT BHU Alumni and E-Cell IIT BHU</p>
              {/* <a href="#abt" className="scroll">
                <img
              style={{textAlign:"center"}}

              src={img}
              alt="scroll-down-icon"
            ></img>
              </a> */}
            </div>
            <div>
              <img src={illustration} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Intro;
