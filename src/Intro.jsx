import React from "react";
import img from "./Ornament.png";
import illustration from "./illustration.png";
import "./App.css";
import "./About.jsx";

function Intro() {
  return (
    <>

      <section className="container">
      <div className="container">
          <div className="even-column">
           
            <div className="flow">
              <h1 id="heading">
              IIT BHU Alumni Angel Network
              </h1>
              <p id="para">
              An initiative by IIT BHU Alumni and E-Cell IIT BHU
              </p>
            
              <a href="#abt" className="scroll">

         
            <img
               style={{textAlign:"center"}}

      <div className="container">

      <div className="container" style={{height: "100vh"}}>
          <div className="even-column">
            <div className="">
              <h1>
              IIT BHU Alumni Angel Network
              </h1>
              <p>
              An initiative by IIT BHU Alumni and E-Cell IIT BHU
              </p>
              <a href="#abt" className="scroll">
            <img
              style={{textAlign:"center"}}


              src={img}
              alt="scroll-down-icon"
            ></img>
          </a>

          </div>
          <div id="illustration">
              <img src={illustration} alt="" />
            </div>
           
          </div>


              
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
