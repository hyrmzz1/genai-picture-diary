import React, { useState, useRef, useEffect } from "react";

interface DiaryContentInputProps {
  value: string[];
  onChange: (value: string[]) => void;
}

const DiaryContentInput: React.FC<DiaryContentInputProps> = ({
  value,
  onChange,
}) => {
  const placeholderText = "오늘 하루를 자유롭게 작성해 보세요";
  const initialContent = value.length
    ? value
    : placeholderText
        .split("")
        .concat(Array(60 - placeholderText.length).fill(""));

  const [content, setContent] = useState<string[]>(initialContent);
  const [isPlaceholderActive, setIsPlaceholderActive] = useState(true);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (value.length) {
      setContent(value);
      setIsPlaceholderActive(false);
    }
  }, [value]);

  const handleChange = (index: number, val: string) => {
    const newContent = [...content];
    newContent[index] = val;
    setContent(newContent);
    onChange(newContent); // Propagate the change to the parent component
  };

  const handleFocus = (index: number) => {
    if (isPlaceholderActive) {
      setContent(Array(60).fill(""));
      setIsPlaceholderActive(false);
    }
    inputRefs.current[index]?.focus();
  };

  const handleCompositionEnd = (index: number) => {
    if (index < 59) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, event: React.KeyboardEvent) => {
    if (event.key === "Backspace") {
      if (content[index] === "" && index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    }
  };

  const renderCells = () => {
    return content.map((char, index) => {
      const x = 26 + (index % 10) * 52;
      const y = 26 + Math.floor(index / 10) * 52;
      const isPlaceholder =
        isPlaceholderActive && index < placeholderText.length;

      return (
        <foreignObject key={index} x={x - 20} y={y - 20} width={40} height={40}>
          <input
            ref={(el) => (inputRefs.current[index] = el)}
            type="text"
            value={content[index]}
            maxLength={1}
            onChange={(e) => handleChange(index, e.target.value)}
            onFocus={() => handleFocus(index)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            onCompositionEnd={() => handleCompositionEnd(index)}
            className={`w-full h-full text-center bg-transparent border-none outline-none font-ownglyph text-[24px] ${
              isPlaceholder ? "text-[#a0a0a0]" : "text-[#232527]"
            }`}
          />
        </foreignObject>
      );
    });
  };

  return (
    <div className="relative w-[520px] h-[313px]">
      <svg
        width={520}
        height={313}
        viewBox="0 0 520 313"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0 left-0"
        preserveAspectRatio="none"
      >
        <rect x="0.5" y="0.5" width={519} height={312} stroke="#E2E2E2" />
        <path d="M208 0L208 312" stroke="#E2E2E2" />
        <path d="M260 0L260 312" stroke="#E2E2E2" />
        <path d="M312 0L312 312" stroke="#E2E2E2" />
        <path d="M364 0L364 312" stroke="#E2E2E2" />
        <path d="M416 0L416 312" stroke="#E2E2E2" />
        <path d="M468 0L468 312" stroke="#E2E2E2" />
        <path d="M156 0L156 312" stroke="#E2E2E2" />
        <path d="M104 0L104 312" stroke="#E2E2E2" />
        <path d="M52 0L52 312" stroke="#E2E2E2" />
        <path d="M520 52L0 52" stroke="#E2E2E2" />
        <path d="M520 104L0 104" stroke="#E2E2E2" />
        <path d="M520 156L0 156" stroke="#E2E2E2" />
        <path d="M520 208L0 208" stroke="#E2E2E2" />
        <path d="M520 260L0 260" stroke="#E2E2E2" />

        {/* 각 격자 칸을 input으로 만들어 렌더링 */}
        {renderCells()}
      </svg>
    </div>
  );
};

export default DiaryContentInput;
