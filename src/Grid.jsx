import React from "react";
import "./App.css";
import GridItem from "./gridItem";
import img from "./process1.jpg";

function Grid(params) {
  return (
    <>
    <h1 style={{textAlign:"center",textDecoration:"underline",textDecorationThickness:'2px'}}>Process</h1>
    
      <div className="grid-container">
<<<<<<< HEAD
      <img style={{width:"1000px",height:"500px",borderRadius:"23px",textAlign:"center"}} src={img}></img>
=======
      <img style={{borderRadius:"23px"}} src={img}></img>
>>>>>>> b9ed5a1 (added changes)

        {/* <div className="sub-grid-container">
          <GridItem name="Application Form"  />
          <GridItem name="Evaluation Report" />
          <GridItem name="Demo/Pitch Day" />
          <GridItem name="Fundraise Listing" />
        </div> */}
        
      </div>
    </>
  );
}

export default Grid;
