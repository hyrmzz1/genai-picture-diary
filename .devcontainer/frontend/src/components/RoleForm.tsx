import FormWrapper from "../components/FormWrapper";
import teacherIcon from "../assets/teacherIcon.svg";
import individualIcon from "../assets/individualIcon.svg";
import { UserType } from "../type/UserType";

type RoldCardProps = {
  icon: string; // 역할 아이콘
  text: string; // 역할명
  onClick: () => void;
};

// RoldCard 클릭시 회원가입 완료 (InfoForm, AuthForm, RoleForm에서 입력받은 데이터 전송)
const RoleCard = ({ icon, text, onClick }: RoldCardProps) => (
  <div
    onClick={onClick}
    className="w-[192px] h-[248px] flex flex-col items-center justify-end rounded-[12px] outline outline-gray300 cursor-pointer hover:bg-Bg_light hover:outline-[2px]"
  >
    <div>
      <img src={icon} alt={text} />
    </div>
    <div className="px-[36px] py-[28px]">
      <p className="font-bold">{text}</p>
    </div>
  </div>
);

type RoleFormProps = {
  userType: UserType;
  updateFields: (fields: Partial<{ userType: UserType }>) => void;
  onSubmit: () => void; // 폼 제출 함수
};

const RoleForm = ({ updateFields, onSubmit }: RoleFormProps) => {
  const handleRoleClick = (role: UserType) => {
    updateFields({ userType: role });
    onSubmit();
  };

  return (
    <FormWrapper title="회원가입">
      <p className="my-[20px]">
        AI 그림일기를 이용할 본인의 역할을 정확하게 선택해주세요.
      </p>
      <div>
        <p>역할 선택</p>
        <div className="flex justify-between mt-[20px] mb-[28px]">
          <RoleCard
            icon={teacherIcon}
            text="선생님"
            onClick={() => handleRoleClick(UserType.Teacher)}
          />
          <RoleCard
            icon={individualIcon}
            text="개인"
            onClick={() => handleRoleClick(UserType.Individual)}
          />
        </div>
      </div>
    </FormWrapper>
  );
};

export default RoleForm;
