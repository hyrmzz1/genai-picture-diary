import UserInput from "../components/html/UserInput";
import UserBtn from "../components/html/UserBtn";
import CheckBox from "../components/html/CheckBox";
import FormWrapper from "../components/FormWrapper";

type InfoData = {
  userName: string;
  userPhone: string;
  userEmail: string;
  certNum: string;
  errors: {
    userName?: string;
    userPhone?: string;
    userEmail?: string;
    certNum?: string;
  };
};

type InfoFormProps = InfoData & {
  updateFields: (fields: Partial<InfoData>) => void;
};

const InfoForm = ({
  userName,
  userPhone,
  userEmail,
  certNum,
  errors,
  updateFields,
}: InfoFormProps) => {
  const checkBoxData = [
    { label: "만 14세 이상입니다", isViewModalDisabled: false },
    { label: "[필수] 이용약관 동의", isViewModalDisabled: true },
    { label: "[필수] 개인정보 수집 및 이용 동의", isViewModalDisabled: true },
  ];

  return (
    <FormWrapper title="회원가입">
      <div className="my-6">
        <UserInput
          label="이름"
          placeholder="이름"
          type="text"
          value={userName}
          name="userName"
          error={errors.userName}
          onChange={(e) => updateFields({ userName: e.target.value })}
        />
        <UserInput
          label="휴대전화번호"
          placeholder="휴대전화번호"
          type="number"
          value={userPhone}
          name="userPhone"
          error={errors.userPhone}
          onChange={(e) => updateFields({ userPhone: e.target.value })}
        />
        <UserInput
          label="(선택)이메일"
          placeholder="이메일"
          type="email"
          value={userEmail}
          name="userEmail"
          error={errors.userEmail}
          onChange={(e) => updateFields({ userEmail: e.target.value })}
        />
        <div className="h-[24px] border-t border-border_disabled"></div>
        <UserInput
          label="인증번호"
          placeholder="인증번호 입력"
          type="number"
          value={certNum}
          name="certNum"
          error={errors.certNum}
          onChange={(e) => updateFields({ certNum: e.target.value })}
        >
          <UserBtn
            text="인증번호 전송"
            onClick={() => {}} // TODO) 인증번호 발송, 모달 노출, 인증번호 입력 input에 타이머 추가
            disabled={false}
            className="w-full bg-Bg_deep"
          />
        </UserInput>
        <div className="mb-[12px]">
          <CheckBox
            label="전체동의"
            labelClassName="text-text_default"
            inputClassName="mr-[9px] w-[20px] h-[20px]"
          />
          <div className="ml-[16px]">
            {checkBoxData.map((data, index) => (
              <div
                key={index}
                className="mt-[20px] flex items-center justify-between"
              >
                <CheckBox
                  label={data.label}
                  labelClassName="text-text_default"
                  inputClassName="mr-[9px] w-[20px] h-[20px]"
                />
                <button
                  className="text-text_sub text-[14px] underline"
                  disabled={data.isViewModalDisabled}
                >
                  보기
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </FormWrapper>
  );
};

export default InfoForm;
