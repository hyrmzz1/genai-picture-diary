import { useNavigate } from "react-router-dom";
import FormWrapper from "./FormWrapper";
import UserBtn from "./html/UserBtn";
import signupCompleteIcon from "../assets/signupCompleteIcon.svg";

const SignupSuccess = () => {
  const navigate = useNavigate();

  const handleGoToLogin = () => {
    navigate("/login");
  };

  return (
    <FormWrapper
      title="AI 그림일기에 오신 것을 환영합니다."
      titleClassname="text-center"
      customWidth="424px"
    >
      <div className="flex flex-col items-center">
        <img src={signupCompleteIcon} className="pt-[40px] pb-[48px]" />
        <UserBtn
          text="로그인"
          onClick={handleGoToLogin}
          variant="main"
          className="w-full cursor-pointer"
        />
      </div>
    </FormWrapper>
  );
};

export default SignupSuccess;
