import { createSlice } from "@reduxjs/toolkit";
import sats from "../json/sats";
import radios from "../json/radios";

const initialState = {
  callsign: "",
  radio: {},
  sats: sats,
  contact: "Satellites",
  channel: { start: "", spread: "" },
  power: "Choose.."
};

const configSlice = createSlice({
  name: "config",
  initialState,
  reducers: {
    updateCallsign: (state, action) => {
      console.log(state);
      state.callsign = action.payload;
    },
    updateRadio: (state, action) => {
      const foundRadio = radios.find(radio => radio.id === parseInt(action.payload));
      state.radio = foundRadio ? foundRadio : {};
      state.power = initialState.power;
    },
    updateSatellites: (state, action) => {
      state.sats = action.payload;
    },
    updateContact: (state, action) => {
      state.contact = action.payload !== "" ? action.payload : "Satellites";
    },
    updateChannelStart: (state, action) => {
      state.channel.start = action.payload;
    },
    updateChannelSpread: (state, action) => {
      state.channel.spread = action.payload;
    },
    updatePower: (state, action) => {
      console.log(action.payload);
      state.power = action.payload;
    }
  }
});

export const {
  updateCallsign,
  updateRadio,
  updateSatellites,
  updateContact,
  updateChannelStart,
  updateChannelSpread,
  updatePower
} = configSlice.actions;

export default configSlice.reducer;
