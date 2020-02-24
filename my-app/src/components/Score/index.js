import React from "react";
import "./style.css";

const Score = props => {
  return <div className="score"><strong>{props.children}</strong></div>;
}

export default Score;
