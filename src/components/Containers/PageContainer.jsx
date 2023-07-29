import PropTypes from "prop-types";

import "./PageContainer.css";

function PageContainer({ children }) {
  return <div className="page_container">{children}</div>;
}

PageContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageContainer;
