import React from "react";
import "./App.css";
import illustration from "./illustration.png";

const GridItem = ({ title, poster, knowMoreLink }) => {
  return (
    <>
      <div className="grid-item align-bottom card">
       <a href={knowMoreLink} target="_blank"> <img src={poster} /></a>
        <div className="card-content">
          <p className="card-title">{title}</p>
          <a className="button" href={knowMoreLink} target="_blank">
            LinkedIn
          </a>
        </div>
      </div>
    </>
  );
};

export default GridItem;
