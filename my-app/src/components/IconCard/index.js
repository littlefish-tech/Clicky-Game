import React from "react";
import "./style.css";


const IconCard = (props)=> {
  return (
    <div className="card">
        <img alt={props.name} src={props.image} id={props.id} onClick={() => props.handleClick(props.id)} className="clickIconImage"/>
    </div>
  );
}

export default IconCard;
