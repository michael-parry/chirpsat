import { useDispatch, useSelector } from "react-redux";
import { powerUpdated } from "../../../slices/configSlice";

const PowerSelect = (props) => {
  const dispatch = useDispatch();
  const radio = useSelector((state) => state.config.radio);
  const powerSelection = useSelector((state) => state.config.power);
  const optionsList =
    radio.power &&
    radio.power.map((power, index) => (
      <option key={index} value={power}>
        {power}
      </option>
    ));
  return (
    <div className="mb-3">
      <label className="form-label" for="powerSelect">
        Power
      </label>
      <div className="input-group">
        <select
          id="powerSelect"
          className="form-select"
          value={powerSelection}
          onChange={(e) => dispatch(powerUpdated(e.target.value))}
        >
          <option value="Choose..">Choose..</option>
          {optionsList}
        </select>
        <span className="input-group-text">Watts</span>
      </div>
    </div>
  );
};

export default PowerSelect;
