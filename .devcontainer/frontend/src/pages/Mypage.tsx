import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Alarm from "../components/html/Alarm";
import DeleteAccount from "../components/DeleteAccount";
import profileImage from "../assets/rabbit.svg";
import useProfileStore from "../stores/profileStore";
import EditPwd from "../components/html/EditPwd";

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

  return (
    <div className="w-full h-screen flex">
      <Sidebar />
      <div className="flex flex-col flex-grow items-center justify-center bg-[#cfe7fc]">
        <div className="flex justify-center items-center w-[78.89%] h-[90.42%] absolute left-[19.44%] top-[6.77%] overflow-hidden rounded-[20px] bg-white p-10">
          {isDeleteAccountMode ? (
            <DeleteAccount
              onConfirm={handleConfirmDelete}
              onClose={handleCancelDelete}
              isOpen={true}
            />
          ) : editPwdMode ? (
            <EditPwd
              currentPasswordFromProfile={password}
              onCancel={() => setEditPwdMode(false)}
              onSave={(newPassword) => {
                setPassword(newPassword);
                setEditPwdMode(false);
              }}
            />
          ) : (
            <div className="flex flex-col justify-start items-center w-[391px] absolute top-[48.75px] gap-10">
              <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-5">
                <img
                  src={profileImage}
                  className="flex-grow-0 flex-shrink-0 w-[76px] h-[76px] rounded-[422.22px] object-none border-[1.27px] border-[#e2e2e2]"
                />
                {previousNickname && (
                  <p className="self-stretch flex-grow-0 flex-shrink-0 w-[391px] text-base text-center text-black">
                    {previousNickname}
                  </p>
                )}
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
                      <div className="relative flex justify-between items-center w-[391px] h-12 px-4 py-[15px] rounded-[9.12px] bg-white border-[0.91px] border-[#bfbfbf]">
                        <input
                          placeholder="별명"
                          type="text"
                          value={nickname}
                          maxLength={10}
                          onChange={(e) => setNickname(e.target.value)}
                          className="flex-grow-1 w-full h-full text-[15px] text-left text-[#232527] bg-transparent outline-none"
                        />
                        <span className="absolute right-4 text-[15px] text-[#a0a0a0]">
                          {characterCount}/10
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-[10.948728561401367px] border-[#bfbfbf]">
                      <p className="self-stretch flex-grow-0 flex-shrink-0 w-[391px] text-[15px] text-left text-[#444]">
                        이름
                      </p>
                      <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[391px] h-12 relative px-4 py-[18px] rounded-[9.12px] border-[0.91px] border-[#bfbfbf] bg-[#f5f5f5]">
                        <p className="flex-grow-0 flex-shrink-0 text-[15px] text-left text-[#a0a0a0]">
                          {fullname}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-[10.948728561401367px] border-[#bfbfbf] ">
                      <p className="self-stretch flex-grow-0 flex-shrink-0 w-[391px] text-[15px] text-left text-[#444]">
                        아이디
                      </p>
                      <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[391px] h-12 relative px-4 py-[18px] rounded-[9.12px] border-[0.91px] border-[#bfbfbf] bg-[#f5f5f5]">
                        <p className="flex-grow-0 flex-shrink-0 text-[15px] text-left text-[#a0a0a0]">
                          {login_id}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-[10.948728561401367px] border-[#bfbfbf]">
                      <p className="self-stretch flex-grow-0 flex-shrink-0 w-[391px] text-[15px] text-left text-[#444]">
                        비밀번호
                      </p>
                      <div className="flex justify-between items-center flex-grow-0 flex-shrink-0 w-[391px] h-12 px-4 py-[18px] rounded-[9.12px] border-[0.91px] border-[#bfbfbf] bg-[#f5f5f5]">
                        <input
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="flex-grow-1 text-[15px] text-left text-[#a0a0a0] focus:outline-none"
                          disabled
                        />
                        <button
                          onClick={() => setEditPwdMode(true)}
                          className="flex-grow-0 flex-shrink-0 text-[15px] text-left text-black"
                        >
                          변경
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-start items-end self-stretch flex-grow-0 flex-shrink-0 gap-5">
                  <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[391px] h-[52px] relative gap-[9.123940467834473px] px-[14.598304748535156px] py-[18.247880935668945px] rounded-[9.12px] bg-[#444]">
                    <p className="flex-grow-0 flex-shrink-0 text-[14.598304748535156px] font-bold text-left text-white">
                      <button onClick={handleSaveProfile}>정보수정</button>
                    </p>
                  </div>
                  <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-1.5">
                    <p className="flex-grow-0 flex-shrink-0 text-base font-bold text-right text-[#444]">
                      <button
                        onClick={() => setIsDeleteAccountMode(true)}
                        className="px-4 py-2 bg-red-500 text-[#444] rounded"
                      >
                        회원탈퇴
                      </button>
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
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <Alarm />
      </div>
    </div>
  );
};

export default MyPage;
