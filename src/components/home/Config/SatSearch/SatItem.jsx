const SatItem = ({ number, isActive, nickname, onClick }) => {
  const classInactive = "list-group-item list-group-item-action bg-light";
  const classActive =
    "list-group-item list-group-item-action bg-secondary text-white";
  return (
    <button
      key={number}
      value={number}
      type="button"
      className={isActive ? classActive : classInactive}
      onClick={() => onClick(number)}
      preventScroll={true}
    >
      {nickname}
    </button>
  );
};
export default SatItem;
