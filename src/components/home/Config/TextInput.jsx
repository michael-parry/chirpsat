export default function TextInput(props) {
  const { label, name, placeholder, handleChange, modal } = props;
  return (
    <div className="mb-3">
      <label className="form-label">
        {label}
        {modal}
      </label>
      <input
        type="text"
        id={name}
        for={`${name}`}
        className="form-control"
        placeholder={placeholder}
        autoComplete="off"
        onBlur={handleChange}
      />
    </div>
  );
}
