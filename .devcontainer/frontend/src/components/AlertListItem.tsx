import { useEffect, useState } from "react";
import AlertIcon from "../assets/alertNoneIcon.svg?react";

const getRelativeTime = (dateString: string) => {
  const now = new Date();
  const date = new Date(dateString);
  const difference = now.getTime() - date.getTime(); // 밀리초 차이 계산

  const seconds = Math.floor(difference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) {
    return `${days}일 전`;
  } else if (hours > 0) {
    return `${hours}시간 전`;
  } else if (minutes > 0) {
    return `${minutes}분 전`;
  } else {
    return `방금 전`;
  }
};

interface AlertProps {
  alert: {
    id: number;
    title: string;
    message: string;
    date: string;
  };
}

const AlertListItem = ({ alert }: AlertProps): JSX.Element => {
  const [_, setForceUpdate] = useState(0);

  useEffect(() => {
    // 1분마다 컴포넌트 리렌더링
    const interval = setInterval(() => {
      setForceUpdate((prev) => prev + 1); // 상태 업데이트를 통해 리렌더링 트리거
    }, 60000);

    // 컴포넌트 언마운트 시 interval 클리어
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex w-full px-4 py-5 gap-x-4">
      <AlertIcon />
      <div className="flex flex-col flex-1 overflow-hidden gap-y-1">
        <p className="text-text_default text-[.9375rem] font-bold truncate">
          {alert.title}
        </p>
        <p className="text-text_default text-[.9375rem] truncate">
          {alert.message}
        </p>
        <p className="text-text_info text-[.8125rem]">
          {getRelativeTime(alert.date)}
        </p>
      </div>
    </div>
  );
};

export default AlertListItem;
