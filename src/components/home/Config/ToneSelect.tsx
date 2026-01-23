import Select from "./Select"
import { useState } from "react";
// import { useAppSelector } from "../../../hooks";
// import { useAppDispatch } from "../../../hooks";

const tones: number[] = [
  67.0, 71.9, 74.4, 77.0, 79.7, 82.5, 85.4, 88.5, 91.5, 94.8,
  97.4, 100.0, 103.5, 107.2, 110.9, 114.8, 118.8, 123.0, 127.3,
  131.8, 136.5, 141.3, 146.2, 151.4, 156.7, 162.2, 167.9, 173.8,
  179.9, 186.2, 192.8, 203.5, 210.7, 218.1, 225.7, 233.6, 241.8,
  250.3
];

const Tone = () => {
  // const dispatch = useAppDispatch()
const selectId = 'toneSelect'
type ToneType = {tone:string | undefined}
const span = <span className="input-group-text">Hz</span>
const [toneSelect, setToneSelect] = useState({tone:undefined} as ToneType)
const toneOptions = tones.map(tone => ({id:tone, title:tone.toFixed(1)}))
const handleChange = (e:React.ChangeEvent<HTMLSelectElement>) => {
  setToneSelect({tone:e.target.value})
}
    return (
      <div className="mt-3">
        <label htmlFor={selectId} className="form-label">Tone</label>
      <Select 
      id = {selectId}
      options={toneOptions}
      onOptionChange={handleChange}
      selectedOption={`${toneSelect.tone}`}
      span={span}
      />
      </div>
    );
  }
export default Tone;