export default function TextInput(props) {
  const { label, name, placeholder, handleChange, modal } = props;
  return (
    <div className="form-group">
      <label>
        {label}
        {modal}
      </label>
      <input
        type="text"
        name={name}
        className="form-control"
        placeholder={placeholder}
        autoComplete="off"
        onBlur={handleChange}
      />
    </div>
  );
}
