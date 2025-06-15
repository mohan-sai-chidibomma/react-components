import React from "react";

import "./Button.css";
import PropTypes from "prop-types";

const Button = ({
  children,
  buttonType = "primary",
  size = "medium",
  ...props
}) => {
  const className = `btn btn-${buttonType} btn-${size}`;

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  buttonType: PropTypes.oneOf(["primary", "secondary", "danger"]),
  size: PropTypes.oneOf(["large", "medium", "small"]),
};

Button.defaultProps = {
  children: "Button",
  buttonType: "primary",
  size: "medium",
};

export default Button;
