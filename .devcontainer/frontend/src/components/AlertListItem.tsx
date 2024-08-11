interface AlertProps {
  alert: {
    id: number;
    title: string;
    message: string;
    date: string;
  };
}

const AlertListItem = ({ alert }: AlertProps): JSX.Element => {
  return (
    <div className="w-[97.95%] h-[193px]">
      <div className="flex flex-col justify-start items-start w-[92.95%] relative left-10 top-[84px] gap-3">
        <div className="flex justify-start items-start self-stretch gap-2.5 px-4">
          <p className="text-[15px] font-bold text-left text-[#444]">
            {alert.date}
          </p>
        </div>
        <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-4 px-4 py-5 rounded-xl bg-white border-2 border-[#efefef]">
        <div className="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 relative overflow-hidden">
          <div className="flex-grow-0 flex-shrink-0 w-10 h-10 relative overflow-hidden rounded-[100px] bg-[#bfbfbf]">
            <p className="w-10 h-10 absolute left-0 top-0 text-base font-medium text-center text-white">
                A
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-start self-stretch w-[940px] relative overflow-hidden gap-1">
            <p className="self-stretch text-base font-bold text-left text-[#232527]">
              {alert.title}
            </p>
            <p className="self-stretch text-base text-left text-[#232527]">
              {alert.message}
            </p>
            <p className="self-stretch text-[13px] text-left text-[#777]">
              1분 전
            </p>
          </div>
          <svg
            width={12}
            height={12}
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0"
            preserveAspectRatio="xMidYMid meet"
          >
            <circle cx={6} cy={6} r={6} fill="#FF0101" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default AlertListItem;
