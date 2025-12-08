import { useSelector } from "react-redux";
import { v4 as uuid } from "uuid";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";

import TableRow from "./TableRow";

import emptyChannel from "../../../json/emptyChannel";

const Table = (props) => {
  const config = useSelector((state) => state.config);
  const { start, spread } = config.channel;
  const activeSatArray = config.sats
    .filter((sat) => sat.isActive === true)
    .sort((a, b) => (a.nickname < b.nickname ? -1 : 1));
  let isSpread = spread ? spread : 1;
  if (spread && spread % 2 === 0) {
    isSpread = spread - 1;
  }
  const bodyContent = [];
  let totalCount = 0;
  activeSatArray.forEach((sat) => {
    for (let i = 0; i < isSpread; i++) {
      const spreadShift = (i - isSpread / 2 + (isSpread % 2) / 2) * 5e3;
      let newChannel = { ...emptyChannel[0] };
      newChannel["No."] = !start
        ? totalCount + 1
        : parseInt(start) + totalCount;
      newChannel["Channel Name"] =
        isSpread === 1
          ? sat.nickname
          : `${sat.nickname} (${spreadShift <= 0 ? "" : "+"}${
              i - isSpread / 2 + (isSpread % 2) / 2
            })`;
      if (isSpread === 1) {
        newChannel["Receive Frequency"] = (sat.downlink * 1e-6).toFixed(3);
        newChannel["Transmit Frequency"] = (sat.uplink * 1e-6).toFixed(3);
      } else if (parseInt(sat.downlink) > parseInt(sat.uplink)) {
        newChannel["Receive Frequency"] = (
          (parseInt(sat.downlink) + spreadShift) *
          1e-6
        ).toFixed(3);
        newChannel["Transmit Frequency"] = (
          parseInt(sat.uplink) * 1e-6
        ).toFixed(3);
      } else if (sat.downlink < sat.uplink) {
        newChannel["Receive Frequency"] = (
          parseInt(sat.downlink) * 1e-6
        ).toFixed(3);
        newChannel["Transmit Frequency"] = (
          (parseInt(sat.uplink) + parseInt(spreadShift)) *
          1e-6
        ).toFixed(3);
      }
      newChannel["Transmit Power"] = config.power;
      newChannel["CTCSS/DCS Encode"] = sat.tone.toFixed(1);
      newChannel["Contact"] = config.contact;
      newChannel["Radio ID"] = config.callsign;
      bodyContent.push(newChannel);
      totalCount++;
    }
  });

  const tableRows = config.radio.channelDetails ? (
    config.radio.channelDetails.map((column) => (
      <th key={uuid()} className="text-nowrap" value={column.class}>
        {column.title}
      </th>
    ))
  ) : (
    <th className="text-nowrap" colSpan="50" style={{ height: "49px" }}></th>
  );
  let bodyRows = bodyContent.map((contents) => (
    <TableRow key={uuid()} rowContents={contents}></TableRow>
  ));
  let divContent = [];
  if (bodyContent.length === 0 || Object.entries(config.radio) < 1) {
    divContent = (
      <div className="d-flex bg-light h-100 align-items-center justify-content-center">
        <FontAwesomeIcon
          icon={faRocket}
          size="6x"
          color="rgb(108, 117, 125)"
          className="d-none d-lg-inline m-2"
        />
        <FontAwesomeIcon
          icon={faRocket}
          size="4x"
          color="rgb(108, 117, 125)"
          className="d-block d-lg-none m-2"
        />
        <div className="d-inline-flex flex-column">
          <h1
            className="ms-2 display-4 text-muted"
            style={{ userSelect: "none" }}
          >
            Get started!
          </h1>
          <p className="lead text-muted" style={{ userSelect: "none" }}>
            Select a radio and a satellite to create your first channel.{" "}
          </p>
        </div>
      </div>
    );
  } else {
    divContent = (
      // `responsiveTableContainer` Styled in style.scss
      <div className="table-responsive" id="responsiveTableContainer">
        <table className="table table-bordered table-striped p-0 m-0" >
          <thead className="thead-dark">
            <tr>{tableRows}</tr>
          </thead>
          <tbody>{bodyRows}</tbody>
        </table>
        </div>
    );
  }
  return <div className="container bg-light h-100 p-0 col-md-9 col-sm-8">{divContent}</div>;
};

export default Table;
