const classInactive = "list-group-item list-group-item-action bg-light";

const SatItem = props => {
    return (
      <button
        key={props.number}
        value={props.number}
        className={props.isDisabled ? "d-none" : classInactive}
        disabled={props.isDisabled}
        onClick={(e) => props.handleSatClick(props.number, e)}
      >
        {props.nickname}
      </button>
    );
  }
export default SatItem