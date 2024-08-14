import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DiaryTitleInput from "./DiaryTitleInput";
import DiaryContentInput from "./DiaryContentInput";
import DiarySelection from "./DiarySelection";
import DiaryWeatherInfo from "./DiaryWeatherInfo";
import DiaryLoad from "./DiaryLoad";
import { generateImage, saveDiary } from "../stores/diaryStore";

const DiaryContent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const navigate = useNavigate();

  const handleCancel = () => {
    setIsLoading(false);
  };

  const handleGenerateAndSave = async () => {
    setIsLoading(true);
    try {
      const generatedImageUrl = await generateImage(`${title} - ${content}`);
      setImageUrl(generatedImageUrl);
      await saveDiary({ title, content, imageUrl: generatedImageUrl });
      setIsLoading(false);
      alert("일기가 성공적으로 저장되었습니다!");
      navigate("/mypage");
    } catch (error) {
      setIsLoading(false);
      console.error("일기 작성 중 오류가 발생했습니다:", error);
      alert("일기 작성 중 오류가 발생했습니다. 다시 시도해 주세요.");
    }
  };

  return (
    <div className="w-full h-auto flex justify-center items-center bg-[#f2f4f7] py-8">
      <div className="w-[1204px] h-[878px] relative bg-[#f2f4f7]">
        <div
          className="w-[600px] h-[842px] absolute left-[302px] top-[65px] bg-white"
          style={{ boxShadow: "0px 0px 5px 0 rgba(0,0,0,0.08)" }}
        >
          <div className="flex flex-col justify-start items-center w-[520px] absolute left-10 top-8 gap-4">
            <DiaryWeatherInfo />
            {isLoading ? (
              <DiaryLoad onCancel={handleCancel} />
            ) : (
              <DiarySelection onCardClick={handleGenerateAndSave} />
            )}
            <DiaryTitleInput value={title} onChange={setTitle} />
            <DiaryContentInput value={content} onChange={setContent} />
          </div>
        </div>
        <div className="flex justify-start absolute right-8 top-6 gap-3">
          <div
            className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2.5 px-5 py-3 rounded-[20px] bg-white shadow border border-[#e2e2e2]"
            onClick={handleGenerateAndSave}
          >
            <p className="flex-grow-0 flex-shrink-0 text-[15px] text-left text-[#a0a0a0] font-ownglyph">
              새로그리기
            </p>
          </div>
          <div
            className="flex justify-center items-center gap-2.5 px-6 py-3 rounded-[50px] bg-white shadow"
            onClick={handleGenerateAndSave}
          >
            <p className="text-[15px] text-[#bfbfbf] font-ownglyph">
              일기 작성 완료
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiaryContent;
