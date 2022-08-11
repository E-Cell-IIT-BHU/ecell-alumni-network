import React from "react";
import "./App.css";
import illustration from "./illustration.png";

function GridItemI(props) {
  return (
    <>
      <div className="grid-item align-bottom card">
        <img src={props.poster} />
        <div className="card-content">
          <p className="card-title">{props.name}</p>
          <a className="button" href={props.knowMoreLink} target="blank">
            LinkedIn
          </a>
        </div>
      </div>
    </>
  );
}
export default GridItemI;
