const LNB = () => {
  return (
    <div className="flex flex-col justify-start items-start w-[260px] h-[1008px] relative px-8 pt-9 pb-[329px] bg-white border-t-0 border-r-[1.13px] border-b-0 border-l-0 border-[#e2e2e2]">
      <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-5">
        <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 h-[52px] relative gap-2 px-3 rounded-xl">
          {/* SVG 일기작성 */}
          <p className="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-[#444]">
            일기작성
          </p>
        </div>
        <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 h-[52px] relative gap-2 px-3">
          {/* SVG 내 일기 */}
          <p className="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-[#444]">
            내 일기
          </p>
        </div>
        <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 h-[52px] relative gap-2 px-3">
          {/* SVG 우리반 일기 */}
          <p className="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-[#444]">
            우리반 일기
          </p>
        </div>
        <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 h-[52px] px-3 rounded-xl">
          <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
            {/* SVG 알림 */}
            <p className="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-[#232527]">
              알림
            </p>
          </div>
          <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden px-1.5 rounded-md bg-[#ff0101]">
            <p className="flex-grow w-3 text-[16.5px] font-medium text-center text-white">
              3
            </p>
          </div>
        </div>
        <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 h-[52px] relative gap-2 px-3 rounded-xl bg-[#efefef]">
          {/* SVG 마이페이지 */}
          <p className="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-[#444]">
            마이페이지
          </p>
        </div>
        <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 h-[52px] relative gap-2 px-3">
          {/* SVG 좋아요 */}
          <p className="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-[#444]">
            좋아요
          </p>
        </div>
      </div>
      <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[173px] h-[52px] absolute left-8 top-[933px] gap-2 px-3">
        {/* SVG 로그아웃 */}
        <p className="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-[#444]">
          로그아웃
        </p>
      </div>
      <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[173px] h-[52px] absolute left-8 top-[861px] gap-2 px-3">
        {/* SVG 우리반 만들기 */}
        <p className="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-[#444]">
          우리반 만들기
        </p>
      </div>
    </div>
  );
};

export default LNB;
