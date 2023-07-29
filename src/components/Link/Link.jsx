import PropTypes from "prop-types";

import "./Link.css";

function Link({ children, to, ...otherProps }) {
  return (
    <a className="link_container" {...otherProps} href={to}>
      {children}
    </a>
  );
}

Link.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default Link;
