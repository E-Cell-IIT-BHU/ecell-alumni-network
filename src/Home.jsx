import React from 'react'
import Intro from "./Intro";
import About from "./About";
import Grid from "./Grid";
import Team from "./Team"
import ContactUs from "./contactUs";
import Form from "./form";

function Home() {
    return (
        <>
            <Intro />
            <About />
            <Grid />
            <Team />
            <ContactUs />
            <Form />
        </>
    )
}

export default Home