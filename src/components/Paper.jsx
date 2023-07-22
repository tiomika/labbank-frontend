import PropTypes from "prop-types";

import "paper_container.css";

function Paper({ children }) {
  return <div>{children}</div>;
}

Paper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Paper;
