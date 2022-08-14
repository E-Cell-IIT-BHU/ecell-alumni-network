import React from "react";
import img from "./logo.png";
import "./App.css";

function Navigation() {
  return (
    <>
      <div className="navbar-sticky">
        <nav className="navbar navbar-expand-lg navbar-light ">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <div className="navbar-logo">
                <img src={img} alt="Ecell-logo" />
              </div>
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav  mb-2 mb-lg-0 Navbar">
                {/* <li className="nav-item">
                  <a className="nav-link" id="about" href="#abt">
                    About
                  </a>
                </li> */}
                <li className="nav-item">
                  <a className="nav-link" id="raise-fund" href="#">
                    Raise Fund
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" id="become-investor" href="#form">
                    Become Investor
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#team">
                    Team
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#cnt">
                    Contact Us
                  </a>
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
