import { useEffect } from "react";
import LNB from "../components/Lnb";
import AlertList from "../components/AlertList";
import useAlertStore from "../stores/alertStore";

const Alert = (): JSX.Element => {
  const alertList = useAlertStore((state) => state.alerts);
  const fetchAlerts = useAlertStore((state) => state.fetchAlerts);

  useEffect(() => {
    fetchAlerts();
  }, [fetchAlerts]);

  useEffect(() => {
    console.log("Current alerts state:", alertList); // 콘솔 로그
  }, [alertList]);

  return (
    <div className="flex bg-neutral-50 min-h-screen">
      <LNB />
      <div className="flex flex-col justify-start items-start w-[1056px] gap-6">
        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-3">
          <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 px-4">
            <div className="flex flex-col justify-start items-start w-[1056px] gap-6">
              <div className="w-[1180px] h-[862px] rounded-tl-[20px] rounded-tr-[20px] bg-neutral-50">
                <div className="flex justify-end items-center w-[1056px] gap-5">
                  <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <path
                        d="M12 19V5M12 5L5 12M12 5L19 12"
                        stroke="#777777"
                        stroke-width={2}
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <p className="flex-grow-0 flex-shrink-0 text-[15px] font-bold text-left text-[#444]">
                      최신순
                    </p>
                  </div>
                  <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <path
                        d="M12 5V19M12 19L19 12M12 19L5 12"
                        stroke="#BFBFBF"
                        stroke-width={2}
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <p className="flex-grow-0 flex-shrink-0 text-[15px] font-bold text-left text-[#bfbfbf]">
                      오래된순
                    </p>
                  </div>
                </div>
                <AlertList alerts={alertList} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alert;
