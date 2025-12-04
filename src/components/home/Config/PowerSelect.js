import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatePower } from "../../../slices/configSlice";
import {v4 as uuid} from 'uuid';

const PowerSelect = (props) => {
    const dispatch = useDispatch()
    const handleUpdatePower = (e) => {
      dispatch(updatePower(e.target.value))
    }
    const radio = useSelector(state => state.config.radio)
    const powerSelection = useSelector(state => state.config.power)
    const optionsList =
      radio.power &&
      radio.power.map(power => (
        <option key={uuid} value={power}>
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
            onChange={(e) => handleUpdatePower(e)}
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
