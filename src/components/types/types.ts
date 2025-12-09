export type SatType = {
    satellite: string,
    nickname: string,
    number: number,
    uplink: number,
    downlink: number,
    tone: number,
    mode:string,
    isActive:boolean
};

export type ConfigType = {
  callsign: string;
  radio: RadioType;
  sats: SatType[];
  contact: string;
  channel: ChannelType;
  power: string | string[];
  bandwidth?: number[];
};

export type RadioType = {
    name: string;
    name_concat: string;
    id: number;
    brand: string;
    model: string;
    channelDetails: ChannelDetailsType[];
};

export type ChannelType = {
  start: number;
  spread: number;
};

export type ChannelDetailsType = {
    title: string;
  class: string;
};
