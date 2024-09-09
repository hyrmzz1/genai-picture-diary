import { useNavigate } from "react-router-dom";
import Profile from "../assets/initProfileImage.svg?react";
import HomeIcon from "../assets/snbHome.svg?react";
import WriteIcon from "../assets/snbWrite.svg?react";
import MyDiaryIcon from "../assets/snbMyDiary.svg?react";
import ClassDiaryIcon from "../assets/snbClassDiary.svg?react";
import LogoutIcon from "../assets/snbLogout.svg?react";

const Snb = () => {
  const navigate = useNavigate();

  const menuItems = [
    {
      label: "홈",
      icon: <HomeIcon />,
      // onClick: navigate("/"),
    },
    {
      label: "일기 작성",
      icon: <WriteIcon />,
      // onClick: navigate("/mypage/write"),
    },
    {
      label: "내 일기장",
      icon: <MyDiaryIcon />,
      // onClick: navigate("/mypage/my-diary-list"),
    },
    {
      label: "우리반 일기장",
      icon: <ClassDiaryIcon />,
      // onClick: navigate("/mypage/class-diary-list"),
    },
  ];

  const handleProfileClick = () => {
    navigate("/mypage");
  };

  const handleLogoutClick = () => {
    const confirmLogout = window.confirm("정말 로그아웃 하시겠습니까?");
    if (confirmLogout) {
      navigate("/login");
    }
  };

  return (
    <div className="w-[236px] h-full px-[16px] flex flex-col border-r-[1px] border-divider_default">
      <div className="flex flex-col items-center gap-y-5 py-[40px] border-b-2 border-divider_default">
        <Profile
          width={60}
          height={60}
          onClick={handleProfileClick}
          className="cursor-pointer"
        />
        <p>사용자 이름</p>
      </div>
      <div className="h-full py-[20px] flex flex-col justify-between">
        <div className="flex flex-col gap-y-3">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center h-[52px] px-[16px] py-[10px] gap-x-4 rounded-xl hover:bg-[#CFE7FC] cursor-pointer"
              // onClick={item.onClick ? item.onClick : undefined}
            >
              {item.icon}
              <p className="font-bold text-[15px]">{item.label}</p>
            </div>
          ))}
        </div>
        <div
          className="flex gap-x-2 cursor-pointer"
          onClick={handleLogoutClick}
        >
          <LogoutIcon />
          <p className="text-[15px] text-text_sub">로그아웃</p>
        </div>
      </div>
    </div>
  );
};

export default Snb;
