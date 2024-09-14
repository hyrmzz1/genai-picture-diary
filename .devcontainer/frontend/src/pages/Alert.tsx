import { useState, useEffect } from "react";
import NoAlertIcon from "../assets/alertNoneIcon.svg?react";
import SortButton from "../components/SortButton";
import AlertList from "../components/AlertList";
// import useAlertStore from "../stores/alertStore";

const mockAlerts = [
  {
    id: 1,
    title: "새로운 공지사항",
    message: "새로운 공지사항이 있습니다.",
    date: "2024-09-10T10:30:00Z",
  },
  {
    id: 2,
    title: "이벤트 알림",
    message:
      "이벤트 참여하세요!🎉 이벤트 참여하세요!🎊 이벤트 참여하세요!🎉 이벤트 참여하세요!🎊 이벤트 참여하세요!🎉 이벤트 참여하세요!🎊 이벤트 참여하세요!🎉 이벤트 참여하세요!🎊 ",
    date: "2024-09-14T12:12:00Z",
  },
  {
    id: 3,
    title: "업데이트 알림",
    message: "A 기능 지원이 중단되었습니다.",
    date: "2024-09-06T09:00:00Z",
  },
  {
    id: 4,
    title: "업데이트 알림",
    message: "업데이트 내용을 확인하세요.",
    date: "2024-09-09T15:45:00Z",
  },
  {
    id: 5,
    title: "새로운 공지사항",
    message: "닉네임 설정 기능이 생겼어요!",
    date: "2024-09-13T19:00:00Z",
  },
];

const Alert = (): JSX.Element => {
  // const alertList = useAlertStore((state) => state.alerts);
  // const fetchAlerts = useAlertStore((state) => state.fetchAlerts);
  const [alertList, setAlertList] = useState(mockAlerts);
  const [sortOrder, setSortOrder] = useState<"latest" | "oldest">("latest");

  // useEffect(() => {
  //   fetchAlerts();
  // }, [fetchAlerts]);

  const sortedAlerts = [...alertList].sort((a, b) => {
    return sortOrder === "latest"
      ? new Date(b.date).getTime() - new Date(a.date).getTime()
      : new Date(a.date).getTime() - new Date(b.date).getTime();
  });

  return (
    <div className="flex justify-center">
      <div className="w-[56.25rem] my-10 flex flex-col gap-y-4">
        <p className="text-lg font-extrabold">내 소식</p>
        <div className="min-h-[33.4375rem] p-6 flex flex-col bg-white rounded-xl drop-shadow-[0_.3125rem_.3125rem_rgba(0,0,0,0.1)]">
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

          {/* 알림 item */}
          <div
            className={`w-full h-[28.125rem] flex flex-col gap-y-4 ${sortedAlerts.length ? "" : "justify-center items-center"}`}
          >
            {/* 소식 없을 때 */}
            {!sortedAlerts.length && (
              <>
                <NoAlertIcon />
                <p className="text-sm text-text_info">
                  최근 30일동안 받은 알림이 없어요
                </p>
              </>
            )}

            {/* 소식 있을 때 */}
            {sortedAlerts.length > 0 && <AlertList alerts={sortedAlerts} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alert;
