import img from "../assets/image 13.svg";

const DiarySidebar = () => {
  return (
    <aside className="w-[236px] bg-white border-r border-[#e2e2e2]">
      <div className="flex flex-col items-center mt-10 space-y-10">
        {/* 프로필 영역 */}
        <div className="flex flex-col items-center space-y-5">
          <img
            src={img}
            alt="Profile"
            className="w-[60px] h-[60px] rounded-full object-cover border border-[#e2f1ff]"
          />
          <p className="text-base text-gray-700">초등이</p>
        </div>

        {/* 구분선 */}
        <svg
          width={216}
          height={2}
          viewBox="0 0 216 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 1H216" stroke="#E2E2E2" />
        </svg>

        {/* 메뉴 항목 */}
        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[204px] gap-3">
          <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-4 px-4 py-2.5 rounded-xl">
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
                d="M22.6601 9.49798L19.9057 7.37928L18.5983 6.37203L13.6523 2.56012C13.1743 2.19638 12.5951 2 12 2C11.405 2 10.8257 2.19638 10.3478 2.56012L6.06603 5.85973L4.13245 7.34715C4.00373 7.44332 3.88595 7.554 3.78128 7.67712L1.32728 9.63083C1.15054 9.77269 1.03543 9.98033 1.00691 10.2087C0.9784 10.4371 1.03879 10.6678 1.17496 10.8508C1.25482 10.9555 1.35695 11.0401 1.47356 11.098C1.59016 11.1559 1.71814 11.1857 1.8477 11.1851C2.03498 11.1864 2.21709 11.1221 2.36388 11.0028L3.03238 10.4688V19.178C3.03305 19.9262 3.32302 20.6436 3.83863 21.1727C4.35424 21.7018 5.05336 21.9993 5.78255 22H8.5835V18.5571C8.5845 17.6282 8.94456 16.7376 9.58467 16.0808C10.2248 15.424 11.0927 15.0545 11.9979 15.0535C12.9038 15.0536 13.7727 15.4226 14.4137 16.0795C15.0546 16.7364 15.4154 17.6275 15.4166 18.5571V22H18.2218C18.9507 21.9985 19.6494 21.7007 20.1648 21.1718C20.6803 20.6429 20.9705 19.926 20.9719 19.178V10.3689L21.6447 10.8855C21.791 10.9986 21.9692 11.0595 22.1524 11.0592C22.2838 11.0592 22.4133 11.0278 22.5308 10.9675C22.6483 10.9073 22.7505 10.8197 22.8294 10.7119C22.8965 10.621 22.9454 10.5174 22.9732 10.407C23.001 10.2966 23.0073 10.1816 22.9915 10.0687C22.9758 9.95581 22.9384 9.84724 22.8815 9.74928C22.8246 9.65132 22.7494 9.56591 22.6601 9.49798Z"
                fill="#2E94F1"
              />
            </svg>
            <p className="flex-grow-0 flex-shrink-0 text-[15px] font-bold text-left text-[#3b3b3b]">
              홈
            </p>
          </div>
          <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-4 px-4 py-2.5 rounded-xl bg-[#cfe7fc]">
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
                d="M21 21.0003H13M2.5 21.5003L8.04927 19.366C8.40421 19.2295 8.58168 19.1612 8.74772 19.0721C8.8952 18.9929 9.0358 18.9015 9.16804 18.7989C9.31692 18.6834 9.45137 18.5489 9.72028 18.28L21 7.0003C22.1046 5.89574 22.1046 4.10487 21 3.0003C19.8955 1.89573 18.1046 1.89573 17 3.0003L5.72028 14.28C5.45138 14.5489 5.31692 14.6834 5.20139 14.8323C5.09877 14.9645 5.0074 15.1051 4.92823 15.2526C4.83911 15.4186 4.77085 15.5961 4.63433 15.951L2.5 21.5003ZM2.5 21.5003L4.55812 16.1493C4.7054 15.7663 4.77903 15.5749 4.90534 15.4872C5.01572 15.4105 5.1523 15.3816 5.2843 15.4068C5.43533 15.4356 5.58038 15.5807 5.87048 15.8708L8.12957 18.1299C8.41967 18.4199 8.56472 18.565 8.59356 18.716C8.61877 18.848 8.58979 18.9846 8.51314 19.095C8.42545 19.2213 8.23399 19.2949 7.85107 19.4422L2.5 21.5003Z"
                stroke="#2E94F1"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="flex-grow-0 flex-shrink-0 text-[15px] font-bold text-left text-[#232527]">
              일기작성
            </p>
          </div>
        </div>
      </div>

      {/* 로그아웃 영역 */}
      <div className="flex items-center space-x-2 px-4 absolute bottom-10 w-full">
        <svg
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
        >
          <path
            d="M16 17L21 12M21 12L16 7M21 12H9M9 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H9"
            stroke="#444444"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p className="text-[15px] text-gray-600">로그아웃</p>
      </div>
    </aside>
  );
};

export default DiarySidebar;
