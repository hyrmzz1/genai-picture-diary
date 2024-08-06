import PageLogo from "../components/html/PageLogo";
import UserInput from "../components/html/UserInput";
import UserBtn from "../components/html/UserBtn";
import CheckBox from "../components/html/CheckBox";

import { Link } from "react-router-dom";
import { useState } from "react";
import FormWrapper from "../components/FormWrapper";

const Login = () => {
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

  return (
    <>
      <PageLogo />
      <FormWrapper title="로그인">
        <div className="my-6">
          <div className="input-box">
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

          <div className="input-box">
            <UserInput
              label="비밀번호"
              placeholder="비밀번호"
              type="password"
              value={password}
              name="password"
              onChange={handlePasswordChange}
            />
          </div>

          <div className="remember-forgot mb-[12px]">
            <CheckBox
              label="로그인 상태 유지"
              labelClassName="text-text_sub"
              inputClassName="mr-[9px] w-[20px] h-[20px]"
            />
          </div>

          {/* error message */}
          {error && <p className="text-red text-[12px]">{error}</p>}
        </div>

        {/* TODO: 비동기 작업 중엔 disabled true로 설정 */}
        <UserBtn text="로그인" onClick={handleSubmit} disabled={false} />

        <div className="text-[14px] text-text_info flex justify-center">
          <Link to="/signup" className="mx-[12px] font-bold">
            회원가입
          </Link>
          <div className="text-icon_disabled"> | </div>
          <Link to="/findId" className="mx-[12px]">
            아이디 찾기
          </Link>
          <div className="text-icon_disabled"> | </div>
          <Link to="/findPassword" className="mx-[12px]">
            비밀번호 찾기
          </Link>
        </div>
      </FormWrapper>
    </>
  );
};

export default Login;
