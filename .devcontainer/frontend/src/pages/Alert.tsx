import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import AlertList from "../components/AlertList";
import useAlertStore from "../stores/alertStore";
import SortButton from "../components/SortButton";

const Alert = (): JSX.Element => {
  const alertList = useAlertStore((state) => state.alerts);
  const fetchAlerts = useAlertStore((state) => state.fetchAlerts);
  const [sortOrder, setSortOrder] = useState<"latest" | "oldest">("latest");

  useEffect(() => {
    fetchAlerts();
  }, [fetchAlerts]);

  const sortedAlerts = [...alertList].sort((a, b) => {
    return sortOrder === "latest"
      ? new Date(b.date).getTime() - new Date(a.date).getTime()
      : new Date(a.date).getTime() - new Date(b.date).getTime();
  });

  return (
    <div className="w-full h-screen flex">
      <Sidebar />
      <div className="flex flex-col flex-grow items-center justify-center bg-[#cfe7fc]">
        <div className="w-[78.89%] h-[90.42%] absolute left-[19.44%] top-[6.77%] overflow-hidden rounded-[20px] bg-white p-10">
          <div className="flex justify-end items-center w-full gap-5">
            <SortButton
              order="latest"
              label="최신순"
              isSelected={sortOrder === "latest"}
              onClick={() => setSortOrder("latest")}
            />
            <SortButton
              order="oldest"
              label="오래된순"
              isSelected={sortOrder === "oldest"}
              onClick={() => setSortOrder("oldest")}
            />
          </div>
          <AlertList alerts={sortedAlerts} />
        </div>
      </div>
    </div>
  );
};

export default Alert;
