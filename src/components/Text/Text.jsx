import PropTypes from "prop-types";

import "./Text.css";

// const Text = () => {}

function Text(props) {
  const {
    element = "paragraph",
    className = "",
    weight = "regular",
    ...otherProps
  } = props;

  const Element = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    small: "small",
    smaller: "small",
    caption: "span",
    paragraph: "p",
    span: "span",
    strong: "strong",
  }[element];

  const elementStyle = {
    h1: "heading1",
    h2: "heading2",
    h3: "heading3",
    h4: "heading4",
    h5: "heading5",
    small: "small",
    smaller: "smaller",
    caption: "caption",
    paragraph: "paragraph",
    span: "paragraph",
    strong: "paragraph",
  }[element];

  const elementWeight = {
    light: "light",
    regular: "regular",
    medium: "medium",
    bold: "bold",
  }[weight];

  return (
    <Element
      className={`text_container ${elementStyle} ${elementWeight} ${className}`}
      {...otherProps}
    >
      {props.children}
    </Element>
  );
}

Text.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
  weight: PropTypes.oneOf(["light", "regular", "medium", "bold"]),
  element: PropTypes.oneOf([
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "small",
    "smaller",
    "caption",
    "paragraph",
  ]),
};

export default Text;
