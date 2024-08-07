import { http, HttpResponse } from "msw";

interface Profile {
  profileImage: string;
  nickname: string;
  name: string;
  uid: string;
  password: string;
}

const profile: Profile = {
  profileImage: "/assets/rabbit.svg",
  nickname: "우리반장",
  name: "김철수",
  uid: "rabbit77",
  password: "securepassword",
};

export const handlers = [
  http.get("/profile", () => {
    return HttpResponse.json(profile);
  }),
];
