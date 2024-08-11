import { useState, useEffect } from "react";
import eyeOff from "../../assets/eyeOff.svg";
import eyeOn from "../../assets/eyeOn.svg";

interface EditPwdProps {
  onCancel: () => void;
  onSave: (newPassword: string) => void;
  currentPasswordFromProfile: string; // 현재 비밀번호를 받아서 비교
}

const EditPwd = ({
  onCancel,
  onSave,
  currentPasswordFromProfile,
}: EditPwdProps) => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [currentPwdValid, setCurrentPwdValid] = useState(false);
  const [newPwdValid, setNewPwdValid] = useState(false);
  const [confirmPwdValid, setConfirmPwdValid] = useState(false);

  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  useEffect(() => {
    setCurrentPwdValid(currentPassword === currentPasswordFromProfile);
    setNewPwdValid(
      newPassword.length >= 8 && newPassword !== currentPasswordFromProfile
    );
    setConfirmPwdValid(newPassword === confirmPassword);
  }, [
    currentPassword,
    newPassword,
    confirmPassword,
    currentPasswordFromProfile,
  ]);

  const handleSave = () => {
    if (!currentPassword || !newPassword || !confirmPassword) {
      alert("비밀번호를 입력해 주세요.");
      return;
    }
    if (newPassword !== confirmPassword) {
      alert("새 비밀번호가 일치하지 않습니다.");
      return;
    }
    if (currentPassword !== currentPasswordFromProfile) {
      alert("현재 비밀번호가 일치하지 않습니다.");
      return;
    }
    onSave(newPassword);
  };

  return (
    <div className="flex justify-center items-center w-[1136px] h-[774px] relative overflow-hidden rounded-[20px] bg-white">
      <div className="flex flex-col justify-start items-center absolute top-[9.68%] gap-10 px-6 pt-7 pb-8 rounded-[20px] bg-white border border-[#efefef]">
        <p className="flex-grow-0 flex-shrink-0 w-[373px] text-xl font-bold text-left text-black">
          새로 사용할 비밀번호를 입력해주세요.
        </p>
        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-4">
          <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-3">
            <p className="self-stretch flex-grow-0 flex-shrink-0 w-[342px] text-[15px] font-bold text-left text-[#444]">
              비밀번호
            </p>
            <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 h-12 relative px-4 py-[18px] rounded-[9.12px] bg-white border-[0.91px] border-[#bfbfbf]">
              <input
                type={showCurrentPassword ? "text" : "password"}
                placeholder="현재 비밀번호를 입력해주세요."
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="w-full text-[14.598304748535156px] text-left text-[#a0a0a0] focus:outline-none"
              />
              <img
                onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                src={showCurrentPassword ? eyeOn : eyeOff}
                alt="Toggle Password Visibility"
                className="flex-grow-0 flex-shrink-0 w-5 h-5 relative cursor-pointer"
              />
            </div>
            {currentPassword && (
              <p
                className={`self-stretch flex-grow-0 flex-shrink-0 w-[342px] text-xs text-left ${
                  currentPwdValid ? "text-[#2768ff]" : "text-[#ff0101]"
                }`}
              >
                {currentPwdValid
                  ? "현재 비밀번호가 일치합니다."
                  : "현재 비밀번호가 일치하지 않습니다."}
              </p>
            )}
          </div>

          {/* 새 비밀번호 */}
          <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-3">
            <p className="self-stretch flex-grow-0 flex-shrink-0 w-[342px] text-[15px] font-bold text-left text-[#444]">
              새 비밀번호
            </p>
            <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 h-12 relative px-4 py-[18px] rounded-[9.12px] bg-white border-[0.91px] border-[#bfbfbf]">
              <input
                type={showNewPassword ? "text" : "password"}
                placeholder="새 비밀번호를 입력해주세요."
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full text-[14.598304748535156px] text-left text-[#a0a0a0] focus:outline-none"
              />
              <img
                onClick={() => setShowNewPassword(!showNewPassword)}
                src={showNewPassword ? eyeOn : eyeOff}
                alt="Toggle Password Visibility"
                className="flex-grow-0 flex-shrink-0 w-5 h-5 relative cursor-pointer"
              />
            </div>
            {newPassword && (
              <p
                className={`self-stretch flex-grow-0 flex-shrink-0 w-[342px] text-xs text-left ${
                  newPwdValid ? "text-[#2768ff]" : "text-[#ff0101]"
                }`}
              >
                {newPwdValid
                  ? "사용가능한 비밀번호입니다."
                  : "8자리 이상으로 입력해주세요."}
              </p>
            )}
          </div>

          {/* 새 비밀번호 확인 */}
          <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-3">
            <p className="self-stretch flex-grow-0 flex-shrink-0 w-[342px] text-[15px] font-bold text-left text-[#444]">
              새 비밀번호 확인
            </p>
            <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 h-12 relative px-4 py-[18px] rounded-[9.12px] bg-white border-[0.91px] border-[#bfbfbf]">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="새 비밀번호를 다시 입력해주세요."
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full text-[14.598304748535156px] text-left text-[#a0a0a0] focus:outline-none"
              />
              <img
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                src={showConfirmPassword ? eyeOn : eyeOff}
                alt="Toggle Password Visibility"
                className="flex-grow-0 flex-shrink-0 w-5 h-5 relative cursor-pointer"
              />
            </div>
            {confirmPassword && (
              <p
                className={`self-stretch flex-grow-0 flex-shrink-0 w-[342px] text-xs text-left ${
                  confirmPwdValid ? "text-[#2768ff]" : "text-[#ff0101]"
                }`}
              >
                {confirmPwdValid
                  ? "새 비밀번호가 일치합니다."
                  : "새 비밀번호를 다시 입력해주세요."}
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-2">
          <button
            onClick={handleSave}
            className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 h-[52px] relative gap-2.5 px-8 py-3.5 rounded-[10px] bg-[#bfbfbf]"
          >
            <p className="flex-grow-0 flex-shrink-0 text-base font-semibold text-center text-white">
              변경하기
            </p>
          </button>
          <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 h-[52px] relative gap-2.5 px-8 py-3.5 rounded-[10px] border border-[#bfbfbf]">
            <button
              onClick={onCancel}
              className="flex-grow-0 flex-shrink-0 text-base font-bold text-center text-[#444]"
            >
              취소
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditPwd;
