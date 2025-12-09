import { useState } from "react";
import { useAppDispatch } from "../../../hooks";


import { callsignUpdated } from "../../../slices/configSlice";

const CallsignInput = () => {
  const dispatch = useAppDispatch();
  const handleBlur = () => {
    dispatch(callsignUpdated(callsign));
  };
  const [callsign, setCallsign] = useState("");
  return (
    <div className=" mb-3 mt-2">
      <label className="form-label" htmlFor="callsignInput">Callsign</label>
      <input 
        type="text"
        id="callsignInput"
        className="form-control"
        value={callsign}
        onChange={(e) => setCallsign(e.target.value)}
        onBlur={handleBlur}
      />
    </div>
  );
};

export default CallsignInput;
