interface UserBtnProps {
  text: string; // 버튼에 표시될 텍스트
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void; // 버튼 클릭 시 호출되는 함수
  disabled?: boolean; // 버튼 비활성화 여부 (선택적 prop)
  variant?: string; // 버튼 스타일
  className?: string;
  type?: "submit" | "reset" | "button";
}

const UserBtn = ({
  text,
  onClick,
  disabled,
  variant,
  className,
  type,
}: UserBtnProps) => {
  // 기본 적용 스타일
  const baseClass =
    "appearance-none focus:outline-none rounded-md py-[20px] px-[16px] mb-2";

  // 가장 기본적으로 사용되는 버튼
  const variantClass = variant === "main" ? "bg-blue text-white font-bold" : "";

  return (
    <button
      className={`${baseClass} ${variantClass} ${className}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {text}
    </button>
  );
};

export default UserBtn;
