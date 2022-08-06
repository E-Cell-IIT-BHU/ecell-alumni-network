import React from 'react';
import "./App.css";
import illustration from "./illustration.png";

function GridItem(props) {
    return(<>
<div className="grid-item align-bottom"><img></img><p>{props.name}</p></div>
    </>);
}

export default GridItem;
