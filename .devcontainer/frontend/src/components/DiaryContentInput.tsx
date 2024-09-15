interface DiaryContentInputProps {
  value: string[];
  onChange: (value: string[]) => void;
}

const DiaryContentInput = ({
  value,
  onChange,
}: DiaryContentInputProps): JSX.Element => {
  const MAX_ROWS = 3;

  // 줄 변경 핸들러
  const handleLineChange = (index: number, newValue: string) => {
    const newLines = [...value];
    newLines[index] = newValue;
    onChange(newLines);
  };

  return (
    <div className="w-full border border-divider_default divide-y divide-divider_default">
      {Array.from({ length: MAX_ROWS }).map((_, index) => (
        <div key={index} className="relative w-full">
          <input
            type="text"
            value={value[index] || ""}
            onChange={(e) => handleLineChange(index, e.target.value)}
            placeholder={
              index === 0 ? "오늘 하루를 자유롭게 작성해 보세요." : ""
            }
            className="w-full px-5 py-3 font-ownglyph text-lg text-text_default placeholder-text_disabled tracking-widest focus:outline-none"
          />
        </div>
      ))}
    </div>
  );
};

export default DiaryContentInput;
