import React from "react";

const DiaryContent = () => {
  return (
    <div className="w-full h-auto flex justify-center items-center bg-[#f2f4f7] py-8">
      <div className="w-[1204px] h-[878px] relative bg-[#f2f4f7]">
        <div
          className="w-[600px] h-[842px] absolute left-[302px] top-[65px] bg-white"
          style={{ boxShadow: "0px 0px 5px 0 rgba(0,0,0,0.08)" }}
        >
          <div className="flex flex-col justify-start items-start w-[520px] absolute left-10 top-8 gap-4">
            <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0">
              <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 h-[37px] gap-7 px-7 py-2.5 border border-[#e2e2e2]">
                <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-3">
                  <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1">
                    <p className="flex-grow-0 flex-shrink-0 text-[15px] text-left text-[#232527]">
                      2024
                    </p>
                    <p className="flex-grow-0 flex-shrink-0 text-[15px] text-left text-[#232527]">
                      년
                    </p>
                  </div>
                  <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1">
                    <p className="flex-grow-0 flex-shrink-0 text-[15px] text-left text-[#232527]">
                      8
                    </p>
                    <p className="flex-grow-0 flex-shrink-0 text-[15px] text-left text-[#232527]">
                      월
                    </p>
                  </div>
                  <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1">
                    <p className="flex-grow-0 flex-shrink-0 text-[15px] text-left text-[#232527]">
                      10
                    </p>
                    <p className="flex-grow-0 flex-shrink-0 text-[15px] text-left text-[#232527]">
                      일
                    </p>
                  </div>
                  <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1">
                    <p className="flex-grow-0 flex-shrink-0 text-[15px] text-left text-[#232527 ]">
                      토
                    </p>
                    <p className="flex-grow-0 flex-shrink-0 text-[15px] text-left text-[#232527]">
                      요일
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center flex-grow h-[37px] relative gap-3 px-4 py-2.5 border-t border-r border-b border-l-0 border-[#e2e2e2]">
                <p className="flex-grow-0 flex-shrink-0 text-[15px] text-left text-[#232527]">
                  오늘의 날씨 :
                </p>
                <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-5">
                  <svg
                    width={25}
                    height={25}
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <path
                      d="M12.5 2.5V4.5M12.5 20.5V22.5M4.5 12.5H2.5M6.81412 6.81412L5.3999 5.3999M18.1859 6.81412L19.6001 5.3999M6.81412 18.19L5.3999 19.6042M18.1859 18.19L19.6001 19.6042M22.5 12.5H20.5M17.5 12.5C17.5 15.2614 15.2614 17.5 12.5 17.5C9.73858 17.5 7.5 15.2614 7.5 12.5C7.5 9.73858 9.73858 7.5 12.5 7.5C15.2614 7.5 17.5 9.73858 17.5 12.5Z"
                      stroke="#E2E2E2"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {/* 추가적인 날씨 아이콘들 */}
                  <svg
                    width={25}
                    height={25}
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <path
                      d="M19.868 12.9048C21.435 12.0606 22.5 10.4047 22.5 8.5C22.5 5.73858 20.2614 3.5 17.5 3.5C14.7386 3.5 12.5 5.73858 12.5 8.5M12.5 8.5C10.3623 8.5 8.5094 9.7196 7.59922 11.501C7.56622 11.5003 7.53315 11.5 7.5 11.5C4.73858 11.5 2.5 13.7386 2.5 16.5C2.5 19.2614 4.73858 21.5 7.5 21.5C11.7352 21.5 14.2434 21.5 18 21.5C20.4853 21.5 22.5 19.4853 22.5 17C22.5 14.5147 20.4853 12.5 18 12.5C17.9311 12.5 17.8625 12.5016 17.7943 12.5046C17.1429 10.1938 15.0192 8.5 12.5 8.5Z"
                      stroke="#E2E2E2"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <svg
                    width={25}
                    height={25}
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <path
                      d="M7 19.5C4.51472 19.5 2.5 17.4853 2.5 15C2.5 12.6564 4.29151 10.7313 6.57974 10.5194C7.04781 7.67213 9.52024 5.5 12.5 5.5C15.4798 5.5 17.9522 7.67213 18.4203 10.5194C20.7085 10.7313 22.5 12.6564 22.5 15C22.5 17.4853 20.4853 19.5 18 19.5C13.6102 19.5 10.8433 19.5 7 19.5Z"
                      stroke="#E2E2E2"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <svg
                    width={25}
                    height={25}
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <path
                      d="M8 19.66C8 20.9523 9.00736 22 10.25 22C11.4926 22 12.5 20.9523 12.5 19.66V12.1M12.5 12.1C11.0508 12.1 8.9 13 8.9 13C8.9 13 7.64916 12.1 6.2 12.1C4.75084 12.1 3.5 13 3.5 13C3.5 8.02944 7.52944 4 12.5 4C17.4706 4 21.5 8.02944 21.5 13C21.5 13 20.2492 12.1 18.8 12.1C17.3508 12.1 16.1 13 16.1 13C16.1 13 13.9492 12.1 12.5 12.1Z"
                      stroke="#E2E2E2"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <svg
                    width={25}
                    height={25}
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <path
                      d="M17.8699 9.525L7.13009 15.475M17.8699 9.525L18.8426 6.04164M17.8699 9.525L21.5 10.4584M7.13009 15.475L3.5 14.5416M7.13009 15.475L6.15741 18.9584M17.8698 15.4749L7.13002 9.52488M17.8698 15.4749L21.5 14.5415M17.8698 15.4749L18.8426 18.9583M7.13002 9.52488L6.15754 6.04173M7.13002 9.52488L3.50013 10.4585M12.5 6.55L12.5 18.45M12.5 6.55L9.84258 4M12.5 6.55L15.1574 4M12.5 18.45L9.84258 21M12.5 18.45L15.1574 21"
                      stroke="#E2E2E2"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="self-stretch flex-grow-0 flex-shrink-0 h-[316px]" />
            <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[520px] relative gap-2.5 px-5 py-3 border border-[#e2e2e2]">
              <p className="flex-grow-0 flex-shrink-0 text-lg text-left text-[#a0a0a0]">
                제목을 입력해 주세요
              </p>
            </div>
            <svg
              width={520}
              height={313}
              viewBox="0 0 520 313"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0 w-[520px] h-[313px]"
              preserveAspectRatio="none"
            >
              <rect x="0.5" y="0.5" width={519} height={312} stroke="#E2E2E2" />
              <path d="M208 0L208 312" stroke="#E2E2E2" />
              <path d="M260 0L260 312" stroke="#E2E2E2" />
              <path d="M312 0L312 312" stroke="#E2E2E2" />
              <path d="M364 0L364 312" stroke="#E2E2E2" />
              <path d="M416 0L416 312" stroke="#E2E2E2" />
              <path d="M468 0L468 312" stroke="#E2E2E2" />
              <path d="M156 0L156 312" stroke="#E2E2E2" />
              <path d="M104 0L104 312" stroke="#E2E2E2" />
              <path d="M52 0L52 312" stroke="#E2E2E2" />
              <path d="M520 52L0 52" stroke="#E2E2E2" />
              <path d="M520 104L0 104" stroke="#E2E2E2" />
              <path d="M520 156L0 156" stroke="#E2E2E2" />
              <path d="M520 208L0 208" stroke="#E2E2E2" />
              <path d="M520 260L0 260" stroke="#E2E2E2" />
            </svg>
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
