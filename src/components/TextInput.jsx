function TextInput(props) {
  // props.label
  // props.type
  // props.onChangeText

  const { label, type, onChangeText } = props;

  return (
    <div>
      <label>{label}</label>
      <input
        type={type}
        onChange={(evento) => {
          onChangeText(evento.target.value);
        }}
      />
    </div>
  );
}

export default TextInput;
