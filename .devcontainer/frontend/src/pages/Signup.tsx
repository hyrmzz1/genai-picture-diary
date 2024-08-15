import { FormEvent, useEffect, useState } from "react";
import useMultistepForm from "../components/useMultistepForm";
import InfoForm from "../components/InfoForm";
import AuthForm from "../components/AuthForm";
import RoleForm from "../components/RoleForm";
import UserBtn from "../components/html/UserBtn";
import SignupComplete from "../components/SignupComplete";
import { UserType } from "../type/UserType";

// TODO) 동의 체크 박스 검사
type FormData = {
  userName: string;
  userPhone: string;
  userEmail: string;
  certNum: string;
  userId: string;
  password: string;
  confirmPassword: string;
  userType: UserType;
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
  userType: UserType.Individual,
};

const Signup = () => {
  const [data, setData] = useState(INITIAL_DATA);
  const [errors, setErrors] = useState<ErrorData>({});
  const [isSignupComplete, setIsSignupComplete] = useState(false); // 회원가입 완료 여부

  function updateFields(fields: Partial<FormData>) {
    setData((prev) => ({ ...prev, ...fields }));
  }

  function validateFields(): boolean {
    let valid = true;
    const newErrors: ErrorData = {};

    if (isFirstStep) {
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
      // TODO) 발송한 인증 번호와 입력한 인증 번호 일치 여부 확인 로직 추가
      // else if () {}

      // TODO) 체크박스 유효성 검사 로직 추가
    } else if (!isLastStep) {
      if (!data.userId.trim()) {
        newErrors.userId = "아이디를 입력해 주세요.";
        valid = false;
      } else if (data.userId.length < 5 || data.userId.length > 32) {
        newErrors.userId = "아이디는 5~32자로 설정해주세요.";
        valid = false;
      }
      if (!data.password.trim()) {
        newErrors.password = "비밀번호를 입력해 주세요.";
        valid = false;
      } else if (data.password.length < 8) {
        newErrors.password = "비밀번호는 8자리 이상으로 설정해주세요.";
        valid = false;
      }
      if (data.password !== data.confirmPassword) {
        newErrors.confirmPassword = "비밀번호가 일치하지 않습니다.";
        valid = false;
      }
    }

    setErrors(newErrors);
    return valid;
  }

  const { step, isFirstStep, isLastStep, back, next } = useMultistepForm([
    <InfoForm {...data} errors={errors} updateFields={updateFields} />,
    <AuthForm {...data} errors={errors} updateFields={updateFields} />,
    <RoleForm
      userType={data.userType}
      updateFields={updateFields}
      onSubmit={() => {
        if (validateFields()) {
          setIsSignupComplete(true);
        }
      }}
    />,
  ]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();

    if (!isLastStep && validateFields()) return next();

    if (validateFields()) {
      setIsSignupComplete(true);
    }
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
