import React from "react";
import PropTypes from "prop-types";
import "./style.css";

const Button = ({ children, onClick }) => {
  return (
    <button className="Button" onClick={onClick}>
      {children}
    </button>
  );
};

Button.protoTypes = {
  children: PropTypes.any,
  onClick: () => PropTypes.any,
};
export default Button;
