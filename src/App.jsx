import React from "react";
import Home from "./Home";
import {
  BrowserRouter as Router, Routes,
  Route,
} from "react-router-dom";
import FundingInitiative from "./InvestingForm"
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
          <Route exact path="/forms" element={<FundingInitiative />} />
        </Routes>
      </Router>
      <Footer />
      <hr style={{ margin: "2% 20%" }}></hr>

      {/* </div> */}
    </div>
  );
}


export default App;