import { createSlice } from "@reduxjs/toolkit";
import radios from "../json/radios";

const initialState = {
  callsign: "",
  radio: {},
  sats: [],
  contact: "Satellites",
  channel: { start: "", spread: "" },
  power: "Choose.."
};

const configSlice = createSlice({
  name: "config",
  initialState,
  reducers: {
    callsignUpdated: (state, action) => {
      console.log(state);
      state.callsign = action.payload;
    },
    radioUpdated: (state, action) => {
      const foundRadio = radios.find(radio => radio.id === parseInt(action.payload));
      state.radio = foundRadio ? foundRadio : {};
      state.power = initialState.power;
    },
    satellitesUpdated: (state, action) => {
      state.sats = action.payload;
    },
    contactUpdated: (state, action) => {
      state.contact = action.payload !== "" ? action.payload : "Satellites";
    },
    channelStartUpdated: (state, action) => {
      state.channel.start = action.payload;
    },
    channelSpreadUpdated: (state, action) => {
      state.channel.spread = action.payload;
    },
    powerUpdated: (state, action) => {
      console.log(action.payload);
      state.power = action.payload;
    }
  }
});

export const {
callsignUpdated,
radioUpdated,
satellitesUpdated,
contactUpdated,
channelStartUpdated,
channelSpreadUpdated,
powerUpdated
} = configSlice.actions;

export default configSlice.reducer;
