import FormWrapper from "../components/FormWrapper";
import teacherIcon from "../assets/teacherIcon.svg";
import studentIcon from "../assets/studentIcon.svg";
import PageLogo from "./html/PageLogo";

// RoldCard 클릭시 회원가입 완료 (InfoForm, AuthForm, RoleForm 데이터 전송)
// TODO) onClick 이벤트 부여
const RoleCard = ({ icon, role }: any) => (
  <div className="w-[192px] h-[248px] flex flex-col items-center justify-end rounded-[12px] outline outline-gray300 outline-[1px] hover:bg-Bg_light hover:outline-[2px]">
    <div>
      <img src={icon} alt={`${role}`} />
    </div>
    <div className="px-[36px] py-[28px]">
      <p>{role}</p>
    </div>
  </div>
);

const RoleForm = () => {
  return (
    <>
      <PageLogo />
      {/* <FormWrapper title="회원가입"> */}
      <FormWrapper
        title={
          <>
            AI 그림일기에
            <br />
            오신 것을 환영합니다.
          </>
        }
      >
        <p className="my-[20px]">
          AI 그림일기를 이용할 본인의 역할을 정확하게 선택해주세요.
        </p>
        <div>
          <p>역할 선택</p>
          <div className="flex justify-between mt-[20px] mb-[28px]">
            <RoleCard icon={teacherIcon} role="선생님" />
            <RoleCard icon={studentIcon} role="학생" />
          </div>
        </div>
      </FormWrapper>
    </>
  );
};

export default RoleForm;
