import PropTypes from "prop-types";
import { Link as RRDLink } from "react-router-dom";

import "./Link.css";

function Link(props) {
  const { children, to, ...otherProps } = props;

  return (
    <RRDLink className="link_container" {...otherProps} to={to}>
      {children}
    </RRDLink>
  );
}

Link.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default Link;
