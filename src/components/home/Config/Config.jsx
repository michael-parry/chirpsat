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
      className="col col-12 col-sm-5 col-lg-2  p-0"
      id="config-container"
    >
      <form className="container mt-2 d-flex flex-column" id="form-container">
        <CallsignInput />
        <RadioSelect />
        <SatSearch />
        <TextInput
          name="channel-contact"
          label="Contact"
          handleChange={(e) => dispatch(contactUpdated(e.target.value))}
          modal={<HelpModal body={modalBody} title="Contact" />}
        />
        <Channels />
        <PowerSelect/>
      </form>
      <Export />
    </div>
  );
};
export default Config;
