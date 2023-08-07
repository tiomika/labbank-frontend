import { InputGroup } from "./InputGroup";

import PropTypes from "prop-types";

function TextInput(props) {
  const { type, onChangeText, ...otherProps } = props;

  return (
    <InputGroup {...otherProps}>
      <input
        type={type}
        onChange={(evento) => {
          onChangeText(evento.target.value);
        }}
        {...otherProps}
      />
    </InputGroup>
  );
}

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  message: PropTypes.string,
  hasError: PropTypes.bool,
  isValid: PropTypes.bool,
};

export default TextInput;
