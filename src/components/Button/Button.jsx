import PropTypes from "prop-types";

import obj from "./Button.module.css";

console.log(obj.container);

function Button({ children, fullWidth, color = "primary", ...otherProps }) {
  return (
    <button
      {...otherProps}
      style={{
        width: fullWidth ? "100%" : "auto",
      }}
      className={`${obj.container} ${obj[color]}`}
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
