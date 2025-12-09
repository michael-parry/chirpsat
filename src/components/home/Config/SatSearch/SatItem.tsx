type SatItemProps = {
  number: number;
  isActive: boolean;
  nickname: string;
  onClick: (number: number) => void;
}

const SatItem = ({ number, isActive, nickname, onClick }: SatItemProps) => {
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
    >
      {nickname}
    </button>
  );
};
export default SatItem;
