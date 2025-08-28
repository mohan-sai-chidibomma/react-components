import React from "react";
import styles from "./Button.module.css";
import PropTypes from "prop-types";

const Button = ({
  children,
  buttonType = "primary",
  size = "medium",
  className = "",
  ...props
}) => {
  const classes = ` ${className}
    ${styles.btn} 
    ${styles[`btn-${buttonType}`]} 
    ${styles[`btn-${size}`]} 
    ${props.disabled ? styles["btn-disabled"] : ""}
  `.trim();

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  buttonType: PropTypes.oneOf(["primary", "secondary", "danger"]),
  size: PropTypes.oneOf(["large", "medium", "small"]),
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

Button.defaultProps = {
  children: "Button",
  buttonType: "primary",
  size: "medium",
  disabled: false,
  className: "",
};

export default Button;
