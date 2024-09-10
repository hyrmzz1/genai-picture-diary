import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DeleteAccount from "../components/DeleteAccount";
import EditPwd from "../components/html/EditPwd";
import Profile from "../assets/initProfileImage.svg?react";
import useProfileStore from "../stores/profileStore";
import UserInput from "../components/html/UserInput";
import UserBtn from "../components/html/UserBtn";

const MyPage = () => {
  const { profile, fetchProfile, updateProfile, deleteProfile } =
    useProfileStore();
  const [isDeleteAccountMode, setIsDeleteAccountMode] = useState(false); // 회원탈퇴 모드 상태 추가
  const [nickname, setNickname] = useState("");
  const [previousNickname, setPreviousNickname] = useState("");
  const [fullname, setFullname] = useState("");
  const [login_id, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const [user_type, setUserType] = useState(0);
  const [editPwdMode, setEditPwdMode] = useState(false);

  const navigate = useNavigate();

  // 닉네임 글자 수를 계산하는 함수
  const characterCount = nickname.length;

  useEffect(() => {
    fetchProfile();
  }, []);

  useEffect(() => {
    if (profile) {
      setNickname(profile.nickname);
      setPreviousNickname(profile.nickname); // 초기 닉네임 저장
      setFullname(profile.fullname);
      setLoginId(profile.login_id);
      setPassword(profile.password);
      setUserType(profile.user_type);
    }
  }, [profile]);

  const handleSaveProfile = async () => {
    const updatedProfile = {
      nickname,
      fullname,
      login_id,
      password,
      user_type,
    };
    const success = await updateProfile(updatedProfile);
    if (success) {
      alert("프로필이 업데이트되었습니다.");
    } else {
      alert("프로필 업데이트에 실패했습니다.");
    }
  };

  const handleConfirmDelete = async () => {
    const success = await deleteProfile(); // 회원 탈퇴 API 호출
    if (success) {
      alert("회원 탈퇴가 완료되었습니다.");
      navigate("/login"); // 탈퇴 후 로그인 화면으로 이동
    } else {
      alert("회원 탈퇴에 실패했습니다.");
    }
    setIsDeleteAccountMode(false);
  };

  const handleCancelDelete = () => {
    setIsDeleteAccountMode(false);
  };

  const userInputData = [
    {
      label: "닉네임",
      placeholder: "별명",
      type: "text",
      value: nickname,
      name: "nickname",
    },
    {
      label: "이름",
      placeholder: "이름",
      type: "text",
      value: fullname,
      name: "fullname",
    },
    {
      label: "아이디",
      placeholder: "아이디",
      type: "text",
      value: login_id,
      name: "loginId",
    },
  ];

  return (
    <div className="flex justify-center">
      <div className="w-[391px] my-10 flex flex-col items-center">
        {/* TODO ) 정보 수정, 회원 탈퇴 UI 구현 및 조건부 렌더링 로직 추가 */}
        <Profile width={76} height={76} />
        <div className="w-full my-10">
          <p className="font-bold mb-3">기본 정보</p>
          {userInputData.map((input, index) => (
            <UserInput
              key={index}
              label={input.label}
              placeholder={input.placeholder}
              type={input.type}
              value={input.value}
              name={input.name}
              variant={{ isThin: true }}
              disabled
            />
          ))}
        </div>
        <UserBtn
          text="정보 수정"
          className="w-full bg-icon_default text-white text-sm font-bold"
        />
        <div className="w-full mt-3 flex justify-end">
          <button className="flex items-center">
            <p className="font-bold text-text_sub text-sm">회원 탈퇴</p>
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
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
