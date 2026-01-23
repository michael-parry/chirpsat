import { useAppSelector, useAppDispatch } from "../../../hooks";
import { radioUpdated } from "../../../slices/configSlice";

import radios from "../../../json/radios.json";

const RadioSelect = () => {
  const dispatch = useAppDispatch();
  const { id: radioId } = useAppSelector((state) => state.config.radio);
  const handleChange = (e:React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(radioUpdated(e.target.value));
  };
  const optionsList = radios.map((radio, index) => (
    <option key={index} value={radio.id} className="form-control">
      {radio.name}
    </option>
  ));
  return (
    <div className="mt-3">
      <label className="form-label" htmlFor="radioInput">Radio</label>
      <select
        className="form-control"
        id="radioInput"
        value={radioId}
        onChange={handleChange}
      >
        <option value="">Choose..</option>
        {optionsList}
      </select>
    </div>
  );
};

export default RadioSelect;