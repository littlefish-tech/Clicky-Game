import React from "react";
import "./style.css";


const TopScore = props => {
return <div className = "topScore"><strong>{props.children}</strong></div>
};

  export default TopScore;