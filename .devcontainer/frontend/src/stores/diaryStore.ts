import { Diary } from "../types/diary";

// 이미지 생성 API
export const generateImage = async (prompt: string): Promise<string> => {
  try {
    console.log(`사용된 프롬프트: ${prompt}`); // 프롬프트 콘솔에 출력
    const response = await fetch("http://localhost:5000/generate_image", {
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
    console.log(`생성된 이미지 URL: ${data.imageUrl}`); // 콘솔에 URL 출력
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
