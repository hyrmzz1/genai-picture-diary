import { Link } from "react-router-dom";

const Lnb = () => {
  return (
    <div className="w-[260px] h-full flex flex-col px-8 py-9 bg-white border-r border-gray-200">
      <Link
        to="/write"
        className="flex items-center gap-2 mb-4 px-3 py-2 rounded hover:bg-gray-100"
      >
        <span className="text-base font-bold text-gray-800">일기작성</span>
      </Link>
      <Link
        to="/diary"
        className="flex items-center gap-2 mb-4 px-3 py-2 rounded hover:bg-gray-100"
      >
        <span className="text-base font-bold text-gray-800">내 일기</span>
      </Link>
      <Link
        to="/class-diary"
        className="flex items-center gap-2 mb-4 px-3 py-2 rounded hover:bg-gray-100"
      >
        <span className="text-base font-bold text-gray-800">우리반 일기</span>
      </Link>
      <Link
        to="/notifications"
        className="flex items-center gap-2 mb-4 px-3 py-2 rounded hover:bg-gray-100"
      >
        <span className="text-base font-bold text-gray-800">알림</span>
      </Link>
      <Link
        to="/mypage"
        className="flex items-center gap-2 mb-4 px-3 py-2 rounded hover:bg-gray-100"
      >
        <span className="text-base font-bold text-gray-800">마이페이지</span>
      </Link>
      <Link
        to="/create-class"
        className="flex items-center gap-2 mb-4 px-3 py-2 rounded hover:bg-gray-100"
      >
        <span className="text-base font-bold text-gray-800">우리반 만들기</span>
      </Link>
      <Link
        to="/logout"
        className="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-100"
      >
        <span className="text-base font-bold text-gray-800">로그아웃</span>
      </Link>
    </div>
  );
};

export default Lnb;
