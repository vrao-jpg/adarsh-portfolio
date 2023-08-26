import React from "react";
import "./button.css";

function Button(props) {
  const { children, onClick } = props;
  return (
    <div className="buttonContainer" onClick={onClick}>
      {children}
    </div>
  );
}

export default Button;
