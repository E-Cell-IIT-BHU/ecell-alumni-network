import React from "react";
import "./App.css";

function Form(params) {
  return (
    <>

      <div className="form-container" id="form">


      <div className="form-container" id="form">


        <form>
          <div class="row">
            <div class="col">
              <input
                type="text"
                class="form-control"
                placeholder="First name"
              />
              <input type="email" class="form-control" placeholder="Email" />
              <input type="text" class="form-control" id="inputAddress" placeholder="Name of Startup"/>
            </div>
            <div class="col">
              <input type="text" class="form-control" placeholder="Last name" />
              <input type="text" class="form-control" placeholder="Phone" />
              <input type="text" class="form-control" id="inputAddress" placeholder="Subject"/>
            </div>
          </div>
          <div class="form-group">
    <input type="text" class="form-control" id="inputAddress" placeholder="Type your message here"/>
  </div>
  <button  class="btn btn-primary" type="submit">Submit form</button>
        </form>
      </div>
    </>
  );
}

export default Form;
