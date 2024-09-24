import { useRef, useState } from "react";

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
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // 줄 수 초과하면 추가 입력 차단
  const isLineLimitExceeded = (inputValue: string) => {
    const lines = inputValue.split("\n").length;
    return lines > MAX_ROWS;
  };

  // 스크롤 발생하려는 상황에서 입력 차단
  const isScrollLimitExceeded = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      const { scrollHeight, clientHeight } = textarea;
      return scrollHeight > clientHeight;
    }
    return false;
  };

  const handleInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = event.target.value;

    if (
      isLineLimitExceeded(inputValue) ||
      isScrollLimitExceeded() ||
      inputValue.length > MAX_LENGTH
    ) {
      return;
    }

    setCharCount(inputValue.length);
    onChange(inputValue);
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
        ref={textareaRef}
        value={value}
        onChange={handleInput}
        className="relative w-full max-h-36 overflow-hidden resize-none px-5 font-ownglyph text-lg leading-[3rem] text-text_default placeholder-text_disabled tracking-widest focus:outline-none"
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
