import { Diary } from "../types/diary";

// 이미지 생성 API
export const generateImage = async (prompt: string): Promise<string> => {
  try {
    const response = await fetch("/api/karlo/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    });

    if (!response.ok) {
      throw new Error("이미지 생성 실패");
    }

    const data = await response.json();
    return data.imageUrl;
  } catch (error) {
    console.error("이미지 생성 중 오류가 발생했습니다:", error);
    throw error;
  }
};

// 일기 저장 API
export const saveDiary = async (diary: Diary): Promise<void> => {
  try {
    const response = await fetch("/api/diary", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(diary),
    });

    if (!response.ok) {
      throw new Error("일기 저장 실패");
    }

    console.log("일기 저장 성공");
  } catch (error) {
    console.error("일기 작성 중 오류가 발생했습니다:", error);
    throw error;
  }
};
