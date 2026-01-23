import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { ConfigState } from "../types";
import radios from "../json/radios.json";

const initialState: ConfigState = {
	callsign: "",
	radio: {},
	sats: [],
	contact: "",
	channel: { start: "", spread: "" },
	power: "",
};

const configSlice = createSlice({
	name: "config",
	initialState,
	reducers: {
		callsignUpdated: (state, action: PayloadAction<string>) => {
			state.callsign = action.payload;
		},
		radioUpdated: (state, action: PayloadAction<string>) => {
			const foundRadio = radios.find(
				radio => radio.id === parseInt(action.payload),
			);
			state.radio = foundRadio ? foundRadio : {};
			state.power = initialState.power;
		},
		satellitesUpdated: (state, action) => {
			state.sats = action.payload;
		},
		contactUpdated: (state, action: PayloadAction<string>) => {
			state.contact = action.payload !== "" ? action.payload : "Satellites";
		},
		channelStartUpdated: (state, action: PayloadAction<string>) => {
			if (action.payload === "") {
				state.channel.start = "";
			} else {
				state.channel.start = parseInt(action.payload);
			}
		},
		channelSpreadUpdated: (state, action: PayloadAction<string>) => {
			if (action.payload === "") {
				state.channel.spread = "";
			} else {
				state.channel.spread = parseInt(action.payload);
			}
		},
		powerUpdated: (state, action) => {
			console.log(action.payload);
			state.power = action.payload;
		},
	},
});

export const {
	callsignUpdated,
	radioUpdated,
	satellitesUpdated,
	contactUpdated,
	channelStartUpdated,
	channelSpreadUpdated,
	powerUpdated,
} = configSlice.actions;

export default configSlice.reducer;
