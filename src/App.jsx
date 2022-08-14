import React from "react";
import Navigation from "./navbar";
import Intro from "./Intro";
import About from "./About";
import Grid from "./Grid";
import Team from "./Team";
import ContactUs from "./contactUs";
import Form from "./form";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div style={{ textAlign: "center" }}>
        <Navigation />
        <Intro />
        <About />
        <Grid />
        <Team />
        <ContactUs />
        <Form />
        <Footer />
        <hr style={{ margin: "2% 20%" }}></hr>
      </div>
    </div>
  );
}

export default App;
