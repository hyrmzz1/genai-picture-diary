import { useState } from "react";
import eyeOn from "../../assets/eyeOn.svg";
import eyeOff from "../../assets/eyeOff.svg";
import textResetIcon from "../../assets/textResetIcon.svg";

interface UserInputProps {
  label: string;
  placeholder: string;
  type: string;
  value: string;
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClear?: () => void;
}

const UserInput = ({
  label,
  placeholder,
  type,
  value,
  name,
  onChange,
  onClear,
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

  return (
    <>
      <label className="block mb-[20px] text-[14px]">
        {label}
        <div className="relative">
          <input
            className="appearance-none bg-gray50 border border-gray400 focus:bg-white focus:border-blue focus:outline-none rounded-md w-full py-[20px] px-[16px] text-text_default mt-2"
            type={showPassword ? "text" : type}
            placeholder={placeholder}
            value={value} // 전송할 입력값 지정
            name={name}
            onChange={onChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          {type !== "password" && isFocused && (
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
        </div>
      </label>
    </>
  );
};

export default UserInput;
