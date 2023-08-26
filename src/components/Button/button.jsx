import React from "react";
import "./button.css";

function Button(props) {
  const { children } = props;
  return <div className="buttonContainer">{children}</div>;
}

export default Button;
