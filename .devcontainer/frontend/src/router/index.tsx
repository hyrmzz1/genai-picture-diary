// createBrowserRouter를 활용한 라우팅
// 페이지가 추가될 때마다 children에 추가
import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Login from "../pages/Login";
import Mypage from "../pages/Mypage";
import Alert from "../pages/Alert";
import Signup from "../pages/Signup";
import AuthForm from "../components/AuthForm";
import RoleForm from "../components/RoleForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      // 임시로 퍼블리싱 결과 확인하기 위해 경로 추가 (/signup2, /signup3)
      // multistep form 구현하면 삭제 예정
      {
        path: "/signup2",
        element: <AuthForm />,
      },
      {
        path: "/signup3",
        element: <RoleForm />,
      },
      {
        path: "/mypage",
        element: <Mypage />,
      },
      {
        path: "/alert",
        element: <Alert />,
      },
    ],
  },
]);
export default router;
