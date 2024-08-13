import DiaryTitleInput from "./DiaryTitleInput";
import DiaryContentInput from "./DiaryContentInput";
import DiarySelection from "./DiarySelection";
import DiaryWeatherInfo from "./DiaryWeatherInfo";

const DiaryContent = () => {
  return (
    <div className="w-full h-auto flex justify-center items-center bg-[#f2f4f7] py-8">
      <div className="w-[1204px] h-[878px] relative bg-[#f2f4f7]">
        <div
          className="w-[600px] h-[842px] absolute left-[302px] top-[65px] bg-white"
          style={{ boxShadow: "0px 0px 5px 0 rgba(0,0,0,0.08)" }}
        >
          <div className="flex flex-col justify-start items-center w-[520px] absolute left-10 top-8 gap-4">
            <DiaryWeatherInfo />
            <div className="mt-8 mb-8">
              <DiarySelection />
            </div>
            <DiaryTitleInput />
            <DiaryContentInput />
          </div>
        </div>
        {/* 일기 작성 완료 버튼 */}
        <div className="absolute right-8 top-6">
          <div className="flex justify-center items-center gap-2.5 px-6 py-3 rounded-[50px] bg-white shadow">
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
