export type SatType = {
	satellite: string;
	nickname: string;
	number: number;
	uplink: number;
	downlink: number;
	tone: number;
	mode: string;
	isActive: boolean;
};

export type ConfigState = {
	callsign: string;
	radio: RadioType | object;
	sats: SatType[];
	contact: string;
	channel: ChannelType;
	power: PowerType;
	bandwidth?: number[];
};

export type RadioType = {
	name: string;
	name_concat: string;
	id: number;
	brand: string;
	model: string;
	power: PowerType
	channelDetails: ChannelDetailsType[];
};

export type ChannelType = {
	start: number | ""
	spread: number | ""
};

export type ChannelDetailsType = {
	title: string;
	class: string;
};

export type PowerType = string[] | undefined
export type FrequencyType = BigInt64Array;


export type EmptyChannelType = {
  "No.": number;
  "Channel Name": string;
  "Receive Frequency": string;
  "Transmit Frequency": string;
  "Channel Type": string;
  "Transmit Power": PowerType;
  "Band Width": string;
  "CTCSS/DCS Decode": string;
  "CTCSS/DCS Encode": string;
  "Contact": string;
  "Contact Call Type": string;
  "Radio ID": string;
  "Busy Lock/TX Permit": string;
  "Squelch Mode": string;
  "Optional Signal": string;
  "DTMF ID": number;
  "2Tone ID": number;
  "5Tone ID": number;
  "PTT ID": string;
  "Color Code": number;
  "Slot": number;
  "Scan List": string;
  "Receive Group List": string;
  "TX Prohibit": string;
  "Reverse": string;
  "Simplex TDMA": string;
  "TDMA Adaptive": string;
  "AES Digital Encryption": string;
  "Digital Encryption": string;
  "Call Confirmation": string;
  "Talk Around": string;
  "Work Alone": string;
  "Custom CTCSS": number;
  "2TONE Decode": number;
  "Ranging": string;
  "Through Mode": string;
  "Digi APRS RX": string;
  "Analog APRS PTT Mode": string;
  "Digital APRS PTT Mode": string;
  "APRS Report Type": string;
  "Digital APRS Report Channel": number;
  "Correct Frequency[Hz]": number;
  "SMS Confirmation": string;
  "Exclude channel from roaming": string;
}