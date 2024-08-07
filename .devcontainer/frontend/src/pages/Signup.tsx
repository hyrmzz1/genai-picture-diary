import { FormEvent, useState } from "react";
import useMultistepForm from "../components/useMultistepForm";
import InfoForm from "../components/InfoForm";
import AuthForm from "../components/AuthForm";
import RoleForm from "../components/RoleForm";
import UserBtn from "../components/html/UserBtn";

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
    <RoleForm {...data} updateFields={updateFields} />,
  ]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (isLastStep) {
      if (validateFields()) {
        alert("Successful Signup");
        console.log(data);
      }
    } else {
      next();
    }
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        {step}
        <div className="flex justify-center">
          <div className="w-[480px]">
            {isFirstStep ? (
              <UserBtn
                text="다음"
                disabled={false}
                variant="main"
                type="submit"
                className="w-full"
              />
            ) : (
              <div className="flex justify-between">
                <UserBtn
                  text="이전"
                  onClick={back}
                  disabled={false}
                  className="w-[88px] bg-border_disabled font-bold"
                />
                <UserBtn
                  text={isLastStep ? "가입 완료" : "다음"}
                  type="submit"
                  disabled={false}
                  variant="main"
                  className="w-[372px]"
                />
              </div>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
