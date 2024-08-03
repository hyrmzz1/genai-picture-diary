interface UserBtnProps {
  text: string; // 버튼에 표시될 텍스트
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void; // 버튼 클릭 시 호출되는 함수
  disabled?: boolean; // 버튼 비활성화 여부 (선택적 prop)
}

const UserBtn = ({ text, onClick, disabled }: UserBtnProps) => {
  return (
    <button
      className="appearance-none bg-blue rounded-md w-full py-[20px] px-[16px] text-white font-bold mb-2"
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default UserBtn;
