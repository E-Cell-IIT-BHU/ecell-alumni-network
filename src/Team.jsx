import React from "react";
import "./App.css";
import GridItem from "./gridItem";

function Team(params) {
  return (
    <>
     {/* <hr style={{margin:"0% 20%"}}></hr> */}
     <div >
      <h2 style={{textDecoration:"none!important",margin:'2% 0',fontWeight:"600",textTransform:"uppercase"}} id="team" >Meet the Team</h2>

      <div className="grid-container" >
        <h2 style={{textDecoration:"underline",textDecorationThickness:'2px'}}>Core Team</h2>
        <div className="sub-grid-container">
          <GridItem name="Nishant Shukla" />
          <GridItem name="Amit Kumar " />
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
      </div>
    </>
  );
}

export default Team;
