import PropTypes from "prop-types";

import "./Paper.css";

function Paper({ children }) {
  return <div className="paper_container">{children}</div>;
}

Paper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Paper;
