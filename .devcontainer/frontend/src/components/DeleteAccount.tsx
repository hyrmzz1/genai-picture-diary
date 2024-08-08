interface DeleteAccountProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const DeleteAccount = ({
  isOpen,
  onClose,
  onConfirm,
}: DeleteAccountProps): JSX.Element | null => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="flex flex-col justify-start items-start relative gap-5 px-6 pt-7 pb-8 rounded-[20px] bg-white border border-[#efefef] z-10">
        <p className="flex-grow-0 flex-shrink-0 text-xl font-bold text-left">
          <span className="flex-grow-0 flex-shrink-0 text-xl font-bold text-left text-[#ff0101]">
            잠깐! 탈퇴 안내, 꼭 읽어주세요.
          </span>
          <br />
          <span className="flex-grow-0 flex-shrink-0 text-xl font-bold text-left text-black">
            탈퇴하시면 소중한 기록을 더 이상 볼 수 없어요!
          </span>
        </p>
        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-8">
          <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-4">
            <p className="self-stretch flex-grow-0 flex-shrink-0 w-[387px] text-[15px] text-left text-black">
              탈퇴한 계정은 절대 복구할 수 없습니다.
            </p>
            <p className="self-stretch flex-grow-0 flex-shrink-0 w-[387px] text-[15px] text-left text-black">
              <span className="self-stretch flex-grow-0 flex-shrink-0 w-[387px] text-[15px] text-left text-black">
                탈퇴 시 해당 아이디의{" "}
              </span>
              <span className="self-stretch flex-grow-0 flex-shrink-0 w-[387px] text-[15px] font-bold text-left text-black">
                작성한 일기가 모두 삭제
              </span>
              <span className="self-stretch flex-grow-0 flex-shrink-0 w-[387px] text-[15px] text-left text-black">
                됩니다.
              </span>
            </p>
            <p className="self-stretch flex-grow-0 flex-shrink-0 w-[387px] text-[15px] text-left text-black">
              개설한 학급이 있는 경우 학급도 삭제됩니다.
            </p>
          </div>
          <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-2">
            <div
              onClick={onConfirm}
              className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 h-[52px] relative gap-2.5 px-8 py-3.5 rounded-[10px] bg-[#2768ff] cursor-pointer"
            >
              <p className="flex-grow-0 flex-shrink-0 text-base font-semibold text-center text-white">
                네, 확인했어요
              </p>
            </div>
            <div
              onClick={onClose}
              className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 h-[52px] relative gap-2.5 px-8 py-3.5 rounded-[10px] bg-neutral-100 cursor-pointer"
            >
              <p className="flex-grow-0 flex-shrink-0 text-base font-bold text-center text-[#444]">
                탈퇴 취소
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteAccount;
