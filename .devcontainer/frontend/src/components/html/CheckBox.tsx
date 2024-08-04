import { useState } from "react";
import RememberMeOnIcon from "../../assets/rememberMeOnIcon.svg";
import RememberMeOffIcon from "../../assets/rememberMeOffIcon.svg";

interface CheckBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  labelClassName?: string;
  inputClassName?: string;
}

const CheckBox = ({
  label,
  labelClassName = "",
  inputClassName = "",
}: CheckBoxProps) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <label className={`text-[14px] flex items-center ${labelClassName}`}>
        <input
          type="checkbox"
          className="hidden"
          checked={isChecked}
          onClick={handleToggle}
        />
        <img
          src={isChecked ? RememberMeOnIcon : RememberMeOffIcon}
          alt="Remember Me Check box"
          className={`${inputClassName}`}
        />
        {label}
      </label>
    </>
  );
};

export default CheckBox;
