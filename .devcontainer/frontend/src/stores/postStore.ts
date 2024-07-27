// 일기 상태관리를 위한 파일

// 예제 코드
/*
import { create } from "zustand";
import { TPost } from "../type/post";

type TPostStoe = {
  posts: TPost[]; // 데이터 가져오기, TPost의 배열 상태
  fetchPosts: (url: string) => Promise<void>;
  addPost: (formData: TPost) => Promise<boolean>;
};

const usePostStore = create<TPostStoe>((set) => ({
  posts: [],
  fetchPosts: async (url: string) => {
    try {
      const response = await fetch("http://localhost:3000" + url);
      const data = await response.json();
      set({ posts: data });
    } catch (e) {
      console.error(e);
    }
  },
  addPost: async (formData) => {
    console.log(formData);

    try {
      const res = await fetch("http://localhost:3000/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        // 데이터 전송이 성공일 떄만 true 반환
        return true;
      }

      return false;
    } catch (e) {
      // !res.ok()
      console.log("데이터 전송 실패");
      return false;
    }
  },
}));

export default usePostStore;

*/