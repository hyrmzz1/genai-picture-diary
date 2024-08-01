import { create } from "zustand";

interface Alert {
  id: number;
  title: string;
  message: string;
  date: string;
}

interface AlertStore {
  alerts: Alert[];
  fetchAlerts: () => void;
  addAlert: (alert: Alert) => void;
  setAlerts: (alerts: Alert[]) => void;
}

const useAlertStore = create<AlertStore>((set) => ({
  alerts: [],
  fetchAlerts: () => {
    const sampleAlerts: Alert[] = [
      {
        id: 1,
        title: "새로운 기능 추가",
        message: "새로운 기능이 추가되었습니다!",
        date: "2024-08-01",
      },
    ];
    set({ alerts: sampleAlerts });
  },
  addAlert: (alert) =>
    set((state) => ({
      alerts: [...state.alerts, alert],
    })),
  setAlerts: (alerts) => set({ alerts }),
}));

export default useAlertStore;
