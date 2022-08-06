import React from "react";
import  img from './logo.png';
import "./App.css";


function Navigation(){
return(
    <>
    <div className="navbar-sticky">
    <nav className="navbar navbar-expand-lg navbar-light ">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img src={img} alt="Ecell-logo" style={{width:"142px",height:"52px",marginLeft:"25px",paddingTop:"0.3125rem",paddingBottom:"0.3125rem"}}/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav  mb-2 mb-lg-0 Navbar" >
        <li className="nav-item">
          <a className="nav-link"  href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Raise Fund</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Become Investor</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Team</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact Us</a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
</div>
    </>
);
}

export default Navigation;
