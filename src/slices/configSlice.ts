import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { ConfigState } from "../types"
import radios from "../json/radios.json";

const initialState: ConfigState = {
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
    callsignUpdated: (state, action:PayloadAction<string>) => {
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
    contactUpdated: (state, action:PayloadAction<string>) => {
      state.contact = action.payload !== "" ? action.payload : "Satellites";
    },
    channelStartUpdated: (state, action:PayloadAction<number | "">) => {
      state.channel.start = action.payload;
    },
    channelSpreadUpdated: (state, action:PayloadAction<number | "">) => {
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
