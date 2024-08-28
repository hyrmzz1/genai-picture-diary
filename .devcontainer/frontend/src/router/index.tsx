// createBrowserRouter를 활용한 라우팅
// 페이지가 추가될 때마다 children에 추가
import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Login from "../pages/Login";
import Mypage from "../pages/Mypage";
import WriteDiary from "../pages/WriteDiary";
import Signup from "../pages/Signup";
import Alert from "../pages/Alert";

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
    ],
  },
  {
    path: "/mypage",
    element: <Mypage />,
  },
  {
    path: "/alert",
    element: <Alert />,
  },
  {
    path: "/diary",
    element: <WriteDiary />,
  },
]);
export default router;
