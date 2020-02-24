import React from "react";
import "./style.css";

function Title(props) {
  return <div className="title"><strong>{props.children}</strong></div>;
}

export default Title;
