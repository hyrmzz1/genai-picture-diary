import { useState, useEffect } from "react";

const DiaryLoad = ({ onCancel }: { onCancel: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress < 100) {
          return prevProgress + 2; // 2%씩 증가
        }
        clearInterval(interval);
        return prevProgress;
      });
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 h-[316px] border border-[#e2e2e2]">
      <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 w-[260px] relative gap-5">
        <p className="self-stretch flex-grow-0 flex-shrink-0 w-[260px] text-[15px] text-center text-black">
          <span className="self-stretch flex-grow-0 flex-shrink-0 w-[260px] text-[15px] text-center text-black font-ownglyph">
            닉네임님의 일기를 그리고 있어요.
          </span>
          <br />
          <span className="self-stretch flex-grow-0 flex-shrink-0 w-[260px] text-[15px] text-center text-black font-ownglyph">
            그림이 만들어지는 동안 기다려 주세요
          </span>
        </p>
        <div className="self-stretch flex-grow-0 flex-shrink-0 h-3 relative">
          <div className="w-full h-full rounded-[6px] bg-[#EFF2F6]">
            <div
              className="h-full rounded-[6px] bg-gradient-to-r from-[#CFE7FC] to-[#2E94F1] transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
        <div
          className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[260px] relative gap-2.5 px-5 py-2 rounded-[10px] border border-[#e2e2e2]"
          onClick={onCancel}
        >
          <p className="flex-grow-0 flex-shrink-0 text-[13px] font-bold text-center text-[#777]">
            취소
          </p>
        </div>
      </div>
    </div>
  );
};

export default DiaryLoad;
