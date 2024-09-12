import { useState, useEffect } from "react";
import NoAlertIcon from "../assets/alertNoneIcon.svg?react";
import SortButton from "../components/SortButton";
import AlertList from "../components/AlertList";
import useAlertStore from "../stores/alertStore";

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
    <div className="flex justify-center">
      <div className="w-[900px] my-10 flex flex-col gap-y-4">
        <p className="text-lg font-extrabold">내 소식</p>
        <div className="min-h-[535px] p-6 flex flex-col bg-white rounded-xl drop-shadow-[0_5px_5px_rgba(0,0,0,0.1)]">
          {/* 정렬 버튼 */}
          <div className="flex justify-end gap-4">
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
          {/* TODO) 소식 여부에 따른 조건부 렌더링 구현 필요 */}
          <div className="w-full h-full">
            {/* 소식 없을 때 */}
            <div className="w-full h-full flex flex-col justify-center items-center gap-y-4">
              <NoAlertIcon />
              <p className="text-sm text-text_info">새로운 소식이 없습니다.</p>
            </div>
            {/* 소식 있을 때 */}
            <div className="w-full h-full flex flex-col">
              <AlertList alerts={sortedAlerts} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alert;
