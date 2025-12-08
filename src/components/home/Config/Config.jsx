import { useDispatch } from "react-redux";
import { contactUpdated } from "../../../slices/configSlice";

import TextInput from "./TextInput";
import CallsignInput from "./CallsignInput";
import RadioSelect from "./RadioSelect";
import SatSearch from "./SatSearch/SatSearch";
import Channels from "./Channels";
import PowerSelect from "./PowerSelect";
import Export from "./Export";
import HelpModal from "./HelpModal";

const modalBody = //modal body for contact input
  (
    <>
      <p>
        <span className="font-weight-bold bg-secondary text-white rounded p-1">
          Contact
        </span>{" "}
        sets the Zone for the channels.
      </p>
    </>
  );

const Config = () => {
  const dispatch = useDispatch();

  return (
    <div
      // styled by style.css
      // `configContainer` styled in style.scss
      className="container mb-md-0 col-sm-4 col-md-3" id="configContainer"
    >
      <form className="form-container" autocomplete="off">
        <CallsignInput />
        <RadioSelect />
        <SatSearch />
        <TextInput
          name="channelContact"
          label="Contact"
          handleChange={(e) => dispatch(contactUpdated(e.target.value))}
          modal={<HelpModal body={modalBody} title="Contact" />}
        />
        <Channels />
        <PowerSelect />
        <div className="d-grid">
        <Export />
      </div>
      </form>
      
    </div>
  );
};
export default Config;
