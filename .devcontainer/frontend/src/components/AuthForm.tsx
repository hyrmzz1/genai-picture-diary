import UserInput from "../components/html/UserInput";
import UserBtn from "../components/html/UserBtn";

import { useState } from "react";
import FormWrapper from "../components/FormWrapper";
import PageLogo from "./html/PageLogo";

const AuthForm = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleUserIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value);
    if (error === "아이디를 입력해 주세요.") setError(null);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (error === "비밀번호를 입력해 주세요.") setError(null);
  };

  const handleClearUserId = () => {
    setUserId("");
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // 기본 폼 제출 동작 방지

    if (userId.trim() === "") {
      setError("아이디를 입력해 주세요.");
      return;
    } else if (password.trim() === "") {
      setError("비밀번호를 입력해 주세요.");
      return;
    }

    // 아이디/비밀번호 유효성 검사 - 계정 존재 여부
    /*
     setError(
       "아이디 또는 비밀번호가 일치하지 않습니다. 아이디와 비밀번호를 정확히 입력해 주세요."
     );
     */

    // 유효성 검사 통과
    setError(null);

    // 로그인 로직 추가
  };

  // TODO) 에러 발생시 '다음' 버튼 disabled = "true" 처리

  return (
    <>
      <PageLogo />
      <FormWrapper title="회원가입">
        <div className="my-6">
          <div>
            <UserInput
              label="아이디"
              placeholder="아이디"
              type="text"
              value={userId}
              name="userId"
              onChange={handleUserIdChange}
              onClear={handleClearUserId}
            />
          </div>

          <div>
            <UserInput
              label="비밀번호"
              placeholder="비밀번호"
              type="password"
              value={password}
              name="password"
              onChange={handlePasswordChange}
            />
          </div>

          <div>
            <UserInput
              label="비밀번호 확인"
              placeholder="비밀번호"
              type="password"
              value={password}
              name="password"
              onChange={handlePasswordChange}
            />
          </div>
        </div>

        <div className="flex justify-between">
          <UserBtn
            text="이전"
            onClick={handleSubmit}
            disabled={false}
            className="w-[88px] bg-border_disabled text-bold"
          />
          <UserBtn
            text="다음"
            onClick={handleSubmit}
            disabled={false}
            className="w-[372px] bg-border_disabled text-bold"
          />
        </div>
      </FormWrapper>
    </>
  );
};

export default AuthForm;
