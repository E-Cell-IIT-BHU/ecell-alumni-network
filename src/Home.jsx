import React from 'react'
import Navigation from "./navbar";
import Intro from "./Intro";
import About from "./About";
import Grid from "./Grid";
import Team from "./Team"
import ContactUs from "./contactUs";
import Form from "./form";
import Footer from "./Footer";

function Home() {
    return (
        <>
            <Intro />
            <About />
            <Grid />
            <Team />
            <ContactUs />
            <Form />
            <hr style={{ margin: "2% 20%" }}></hr>
        </>
    )
}

export default Home