import FormWrapper from "../components/FormWrapper";
import teacherIcon from "../assets/teacherIcon.svg";
import studentIcon from "../assets/studentIcon.svg";
import { useState } from "react";

// RoldCard 클릭시 회원가입 완료 (InfoForm, AuthForm, RoleForm 데이터 전송)
// TODO) onClick 이벤트 부여
const RoleCard = ({ icon, role, onClick, selected }: any) => (
  <div
    onClick={onClick}
    className={`w-[192px] h-[248px] flex flex-col items-center justify-end rounded-[12px] outline outline-gray300 cursor-pointer hover:bg-Bg_light hover:outline-[2px] ${
      selected ? "bg-Bg_light outline-[2px]" : ""
    }`}
  >
    <div>
      <img src={icon} alt={`${role}`} />
    </div>
    <div className="px-[36px] py-[28px]">
      <p className="font-bold">{role}</p>
    </div>
  </div>
);

type RoleData = {
  role: string;
};

type RoleFormProps = RoleData & {
  updateFields: (fields: Partial<RoleData>) => void;
};

const RoleForm = ({ role, updateFields }: RoleFormProps) => {
  const [selectedRole, setSelectedRole] = useState(role);

  const handleRoleClick = (role: string) => {
    const newRole = role === selectedRole ? "" : role; // Unselect if same role clicked
    setSelectedRole(newRole);
    updateFields({ role: newRole });
    console.log(selectedRole);
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
            role="선생님"
            selected={selectedRole === "teacher"}
            onClick={() => handleRoleClick("teacher")}
          />
          <RoleCard
            icon={studentIcon}
            role="학생"
            selected={selectedRole === "student"}
            onClick={() => handleRoleClick("student")}
          />
        </div>
      </div>
    </FormWrapper>
  );
};

export default RoleForm;
