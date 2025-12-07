import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateCallsign } from "../../../slices/configSlice";

const CallsignInput = () => {
  const dispatch = useDispatch();
  const handleBlur = () => {
    dispatch(updateCallsign(callsign));
  };
  const [callsign, setCallsign] = useState("");
  return (
    <div className="form-group">
      <label>Callsign</label>
      <input
        type="text"
        name="callsign"
        className="form-control"
        autoComplete="off"
        value={callsign}
        onChange={(e) => setCallsign(e.target.value)}
        onBlur={handleBlur}
      />
    </div>
  );
};

export default CallsignInput;
