import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Alarm from "../components/html/Alarm";
import DeleteAccount from "../components/DeleteAccount";
import profileImage from "../assets/rabbit.svg";
import useProfileStore from "../stores/profileStore";
import EditPwd from "../components/html/EditPwd";
import { useNavigate } from "react-router-dom";

const MyPage = () => {
  const { profile, fetchProfile, updateProfile, deleteProfile } =
    useProfileStore();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const [editMode, setEditMode] = useState(false);
  //const [image, setImage] = useState("");
  const [nickname, setNickname] = useState("");
  const [fullname, setFullname] = useState("");
  const [login_id, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const [user_type, setUserType] = useState(0);

  const [editPwdMode, setEditPwdMode] = useState(false); // 비밀번호 변경 모드 상태 추가

  useEffect(() => {
    fetchProfile();
  }, []);

  useEffect(() => {
    if (profile) {
      //setImage(profile.profileImage);
      setNickname(profile.nickname);
      setFullname(profile.fullname);
      setLoginId(profile.login_id);
      setPassword(profile.password);
      setUserType(profile.user_type);
    }
  }, [profile]);

  const handleSaveProfile = async () => {
    const updatedProfile = {
      //profileImage: image,
      nickname,
      fullname,
      login_id,
      password,
      user_type,
    };
    const success = await updateProfile(updatedProfile);
    if (success) {
      setEditMode(false);
      alert("프로필이 업데이트되었습니다.");
    } else {
      alert("프로필 업데이트에 실패했습니다.");
    }
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleConfirm = async () => {
    const success = await deleteProfile();
    if (success) {
      alert("회원 탈퇴가 완료되었습니다.");
      navigate("/login");
    } else {
      alert("회원 탈퇴에 실패했습니다.");
    }
    setIsModalOpen(false);
  };

  const handleEditPwdSave = (newPassword: string) => {
    setPassword(newPassword);
    setEditPwdMode(false);
  };

  const handleEditPwdCancel = () => {
    setEditPwdMode(false);
  };

  return (
    <div className="w-[1440px] h-[856px] relative overflow-hidden bg-[#cfe7fc]">
      <Sidebar />
      <div className="w-[1136px] h-[774px] relative left-[280px] top-[58px] overflow-hidden rounded-[20px] bg-white">
        {!editPwdMode ? (
          <div className="flex flex-col justify-start items-center w-[391px] left-[373px] top-[67.75px] relative gap-10">
            <img
              src={profileImage}
              className="flex-grow-0 flex-shrink-0 w-[76px] h-[76px] rounded-[422.22px] object-none border-[1.27px] border-[#e2e2e2]"
            />
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
                    {editMode ? (
                      <input
                        type="text"
                        value={nickname}
                        onChange={(e) => setNickname(e.target.value)}
                        className="flex justify-between items-center flex-grow-0 flex-shrink-0 w-[391px] h-[58px] relative px-4 py-[18px] rounded-[9.12px] bg-white border-[0.91px] border-[#bfbfbf]"
                      />
                    ) : (
                      <div className="flex justify-between items-center flex-grow-0 flex-shrink-0 w-[391px] h-[58px] relative px-4 py-[18px] rounded-[9.12px] bg-white border-[0.91px] border-[#bfbfbf]">
                        <p className="flex-grow-0 flex-shrink-0 text-[15px] text-left text-[#a0a0a0]">
                          {nickname}
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-[10.948728561401367px]">
                    <p className="self-stretch flex-grow-0 flex-shrink-0 w-[391px] text-[15px] text-left text-[#444]">
                      이름
                    </p>
                    {editMode ? (
                      <input
                        type="text"
                        value={fullname}
                        onChange={(e) => setFullname(e.target.value)}
                        className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[391px] h-[58px] relative px-4 py-[18px] rounded-[9.12px] border-[0.91px] border-[#bfbfbf]"
                      />
                    ) : (
                      <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[391px] h-[58px] relative px-4 py-[18px] rounded-[9.12px] border-[0.91px] border-[#bfbfbf]">
                        <p className="flex-grow-0 flex-shrink-0 text-[15px] text-left text-[#a0a0a0]">
                          {fullname}
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-[10.948728561401367px]">
                    <p className="self-stretch flex-grow-0 flex-shrink-0 w-[391px] text-[15px] text-left text-[#444]">
                      아이디
                    </p>
                    {editMode ? (
                      <input
                        type="text"
                        value={login_id}
                        onChange={(e) => setLoginId(e.target.value)}
                        className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[391px] h-[58px] relative px-4 py-[18px] rounded-[9.12px] border-[0.91px] border-[#bfbfbf]"
                      />
                    ) : (
                      <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[391px] h-[58px] relative px-4 py-[18px] rounded-[9.12px] border-[0.91px] border-[#bfbfbf]">
                        <p className="flex-grow-0 flex-shrink-0 text-[15px] text-left text-[#a0a0a0]">
                          {login_id}
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-[10.948728561401367px]">
                    <p className="self-stretch flex-grow-0 flex-shrink-0 w-[391px] text-[15px] text-left text-[#444]">
                      비밀번호
                    </p>
                    {editMode ? (
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="flex justify-between items-center flex-grow-0 flex-shrink-0 w-[391px] h-[58px] px-4 py-[18px] rounded-[9.12px] border-[0.91px] border-[#bfbfbf]"
                      />
                    ) : (
                      <div className="flex justify-between items-center flex-grow-0 flex-shrink-0 w-[391px] h-[58px] px-4 py-[18px] rounded-[9.12px] border-[0.91px] border-[#bfbfbf]">
                        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1"></div>
                        <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5 px-3 py-2 rounded-md bg-white">
                          <button
                            onClick={() => setEditPwdMode(true)}
                            className="flex-grow-0 flex-shrink-0 text-[15px] text-left text-black"
                          >
                            변경
                          </button>
                        </div>
                      </div>
                    )}
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
                  <p className="flex-grow-0 flex-shrink-0 text-base fon t-bold text-right text-[#444]">
                    <button
                      onClick={handleOpenModal}
                      className="px-4 py-2 bg-red-500 text-[#444] rounded"
                    >
                      회원탈퇴
                    </button>
                    <DeleteAccount
                      isOpen={isModalOpen}
                      onClose={handleCloseModal}
                      onConfirm={handleConfirm}
                    />
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
        ) : (
          <EditPwd
            onCancel={handleEditPwdCancel}
            onSave={handleEditPwdSave}
            currentPasswordFromProfile={""}
          />
        )}
      </div>
      <Alarm />
    </div>
  );
};

export default MyPage;
