import React, { Component } from "react";
import Row from "./Row";

export default class Table extends Component {
  render() {
    const tableRows = this.props.columns.map(column => (
      <th value={column}>{column}</th>
    ));
    const SelectedOption = this.props.SelectedOption;
    return (
      <table className="col col-7 col-lg-10 table table-responsive-lg table-striped table-bordered p-0 ml-auto overflow-auto">
        <thead className="thead-dark">
          <tr>{tableRows}</tr>
        </thead>
        <tbody>
          <Row rowContents={this.props.rowContents} />
        </tbody>
      </table>
    );
  }
}