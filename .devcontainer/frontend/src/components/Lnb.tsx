import { Link } from "react-router-dom";

const LNB = () => {
  return (
    <div className="flex flex-col justify-start items-start w-[260px] h-[1008px] relative px-8 pt-9 pb-[329px] bg-white border-t-0 border-r-[1.13px] border-b-0 border-l-0 border-[#e2e2e2]">
      <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-5">
        <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 h-[52px] relative gap-2 px-3 rounded-xl hover:bg-[#efefef]">
          <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              d="M21 21.0001H13M2.5 21.5001L8.04927 19.3657C8.40421 19.2292 8.58168 19.161 8.74772 19.0718C8.8952 18.9927 9.0358 18.9013 9.16804 18.7987C9.31692 18.6831 9.45137 18.5487 9.72028 18.2798L21 7.00006C22.1046 5.89549 22.1046 4.10463 21 3.00006C19.8955 1.89549 18.1046 1.89549 17 3.00006L5.72028 14.2798C5.45138 14.5487 5.31692 14.6831 5.20139 14.832C5.09877 14.9643 5.0074 15.1049 4.92823 15.2523C4.83911 15.4184 4.77085 15.5959 4.63433 15.9508L2.5 21.5001ZM2.5 21.5001L4.55812 16.149C4.7054 15.7661 4.77903 15.5746 4.90534 15.4869C5.01572 15.4103 5.1523 15.3813 5.2843 15.4065C5.43533 15.4354 5.58038 15.5804 5.87048 15.8705L8.12957 18.1296C8.41967 18.4197 8.56472 18.5648 8.59356 18.7158C8.61877 18.8478 8.58979 18.9844 8.51314 19.0947C8.42545 19.2211 8.23399 19.2947 7.85107 19.442L2.5 21.5001Z"
              stroke="#444444"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-[#444]">
            일기작성
          </p>
        </div>
        <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 h-[52px] relative gap-2 px-3 rounded-xl hover:bg-[#efefef]">
          <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
            preserveAspectRatio="none"
          >
            <path
              d="M18 2H8C6.93913 2 5.92172 2.42143 5.17157 3.17157C4.42143 3.92172 4 4.93913 4 6V18C4 19.0609 4.42143 20.0783 5.17157 20.8284C5.92172 21.5786 6.93913 22 8 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V4C20 3.46957 19.7893 2.96086 19.4142 2.58579C19.0391 2.21071 18.5304 2 18 2ZM6 6C6 5.46957 6.21071 4.96086 6.58579 4.58579C6.96086 4.21071 7.46957 4 8 4H18V14H8C7.29504 14.003 6.60399 14.1964 6 14.56V6ZM8 20C7.46957 20 6.96086 19.7893 6.58579 19.4142C6.21071 19.0391 6 18.5304 6 18C6 17.4696 6.21071 16.9609 6.58579 16.5858C6.96086 16.2107 7.46957 16 8 16H18V20H8ZM10 8H14C14.2652 8 14.5196 7.89464 14.7071 7.70711C14.8946 7.51957 15 7.26522 15 7C15 6.73478 14.8946 6.48043 14.7071 6.29289C14.5196 6.10536 14.2652 6 14 6H10C9.73478 6 9.48043 6.10536 9.29289 6.29289C9.10536 6.48043 9 6.73478 9 7C9 7.26522 9.10536 7.51957 9.29289 7.70711C9.48043 7.89464 9.73478 8 10 8Z"
              fill="#444444"
            />
          </svg>
          <p className="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-[#444]">
            내 일기
          </p>
        </div>
        <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 h-[52px] relative gap-2 px-3 rounded-xl hover:bg-[#efefef]">
          <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              d="M12 21L11.8999 20.8499C11.2053 19.808 10.858 19.287 10.3991 18.9098C9.99286 18.5759 9.52476 18.3254 9.02161 18.1726C8.45325 18 7.82711 18 6.57482 18H5.2C4.07989 18 3.51984 18 3.09202 17.782C2.71569 17.5903 2.40973 17.2843 2.21799 16.908C2 16.4802 2 15.9201 2 14.8V6.2C2 5.07989 2 4.51984 2.21799 4.09202C2.40973 3.71569 2.71569 3.40973 3.09202 3.21799C3.51984 3 4.07989 3 5.2 3H5.6C7.84021 3 8.96031 3 9.81596 3.43597C10.5686 3.81947 11.1805 4.43139 11.564 5.18404C12 6.03968 12 7.15979 12 9.4M12 21V9.4M12 21L12.1001 20.8499C12.7947 19.808 13.142 19.287 13.6009 18.9098C14.0071 18.5759 14.4752 18.3254 14.9784 18.1726C15.5467 18 16.1729 18 17.4252 18H18.8C19.9201 18 20.4802 18 20.908 17.782C21.2843 17.5903 21.5903 17.2843 21.782 16.908C22 16.4802 22 15.9201 22 14.8V6.2C22 5.07989 22 4.51984 21.782 4.09202C21.5903 3.71569 21.2843 3.40973 20.908 3.21799C20.4802 3 19.9201 3 18.8 3H18.4C16.1598 3 15.0397 3 14.184 3.43597C13.4314 3.81947 12.8195 4.43139 12.436 5.18404C12 6.03968 12 7.15979 12 9.4"
              stroke="#444444"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-[#444]">
            우리반 일기
          </p>
        </div>
        <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 h-[52px] px-3 rounded-xl rounded-xl hover:bg-[#efefef]">
          <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                d="M11 4H7.8C6.11984 4 5.27976 4 4.63803 4.32698C4.07354 4.6146 3.6146 5.07354 3.32698 5.63803C3 6.27976 3 7.11984 3 8.8V14C3 14.93 3 15.395 3.10222 15.7765C3.37962 16.8117 4.18827 17.6204 5.22354 17.8978C5.60504 18 6.07003 18 7 18V20.3355C7 20.8684 7 21.1348 7.10923 21.2716C7.20422 21.3906 7.34827 21.4599 7.50054 21.4597C7.67563 21.4595 7.88367 21.2931 8.29976 20.9602L10.6852 19.0518C11.1725 18.662 11.4162 18.4671 11.6875 18.3285C11.9282 18.2055 12.1844 18.1156 12.4492 18.0613C12.7477 18 13.0597 18 13.6837 18H15.2C16.8802 18 17.7202 18 18.362 17.673C18.9265 17.3854 19.3854 16.9265 19.673 16.362C20 15.7202 20 14.8802 20 13.2V13M20.1213 3.87868C21.2929 5.05025 21.2929 6.94975 20.1213 8.12132C18.9497 9.29289 17.0503 9.29289 15.8787 8.12132C14.7071 6.94975 14.7071 5.05025 15.8787 3.87868C17.0503 2.70711 18.9497 2.70711 20.1213 3.87868Z"
                stroke="#444444"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-[#232527]">
              <Link to="/alert">알림</Link>
            </p>
          </div>
          <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden px-1.5 rounded-md bg-[#ff0101]">
            <p className="flex-grow w-3 text-[16.5px] font-medium text-center text-white">
              3
            </p>
          </div>
        </div>
        <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 h-[52px] relative gap-2 px-3 rounded-xl hover:bg-[#efefef]">
          <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0 w-6 h-[23px] relative"
            preserveAspectRatio="none"
          >
            <path
              d="M9 14.875C8.80222 14.875 8.60888 14.9312 8.44443 15.0365C8.27998 15.1418 8.15181 15.2914 8.07612 15.4666C8.00043 15.6417 7.98063 15.8344 8.01921 16.0203C8.0578 16.2062 8.15304 16.3769 8.29289 16.5109C8.43275 16.645 8.61093 16.7362 8.80491 16.7732C8.99889 16.8102 9.19996 16.7912 9.38268 16.7187C9.56541 16.6461 9.72159 16.5233 9.83147 16.3657C9.94135 16.2081 10 16.0228 10 15.8333C10 15.5791 9.89464 15.3354 9.70711 15.1557C9.51957 14.9759 9.26522 14.875 9 14.875ZM2 13.9166C1.73478 13.9166 1.48043 14.0176 1.29289 14.1973C1.10536 14.377 1 14.6208 1 14.875V16.7916C1 17.0458 1.10536 17.2895 1.29289 17.4693C1.48043 17.649 1.73478 17.75 2 17.75C2.26522 17.75 2.51957 17.649 2.70711 17.4693C2.89464 17.2895 3 17.0458 3 16.7916V14.875C3 14.6208 2.89464 14.377 2.70711 14.1973C2.51957 14.0176 2.26522 13.9166 2 13.9166ZM22 13.9166C21.7348 13.9166 21.4804 14.0176 21.2929 14.1973C21.1054 14.377 21 14.6208 21 14.875V16.7916C21 17.0458 21.1054 17.2895 21.2929 17.4693C21.4804 17.649 21.7348 17.75 22 17.75C22.2652 17.75 22.5196 17.649 22.7071 17.4693C22.8946 17.2895 23 17.0458 23 16.7916V14.875C23 14.6208 22.8946 14.377 22.7071 14.1973C22.5196 14.0176 22.2652 13.9166 22 13.9166ZM17 7.20829H13V5.98163C13.3023 5.81439 13.5536 5.57425 13.7291 5.28508C13.9045 4.99591 13.9979 4.66778 14 4.33329C14 3.82496 13.7893 3.33745 13.4142 2.978C13.0391 2.61856 12.5304 2.41663 12 2.41663C11.4696 2.41663 10.9609 2.61856 10.5858 2.978C10.2107 3.33745 10 3.82496 10 4.33329C10.0021 4.66778 10.0955 4.99591 10.2709 5.28508C10.4464 5.57425 10.6977 5.81439 11 5.98163V7.20829H7C6.20435 7.20829 5.44129 7.51119 4.87868 8.05036C4.31607 8.58953 4 9.3208 4 10.0833V18.7083C4 19.4708 4.31607 20.2021 4.87868 20.7412C5.44129 21.2804 6.20435 21.5833 7 21.5833H17C17.7956 21.5833 18.5587 21.2804 19.1213 20.7412C19.6839 20.2021 20 19.4708 20 18.7083V10.0833C20 9.3208 19.6839 8.58953 19.1213 8.05036C18.5587 7.51119 17.7956 7.20829 17 7.20829ZM13.72 9.12496L13.22 11.0416H10.78L10.28 9.12496H13.72ZM18 18.7083C18 18.9625 17.8946 19.2062 17.7071 19.3859C17.5196 19.5657 17.2652 19.6666 17 19.6666H7C6.73478 19.6666 6.48043 19.5657 6.29289 19.3859C6.10536 19.2062 6 18.9625 6 18.7083V10.0833C6 9.82913 6.10536 9.58537 6.29289 9.40565C6.48043 9.22593 6.73478 9.12496 7 9.12496H8.22L9 12.23C9.05475 12.4426 9.18385 12.6308 9.36579 12.7634C9.54774 12.8959 9.77156 12.9647 10 12.9583H14C14.2284 12.9647 14.4523 12.8959 14.6342 12.7634C14.8162 12.6308 14.9452 12.4426 15 12.23L15.78 9.12496H17C17.2652 9.12496 17.5196 9.22593 17.7071 9.40565C17.8946 9.58537 18 9.82913 18 10.0833V18.7083ZM15 14.875C14.8022 14.875 14.6089 14.9312 14.4444 15.0365C14.28 15.1418 14.1518 15.2914 14.0761 15.4666C14.0004 15.6417 13.9806 15.8344 14.0192 16.0203C14.0578 16.2062 14.153 16.3769 14.2929 16.5109C14.4327 16.645 14.6109 16.7362 14.8049 16.7732C14.9989 16.8102 15.2 16.7912 15.3827 16.7187C15.5654 16.6461 15.7216 16.5233 15.8315 16.3657C15.9413 16.2081 16 16.0228 16 15.8333C16 15.5791 15.8946 15.3354 15.7071 15.1557C15.5196 14.9759 15.2652 14.875 15 14.875Z"
              fill="#444444"
            />
          </svg>
          <p className="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-[#444]">
            <Link to="/mypage">마이페이지</Link>
          </p>
        </div>
        <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 h-[52px] relative gap-2 px-3 rounded-xl hover:bg-[#efefef]">
          <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
            preserveAspectRatio="none"
          >
            <path
              d="M12.125 19.8645C12.386 19.7188 12.7478 19.5095 13.178 19.2413C14.097 18.6684 15.3179 17.8336 16.5338 16.7833C19.0147 14.6405 21.25 11.7973 21.25 8.60377C21.25 6.19371 19.2211 4.00005 16.8384 4L12.125 19.8645ZM12.125 19.8645C11.864 19.7188 11.5022 19.5095 11.072 19.2413C10.153 18.6684 8.93213 17.8336 7.71616 16.7833C5.2353 14.6405 3 11.7973 3 8.60377C3 6.19371 5.02885 4.00005 7.41155 4L12.125 19.8645ZM12.125 7.68224L11.2591 6.18317C10.4852 4.84335 9.01784 4.00017 7.41164 4L12.125 7.68224ZM12.125 7.68224L12.9909 6.18317M12.125 7.68224L12.9909 6.18317M12.9909 6.18317C13.7648 4.84335 15.2322 4.00017 16.8384 4L12.9909 6.18317Z"
              stroke="#444444"
              strokeWidth={2}
            />
          </svg>
          <p className="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-[#444]">
            좋아요
          </p>
        </div>
      </div>
      <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[173px] h-[52px] absolute left-8 top-[933px] gap-2 px-3 rounded-xl hover:bg-[#efefef]">
        <svg
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            d="M16 17L21 12M21 12L16 7M21 12H9M9 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H9"
            stroke="#444444"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p className="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-[#444]">
          로그아웃
        </p>
      </div>
      <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[173px] h-[52px] absolute left-8 top-[861px] gap-2 px-3 rounded-xl hover:bg-[#efefef]">
        <svg
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            d="M13 11H17.8C18.9201 11 19.4802 11 19.908 11.218C20.2843 11.4097 20.5903 11.7157 20.782 12.092C21 12.5198 21 13.0799 21 14.2V21M13 21V6.2C13 5.0799 13 4.51984 12.782 4.09202C12.5903 3.71569 12.2843 3.40973 11.908 3.21799C11.4802 3 10.9201 3 9.8 3H6.2C5.0799 3 4.51984 3 4.09202 3.21799C3.71569 3.40973 3.40973 3.71569 3.21799 4.09202C3 4.51984 3 5.0799 3 6.2V21M22 21H2M6.5 7H9.5M6.5 11H9.5M6.5 15H9.5"
            stroke="#444444"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p className="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-[#444]">
          우리반 만들기
        </p>
      </div>
    </div>
  );
};

export default LNB;
