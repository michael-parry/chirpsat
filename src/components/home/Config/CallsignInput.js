import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateCallsign } from "../../../slices/configSlice";

const CallsignInput = () => {
  const dispatch = useDispatch();
  const handleBlur = (newCallsign) => {
    dispatch(updateCallsign(newCallsign));
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
        onBlur={(e) => handleBlur(e.target.value)}
      />
    </div>
  );
};

export default CallsignInput;
