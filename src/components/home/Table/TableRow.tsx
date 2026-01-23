import { v4 as uuid } from "uuid";
import { EmptyChannelType } from "../../../types";

type TableRowProps = {
  rowContents:EmptyChannelType
}

export default function TableRow(props:TableRowProps) {
  const contentArray = Object.values(props.rowContents);
  const rowContent = contentArray.map(data => (
    <td key={uuid()} className="table-data text-nowrap">
      {data}
    </td>
  ));
  return <tr>{rowContent}</tr>;
}
