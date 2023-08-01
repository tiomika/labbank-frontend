import ReactInputMask from "react-input-mask";

import PropTypes from "prop-types";
import { InputGroup } from "./InputGroup";

function AccountInput(props) {
  const { type, onChangeText, ...otherProps } = props;

  return (
    <InputGroup {...otherProps}>
      <ReactInputMask
        type={type}
        onChange={(evento) => {
          onChangeText(evento.target.value);
        }}
        {...otherProps}
        maskPlaceholder={"0"}
        alwaysShowMask
        mask={"9999999-9"}
      />
    </InputGroup>
  );
}

AccountInput.propTypes = {
  type: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  message: PropTypes.string,
  label: PropTypes.string.isRequired,
  hasError: PropTypes.bool,
  isValid: PropTypes.bool,
};

export default AccountInput;
