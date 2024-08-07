import { Outlet } from "react-router-dom";
import Gnb from "./Gnb";

const Layout = () => {
  return (
    <>
      <article className="container">
        <div className="w-screen">
          {/* 헤더 영역 - 페이지에 따라 다른 navi bar */}
          {/* 메인, 로그인, 회원가입 페이지에선 Gnb 적용 */}
          {/* 나머지 페이지에선 Lnb 적용 */}
          <Gnb />
          {/* 각 페이지 컴포넌트가 보여져야 하는 부분에 Outlet 컴포넌트를 넣는다. 즉, ContentSection이다. */}
          <Outlet />
        </div>
      </article>
    </>
  );
};
export default Layout;
