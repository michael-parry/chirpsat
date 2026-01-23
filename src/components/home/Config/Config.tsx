import { useAppDispatch } from "../../../hooks";
import { contactUpdated } from "../../../slices/configSlice";

import CallsignInput from "./CallsignInput";
import Channels from "./Channels";
import Export from "./Export";
import HelpModal from "./HelpModal";
import RadioSelect from "./RadioSelect";
import SatSearch from "./SatSearch/SatSearch";
import TextInput from "./TextInput";
import ToneSelect from "./ToneSelect"
import PowerSelect from "./PowerSelect";

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
	const dispatch = useAppDispatch();

	return (
		<div
			// styled by style.css
			// `configContainer` styled in style.scss
			className="container mb-md-0 col-sm-4 col-md-3"
			id="configContainer"
		>
			<form className="form-container" autoComplete="off">
				<CallsignInput />
				<RadioSelect />
				<SatSearch />
				<TextInput
					name="channelContact"
					label="Contact"
					handleChange={e => dispatch(contactUpdated(e.target.value))}
					modal={<HelpModal body={modalBody} title="Contact" />}
				/>
				<Channels />
				<PowerSelect />
				<ToneSelect />
				<div className="d-grid mt-3">
					<Export />
				</div>
			</form>
		</div>
	);
};
export default Config;
