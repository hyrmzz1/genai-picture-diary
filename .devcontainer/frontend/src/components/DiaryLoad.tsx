const DiaryLoad = ({ onCancel }: { onCancel: () => void }) => {
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
        <svg
          width={260}
          height={12}
          viewBox="0 0 260 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="self-stretch flex-grow-0 flex-shrink-0 h-3 relative"
          preserveAspectRatio="none"
        >
          <rect width={260} height={12} rx={6} fill="#EFF2F6" />
          <path
            d="M0 6C0 2.68629 2.68629 0 6 0H174C177.314 0 180 2.68629 180 6C180 9.31371 177.314 12 174 12H6C2.6863 12 0 9.31371 0 6Z"
            fill="url(#paint0_linear)"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1={0}
              y1={6}
              x2={180}
              y2={6}
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#CFE7FC" />
              <stop offset={1} stopColor="#2E94F1" />
            </linearGradient>
          </defs>
        </svg>
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
