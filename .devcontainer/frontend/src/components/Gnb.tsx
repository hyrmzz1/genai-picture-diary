// 랜딩페이지, 로그인, 회원가입 페이지 네비게이션 바
import { Link, useLocation, useNavigate } from "react-router-dom";
import NavLogo from "./html/NavLogo";
import AlertIcon from "../assets/alertIcon.svg?react";
import Profile from "../assets/initProfileImage.svg?react";

const Gnb = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleAlarmClick = () => {
    navigate("/mypage/alert");
  };

  const handleProfileClick = () => {
    navigate("/mypage");
  };

  // 페이지에 따라 Gnb 설정
  const getGnbConfig = () => {
    if (location.pathname.startsWith("/mypage")) {
      return {
        height: "h-[62px]",
        paddingX: "pl-[88px] pr-[32px]",
        content: (
          <div className="flex items-center space-x-4">
            <AlertIcon onClick={handleAlarmClick} />
            <Profile width={40} height={40} onClick={handleProfileClick} />
          </div>
        ),
      };
    }

    // 기본 경로 ("/" 및 그 외 경로)
    return {
      height: "h-[85px]",
      paddingX: "px-[88px]",
      content: <Link to="/login">로그인</Link>,
    };
  };

  const { height, paddingX, content } = getGnbConfig();

  return (
    <nav
      className={`flex items-center justify-between flex-wrap ${height} ${paddingX} border-b-[1px] border-b-[#E2E2E2]`}
    >
      <NavLogo />
      {content}
    </nav>
  );
};

export default Gnb;
