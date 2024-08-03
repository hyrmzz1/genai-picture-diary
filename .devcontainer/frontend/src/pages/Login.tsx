import PageLogo from "../components/html/PageLogo";
import UserInput from "../components/html/UserInput";
import UserBtn from "../components/html/UserBtn";
import CheckBox from "../components/html/CheckBox";

import { Link } from "react-router-dom";
import { ChangeEvent, useState } from "react";

const Login = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const handleUserIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    // 로그인 로직 추가
  };

  return (
    <>
      <PageLogo />
      <div className="flex justify-center">
        <div className="w-[480px]">
          <form action="">
            <h1 className="font-bold text-[24px]">로그인</h1>
            <div className="my-6">
              <div className="input-box">
                <UserInput
                  label="아이디"
                  placeholder="아이디"
                  type="text"
                  value={userId}
                  name="userId"
                  onChange={handleUserIdChange}
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

              <div className="remember-forgot">
                <CheckBox
                  label="로그인 상태 유지"
                  labelClassName="text-text_sub"
                  inputClassName="mr-[9px] w-[20px] h-[20px]"
                />
              </div>
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
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
