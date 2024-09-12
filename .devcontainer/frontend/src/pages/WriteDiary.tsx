import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DiaryTitleInput from "../components/DiaryTitleInput";
import DiaryContentInput from "../components/DiaryContentInput";
import DiarySelection from "../components/DiarySelection";
import DiaryWeatherInfo from "../components/DiaryWeatherInfo";
import DiaryLoad from "../components/DiaryLoad";
import DiaryRedrawModal from "../components/DiaryRedrawModal";
import { generateImage, saveDiary } from "../stores/diaryStore";

const WriteDiary = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleCancel = () => {
    setIsLoading(false);
  };

  const handleGenerateAndSave = async () => {
    console.log("Title before generating:", title);
    console.log("Content before generating:", content);

    if (!title || !content) {
      alert("제목과 내용을 입력해주세요.");
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    try {
      const generatedImageUrl = await generateImage(`${title} - ${content}`);
      setImageUrl(generatedImageUrl);
      console.log("이미지 URL:", generatedImageUrl);

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

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleConfirmRedraw = () => {
    setIsModalOpen(false);
    handleGenerateAndSave(); // 새로 그리기 로직 수행
  };

  const handleLoadingChange = (loading) => {
    setIsLoading(loading); // DiarySelection에서 로딩 상태 변경
  };

  return (
    // TODO) 버튼 부분과 일기 작성 부분 각각의 컴포넌트로 분리
    <div className="py-7">
      <div className="relative">
        <div className="absolute right-0 top-0 flex flex-col gap-4 mr-7">
          {/* TODO) 버튼 컴포넌트화 */}
          <div
            className="flex justify-center items-center gap-2.5 px-6 py-3 rounded-[50px] bg-white shadow"
            onClick={handleGenerateAndSave}
          >
            <p className="text-[15px] text-[#bfbfbf] font-ownglyph">
              일기 작성 완료
            </p>
          </div>
          <div
            className="flex justify-center items-center gap-2.5 px-6 py-3 rounded-[50px] bg-white shadow"
            onClick={handleOpenModal} // 모달 열기
          >
            <p className="text-[15px] text-[#bfbfbf] font-ownglyph">
              새로그리기
            </p>
          </div>
        </div>
        {isModalOpen && (
          <DiaryRedrawModal
            onClose={handleCloseModal}
            onConfirm={handleConfirmRedraw}
          />
        )}

        <div className="flex justify-center items-center">
          <div className="flex flex-col gap-y-4 p-10 bg-white drop-shadow-[0_5px_5px_rgba(0,0,0,0.08)]">
            <DiaryWeatherInfo />

            {isLoading ? (
              <DiaryLoad onCancel={handleCancel} />
            ) : (
              <DiarySelection
                title={title}
                content={content}
                onLoadingChange={handleLoadingChange}
              />
            )}

            <DiaryTitleInput value={title} onChange={setTitle} />
            <DiaryContentInput value={content} onChange={setContent} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WriteDiary;
