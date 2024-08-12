import { ReactNode, useState } from "react";
import eyeOn from "../../assets/eyeOn.svg";
import eyeOff from "../../assets/eyeOff.svg";
import textResetIcon from "../../assets/textResetIcon.svg";

interface UserInputProps {
  label: string;
  placeholder: string;
  type: string;
  value: string;
  name: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClear?: () => void;
  children?: ReactNode;
  message?: string;
  disabled?: boolean;
  variant?: {
    bgless?: boolean; // true - 배경색 미적용, false - 배경색 적용
    smPadding?: boolean; // padding 사이즈 (true - 마이페이지, false - 로그인/회원가입)
  };
  showCharacterCount?: boolean; // 글자 수 표시 여부 (마이페이지 별명 입력 필드에 사용)
}

const UserInput = ({
  label,
  placeholder,
  type,
  value,
  name,
  onChange,
  onClear,
  children,
  message,
  disabled = false,
  variant = {},
  showCharacterCount = false,
}: UserInputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleClearInput = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.preventDefault(); // 포커스 상태 유지하기 위함

    setTimeout(() => {
      if (onClear) onClear(); // 호출 시 onClear 함수가 있는 경우만 실행
    }, 0);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
    console.log(showPassword);
  };

  const backgroundClass = variant.bgless ? "" : "bg-gray50";

  const paddingClass = variant.smPadding
    ? "py-[16px] px-[14px]"
    : "py-[20px] px-[16px]";

  return (
    <>
      <label className="block mb-[24px] text-[14px]">
        {label}
        <div className="relative">
          {/* UserBtn을 label과 input 사이에 배치하기 위함 */}
          {children}
          <input
            className={`appearance-none border border-gray400 focus:bg-white focus:border-blue focus:outline-none rounded-md w-full text-text_default mt-2 ${backgroundClass} ${paddingClass}`}
            type={showPassword ? "text" : type}
            placeholder={placeholder}
            value={value} // 전송할 입력값 지정
            name={name}
            onChange={onChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            disabled={disabled}
          />
          {/* 로그인 페이지의 아이디 input에만 노출 */}
          {name === "userId" && isFocused && (
            <div
              className="absolute right-[16px] transform top-[calc(50%-4px)] cursor-pointer"
              onMouseDown={handleClearInput} // onClick 사용시 에러 발생
            >
              <img src={textResetIcon} />
            </div>
          )}
          {type === "password" && (
            <div
              className="absolute right-[16px] transform top-[calc(50%-8px)] cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? (
                <img src={eyeOn} aria-label="Show Password" />
              ) : (
                <img src={eyeOff} aria-label="Hide Password" />
              )}
            </div>
          )}
          {showCharacterCount && (
            <div className="absolute right-[16px] transform top-[calc(50%-8px)] text-text_disabled">
              {value.length}/10
            </div>
          )}
        </div>
        {message && (
          <p className="text-[12px] text-text_disabled mt-2">{message}</p>
        )}
      </label>
    </>
  );
};

export default UserInput;
