// createBrowserRouter를 활용한 라우팅
// 페이지가 추가될 때마다 children에 추가
import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import AuthLayout from "../components/AuthLayout";
import Mypage from "../pages/Mypage";
import Alert from "../pages/Alert";
import WriteDiary from "../pages/WriteDiary";
import MyDiaryList from "../components/MyDiaryList";
import ClassDiaryList from "../components/ClassDiaryList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // 홈, 로그인, 회원가입 페이지에 적용되는 레이아웃
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
    ],
  },
  {
    path: "/mypage",
    element: <AuthLayout />, // 로그인 후에만 나타나는 레이아웃
    children: [
      {
        path: "",
        element: <Mypage />,
      },
      {
        path: "alert",
        element: <Alert />,
      },
      {
        path: "write",
        element: <WriteDiary />,
      },
      {
        path: "my-diary-list",
        element: <MyDiaryList />,
      },
      {
        path: "class-diary-list",
        element: <ClassDiaryList />,
      },
      // TODO) 특정 일기 상세 페이지 (조회) 경로 추가
    ],
  },
  // {
  //   path: "/mypage",
  //   element: <Mypage />,
  // },
  // {
  //   path: "/alert",
  //   element: <Alert />,
  // },
  // {
  //   path: "/diary",
  //   element: <WriteDiary />,
  // },
]);
export default router;
