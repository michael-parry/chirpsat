import { v4 as uuid } from "uuid";

export default function Row(props) {
  const contentArray = Object.values(props.rowContents);
  const rowContent = contentArray.map(data => (
    <td key={uuid()} className="table-data text-nowrap">
      {data}
    </td>
  ));
  return <tr>{rowContent}</tr>;
}
