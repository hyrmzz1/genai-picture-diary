// import { useEffect } from "react";
// import Sidebar from "../components/Sidebar";
// import AlertList from "../components/AlertList";
// import useAlertStore from "../stores/alertStore";
// import Alarm from "../components/html/Alarm";

// const Alert = (): JSX.Element => {
//   const alertList = useAlertStore((state) => state.alerts);
//   const fetchAlerts = useAlertStore((state) => state.fetchAlerts);

//   useEffect(() => {
//     fetchAlerts();
//   }, [fetchAlerts]);

//   useEffect(() => {
//     console.log("Current alerts state:", alertList);
//   }, [alertList]);

//   return (
//     <div className="w-[1440px] h-[856px] relative overflow-hidden bg-[#cfe7fc]">
//       <Sidebar />
//       <div className="w-[1136px] h-[774px] absolute left-[280px] top-[58px] overflow-hidden rounded-[20px] bg-white">
//         <div className="w-[1056px] h-[193px]">
//           <div className="flex justify-end items-center w-[1056px] absolute left-10 top-10 gap-5">
//             <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
//               <svg
//                 width={24}
//                 height={24}
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
//                 preserveAspectRatio="xMidYMid meet"
//               >
//                 <path
//                   d="M12 19V5M12 5L5 12M12 5L19 12"
//                   stroke="#777777"
//                   strokeWidth={2}
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//               <p className="flex-grow-0 flex-shrink-0 text-[15px] font-bold text-left text-[#444]">
//                 최신순
//               </p>
//             </div>
//             <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
//               <svg
//                 width={24}
//                 height={24}
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
//                 preserveAspectRatio="xMidYMid meet"
//               >
//                 <path
//                   d="M12 5V19M12 19L19 12M12 19L5 12"
//                   stroke="#BFBFBF"
//                   strokeWidth={2}
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//               <p className="flex-grow-0 flex-shrink-0 text-[15px] font-bold text-left text-[#bfbfbf]">
//                 오래된순
//               </p>
//             </div>
//           </div>
//           <AlertList alerts={alertList} />
//         </div>
//       </div>
//       <Alarm />
//     </div>
//   );
// };

// export default Alert;
import { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import AlertList from "../components/AlertList";
import useAlertStore from "../stores/alertStore";
import Alarm from "../components/html/Alarm";

const Alert = (): JSX.Element => {
  const alertList = useAlertStore((state) => state.alerts);
  const fetchAlerts = useAlertStore((state) => state.fetchAlerts);

  useEffect(() => {
    fetchAlerts();
  }, [fetchAlerts]);

  useEffect(() => {
    console.log("Current alerts state:", alertList);
  }, [alertList]);

  return (
    <div className="w-full h-screen flex">
      <Sidebar />
      <div className="flex flex-col flex-grow items-center justify-center bg-[#cfe7fc]">
        <div className="w-[78.89%] h-[90.42%] absolute left-[19.44%] top-[6.77%] overflow-hidden rounded-[20px] bg-white p-10">
          <div className="flex justify-end items-center w-full gap-5">
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
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
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
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
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
      <Alarm />
    </div>
  );
};

export default Alert;
