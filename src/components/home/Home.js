import React, { Component } from "react";
import Navbar from "../Navbar";
import Table from "./table/Table";
import Config from "./Config/Config";
import { Row } from "react-bootstrap/";

import channels from "../../json/channels.json";
import radios from "../../json/radios.json";

export default class home extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.setHeader = this.setHeader.bind(this);
    this.handleChannelChange = this.handleChannelChange.bind(this);
    this.state = {
      selectedOption: 0,
      bodyContent: channels,
      selectedRadio: radios.find(radio => parseInt(radio.id) === 1),
      channelStart: ""
    };
  }

  handleChange(option) {
    this.setState({ selectedOption: option });
    let foundRadio = radios.find(radio => radio.id === parseInt(option));
    foundRadio
      ? this.setState({ selectedRadio: foundRadio })
      : this.setState({ selectedRadio: radios[0] });
  }

  setHeader(header) {
    this.setState({ tableRow: header });
  }

  updateRadio(id) {}

  handleChannelChange(e) {
    this.setState({ channelStart: e.target.value });
  }

  render() {
    return (
      <>
        <Navbar />
        <Row className="row m-0">
          <Config
            onOptionChange={this.handleChange}
            Option={this.state.selectedOption}
            radios={radios}
            selectedRadio={this.state.selectedRadio}
            value={this.state.selectedOption}
            channelStart={this.state.channelStart}
            handleChange={this.handleChannelChange}
          />
          <Table
            columns={this.state.selectedRadio.channelDetails}
            selectedOption={this.state.selectedOption}
            bodyContent={this.state.bodyContent}
          />
        </Row>
      </>
    );
  }
}
