import { create } from "zustand";

interface Profile {
  //profileImage: string; // 프로필이미지
  nickname: string;
  fullname: string;
  login_id: string;
  password: string;
  user_type: number;
}

type ProfileStore = {
  profile: Profile | null;
  fetchProfile: () => Promise<void>;
  updateProfile: (formData: Profile) => Promise<boolean>;
  deleteProfile: () => Promise<boolean>;
};

const useProfileStore = create<ProfileStore>((set) => ({
  profile: null,
  fetchProfile: async () => {
    try {
      const res = await fetch("/profile", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          // Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (!res.ok) {
        throw new Error("네트워크 응답이 올바르지 않습니다");
      }
      const data = await res.json();
      set({ profile: data });
    } catch (error) {
      console.error("프로필 조회 중 오류 발생:", error);
    }
  },
  updateProfile: async (updatedProfile) => {
    try {
      const res = await fetch("/profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(updatedProfile),
      });
      if (!res.ok) {
        throw new Error("프로필 업데이트 중 네트워크 응답이 올바르지 않습니다");
      }
      set({ profile: updatedProfile });
      return true;
    } catch (error) {
      console.error("프로필 업데이트 중 오류 발생:", error);
      return false;
    }
  },
  deleteProfile: async () => {
    try {
      const res = await fetch("/profile", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          // Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (!res.ok) {
        throw new Error("회원 탈퇴 중 네트워크 응답이 올바르지 않습니다");
      }
      set({ profile: null });
      // localStorage.removeItem("token"); // 로그아웃 처리
      return true;
    } catch (error) {
      console.error("회원 탈퇴 중 오류 발생:", error);
      return false;
    }
  },
}));

export default useProfileStore;
