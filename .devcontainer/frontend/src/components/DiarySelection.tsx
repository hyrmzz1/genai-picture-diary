import { useState } from "react";
import img1 from "../assets/select_default.svg";
import img2 from "../assets/select_gray.svg";
import { generateImage } from "../stores/diaryStore";
import DiaryLoad from "./DiaryLoad";

const DiarySelection = ({
  title,
  content,
  onLoadingChange,
}: {
  title: string;
  content: string;
  onLoadingChange: (isLoading: boolean) => void;
}) => {
  const [isSelected, setIsSelected] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleCancel = () => {
    setIsLoading(false);
    onLoadingChange(false);
  };

  const handleCardClick = async () => {
    console.log(title, content);
    if (!title || !content) {
      alert("제목과 내용을 입력해 주세요.");
      return;
    }

    setIsSelected(true);
    setIsLoading(true); // 로딩 상태 시작
    onLoadingChange(true); // 상위 컴포넌트에도 로딩 상태 전달

    const prompt = `${title} - ${content}`;
    console.log("사용된 프롬프트:", prompt); // 프롬프트 출력

    try {
      // 이미지 생성 함수 호출
      const generatedImageUrl = await generateImage(prompt);

      // 생성된 이미지와 함께 일기를 저장하는 로직 호출
      console.log("생성된 이미지 URL:", generatedImageUrl);
    } catch (error) {
      console.error("이미지 생성 중 오류가 발생했습니다:", error);
    } finally {
      setIsLoading(false); // 로딩 상태 종료
      onLoadingChange(false); // 상위 컴포넌트에도 로딩 상태 종료 전달
    }
  };

  return (
    <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 h-[316px]">
      {isLoading ? (
        <DiaryLoad onCancel={handleCancel} /> // 로딩 중일 때 DiaryLoad 표시
      ) : (
        <div className="flex flex-col justify-start items-center gap-4">
          <p className="w-[366px] text-[15px] text-left text-black font-ownglyph">
            만들고 싶은 이미지를 선택해주세요
          </p>
          <div className="flex justify-center items-start gap-10">
            <div className="flex gap-[34.245px]">
              <div
                className={`flex flex-col justify-start items-center w-[164px] relative gap-5 px-3 pt-3 pb-6 rounded-xl cursor-pointer ${
                  isSelected
                    ? "bg-[#fafafa] border-2 border-[#e2e2e2]"
                    : "bg-white border border-[#e2e2e2]"
                }`}
                onClick={handleCardClick}
              >
                <img src={img1} />
                <div className="flex flex-col justify-center items-center gap-1.5">
                  <p className="text-[15px] text-center text-black font-ownglyph">
                    AI 그림일기
                  </p>
                  <p className="text-xs text-center text-[#777] font-ownglyph">
                    완성된 이미지를 넣을 수 있어요
                  </p>
                </div>
              </div>
              <div
                className="flex flex-col justify-start items-center w-[164px] gap-5 px-3 pt-3 pb-6 rounded-xl bg-white border border-[#e2e2e2] cursor-not-allowed"
                onClick={(e) => e.preventDefault()} // 컬러링 이벤트 막기
              >
                <img src={img2} className="pointer-events-none" />
                <div className="flex flex-col justify-center items-center gap-1.5">
                  <p className="text-[15px] text-center text-black font-ownglyph">
                    AI 컬러링 일기
                  </p>
                  <p className="text-xs text-center text-[#777] font-ownglyph">
                    원하는 컬러로 직접 색칠할 수 있어요
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DiarySelection;
