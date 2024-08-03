// 랜딩페이지, 로그인, 회원가입 페이지 네비게이션 바
import { Link } from "react-router-dom";
import Logo from "./html/Logo";

const Gnb = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap h-[85px] px-[88px] border-b-[1px] border-b-[#E2E2E2]">
      <Logo />
      <Link to="/login">로그인</Link>
    </nav>
  );
};

export default Gnb;
