
import React from "react";
// import "./style.css";

const Alert = props => (
    <div className="alertMessage">
        {props.message ? (
            <p>{props.message}</p>
        ) : (
                <p className="default-msg black">Click an image to begin!</p>
            )}
    </div>
)

export default Alert;