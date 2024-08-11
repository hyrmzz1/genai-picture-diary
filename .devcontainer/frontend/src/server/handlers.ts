import { http, HttpResponse } from "msw";

interface Profile {
  // profileImage: string;
  nickname: string;
  fullname: string;
  login_id: string;
  password: string;
  user_type: number;
}

const profile: Profile = {
  //profileImage: "/assets/rabbit.svg",
  nickname: "우리반장",
  fullname: "김철수",
  login_id: "rabbit77",
  password: "securepassword",
  user_type: 0
};

const alerts = [
  { id: 1, title: '24/7/10 공지사항입니다.', message: '내용...', date: '2024-07-10' },
  { id: 2, title: '24/8/20 공지사항입니다.', message: '내용...', date: '2024-08-20' },
];


export const handlers = [
  http.get("/profile/info", () => {
    return HttpResponse.json(profile);
  }),
  
  http.post("/profile/update", () => {
    return HttpResponse.json(profile);
  }),
  
  http.delete("/profile/delete", () => {
    return HttpResponse.json(profile);
  }),

  http.get("/alerts/list", () => {
    return HttpResponse.json(alerts);
  }),
];
