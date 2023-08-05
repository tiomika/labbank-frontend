import ReactInputMask from "react-input-mask";

import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
import { InputGroup } from "./InputGroup";

function AccountInput(props) {
  const { type, onChangeText, ...otherProps } = props;

  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <InputGroup {...otherProps}>
      <ReactInputMask
        ref={inputRef}
        type={type}
        onChange={(evento) => {
          onChangeText(evento.target.value);
        }}
        onFocus={(evento) => {
          evento.currentTarget.select();
        }}
        onBlur={(evento) => {
          const value = evento.target.value;
          if (value.length === 0) return;
          onChangeText(value.replaceAll(" ", "").padStart(9, "0"));
        }}
        {...otherProps}
        maskPlaceholder={" "}
        placeholder="0000000-0"
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
