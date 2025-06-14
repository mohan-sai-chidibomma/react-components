import React from "react";

const Button = ({
  children,
  onClick,
  type = "button",
  disabled = false,
  className = "",
}) => (
  <button
    type={type}
    onClick={onClick}
    disabled={disabled}
    className={`btn ${className}`}
  >
    {children}
  </button>
);

export default Button;
