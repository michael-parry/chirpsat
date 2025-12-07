const SatItem = ({ number, isActive, isDisabled, nickname, onClick }) => {
  const classInactive = "list-group-item list-group-item-action bg-light";
  const classActive =
    "list-group-item list-group-item-action bg-secondary text-white";
  return (
    <button
      key={number}
      value={number}
      type={"button"}
      className={isDisabled ? "d-none" : isActive ? classActive : classInactive}
      disabled={isDisabled}
      onClick={() => onClick(number)}
      preventScroll={true}
    >
      {nickname}
    </button>
  );
};
export default SatItem;
