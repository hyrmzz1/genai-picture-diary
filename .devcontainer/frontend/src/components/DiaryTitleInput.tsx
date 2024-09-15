import React from "react";

interface DiaryTitleInputProps {
  value: string;
  onChange: (value: string) => void;
}

const DiaryTitleInput: React.FC<DiaryTitleInputProps> = ({
  value,
  onChange,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
      placeholder="제목을 입력해 주세요"
      className="w-full px-5 py-3 border border-divider_default font-ownglyph text-lg text-text_default placeholder-text_disabled tracking-widest focus:outline-none"
    />
  );
};

export default DiaryTitleInput;
