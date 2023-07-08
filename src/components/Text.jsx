import PropTypes from "prop-types";

// const Text = () => {}

function Text(props) {
  console.log(props);
  switch (props.element) {
    case "h1":
      return <h1>{props.children}</h1>;
    case "h2":
      return <h2>{props.children}</h2>;
    case "h3":
      return <h3>{props.children}</h3>;
    case "h4":
      return <h4>{props.children}</h4>;
    case "h5":
      return <h5>{props.children}</h5>;
    case "span":
      return <span>{props.children}</span>;
    default:
      return <p>{props.children}</p>;
  }
}

Text.propTypes = {
  children: PropTypes.string,
  element: PropTypes.string,
};

export default Text;
