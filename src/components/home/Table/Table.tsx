import { useAppSelector } from "../../../hooks";
import { v4 as uuid } from "uuid";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";

import TableRow from "./TableRow";

import { EmptyChannelType } from "../../../types"
import emptyChannelJson from "../../../json/emptyChannel.json";

const emptyChannel: EmptyChannelType[] = emptyChannelJson
const Table = () => {

	const config = useAppSelector(state => state.config);
	const { start, spread } = config.channel;
  // Sort the sats from state alphabetically and store in activeSatArray
	const activeSatArray = config.sats
		.sort((a, b) => (a.nickname.localeCompare(b.nickname)));

	let spreadNumber = spread ? spread : 1;
	if (spread && spread % 2 === 0) {
		spreadNumber = spread - 1;
	}
	const bodyContent: EmptyChannelType[] = [];
	let totalCount = 0;
	activeSatArray.forEach(sat => {
		for (let i = 0; i < spreadNumber; i++) {
			const spreadShift = (i - spreadNumber / 2 + (spreadNumber % 2) / 2) * 5e3;
			const newChannel = { ...emptyChannel[0] };
			newChannel["No."] = !start ? totalCount + 1 : start + totalCount;
			newChannel["Channel Name"] =
				spreadNumber === 1
					? sat.nickname
					: `${sat.nickname} (${spreadShift <= 0 ? "" : "+"}${
							i - spreadNumber / 2 + (spreadNumber % 2) / 2
						})`;
			if (spreadNumber === 1) {
				newChannel["Receive Frequency"] = (sat.downlink * 1e-6).toFixed(3);
				newChannel["Transmit Frequency"] = (sat.uplink * 1e-6).toFixed(3);
			} else if (sat.downlink > sat.uplink) {
				newChannel["Receive Frequency"] = (
					(sat.downlink + spreadShift) *
					1e-6
				).toFixed(3);
				newChannel["Transmit Frequency"] = (sat.uplink * 1e-6).toFixed(3);
			} else if (sat.downlink < sat.uplink) {
				newChannel["Receive Frequency"] = (sat.downlink * 1e-6).toFixed(3);
				newChannel["Transmit Frequency"] = (
					(sat.uplink + spreadShift) *
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

	let divContent: React.ReactNode;
	if (bodyContent.length === 0 || Object.entries(config.radio).length < 1) {
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

    const tableRows = config.radio.channelDetails ? (
		config.radio.channelDetails.map(column => (
			<th key={uuid()} className="text-nowrap">
				{column.title}
			</th>
		))
	) : (
		<th className="text-nowrap" colSpan={50} style={{ height: "49px" }}></th>
	);
	const bodyRows = bodyContent.map(contents => (
		<TableRow key={uuid()} rowContents={contents}></TableRow>
	));

		divContent = (
			// `responsiveTableContainer` Styled in style.scss
			<div className="table-responsive" id="responsiveTableContainer">
				<table className="table table-bordered table-striped p-0 m-0">
					<thead className="thead-dark">
						<tr>{tableRows}</tr>
					</thead>
					<tbody>{bodyRows}</tbody>
				</table>
			</div>
		);
	}
	return (
		<div className="container bg-light h-100 p-0 col-md-9 col-sm-8">
			{divContent}
		</div>
	);
};

export default Table;
