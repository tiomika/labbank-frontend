import PropTypes from "prop-types";

const Icon = ({ name = "close" }) => {
  return <i className="material-icons">{name}</i>;
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
