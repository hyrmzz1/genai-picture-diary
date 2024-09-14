import AlertIcon from "../assets/alertNoneIcon.svg?react";

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
    <div className="flex w-full px-4 py-5 gap-x-4">
      <AlertIcon />
      <div className="flex flex-col flex-1 overflow-hidden gap-y-1">
        <p className="text-text_default text-[.9375rem] font-bold truncate">
          {alert.title}
        </p>
        <p className="text-text_default text-[.9375rem] truncate">
          {alert.message}
        </p>
        <p className="text-text_info text-[.8125rem]">{alert.date}</p>
      </div>
    </div>
  );
};

export default AlertListItem;
