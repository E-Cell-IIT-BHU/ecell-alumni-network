import React from "react";
import "./CSS/App.css";
import illustration from "./illustration.png";

function GridItem(props) {
  return (
    <>
      <div className="grid-item align-bottom card">
        <div className="card-content">
          <p className="card-title">{props.name}</p>
          <a className="button" href="#">
            LinkedIn
          </a>
        </div>
      </div>
    </>
  );
}

export default GridItem;

