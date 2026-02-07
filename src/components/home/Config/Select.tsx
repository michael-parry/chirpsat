import { ReactElement } from "react"

type SelectProps = {
  options: {
    id: number,
    title: string
  }[],
  id: string,
  selectedOption: string | ""
  span?: ReactElement
  onOptionChange: (arg0: React.ChangeEvent<HTMLSelectElement>) => void,
}

const Select = ({ options, id, selectedOption, span, onOptionChange }: SelectProps) => {
  const unsetOption = <option key={0} value={"Choose.."} className="form-control">
    Choose..
  </option>
  const optionsList = options.map(choice => (
    <option key={choice.id} value={choice.id} className="form-control">
      {choice.title}
    </option>
  ));
  optionsList.unshift(unsetOption)
  return (

    <div className="input-group">
      <select
        id={id}
        className="form-control"
        value={selectedOption ? selectedOption : "Choose.."}
        onChange={onOptionChange}
      >
        {optionsList}
      </select>
      {span}
    </div>
  );
}
export default Select;