import React from 'react'
import Intro from "./Intro";
import About from "./About";
import Grid from "./Grid";
import Team from "./Team"
import ContactUs from "./contactUs";
import Form from "./form";
import Amount from './Amount';

function Home() {
    return (
        <>
            <Intro />
            <About />
            <Amount/>
            <Grid />
            <Team />
            <ContactUs />
            <Form />
        </>
    )
}

export default Home