import { useState } from "react";

interface DiaryContentInputProps {
  value: string;
  onChange: (value: string) => void;
}

const MAX_ROWS = 3;
const MAX_LENGTH = 75;

const DiaryContentInput = ({
  value,
  onChange,
}: DiaryContentInputProps): JSX.Element => {
  const [charCount, setCharCount] = useState(value.length);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = event.target.value;

    const lines = inputValue.split("\n"); // 입력된 내용에서 줄 수 확인

    if (lines.length > MAX_ROWS) {
      return;
    }

    setCharCount(inputValue.length);
    onChange(inputValue);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    const lines = value.split("\n"); // 현재 내용에서 줄 수 확인
    console.log(lines.length);

    // MAX_ROWS를 초과하는 경우 Enter 키 입력 막음
    if (event.key === "Enter" && lines.length >= MAX_ROWS) {
      event.preventDefault();
    }
  };

  const lineHeights = [2.9688, 2.9375, 2.9688]; // 줄 배경 높이 (divider가 1px임을 고려)

  return (
    <div className="relative w-full">
      {/* 줄 배경 */}
      <div className="absolute h-fit border border-divider_default divide-y divide-divider_default inset-0 pointer-events-none z-10">
        {lineHeights.map((height, index) => (
          <div
            key={index}
            className="w-full"
            style={{ height: `${height}rem` }}
          ></div>
        ))}
      </div>

      <textarea
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className="relative w-full resize-none px-5 font-ownglyph text-lg leading-[3rem] text-text_default placeholder-text_disabled tracking-widest focus:outline-none"
        placeholder="오늘 하루를 자유롭게 작성해 보세요."
        rows={MAX_ROWS}
        maxLength={MAX_LENGTH}
      />
      <p className="w-full text-right text-text_disabled text-sm font-ownglyph tracking-widest">
        {charCount} / {MAX_LENGTH}
      </p>
    </div>
  );
};

export default DiaryContentInput;
