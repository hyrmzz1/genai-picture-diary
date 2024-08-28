const DiaryRedrawModal = ({
  onClose,
  onConfirm,
}: {
  onClose: () => void;
  onConfirm: () => void;
}) => {
  return (
    <div className="absolute inset-0 flex justify-center items-center z-50">
      <div
        className="flex flex-col justify-center items-center gap-6 px-8 py-7 rounded-[20px] bg-white border border-[#e2e2e2]"
        style={{ boxShadow: "0px 0px 10px 0 rgba(0,0,0,0.15)" }}
      >
        <p className="text-base font-bold text-center text-[#343435]">
          그림을 새로 그릴까요?
        </p>
        <div className="flex justify-center items-center gap-2">
          <button
            className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5 px-6 py-2 rounded-xl bg-[#f1f3f5]"
            onClick={onClose}
          >
            <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-[#444]">
              아니오
            </p>
          </button>
          <button
            className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[92px] relative gap-2.5 px-6 py-2 rounded-xl bg-[#2768ff]"
            onClick={onConfirm}
          >
            <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-white">
              예
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiaryRedrawModal;
