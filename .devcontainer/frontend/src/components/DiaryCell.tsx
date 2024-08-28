type DiaryCellProps = {
  x: number;
  y: number;
  text: string;
};

const DiaryCell = ({ x, y, text }: DiaryCellProps) => {
  return (
    <text
      x={x}
      y={y}
      fontFamily="Ownglyph MeetMe, sans-serif"
      fontSize="24"
      fill="#232527"
      textAnchor="middle"
      dominantBaseline="middle"
    >
      {text}
    </text>
  );
};

export default DiaryCell;
