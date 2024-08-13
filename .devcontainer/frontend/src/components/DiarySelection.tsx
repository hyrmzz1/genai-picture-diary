import img1 from "../assets/select_default.svg";
import img2 from "../assets/select_gray.svg";

const DiarySelection = ({ onCardClick }: { onCardClick: () => void }) => {
  return (
    <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 h-[316px] ">
      <div className="flex flex-col justify-start items-center gap-4">
        <p className="w-[366px] text-[15px] text-left text-black font-ownglyph">
          만들고 싶은 이미지를 선택해주세요
        </p>
        <div className="flex justify-center items-start gap-10">
          <div className="flex gap-[34.245px]">
            <div className="flex flex-col justify-start items-center w-[164px] gap-5 px-3 pt-3 pb-6 rounded-xl bg-white border border-[#e2e2e2]">
              <img src={img1} />
              <div
                className="flex flex-col justify-center items-center gap-1.5"
                onClick={onCardClick}
              >
                <p className="text-[15px] text-center text-black font-ownglyph">
                  AI 그림일기
                </p>
                <p className="text-xs text-center text-[#777] font-ownglyph">
                  완성된 이미지를 넣을 수 있어요
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-start items-center w-[164px] gap-5 px-3 pt-3 pb-6 rounded-xl bg-white border border-[#e2e2e2]">
              <img src={img2} />
              <div
                className="flex flex-col justify-center items-center gap-1.5"
                onClick={onCardClick}
              >
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
    </div>
  );
};

export default DiarySelection;
