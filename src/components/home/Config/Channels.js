import { useSelector, useDispatch } from "react-redux";
import {
  updateChannelStart,
  updateChannelSpread,
} from "../../../slices/configSlice";

import HelpModal from "./HelpModal";

// modal body prop
const body = (
  <>
    <p>
      <span className="font-weight-bold bg-secondary text-white rounded p-1">
        Start
      </span>{" "}
      determines which channel number the generated channels will begin with.
    </p>{" "}
    <p>
      <span className="font-weight-bold bg-secondary text-white rounded p-1">
        Spread
      </span>{" "}
      defines how many channels you would like to create for each satellite.
    </p>
  </>
);
const Channel = (props) => {
  const dispatch = useDispatch();
  const handleStartChange = (e) => {
    let re = /^[1-9]\d*$/;
    if (e.target.value === "" || re.exec(e.target.value)) {
      dispatch(updateChannelStart(e.target.value));
    }
  };
  const handleSpreadChange = (e) => {
    let re = /^[1-9]\d*$/;
    if (e.target.value === "" || re.exec(e.target.value)) {
      dispatch(updateChannelSpread(e.target.value));
    }
  };
  const { channel } = useSelector((state) => state.config);
  return (
    <div className="form-group">
      <label>
        Channels
        <HelpModal body={body} title="Channels" />
      </label>
      <div className="form-row">
        <div className="input-group col-12">
          <input
            type="text"
            className="form-control"
            id="options-channel-start"
            placeholder="start"
            autoComplete="off"
            value={channel.start}
            onChange={handleStartChange}
          />

          <input
            type="text"
            className="form-control"
            id="options-channel-spread"
            placeholder="spread"
            autoComplete="off"
            value={channel.spread}
            onChange={handleSpreadChange}
          ></input>
        </div>
      </div>
    </div>
  );
};

export default Channel;
