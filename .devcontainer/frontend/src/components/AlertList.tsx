import AlertListItem from "./AlertListItem";

interface Alert {
  id: number;
  title: string;
  message: string;
  date: string;
}

interface AlertListProps {
  alerts: Alert[];
}

const AlertList = ({ alerts }: AlertListProps): JSX.Element => {
  return (
    <section className="mt-6 grid grid-cols-1 divide-y-[.0625rem] divide-border_disabled border-y-[.0625rem] border-border_disabled overflow-y-auto">
      {alerts.map((alert) => (
        <AlertListItem key={alert.id} alert={alert} />
      ))}
    </section>
  );
};

export default AlertList;
