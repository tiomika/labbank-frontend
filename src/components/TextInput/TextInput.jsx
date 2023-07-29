import "./TextInput.css";

import PropTypes from "prop-types";

function TextInput(props) {
  // props.label
  // props.type
  // props.onChangeText

  const {
    label,
    type,
    onChangeText,
    message,
    hasError,
    isValid,
    ...otherProps
  } = props;

  const errorClass = hasError ? "error" : "";
  const validClass = isValid ? "success" : "";

  if (hasError && isValid) {
    throw new Error("Um TextInput não pode ter erro e sucesso ao mesmo tempo");
  }

  return (
    <div className={`input_group ${errorClass} ${validClass}`}>
      <label className="input_label">{label}</label>
      <input
        className="input_control"
        type={type}
        onChange={(evento) => {
          onChangeText(evento.target.value);
        }}
        {...otherProps}
      />
      <span>{message}</span>
    </div>
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
