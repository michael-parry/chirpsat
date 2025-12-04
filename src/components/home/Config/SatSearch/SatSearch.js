import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateSatellites } from "../../../../slices/configSlice";

import { uuid } from "uuidv4";

import SatItem from "./SatItem";
import SatItemActive from "./SatItemActive";

import staticSats from "../../../../json/sats.json";
// TODO: refactor so that the store only contains an array of sats that are active. The component state can handle the full list of active
// and inactive sats, and dispatch to the store only those sats which are active so that the Table can render them.
// In essence there should be a component state array of all sats, filtered and sorted etc.
// as well as a global Redux Store array of sats that contains on those sats which are active.
// Also, explore custom hooks, and figure out exactly what should be stored in state, what doesn't need to be in state, and what should be in the Redux Store.
// Is a custom hook necessary? What about useEffect? Eventually this component will fetch the satellite list dynamically, and dispatch the active sats to the store.
const SatSearch = props => {
  const dispatch = useDispatch()
  const [value, setValue] = useState("");
  const [sats, setSats] = useState(staticSats);

  const getSatsFromSearch = (query) => {
    return sats.filter(sat =>
      sat.nickname.toUpperCase().includes(query.toUpperCase())
    );
  }
  
  const handleSatSearch = e => {
    setValue(e.target.value)
  };
  const handleSatClick = (id, e) => {
    e.preventDefault();
    
    let satObject = sats.find(
      sat => sat.number === parseInt(id)
    );
    const newSatObject = {...satObject, isActive:!satObject.isActive};
    const newSatArray = [
      ...sats.filter(sat => sat.number !== parseInt(id)),
      newSatObject
    ].sort((a, b) => (a.nickname > b.nickname ? 1 : -1));
    setSats(newSatArray);
    dispatch(updateSatellites(newSatArray.filter(sat => sat.isActive)))
  };

    const InactiveSats = getSatsFromSearch(value)
      .filter(sat => sat.isActive === false)
      .sort((a, b) => (a.nickname > b.nickname ? 1 : -1));
    let foundSatArray = InactiveSats.map(sat => (
      <SatItem
        key={uuid()}
        number={sat.number}
        nickname={sat.nickname}
        isDisabled={sat.disabled}
        handleSatClick={handleSatClick}
      ></SatItem>
    ));
    if (foundSatArray.filter(sat => !sat.isActive).length === 0) {
      foundSatArray = (
        <div className="list-group-item list-group-item-action bg-light">
          None found..
        </div>
      );
    }
    const activeSatArray = sats
      .filter(sat => sat.isActive === true)
      .map(sat => (
        <SatItemActive
          key={uuid()}
          number={sat.number}
          nickname={sat.nickname}
          isDisabled={sat.disabled}
          handleSatClick={handleSatClick}
        ></SatItemActive>
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
            onChange={(e) => handleSatSearch(e)}
          />
          {foundSatArray}
          {activeSatArray}
        </div>
      </div>
    );
  }

export default SatSearch;
