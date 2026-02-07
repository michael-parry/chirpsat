import { useAppDispatch, useAppSelector } from "../../../hooks";
import { powerUpdated } from "../../../slices/configSlice";

const PowerSelect = () => {
  const dispatch = useAppDispatch();
  const radio = useAppSelector((state) => state.config.radio);
  const powerSelection = useAppSelector((state) => state.config.power);
  const optionsList =
  // TODO: Refactor so that radio.power has more clarity and type checking isn't necessary. Maybe a null default/ null short circuit?
    radio.power &&
    radio.power.map((power:string, index:number) => (
      <option key={index} value={power}>
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
