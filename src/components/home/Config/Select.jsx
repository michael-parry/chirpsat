const Select = props => {

  const handleChange = (e) => {
    props.onOptionChange(e.target.value);
  }
    const optionsList = props.Options.map(choice => (
      <option key={choice.id} value={choice.id} className="form-control">
        {choice.title}
      </option>
    ));
    const Option = props.SelectedOption;
    return (
      <>
        <select
          className="form-control"
          value={Option}
          onChange={handleChange}
        >
          {optionsList}
        </select>
      </>
    );
  }
export default Select;