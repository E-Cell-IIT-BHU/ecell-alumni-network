import React from "react";
import Home from "./Home";
import {
  BrowserRouter as Router, Routes,
  Route,
} from "react-router-dom";
import FundingInitiative from "./components/webForm";
import Footer from "./Footer";
import Navigation from "./navbar";


function App() {
  return (
    <div className="App">
      <Navigation />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/forms" element={<FundingInitiative />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}


export default App;
