import { useAppDispatch, useAppSelector } from "../../../hooks";
import {
  channelStartUpdated,
  channelSpreadUpdated,
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
// Start and Spread controlled input regex
const re = /^[1-9]\d*$/;

const Channel = () => {
  const dispatch = useAppDispatch()


  type changeType = {
    type: "spread" | "start";
    e: React.ChangeEvent<HTMLInputElement>;
  };

  const handleChange = ({ type, e }: changeType) => {
    if (!re.exec(e.target.value) || e.target.value == "") return
    type === "spread"
      ? dispatch(channelSpreadUpdated(parseInt(e.target.value)))
      : dispatch(channelStartUpdated(parseInt(e.target.value)));
  };
  const { channel } = useAppSelector((state) => state.config);
  return (
    <>
      <label className="form-label" htmlFor="channelsStartSpread">
        Channels
        <HelpModal body={body} title="Channels" />
      </label>
      <div className="input-group mb-3" id="channelsStartSpread">
        <input
          type="text"
          className="form-control"
          aria-label="Channel start"
          placeholder="start"
          value={channel.start}
          onChange={(e) => handleChange({ type: "start", e })}
        />

        <input
          type="text"
          className="form-control"
          aria-label="Channel spread"
          placeholder="spread"
          value={channel.spread}
          onChange={(e) => handleChange({ type: "spread", e })}
        ></input>
      </div>
    </>
  );
};

export default Channel;
