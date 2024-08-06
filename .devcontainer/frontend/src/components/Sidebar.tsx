import { Link } from "react-router-dom";
import profileImage from "../assets/rabbit.svg";

const Sidebar = () => {
  return (
    <div className="w-[260px] h-[798px] absolute left-0 top-[58px]">
      <Link to="/mypage">
        <div className="flex flex-col justify-start items-center w-20 absolute left-[90px] top-[18px] gap-5">
          <img
            src={profileImage}
            className="flex-grow-0 flex-shrink-0 w-[60px] h-[60px] rounded-[333.33px] object-none border border-[#e2f1ff] "
          />
          <p className="self-stretch flex-grow-0 flex-shrink-0 w-20 text-base text-center text-[#444]">
            김초등
          </p>
        </div>
      </Link>
      <div className="flex justify-start items-center w-[173px] h-[52px] absolute left-7 top-[718px] gap-2 px-3">
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
            stroke-width={2}
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <p className="flex-grow-0 flex-shrink-0 text-[15px] text-left text-[#444]">
          <Link to="/logout">로그아웃</Link>
        </p>
      </div>
      <div className="flex justify-start items-center w-[204px] absolute left-7 top-[149px] gap-4 px-4 py-2.5 rounded-xl bg-white hover:bg-white">
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
            stroke="#2E94F1"
            stroke-width={2}
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <p className="flex-grow-0 flex-shrink-0 text-[15px] font-bold text-left text-[#3b3b3b]">
          <Link to="/write">일기작성</Link>
        </p>
      </div>
      <div className="flex justify-start items-center w-[204px] absolute left-11 top-[213px] gap-4 rounded-xl">
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
            opacity="0.12"
            d="M3 10.5653C3 9.99094 3 9.70376 3.07403 9.4393C3.1396 9.20503 3.24737 8.98469 3.39203 8.7891C3.55534 8.5683 3.78202 8.39199 4.23539 8.03937L11.0177 2.76424C11.369 2.49099 11.5447 2.35436 11.7387 2.30184C11.9098 2.2555 12.0902 2.2555 12.2613 2.30184C12.4553 2.35436 12.631 2.49099 12.9823 2.76424L19.7646 8.03937C20.218 8.39199 20.4447 8.5683 20.608 8.7891C20.7526 8.98469 20.8604 9.20503 20.926 9.4393C21 9.70376 21 9.99094 21 10.5653V17.8002C21 18.9203 21 19.4804 20.782 19.9082C20.5903 20.2845 20.2843 20.5905 19.908 20.7822C19.4802 21.0002 18.9201 21.0002 17.8 21.0002H6.2C5.0799 21.0002 4.51984 21.0002 4.09202 20.7822C3.71569 20.5905 3.40973 20.2845 3.21799 19.9082C3 19.4804 3 18.9203 3 17.8002V10.5653Z"
            fill="#2E94F1"
          />
          <path
            d="M3 10.5653C3 9.99094 3 9.70376 3.07403 9.4393C3.1396 9.20503 3.24737 8.98469 3.39203 8.7891C3.55534 8.5683 3.78202 8.39199 4.23539 8.03937L11.0177 2.76424C11.369 2.49099 11.5447 2.35436 11.7387 2.30184C11.9098 2.2555 12.0902 2.2555 12.2613 2.30184C12.4553 2.35436 12.631 2.49099 12.9823 2.76424L19.7646 8.03937C20.218 8.39199 20.4447 8.5683 20.608 8.7891C20.7526 8.98469 20.8604 9.20503 20.926 9.4393C21 9.70376 21 9.99094 21 10.5653V17.8002C21 18.9203 21 19.4804 20.782 19.9082C20.5903 20.2845 20.2843 20.5905 19.908 20.7822C19.4802 21.0002 18.9201 21.0002 17.8 21.0002H6.2C5.0799 21.0002 4.51984 21.0002 4.09202 20.7822C3.71569 20.5905 3.40973 20.2845 3.21799 19.9082C3 19.4804 3 18.9203 3 17.8002V10.5653Z"
            stroke="#2E94F1"
            stroke-width={2}
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <p className="flex-grow-0 flex-shrink-0 text-[15px] font-bold text-left text-[#2e94f1]">
          <Link to="/">홈</Link>
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
