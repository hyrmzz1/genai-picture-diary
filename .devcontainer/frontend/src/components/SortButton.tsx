interface SortButtonProps {
  order: "latest" | "oldest";
  label: string;
  isSelected: boolean;
  onClick: () => void;
}

const SortButton = ({ order, label, isSelected, onClick }: SortButtonProps) => {
  return (
    <div className="flex items-center gap-1 cursor-pointer" onClick={onClick}>
      <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d={
            order === "latest"
              ? "M12 19V5M12 5L5 12M12 5L19 12"
              : "M12 5V19M12 19L19 12M12 19L5 12"
          }
          stroke={isSelected ? "#777777" : "#BFBFBF"}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <p
        className={`text-sm font-bold text-left ${
          isSelected ? "text-text_sub" : "text-icon_disabled"
        }`}
      >
        {label}
      </p>
    </div>
  );
};

export default SortButton;
