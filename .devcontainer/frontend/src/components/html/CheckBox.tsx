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
  return (
    <>
      <label className={`text-[14px] flex items-center ${labelClassName}`}>
        <input type="checkbox" className={`${inputClassName}`} />
        {label}
      </label>
    </>
  );
};

export default CheckBox;
