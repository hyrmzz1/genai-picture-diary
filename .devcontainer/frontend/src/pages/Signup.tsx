import PageLogo from "../components/html/PageLogo";
import UserInput from "../components/html/UserInput";
import UserBtn from "../components/html/UserBtn";
import CheckBox from "../components/html/CheckBox";

import { useState } from "react";
import FormWrapper from "../components/FormWrapper";

const Signup = () => {
  const [userName, setUserName] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [certNum, setCertNum] = useState("");

  const handleUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const handleUserPhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserPhone(e.target.value);
  };

  const handleUserEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserEmail(e.target.value);
  };

  const handleCertNumChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCertNum(e.target.value);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // 기본 폼 제출 동작 방지

    // 필수 입력 요소 검사 - 입력 여부, 타입 검사
    // 입력 요소에 따른 error 메세지 노출

    // 아이디/비밀번호 유효성 검사 - 계정 존재 여부
    /*
     setError(
       "아이디 또는 비밀번호가 일치하지 않습니다. 아이디와 비밀번호를 정확히 입력해 주세요."
     );
     */

    // 유효성 검사 통과
    // setError(null);

    // 로그인 로직 추가
  };

  const checkBoxData = [
    { label: "만 14세 이상입니다", isViewModalDisabled: false },
    { label: "[필수] 이용약관 동의", isViewModalDisabled: true },
    { label: "[필수] 개인정보 수집 및 이용 동의", isViewModalDisabled: true },
  ];

  return (
    <>
      <PageLogo />
      <FormWrapper title="회원가입">
        <div className="my-6">
          <div>
            <UserInput
              label="이름"
              placeholder="이름"
              type="text"
              value={userName}
              name="userName"
              onChange={handleUserNameChange}
            />
          </div>
          <div>
            <UserInput
              label="휴대전화번호"
              placeholder="휴대전화번호"
              type="number"
              value={userPhone}
              name="userPhone"
              onChange={handleUserPhoneChange}
            />
          </div>
          <div>
            <UserInput
              label="(선택)이메일"
              placeholder="이메일"
              type="email"
              value={userEmail}
              name="userEmail"
              onChange={handleUserEmailChange}
            />
          </div>

          {/* divider */}
          <div className="h-[24px] border-t border-border_disabled"></div>

          <div>
            <UserInput
              label="인증번호"
              placeholder="인증번호 입력"
              type="number"
              value={certNum}
              name="certNum"
              onChange={handleCertNumChange}
            >
              <div className="mt-2"></div>
              <UserBtn
                text="인증번호 전송"
                onClick={handleSubmit}
                disabled={false}
                variant="sub"
              />
            </UserInput>
          </div>

          <div className="mb-[12px]">
            <CheckBox
              label="전체동의"
              labelClassName="text-text_default"
              inputClassName="mr-[9px] w-[20px] h-[20px]"
            />
            <div className="ml-[16px]">
              {checkBoxData.map((data) => (
                <div className="mt-[20px] flex items-center justify-between">
                  <CheckBox
                    label={data.label}
                    labelClassName="text-text_default"
                    inputClassName="mr-[9px] w-[20px] h-[20px]"
                  />
                  <button
                    className="text-text_sub text-[14px] underline"
                    disabled={data.isViewModalDisabled}
                  >
                    보기
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <UserBtn text="다음" onClick={handleSubmit} disabled={false} />
      </FormWrapper>
    </>
  );
};

export default Signup;
