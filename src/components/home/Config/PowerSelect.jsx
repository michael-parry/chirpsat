import { useDispatch, useSelector } from "react-redux";
import { powerUpdated } from "../../../slices/configSlice";

const PowerSelect = (props) => {
    const dispatch = useDispatch()
    const radio = useSelector(state => state.config.radio)
    const powerSelection = useSelector(state => state.config.power)
    const optionsList =
      radio.power &&
      radio.power.map((power, index) => (
        <option key={index} value={power}>
          {power}
        </option>
      ));
    return (
      <div className="form-group">
        <label>Power</label>
        <div className="input-group">
          <select
            name="power-select"
            id="power-select"
            className="form-control"
            value={powerSelection}
            onChange={(e) => dispatch(powerUpdated(e.target.value))}
          >
            <option value="Choose..">Choose..</option>
            {optionsList}
          </select>
          <div className="input-group-append">
            <span className="input-group-text">Watts</span>
          </div>
        </div>
      </div>
    );
}

export default PowerSelect;
