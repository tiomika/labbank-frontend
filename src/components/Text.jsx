import PropTypes from "prop-types";

import "./Text.css";

// const Text = () => {}

function Text(props) {
  console.log(props);
  switch (props.element) {
    case "h1":
      return <h1 className="text_container heading1">{props.children}</h1>;
    case "h2":
      return <h2 className="text_container heading2">{props.children}</h2>;
    case "h3":
      return <h3 className="text_container heading3">{props.children}</h3>;
    case "h4":
      return <h4 className="text_container heading4">{props.children}</h4>;
    case "h5":
      return <h5 className="text_container heading5">{props.children}</h5>;
    case "small":
    case "smaller":
    case "caption":
      return <span className="text_container">{props.children}</span>;
    default:
      return <p className="text_container paragraph">{props.children}</p>;
  }
}

Text.propTypes = {
  children: PropTypes.string,
  element: PropTypes.string,
};

export default Text;
