import React from "react";
import "./App.css";

function  ContactUs(params) {
    return (<>
<section className="" style={{marginTop:"6%"}}>
    <h2 style={{textDecoration:"underline",textDecorationThickness:'2px'}}>Contact Us</h2>
    <div className="container">
    <div className="" >
        <h4>Email</h4>
        <p>ecell@itbhu.ac.in</p>
    </div>
    <div className=""  style={{textAlign:'center',marginLeft:"30%"}}>
        <h4>Phone Number</h4>
        <p>+91 9587887413</p>
    </div>
    </div>
    
</section>
    </>);
}

export default ContactUs;