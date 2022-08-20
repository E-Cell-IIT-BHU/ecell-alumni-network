import React from "react";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FundingInitiative from "./InvestingForm";
import Raise_funds from "./Raise_funds";
import Footer from "./Footer";
import Navigation from "./navbar";

function App() {
  return (
    <div className="App">
      {/* <div style={{ textAlign: "center" }}> */}
      <Navigation />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/investing_form" element={<FundingInitiative />} />
          <Route exact path="/raise_funds" element={<Raise_funds />} />
        </Routes>
      </Router>
      <Footer />
      <hr style={{ margin: "2% 20%" }}></hr>

      {/* </div> */}
    </div>
  );
}

export default App;
