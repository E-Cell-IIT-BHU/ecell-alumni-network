import React from "react";



import "./App.css";
import GridItem from "./gridItem";

function Team(params) {
  return (
    <>

      {/* <hr style={{margin:"0% 20%"}}></hr> */}
      <div >

     {/* <hr style={{margin:"0% 20%"}}></hr> */}
     <div >


      <h2 style={{textDecoration:"none!important",margin:'2% 0',fontWeight:"600",textTransform:"uppercase"}} id="team" >Meet the Team</h2>

      <h2 style={{textDecoration:"none!important",marginTop: "50px",fontWeight:"600",textTransform:"uppercase"}} id="team" >Meet the Team</h2>


      <div className="grid-container" >
        <h2 style={{textDecoration:"underline",textDecorationThickness:'2px'}}>Core Team</h2>
        <div className="sub-grid-container">

          <GridItem   name="Nishant Shukla" className="team-name" />
          <GridItem  name="Amit Kumar"  className="team-name"/>
          <GridItem  name="Akshay Akash"  className="team-name"/>
          <GridItem  name="Sparsh Agarwal"  className="team-name"/>

          <GridItem name="Nishant Shukla" />
          <GridItem name="Amit Kumar " />
          <GridItem name="Akshay Akash" />
          <GridItem name="Sparsh Agarwal" />

        </div>
        <h2 style={{textDecoration:"underline",textDecorationThickness:'2px',margin:'2% 0'}}>Evaluation Team</h2>
        <div className="sub-grid-container">
          <GridItem  name="Aditya Talwar" className="team-name"/>
          <GridItem  name="Evaluation Report" className="team-name"/>
          <GridItem  name="Demo/Pitch Day" className="team-name"/>
          <GridItem  name="Fundraise Listing" className="team-name"/>

          <GridItem  name="Manish Jindal"  className="team-name"/>
          <GridItem  name="Dirghayu Kaushik" className="team-name"/>
          <GridItem  name="Nijhil Pal Singh" className="team-name"/>
          <GridItem  name="Somnath Bhadury" className="team-name"/>

          <GridItem  name="Udayan Banerjee"/>
        </div>
      </div>
      </div>
    </>
  );
}

export default Team;
