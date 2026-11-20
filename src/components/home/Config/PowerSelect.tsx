import { useAppDispatch, useAppSelector } from "../../../hooks";
import { powerUpdated } from "../../../slices/configSlice";

const PowerSelect = () => {
  const dispatch = useAppDispatch();
  const radio = useAppSelector((state) => state.config.radio);
  const powerSelection = useAppSelector((state) => state.config.power);

  const powerOptions = radio?.power ?? [];

  const optionsList = powerOptions.map((power) => (
    <option key={power} value={power}>
      {power}
    </option>
  ));
  return (
    <div className="mt-3">
      <label className="form-label" htmlFor="powerSelect">
        Power
      </label>
      <div className="input-group">
        <select
          id="powerSelect"
          className="form-select"
          value={powerSelection ? powerSelection : ""}
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
