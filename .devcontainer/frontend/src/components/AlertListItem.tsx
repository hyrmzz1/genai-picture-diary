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
    <div className="flex flex-col justify-start items-center flex-grow-0 w-full left-10 top-[84px] gap-6">
      <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-3">
        <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 px-4">
          <p className="flex-grow-0 flex-shrink-0 text-[15px] font-bold text-left text-[#444]">
            {alert.date}
          </p>
        </div>
        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0">
          <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-4 px-4 py-5 rounded-xl bg-white border-2 border-[#efefef]">
            <div className="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 relative overflow-hidden">         
            <div className="flex justify-center items-center w-10 h-10 relative overflow-hidden rounded-full bg-[#bfbfbf]">
              <p className="text-base font-medium text-center text-white">
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
              className="flex-grow-0 flex-shrink-0 absolute"
              style={{ left: '97.34%', top: '16.66%' }}
              preserveAspectRatio="xMidYMid meet"
            >
              <circle cx={6} cy={6} r={6} fill="#FF0101" />
            </svg>
          </div>
        </div>
      </div>   
    </div>
  );
};

export default AlertListItem;
