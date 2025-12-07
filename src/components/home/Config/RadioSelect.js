import { useSelector, useDispatch } from "react-redux";
import { updateRadio } from "../../../slices/configSlice";

import radios from "../../../json/radios";

const RadioSelect = (props) => {
  const dispatch = useDispatch();
  const { id: radioId } = useSelector((state) => state.config.radio);
  const handleChange = (e) => {
    dispatch(updateRadio(e.target.value));
  };
  const optionsList = radios.map((radio, index) => (
    <option key={index} value={radio.id} className="form-control">
      {radio.name}
    </option>
  ));
  return (
    <div className="form-group">
      <label name="radioInput">Radio</label>
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
