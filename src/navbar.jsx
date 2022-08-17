import React from "react";
import img from "./logo.png";
import "./App.css";

function Navigation() {
  return (
    <>
      <div className="navbar-sticky">
        <nav className="navbar navbar-expand-lg navbar-light ">
          <div className="container-fluid">
<<<<<<< HEAD
            <a className="navbar-brand" href="/#">
=======
            <a className="navbar-brand" href="https://iaan.ecelliitbhu.com/">
>>>>>>> f4b2a00a8ab6760df1b870007c1b6fe1f7acd177
              <div className="navbar-logo">
                <img src={img} alt="E-Cell-Logo" />
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
                <li className="nav-item">
                  <a className="nav-link" id="raise-fund" href="/raise_fund">
                    Raise Fund
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" id="become-investor" href="/forms">
                    Become Investor
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#team">
                    Team
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#cnt">
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
