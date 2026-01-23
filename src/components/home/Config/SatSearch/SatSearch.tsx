import { useState } from "react";
import { useDispatch } from "react-redux";
import { satellitesUpdated } from "../../../../slices/configSlice";
import SatItem from "./SatItem";

import staticSats from "../../../../json/sats.json";
import { SatType } from "../../../../types";

// TODO: refactor so that the store only contains an array of sats that are active. The component state can handle the full list of active
// and inactive sats, and dispatch to the store only those sats which are active so that the Table can render them.
// In essence there should be a component state array of all sats, filtered and sorted etc.
// as well as a global Redux Store array of sats that contains only those sats which are active.
// Also, explore custom hooks, and figure out exactly what should be stored in state, what doesn't need to be in state, and what should be in the Redux Store.
// Is a custom hook necessary? What about useEffect? Eventually this component will fetch the satellite list dynamically, and dispatch the active sats to the store.

const SatSearch = () => {
	const dispatch = useDispatch();
	const [value, setValue] = useState("");
	const [sats, setSats] = useState(staticSats.filter(sat => !sat.disabled));

	const handleSatSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};

	const searchAndSortSats = (query: string) => {
		return sats
			.filter(sat => {
				// Always return active sats
				if (sat.isActive) return true;
				// Additionally, return sats whose nickname includes the query
				return sat.nickname.toUpperCase().includes(query.toUpperCase());
			})
			.sort((a, b) => {
        // sort by .isActive, bubbling active sats forward
				return a.isActive !== b.isActive
					? a.isActive ? 1 : -1
          // if two sats have the same isActive boolean value, sort them alphabetically
					: a.nickname.localeCompare(b.nickname);
			});
	};
	const handleSatClick = (number: SatType["number"]) => {
		const foundSatObject = sats.find(sat => sat.number === number);
		if (!foundSatObject || foundSatObject.disabled) {
			return;
		}
		const newSatObject = {
			...foundSatObject,
			isActive: !foundSatObject.isActive,
		};
		const newSatArray = [
			...sats.filter(sat => sat.number !== number),
			newSatObject,
		].sort((a, b) => a.nickname.localeCompare(b.nickname));
		setSats(newSatArray);
		dispatch(satellitesUpdated(newSatArray.filter(sat => sat.isActive)));
	};

	let currentSatArray;
	if (sats.filter(sat => !sat.isActive).length === 0) {
		currentSatArray = (
			<div className="list-group-item list-group-item-action bg-light">
				None found..
			</div>
		);
	}
	currentSatArray = searchAndSortSats(value).map(sat => (
		<SatItem
			key={sat.number}
			number={sat.number}
			nickname={sat.nickname}
			isActive={sat.isActive}
			onClick={handleSatClick}
		></SatItem>
	));
	return (
		<div className="mt-3">
			<label className="form-label" htmlFor="satListGroup">
				Satellites
			</label>
			<input
				type="search"
				name="sat-search"
				className="form-control mb-2"
				placeholder="Search.."
				id="satSearchInput"
				value={value}
				onChange={handleSatSearch}
			/>
			<div className="list-group" id="satListGroup">
				{currentSatArray}
			</div>
		</div>
	);
};

export default SatSearch;
