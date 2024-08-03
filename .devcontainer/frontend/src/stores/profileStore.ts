import { create } from "zustand";

interface Profile {
  profileImage: string; // 프로필이미지
  nickname: string; // 닉네임
  name: string; // 이름
  uid: string; // 아이디
  password: string; // 비밀번호
}

type TProfileStore = {
  profile: Profile | null;
  fetchProfile: () => Promise<void>;
  updateProfile: (formData: Profile) => Promise<boolean>;
};

const useProfileStore = create<TProfileStore>((set) => ({
  profile: null,
  fetchProfile: async () => {
    try {
      const res = await fetch("/profile", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await res.json();
      set({ profile: data });
    } catch (error) {
      console.error("Error fetching profile:", error);
    }
  },
  updateProfile: async (profile: Profile) => {
    try {
      const res = await fetch("/profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(profile),
      });
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      set({ profile });
      return true;
    } catch (error) {
      console.error("Error updating profile:", error);
      return false;
    }
  },
}));

export default useProfileStore;
