import { useState } from "react";
import { InputGroup } from "./InputGroup";

import PropTypes from "prop-types";
import { Icon } from "../Icon";

function PasswordInput(props) {
  const [show, setShow] = useState(false);
  const { onChangeText, ...otherProps } = props;

  return (
    <InputGroup
      {...otherProps}
      Icon={<Icon name={show ? "visibility_off" : "visibility"} />}
      onIconClick={() => setShow((s) => !s)}
    >
      <input
        type={show ? "text" : "password"}
        onChange={(evento) => {
          onChangeText(evento.target.value);
        }}
        {...otherProps}
      />
    </InputGroup>
  );
}

PasswordInput.propTypes = {
  label: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  message: PropTypes.string,
  hasError: PropTypes.bool,
  isValid: PropTypes.bool,
};

export default PasswordInput;
