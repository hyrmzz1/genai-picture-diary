import React, { useState } from "react";

const DiaryTitleInput = () => {
  const [title, setTitle] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  return (
    <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[520px] relative gap-2.5 px-5 py-3 border border-[#e2e2e2]">
      <input
        type="text"
        value={title}
        onChange={handleChange}
        placeholder="제목을 입력해 주세요"
        className="w-full text-lg text-[#232527] font-ownglyph placeholder-[#a0a0a0] focus:outline-none"
      />
    </div>
  );
};

export default DiaryTitleInput;
