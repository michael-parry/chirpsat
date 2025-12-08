import { useState } from "react";
import { useDispatch } from "react-redux";
import { callsignUpdated } from "../../../slices/configSlice";

const CallsignInput = () => {
  const dispatch = useDispatch();
  const handleBlur = () => {
    dispatch(callsignUpdated(callsign));
  };
  const [callsign, setCallsign] = useState("");
  return (
    <div className=" mb-3 mt-2">
      <label className="form-label" for="callsignInput">Callsign</label>
      <input 
        type="text"
        id="callsignInput"
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
