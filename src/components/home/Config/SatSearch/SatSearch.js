import { useState } from "react";
import { useDispatch } from "react-redux";
import { satellitesUpdated } from "../../../../slices/configSlice";
import SatItem from "./SatItem";

import staticSats from "../../../../json/sats.json";
// TODO: refactor so that the store only contains an array of sats that are active. The component state can handle the full list of active
// and inactive sats, and dispatch to the store only those sats which are active so that the Table can render them.
// In essence there should be a component state array of all sats, filtered and sorted etc.
// as well as a global Redux Store array of sats that contains on those sats which are active.
// Also, explore custom hooks, and figure out exactly what should be stored in state, what doesn't need to be in state, and what should be in the Redux Store.
// Is a custom hook necessary? What about useEffect? Eventually this component will fetch the satellite list dynamically, and dispatch the active sats to the store.
const SatSearch = (props) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const [sats, setSats] = useState(staticSats);

  const handleSatSearch = (e) => {
    setValue(e.target.value);
  };

  const searchAndSortSats = (query) => {
    return sats
      .filter((sat) => {
        if (sat.isActive) return true;

        return sat.nickname.toUpperCase().includes(query.toUpperCase());
      })
      .sort((a, b) => {
        const aSat = a.isActive;
        const bSat = b.isActive;

        if (aSat !== bSat) {
          return aSat ? 1 : -1;
        }

        return a.nickname > b.nickname;
      });
  };

  const handleSatClick = (number) => {
    let foundSatObject = sats.find((sat) => sat.number === parseInt(number));
    const newSatObject = {
      ...foundSatObject,
      isActive: !foundSatObject.isActive,
    };
    const newSatArray = [
      ...sats.filter((sat) => sat.number !== parseInt(number)),
      newSatObject,
    ].sort((a, b) => (a.nickname > b.nickname ? 1 : -1));
    setSats(newSatArray);
    dispatch(satellitesUpdated(newSatArray.filter((sat) => sat.isActive)));
  };

  let currentSatArray;
  if (sats.filter((sat) => !sat.isActive).length === 0) {
    currentSatArray = (
    <div className="list-group-item list-group-item-action bg-light">
        None found..
      </div>
    );
  }
  currentSatArray = searchAndSortSats(value).map((sat) => (
    <SatItem
      key={sat.number}
      number={sat.number}
      nickname={sat.nickname}
      isActive={sat.isActive}
      isDisabled={sat.disabled}
      onClick={handleSatClick}
    ></SatItem>
  ));
  return (
    <div className="form-group">
      <label>Satellites</label>
      <div className="list-group" id="satListGroup">
        <input
          type="search"
          name="sat-search"
          className="list-group-item"
          placeholder="Search.."
          value={value}
          onChange={handleSatSearch}
        />
        {currentSatArray}
      </div>
    </div>
  );
};

export default SatSearch;