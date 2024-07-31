import LNB from "../components/Lnb";
import profileImage from "../assets/rabbit.svg"; // 이미지 경로를 실제 경로로 수정하세요

const MyPage = () => {
  return (
    <div className="flex bg-neutral-50 min-h-screen">
      <LNB />
      <div className="flex flex-col items-center w-full p-8">
        <div className="w-[1180px] h-[1008px] relative overflow-hidden">
          <div className="w-[391px] h-[797.98px] absolute left-[395px] top-[90px]">
            <div className="flex flex-col justify-start items-center w-[391px] absolute left-0 top-0 gap-12">
              <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 h-[167px] w-32 relative gap-6">
                <img
                  src={profileImage}
                  className="flex-grow-0 flex-shrink-0 w-[120px] h-[120px] rounded-[666.67px] object-none border-2 border-white"
                />
              </div>
              <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-10">
                <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-10">
                  <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-[18.247880935668945px]">
                    <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-[10.948728561401367px]">
                      <p className="self-stretch flex-grow-0 flex-shrink-0 w-[391px] text-base font-bold text-left text-[#232527]">
                        기본정보
                      </p>
                      <p className="self-stretch flex-grow-0 flex-shrink-0 w-[391px] text-[15px] text-left text-[#444]">
                        닉네임
                      </p>
                      <div className="flex justify-between items-center flex-grow-0 flex-shrink-0 w-[391px] h-[58px] relative px-4 py-[18px] rounded-[9.12px] bg-white border-[0.91px] border-[#bfbfbf]">
                        <p className="flex-grow-0 flex-shrink-0 text-[15px] text-left text-[#a0a0a0]">
                          별명
                        </p>
                        <p className="flex-grow-0 flex-shrink-0 text-[15px] text-left text-[#a0a0a0]">
                          0/10
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-[10.948728561401367px]">
                      <p className="self-stretch flex-grow-0 flex-shrink-0 w-[391px] text-[15px] text-left text-[#444]">
                        이름
                      </p>
                      <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[391px] h-[58px] relative px-4 py-[18px] rounded-[9.12px] border-[0.91px] border-[#bfbfbf]">
                        <p className="flex-grow-0 flex-shrink-0 text-[15px] text-left text-[#a0a0a0]">
                          김초딩
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-[10.948728561401367px]">
                      <p className="self-stretch flex-grow-0 flex-shrink-0 w-[391px] text-[15px] text-left text-[#444]">
                        아이디
                      </p>
                      <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[391px] h-[58px] relative px-4 py-[18px] rounded-[9.12px] border-[0.91px] border-[#bfbfbf]">
                        <p className="flex-grow-0 flex-shrink-0 text-[15px] text-left text-[#a0a0a0]">
                          abcde123
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-[10.948728561401367px]">
                      <p className="self-stretch flex-grow-0 flex-shrink-0 w-[391px] text-[15px] text-left text-[#444]">
                        비밀번호
                      </p>
                      <div className="flex justify-between items-center flex-grow-0 flex-shrink-0 w-[391px] h-[58px] px-4 py-[18px] rounded-[9.12px] border-[0.91px] border-[#bfbfbf]">
                        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1">
                          <svg
                            width={3}
                            height={4}
                            viewBox="0 0 3 4"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="flex-grow-0 flex-shrink-0"
                            preserveAspectRatio="xMidYMid meet"
                          >
                            <circle
                              cx="1.5"
                              cy="2.4873"
                              r="1.5"
                              fill="#A0A0A0"
                            />
                          </svg>
                          <svg
                            width={3}
                            height={4}
                            viewBox="0 0 3 4"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="flex-grow-0 flex-shrink-0"
                            preserveAspectRatio="xMidYMid meet"
                          >
                            <circle
                              cx="1.5"
                              cy="2.4873"
                              r="1.5"
                              fill="#A0A0A0"
                            />
                          </svg>
                          <svg
                            width={3}
                            height={4}
                            viewBox="0 0 3 4"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="flex-grow-0 flex-shrink-0"
                            preserveAspectRatio="xMidYMid meet"
                          >
                            <circle
                              cx="1.5"
                              cy="2.4873"
                              r="1.5"
                              fill="#A0A0A0"
                            />
                          </svg>
                          <svg
                            width={3}
                            height={4}
                            viewBox="0 0 3 4"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="flex-grow-0 flex-shrink-0"
                            preserveAspectRatio="xMidYMid meet"
                          >
                            <circle
                              cx="1.5"
                              cy="2.4873"
                              r="1.5"
                              fill="#A0A0A0"
                            />
                          </svg>
                          <svg
                            width={3}
                            height={4}
                            viewBox="0 0 3 4"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="flex-grow-0 flex-shrink-0"
                            preserveAspectRatio="xMidYMid meet"
                          >
                            <circle
                              cx="1.5"
                              cy="2.4873"
                              r="1.5"
                              fill="#A0A0A0"
                            />
                          </svg>
                          <svg
                            width={3}
                            height={4}
                            viewBox="0 0 3 4"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="flex-grow-0 flex-shrink-0"
                            preserveAspectRatio="xMidYMid meet"
                          >
                            <circle
                              cx="1.5"
                              cy="2.4873"
                              r="1.5"
                              fill="#A0A0A0"
                            />
                          </svg>
                          <svg
                            width={3}
                            height={4}
                            viewBox="0 0 3 4"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="flex-grow-0 flex-shrink-0"
                            preserveAspectRatio="xMidYMid meet"
                          >
                            <circle
                              cx="1.5"
                              cy="2.4873"
                              r="1.5"
                              fill="#A0A0A0"
                            />
                          </svg>
                          <svg
                            width={3}
                            height={4}
                            viewBox="0 0 3 4"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="flex-grow-0 flex-shrink-0"
                            preserveAspectRatio="xMidYMid meet"
                          >
                            <circle
                              cx="1.5"
                              cy="2.4873"
                              r="1.5"
                              fill="#A0A0A0"
                            />
                          </svg>
                        </div>
                        <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5 px-3 py-2 rounded-md bg-white">
                          <p className="flex-grow-0 flex-shrink-0 text-[15px] text-left text-black">
                            변경
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-start items-end self-stretch flex-grow-0 flex-shrink-0 gap-5">
                  <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[391px] relative gap-[9.123940467834473px] px-[14.598304748535156px] py-[18.247880935668945px] rounded-[9.12px] bg-[#444]">
                    <p className="flex-grow-0 flex-shrink-0 text-[14.598304748535156px] font-bold text-left text-white">
                      정보수정
                    </p>
                  </div>
                  <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-1.5">
                    <p className="flex-grow-0 flex-shrink-0 text-base font-bold text-right text-[#444]">
                      회원탈퇴
                    </p>
                    <svg
                      width={24}
                      height={25}
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M9 18.983L15 12.983L9 6.98303"
                        stroke="#777777"
                        stroke-width={2}
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        ;
      </div>
    </div>
  );
};

export default MyPage;
