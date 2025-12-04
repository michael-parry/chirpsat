import React from "react";

const Select = props => {

  const handleChange = (e) => {
    props.onOptionChange(e.target.value);
  }
    const optionsList = props.Options.map(choice => (
      <option value={choice.id} className="form-control">
        {choice.title}
      </option>
    ));
    const Option = props.SelectedOption;
    return (
      <div className="form-group">
        <select
          className="form-control"
          value={Option}
          onChange={handleChange}
        >
          {optionsList}
        </select>
      </div>
    );
  }
export default Select;