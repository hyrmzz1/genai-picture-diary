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
    <section className="alert-list">
      {alerts.map((alert) => (
        <AlertListItem key={alert.id} alert={alert} />
      ))}
    </section>
  );
};

export default AlertList;
