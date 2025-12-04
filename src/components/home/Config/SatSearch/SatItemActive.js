const classActive = "list-group-item list-group-item-action bg-secondary text-white";

const SatItem = props => {
    return (
      <button
        key={props.number}
        value={props.number}
        className={classActive}
        disabled={props.isDisabled}
        onClick={(e) => props.handleSatClick(props.number, e)}
      >
        {props.nickname}
      </button>
    );
  }
export default SatItem