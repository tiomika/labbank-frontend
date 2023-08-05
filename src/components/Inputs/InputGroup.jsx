import PropTypes from "prop-types";
import "./Inputs.css";

export const InputGroup = (props) => {
  const {
    label,
    message,
    hasError,
    isValid,
    id,
    name,
    children,
    Icon,
    onIconClick,
  } = props;
  const errorClass = hasError ? "error" : "";
  const validClass = isValid ? "success" : "";

  if (hasError && isValid) {
    throw new Error(
      "Um input não pode ter estado de erro e sucesso ao mesmo tempo"
    );
  }

  if (!id && !name) {
    console.error("InputGroup: Um input deve ter id ou name");
  }

  return (
    <div className={`input_group ${errorClass} ${validClass}`}>
      <div></div>

      <label className="input_label" htmlFor={id || name}>
        {label}
      </label>
      {children}
      {Icon && (
        <button onClick={onIconClick} className="icon-container">
          {Icon}
        </button>
      )}
      <span>{message}</span>
    </div>
  );
};

InputGroup.propTypes = {
  Icon: PropTypes.node,
  onIconClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.string,
  name: PropTypes.string,
  message: PropTypes.string,
  hasError: PropTypes.bool,
  isValid: PropTypes.bool,
};
