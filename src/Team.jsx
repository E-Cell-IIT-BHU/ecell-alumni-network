import React from "react";
import Grid from "./Grid";
import "./App.css";
import GridItem from "./gridItem";

function Team(params) {
  return (
    <>
      <h2 style={{textDecoration:"underline",textDecorationThickness:'2px',margin:'2% 0'}}>Meet the Team</h2>

      <div className="grid-container">
        <h2 style={{textDecoration:"underline",textDecorationThickness:'2px'}}>Core Team</h2>
        <div className="sub-grid-container">
          <GridItem name="Nishant Shukla" />
          <GridItem name="Amit Kumar Baheti" />
          <GridItem name="Akshay Akash" />
          <GridItem name="Sparsh Agarwal" />
        </div>
        <h2 style={{textDecoration:"underline",textDecorationThickness:'2px',margin:'2% 0'}}>Evaluation Team</h2>
        <div className="sub-grid-container">
          <GridItem name="Aditya Talwar"/>
          <GridItem name="Evaluation Report"/>
          <GridItem name="Demo/Pitch Day"/>
          <GridItem name="Fundraise Listing"/>

          <GridItem name="Manish Jindal" />
          <GridItem name="Dirghayu Kaushik"/>
          <GridItem name="Nijhil Pal Singh"/>
          <GridItem name="Somnath Bhadury"/>

          <GridItem name="Udayan Banerjee"/>
        </div>
      </div>
    </>
  );
}

export default Team;
