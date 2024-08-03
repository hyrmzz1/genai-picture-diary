interface UserInputProps {
  label: string;
  placeholder: string;
  type: string;
  value: string;
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const UserInput = ({
  label,
  placeholder,
  type,
  value,
  name,
  onChange,
}: UserInputProps) => {
  return (
    <>
      <label className="block mb-[20px] text-[14px]">
        {label}
        <input
          className="appearance-none bg-gray50 border border-gray400 focus:bg-white focus:border-blue focus:outline-none rounded-md w-full py-[20px] px-[16px] text-text_default mt-2"
          type={type}
          placeholder={placeholder}
          value={value} // 전송할 입력값 지정
          name={name}
          onChange={onChange}
          // required={required}
        />
      </label>
    </>
  );
};

export default UserInput;
