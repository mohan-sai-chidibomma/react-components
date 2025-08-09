import React from "react";
import styles from "./Button.module.css";
import PropTypes from "prop-types";

const Button = ({
  children,
  buttonType = "primary",
  size = "medium",
  ...props
}) => {
  const className = `
    ${styles.btn} 
    ${styles[`btn-${buttonType}`]} 
    ${styles[`btn-${size}`]} 
    ${props.disabled ? styles["btn-disabled"] : ""}
  `.trim();

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
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  children: "Button",
  buttonType: "primary",
  size: "medium",
  disabled: false,
};

export default Button;
