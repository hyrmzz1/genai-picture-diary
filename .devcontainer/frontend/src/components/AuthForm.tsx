import UserInput from "../components/html/UserInput";
import FormWrapper from "../components/FormWrapper";

type AuthData = {
  userId: string;
  password: string;
  confirmPassword: string;
  errors: {
    userId?: string;
    password?: string;
    confirmPassword?: string;
  };
};

type AuthFormProps = AuthData & {
  updateFields: (fields: Partial<AuthData>) => void;
};

const AuthForm = ({
  userId,
  password,
  confirmPassword,
  // errors,
  updateFields,
}: AuthFormProps) => {
  return (
    <FormWrapper title="회원가입">
      <div className="my-6">
        <div>
          <UserInput
            label="아이디"
            placeholder="아이디"
            type="text"
            value={userId}
            name="userId"
            // error={errors.userId}
            onChange={(e) => updateFields({ userId: e.target.value })}
            message="아이디는 5~32자로 설정해주세요"
          />
        </div>

        <div>
          <UserInput
            label="비밀번호"
            placeholder="비밀번호"
            type="password"
            value={password}
            name="password"
            // error={errors.password}
            onChange={(e) => updateFields({ password: e.target.value })}
            message="비밀번호는 8자리 이상으로 설정해주세요"
          />
        </div>

        <div>
          <UserInput
            label="비밀번호 확인"
            placeholder="비밀번호"
            type="password"
            value={confirmPassword}
            name="confirmPassword"
            // error={errors.confirmPassword}
            onChange={(e) => updateFields({ confirmPassword: e.target.value })}
          />
        </div>
      </div>
    </FormWrapper>
  );
};

export default AuthForm;
