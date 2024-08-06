interface UserBtnProps {
  text: string; // 버튼에 표시될 텍스트
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void; // 버튼 클릭 시 호출되는 함수
  disabled?: boolean; // 버튼 비활성화 여부 (선택적 prop)
  variant?: string; // 버튼 스타일
}

const UserBtn = ({
  text,
  onClick,
  disabled,
  variant = "main",
}: UserBtnProps) => {
  // 기본 적용 스타일
  const baseClass =
    "appearance-none focus:outline-none rounded-md w-full py-[20px] px-[16px] mb-2";

  // variant에 따라 다른 색상 적용
  const variantClass =
    variant === "main"
      ? "bg-blue text-white font-bold"
      : "bg-Bg_deep text-text_default"; // sub

  return (
    <button
      className={`${baseClass} ${variantClass}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default UserBtn;
