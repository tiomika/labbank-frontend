import PropTypes from "prop-types";

import styles from "./Paper.module.css";

function Paper({ children }) {
  return <div className={styles.container}>{children}</div>;
}

Paper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Paper;
