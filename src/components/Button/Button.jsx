import PropTypes from "prop-types";

import "./Button.css";

function Button({ children, fullWidth, color = "primary", ...otherProps }) {
  return (
    <button
      {...otherProps}
      style={{
        width: fullWidth ? "100%" : "auto",
      }}
      className={`button_container ${color}`}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  fullWidth: PropTypes.bool,
  color: PropTypes.oneOf(["primary", "secondary"]),
};

export default Button;
