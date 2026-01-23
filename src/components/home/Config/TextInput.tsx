type TextInputProps = {
  label: string,
  name: string,
  placeholder?: string,
  handleChange: (e:React.ChangeEvent<HTMLInputElement>) => void,
  modal: React.ReactNode
}

export default function TextInput(props: TextInputProps) {
  const { label, name, placeholder, handleChange, modal } = props;
  return (
    <div className="mt-3">
      <label className="form-label"
        htmlFor={`${name}`}
      >
        {label}
        {modal}
      </label>
      <input
        type="text"
        id={name}
        className="form-control"
        placeholder={placeholder}
        onBlur={handleChange}
      />
    </div>
  );
}
