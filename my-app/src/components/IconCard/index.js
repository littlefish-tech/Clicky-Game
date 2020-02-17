import React from "react";
import "./style.css";

function iconCard(props) {
  return (
    <div className="card">
        <img alt={props.name} src={props.image} id={props.id} onClick={() => props.clickIconImage(props.image)} className="clickIconImage"/>
    </div>
  );
}

export default iconCard;