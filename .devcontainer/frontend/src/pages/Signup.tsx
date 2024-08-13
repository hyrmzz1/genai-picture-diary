import { FormEvent, useEffect, useState } from "react";
import useMultistepForm from "../components/useMultistepForm";
import InfoForm from "../components/InfoForm";
import AuthForm from "../components/AuthForm";
import RoleForm from "../components/RoleForm";
import UserBtn from "../components/html/UserBtn";
import SignupComplete from "../components/SignupComplete";

// TODO) 동의 체크 박스 검사
type FormData = {
  userName: string;
  userPhone: string;
  userEmail: string;
  certNum: string;
  userId: string;
  password: string;
  confirmPassword: string;
  role: string;
};

type ErrorData = {
  userName?: string;
  userPhone?: string;
  userEmail?: string;
  certNum?: string;
  userId?: string;
  password?: string;
  confirmPassword?: string;
};

const INITIAL_DATA: FormData = {
  userName: "",
  userPhone: "",
  userEmail: "",
  certNum: "",
  userId: "",
  password: "",
  confirmPassword: "",
  role: "",
};

const Signup = () => {
  const [data, setData] = useState(INITIAL_DATA);
  const [errors, setErrors] = useState<ErrorData>({});
  const [isSignupComplete, setIsSignupComplete] = useState(false); // 회원가입 완료 여부

  function updateFields(fields: Partial<FormData>) {
    setData((prev) => ({ ...prev, ...fields }));
  }

  // 유효성 검사 - 로직 보충 예정
  function validateFields(): boolean {
    let valid = true;
    const newErrors: ErrorData = {};

    if (!data.userName.trim()) {
      newErrors.userName = "이름을 입력해 주세요.";
      valid = false;
    }
    if (!data.userPhone.trim()) {
      newErrors.userPhone = "휴대전화번호를 입력해 주세요.";
      valid = false;
    }
    if (data.userEmail && !/^\S+@\S+\.\S+$/.test(data.userEmail)) {
      newErrors.userEmail = "유효한 이메일 주소를 입력해 주세요.";
      valid = false;
    }
    if (!data.certNum.trim()) {
      newErrors.certNum = "인증번호를 입력해 주세요.";
      valid = false;
    }
    if (!data.userId.trim()) {
      newErrors.userId = "아이디를 입력해 주세요.";
      valid = false;
    }
    if (!data.password.trim()) {
      newErrors.password = "비밀번호를 입력해 주세요.";
      valid = false;
    }
    if (data.password !== data.confirmPassword) {
      newErrors.confirmPassword = "비밀번호가 일치하지 않습니다.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
    // return Object.keys(newErrors).length === 0;
  }

  const { step, isFirstStep, isLastStep, back, next } = useMultistepForm([
    <InfoForm {...data} errors={errors} updateFields={updateFields} />,
    <AuthForm {...data} errors={errors} updateFields={updateFields} />,
    <RoleForm
      role={data.role}
      updateFields={updateFields}
      onSubmit={() => {
        // TODO) 유효성검사 로직 완성 후 아래 코드 if (validateFields()) {} 안에 넣기
        setIsSignupComplete(true); // 회원가입 완료
      }}
    />,
  ]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();

    if (!isLastStep) return next();

    // TODO) 유효성검사 로직 완성 후 아래 코드 if (validateFields()) {} 안에 넣기
    setIsSignupComplete(true); // 회원가입 완료
  }

  // 데이터 확인용
  useEffect(() => {
    if (isSignupComplete) {
      console.log("Signup complete:", isSignupComplete); // 상태가 업데이트 된 후 출력
      console.log(data);
    }
  }, [isSignupComplete]);

  if (isSignupComplete) {
    return <SignupComplete />;
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        {step}
        <div className="flex justify-center">
          <div className="w-[480px]">
            {
              isFirstStep && !isLastStep ? (
                // InfoForm에서는 '다음' 버튼 렌더링
                <UserBtn
                  text="다음"
                  disabled={false}
                  variant="main"
                  type="submit"
                  className="w-full"
                />
              ) : !isFirstStep && !isLastStep ? (
                // AuthForm에서는 '이전', '다음' 버튼 렌더링
                <div className="flex justify-between">
                  <UserBtn
                    text="이전"
                    onClick={back}
                    disabled={false}
                    className="w-[88px] bg-border_disabled font-bold"
                  />
                  <UserBtn
                    text="다음"
                    type="submit"
                    disabled={false}
                    variant="main"
                    className="w-[372px]"
                  />
                </div>
              ) : null // RoleForm에서는 단계 관련 버튼 렌더링 X
            }
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
