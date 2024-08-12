import { create } from 'zustand';

interface Alert {
  id: number;
  title: string;
  message: string;
  date: string;
}

type AlertStore = {
  alerts: Alert[];
  fetchAlerts: () => Promise<void>;
};

const useAlertStore = create<AlertStore>((set) => ({
  alerts: [],
  fetchAlerts: async () => {
    try {
      const res = await fetch('/alerts/list', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!res.ok) {
        throw new Error('네트워크 응답이 올바르지 않습니다');
      }
      const data = await res.json();
      set({ alerts: data });
    } catch (error) {
      console.error('알림 조회 중 오류 발생:', error);
    }
  },
}));

export default useAlertStore;
